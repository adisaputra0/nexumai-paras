import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

/* ================================
   Load Knowledge Base
================================ */

const knowledgeDir = path.join(process.cwd(), "knowledge");

const generalPath = path.join(knowledgeDir, "general-information.txt");

let generalKnowledge = "";

try {
    generalKnowledge = fs.readFileSync(generalPath, "utf-8");
    console.log("General knowledge loaded");
} catch (err) {
    console.error("Gagal load general-information.txt:", err);
}

/* ================================
   Init Gemini
================================ */

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_GEMINI_API_KEY!,
});

/* ================================
   POST Endpoint
================================ */

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!prompt || !prompt.trim()) {
            return NextResponse.json(
                { success: false, error: "Prompt wajib diisi" },
                { status: 400 }
            );
        }

        if (!generalKnowledge) {
            return NextResponse.json(
                { success: false, error: "Knowledge base tidak lengkap" },
                { status: 500 }
            );
        }

        const fullPrompt = `
${generalKnowledge}

====================
ATURAN KHUSUS GUEST:
====================
====================
ATURAN UMUM
====================
- Jangan menolak pertanyaan selama masih terkait NexumAI atau fiturnya.
- Jika ragu, selalu jawab & kaitkan ke NexumAI.
- Tolak sopan hanya untuk curhat pribadi, masalah mental, atau topik non-bisnis sama sekali.

====================
TUJUAN
====================
- Membantu memahami NexumAI, fitur, manfaat, dan cara penggunaannya.
- Jawaban singkat, jelas, ramah, santai, mudah dipahami, cocok untuk UMKM/non-teknis.

====================
ATURAN KHUSUS GUEST
====================
- Mode: GUEST-CHATBOT
- Jawaban HARUS:
  → Singkat (1–3 kalimat)
  → Umum (tidak detail)
  → Tidak memberikan strategi lengkap

- Curhat bisnis / keluhan penjualan / bingung promosi → 
  1. Empati singkat
  2. Insight umum (1 kalimat)
  3. Arahkan ke fitur NexumAI sesuai konteks

====================
ARAHKAN KE FITUR SESUAI KONTEKS
====================
- Bingung usaha/strategi → Asisten Bisnis AI
- Produk kurang menarik → Pembuat Deskripsi Produk
- Promosi sepi/ide buntu → Rekomendasi Pintar
- Tanya dasar UMKM → Gudang Ilmu UMKM

====================
FITUR NEXUMAI
====================
1. Asisten Bisnis AI → Jawab pertanyaan bisnis sederhana.
2. Pembuat Deskripsi Produk → Buat deskripsi, caption, headline.
3. Rekomendasi Pintar → Ide produk, promosi, branding.
4. Gudang Ilmu UMKM → Tips & strategi UMKM.


====================
PERTANYAAN PENGGUNA:
====================
"${prompt}"
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: fullPrompt,
            config: {
                temperature: 0.4,
            },
        });

        const answer =
            response?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!answer) {
            console.error("RAW RESPONSE:", JSON.stringify(response, null, 2));
            return NextResponse.json(
                { success: false, error: "Tidak ada jawaban dari AI" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            answer: answer.trim(),
            timestamp: new Date().toISOString(),
        });

    } catch (err) {
        console.error("Gemini Error:", err);
        return NextResponse.json(
            { success: false, error: "Terjadi kesalahan server AI" },
            { status: 500 }
        );
    }
}
