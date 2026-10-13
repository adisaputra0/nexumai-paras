import { NextRequest, NextResponse } from "next/server";
import { createClient, getAuthedUser } from "@/lib/supabase/server";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

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

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!,
});

/* ===============================
   MAIN ROUTE
================================ */

export async function POST(req: NextRequest) {
    try {
        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const { prompt } = await req.json();

        if (!prompt || !prompt.trim()) {
            return NextResponse.json(
                { message: "Prompt wajib diisi" },
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
===== USER BUSINESS PROFILE =====
${JSON.stringify(profile, null, 2)}
`;
        }

        /* ===============================
           Combine Prompt
        ================================= */

        const fullPrompt = `
Kamu adalah NexumAI, AI Business Assistant untuk UMKM.

WAJIB:
- Gunakan data profil user jika tersedia.
- Jika ada nama_pemilik, panggil user dengan namanya.
- Jangan pernah bilang tidak tahu nama jika tersedia.
- Jawaban harus personal, kontekstual, dan relevan.
- Jika pertanyaan membutuhkan data spesifik dari profil bisnis user 
  DAN data tersebut tidak tersedia, 
  jawab dengan:
  "Maaf, saya belum memiliki informasi bisnis Anda. 
  Silakan lengkapi profil bisnis Anda agar saya dapat memberikan saran yang lebih akurat dan personal."

- Jika pertanyaan masih bisa dijawab secara umum tanpa data spesifik,
  tetap berikan jawaban umum yang bermanfaat.


===== GENERAL INFORMATION =====
${generalKnowledge}

===== SPECIFIC BUSINESS INFORMATION =====
${specificKnowledge}

${profileText}

====================
PERTANYAAN USER:
====================
"${prompt}"
`;

        /* ===============================
           Call Gemini
        ================================= */

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: fullPrompt,
            config: {
                temperature: 0.5,
            },
        });

        const answer =
            response?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!answer) {
            console.error("RAW RESPONSE:", JSON.stringify(response, null, 2));
            return NextResponse.json(
                { message: "Tidak ada jawaban dari AI" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            generated_text: answer.trim(),
            timestamp: new Date().toISOString(),
        });

    } catch (err) {
        console.error("Gemini Error:", err);
        return NextResponse.json(
            { message: "Terjadi kesalahan server AI" },
            { status: 500 }
        );
    }
}
