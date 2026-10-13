import { NextResponse } from "next/server";
import { getAuthedUser } from "@/lib/supabase/server";

export async function GET() {
    try {
        const user = await getAuthedUser();

        if (!user) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        return NextResponse.json({
            id: user.id,
            email: user.email,
            created_at: user.created_at,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}
