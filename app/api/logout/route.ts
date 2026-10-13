import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
    try {
        const supabase = createClient();
        await supabase.auth.signOut();

        return NextResponse.json({ message: "Logout berhasil" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}
