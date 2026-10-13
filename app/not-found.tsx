'use client';

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] flex items-center justify-center relative overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>

            <div className="px-8 py-10 max-w-4xl mx-auto text-center relative z-10">

                {/* 404 */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-none mb-4">
                        404
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
                </div>

                {/* Message */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-blue-200/70 text-lg max-w-2xl mx-auto mb-2">
                        Oops! Sepertinya halaman yang kamu cari sedang liburan.
                        <br />
                        NexumAI tidak bisa menemukan halaman ini.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-3"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Kembali ke Home
                    </Link>
                </div>

            </div>
        </div>
    );
}
