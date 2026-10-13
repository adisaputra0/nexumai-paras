'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimateScroll from "@/public/utils/animate";

export default function ClientAnimator() {
    const pathname = usePathname();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!window.__animator) {
                window.__animator = new AnimateScroll();
            } else {
                window.__animator.refresh();
            }
        }, 50);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
