import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { createClient, getAuthedUser } from "@/lib/supabase/server";

/* ===============================
   Load Knowledge Base
================================= */

const knowledgeDir = path.join(process.cwd(), "knowledge");

let generalKnowledge = "";
let specificKnowledge = "";

try {
    generalKnowledge = fs.readFileSync(
        path.join(knowledgeDir, "general-information.txt"),
        "utf-8"
    );
} catch (err) {
    console.error("Gagal load general knowledge:", err);
}

try {
    specificKnowledge = fs.readFileSync(
        path.join(knowledgeDir, "specific-business.txt"),
        "utf-8"
    );
} catch (err) {
    console.error("Gagal load specific knowledge:", err);
}

/* ===============================
   Init Gemini
================================= */

if (!process.env.NEXT_GEMINI_API_KEY) {
    throw new Error("NEXT_GEMINI_API_KEY belum diset");
}

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!,
});

/* ===============================
   MAIN ROUTE
================================ */

export async function POST(req: NextRequest) {
    try {
        /* ===============================
           AUTH
        ================================= */

        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();

        const {
            targetMarket,
            productCategory,
            currentProblem,
            promoType,
        } = body;

        if (!targetMarket || !productCategory || !currentProblem) {
            return NextResponse.json(
                { error: "Semua field wajib diisi" },
                { status: 400 }
            );
        }

        /* ===============================
           Ambil Business Profile
        ================================= */

        const supabase = createClient();

        const { data: profile } = await supabase
            .from("business_profiles")
            .select("*")
            .eq("user_id", user.id)
            .maybeSingle();

        let profileText = "";

        if (profile) {
            profileText = `
=====================
USER BUSINESS PROFILE
=====================
${JSON.stringify(profile, null, 2)}
`;
        }

        /* ===============================
           Build Prompt
        ================================= */

        const prompt = `
You are a senior business consultant specializing in Indonesian UMKM.

WAJIB:
- Gunakan data profil bisnis jika tersedia.
- Jika ada nama_pemilik, panggil user dengan namanya.
- Jangan mengatakan profil tidak tersedia kecuali benar-benar kosong.
- Jawaban harus personal, kontekstual, dan relevan.

===== GENERAL KNOWLEDGE =====
${generalKnowledge}

===== SPECIFIC BUSINESS KNOWLEDGE =====
${specificKnowledge}

${profileText}

===== BUSINESS CASE =====
- Target Market: ${targetMarket}
- Product Category: ${productCategory}
- Current Problem: ${currentProblem}
- Preferred Promotion Type: ${promoType || "online"}

IMPORTANT:
- Bahasa Indonesia
- Output MUST valid JSON only
- No markdown
- Detailed summaries (3-5 sentences)
- Steps 5-7 items per section

OUTPUT FORMAT:
{
  "productIdea": { "summary": "...", "steps": ["..."] },
  "promoStrategy": { "summary": "...", "steps": ["..."] },
  "branding": { "summary": "...", "steps": ["..."] },
  "management": { "summary": "...", "steps": ["..."] }
}
`;

        /* ===============================
           Call Gemini
        ================================= */

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                temperature: 0.7,
            },
        });

        let rawText = response.text?.trim() || "";

        rawText = rawText
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const jsonStart = rawText.indexOf("{");
        const jsonEnd = rawText.lastIndexOf("}");

        if (jsonStart === -1 || jsonEnd === -1) {
            return NextResponse.json(
                { error: "AI tidak mengembalikan JSON yang valid." },
                { status: 500 }
            );
        }

        const jsonString = rawText
            .slice(jsonStart, jsonEnd + 1)
            .replace(/,(\s*[}\]])/g, "$1");

        let parsed;

        try {
            parsed = JSON.parse(jsonString);

            const requiredKeys = [
                "productIdea",
                "promoStrategy",
                "branding",
                "management",
            ];

            for (const key of requiredKeys) {
                if (!parsed[key] || typeof parsed[key] !== "object") {
                    throw new Error(`Missing or invalid key: ${key}`);
                }

                if (
                    !parsed[key].summary ||
                    !parsed[key].steps ||
                    !Array.isArray(parsed[key].steps)
                ) {
                    throw new Error(`Invalid structure for: ${key}`);
                }

                if (parsed[key].steps.length < 5) {
                    throw new Error(`Steps terlalu sedikit untuk: ${key}`);
                }
            }

        } catch (err) {
            console.error("JSON VALIDATION ERROR:", err);
            return NextResponse.json(
                { error: "Format atau struktur JSON dari AI tidak valid." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: parsed,
        });

    } catch (err) {
        console.error("SMART RECOMMENDATION ERROR:", err);

        return NextResponse.json(
            { error: "Terjadi kesalahan server AI." },
            { status: 500 }
        );
    }
}
