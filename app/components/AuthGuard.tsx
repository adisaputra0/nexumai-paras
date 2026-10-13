"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthGuardProps = {
    children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/me`,
                    {
                        credentials: "include",
                    }
                );

                if (!res.ok) {
                    router.replace("/login");
                    return;
                }

                setLoading(false);
            } catch (error) {
                console.log("Server error");
                router.replace("/login");
            }
        };

        checkAuth();
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Checking authentication...</p>
            </div>
        );
    }

    return <>{children}</>;
}
