import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createClient, getAuthedUser } from "@/lib/supabase/server";

const genAI = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
    try {
        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const {
            productName,
            platform,
            targetBuyer,
            advantages,
            languageStyle,
            price,
        } = body;

        if (!productName || !platform) {
            return NextResponse.json(
                { error: "Nama produk dan platform wajib diisi" },
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
====================
DATA PROFIL BISNIS USER:
====================
${JSON.stringify(profile, null, 2)}
`;
        }

        /* ===============================
           Build Prompt
        ================================= */

        const fullPrompt = `
You are an expert copywriter for Indonesian UMKM.

WAJIB:
- Gunakan data profil bisnis jika tersedia.
- Jika ada nama_pemilik, panggil dengan namanya.
- Jangan sebut bahwa profil tidak ada kecuali memang kosong.
- Output HARUS JSON valid.

${profileText}

PRODUCT INFORMATION:
- Product Name: ${productName}
- Platform: ${platform}
- Target Buyer: ${targetBuyer || "General audience"}
- Product Advantages: ${advantages || "Not specified"}
- Language Style: ${languageStyle || "Professional namun ramah dan persuasif"}
- Price: ${price ? `Rp ${price}` : "Not mentioned"}

OUTPUT FORMAT:
{
  "title": "...",
  "description": "...",
  "caption": "..."
}

CRITICAL:
- Valid JSON only
- No markdown
- Bahasa Indonesia
- Description ideal 120–250 kata
- Jika panjang, pisahkan menjadi beberapa paragraf (2–4 paragraf)
- Gunakan line break antar paragraf
- Hindari satu paragraf panjang
`;

        /* ===============================
           Call Gemini
        ================================= */

        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: fullPrompt,
            config: {
                responseMimeType: "application/json",
                temperature: 0.7,
            },
        });

        const rawText = response.text?.trim() || "";

        let parsed;

        try {
            parsed = JSON.parse(rawText);
        } catch {
            const cleaned = rawText
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            const jsonStart = cleaned.indexOf("{");
            const jsonEnd = cleaned.lastIndexOf("}");

            if (jsonStart === -1 || jsonEnd === -1) {
                return NextResponse.json(
                    { error: "AI tidak mengembalikan JSON valid" },
                    { status: 500 }
                );
            }

            parsed = JSON.parse(cleaned.slice(jsonStart, jsonEnd + 1));
        }

        if (!parsed.title || !parsed.description || !parsed.caption) {
            return NextResponse.json(
                { error: "Struktur JSON tidak sesuai" },
                { status: 500 }
            );
        }

        if (parsed.description.length < 300) {
            return NextResponse.json(
                { error: "Description terlalu pendek" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: parsed,
        });

    } catch (error) {
        console.error("PRODUCT DESCRIPTION ERROR:", error);

        return NextResponse.json(
            { error: "Terjadi kesalahan pada server AI." },
            { status: 500 }
        );
    }
}