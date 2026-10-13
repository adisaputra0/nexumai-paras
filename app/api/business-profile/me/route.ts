import { NextResponse } from "next/server";
import { createClient, getAuthedUser } from "@/lib/supabase/server";

export async function GET() {
    try {
        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const supabase = createClient();

        const { data: profile, error } = await supabase
            .from("business_profiles")
            .select("*")
            .eq("user_id", user.id)
            .maybeSingle();

        if (error) {
            console.error(error);
            return NextResponse.json(
                { message: "Terjadi kesalahan server" },
                { status: 500 }
            );
        }

        if (!profile) {
            return NextResponse.json(
                { message: "Business profile not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(profile);

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}

/* ============================
   UPDATE BUSINESS PROFILE
============================ */

export async function PUT(req: Request) {
    try {
        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const payload = await req.json();

        const allowedFields = [
            "nama_pemilik",
            "nama_usaha",
            "kategori_usaha",
            "lokasi_usaha",
            "website_marketplace",
            "produk_utama",
            "jumlah_varian_produk",
            "harga_rata_rata",
            "keuntungan_per_produk",
            "omset_bulanan",
            "jam_operasional",
            "target_usia",
            "target_gender",
            "segmentasi_pasar",
            "preferensi_pembeli",
            "gaya_bahasa_ai",
            "fokus_promosi",
            "prioritas_ai",
        ];

        const updateFields = Object.keys(payload).filter((key) =>
            allowedFields.includes(key)
        );

        if (updateFields.length === 0) {
            return NextResponse.json(
                { message: "No valid fields provided" },
                { status: 400 }
            );
        }

        const updateData: Record<string, unknown> = {};

        for (const field of updateFields) {
            updateData[field] = payload[field];
        }

        const supabase = createClient();

        // user_id selalu berasal dari identitas terverifikasi server.
        // upsert membuat baris bila trigger belum sempat membuatnya.
        const { data: updatedRows, error } = await supabase
            .from("business_profiles")
            .upsert(
                { user_id: user.id, ...updateData },
                { onConflict: "user_id" }
            )
            .select()
            .single();

        if (error) {
            console.error(error);
            return NextResponse.json(
                { message: "Terjadi kesalahan server" },
                { status: 500 }
            );
        }

        return NextResponse.json(updatedRows);

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}
