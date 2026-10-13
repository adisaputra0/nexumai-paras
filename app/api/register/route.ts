import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Validasi sederhana
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email dan password wajib diisi" },
                { status: 400 }
            );
        }

        const supabase = createClient();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            return NextResponse.json(
                { message: error.message || "Gagal registrasi" },
                { status: 400 }
            );
        }

        // Supabase mengembalikan user dengan identities kosong bila email
        // sudah terdaftar (mencegah enumerasi email).
        if (data.user && data.user.identities?.length === 0) {
            return NextResponse.json(
                { message: "Email sudah terdaftar" },
                { status: 400 }
            );
        }

        // Baris business_profiles dibuat otomatis oleh trigger database
        // (handle_new_user) saat auth.users di-insert.

        return NextResponse.json(
            { message: "Registrasi berhasil" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}
