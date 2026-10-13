import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { User } from "@supabase/supabase-js";

export function createClient() {
    const cookieStore = cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        );
                    } catch {
                        // Dipanggil dari Server Component tanpa izin set cookie.
                        // Aman diabaikan karena middleware yang me-refresh session.
                    }
                },
            },
        }
    );
}

/**
 * Mengembalikan user yang sudah diverifikasi server-side melalui Supabase Auth.
 * Jangan pernah mempercayai user id yang dikirim dari frontend.
 */
export async function getAuthedUser(): Promise<User | null> {
    const supabase = createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error || !user) {
        return null;
    }

    return user;
}
