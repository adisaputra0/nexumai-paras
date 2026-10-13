'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarEffects from '@/app/components/NavbarEffects';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div>
                <nav className="w-full border-b border-gray-200/0 transition z-[999] fixed top-0 bg-white text-[black!important]">
                    <div className="px-8 py-3 md:py-6 max-w-7xl mx-auto flex items-center justify-between w-full">
                        <Link href="/" className="flex items-center text-[black!important]" data-animate="fade-right">
                            <Image
                                src="/assets/images/logo.png"
                                alt="Main Logo"
                                width={48}
                                height={48}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            <p className="md:text-xl font-bold ml-2">NexumAI</p>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-8 text-gray-700">
                            <li data-animate="fade-down" data-animate-delay="200">
                                <Link href="/" className="hover:text-gray-950">Beranda</Link>
                            </li>
                            <li data-animate="fade-down" data-animate-delay="400">
                                <Link href="/features" className="hover:text-gray-950">Fitur</Link>
                            </li>
                            <li data-animate="fade-down" data-animate-delay="600">
                                <Link href="/umkm-insights" className="hover:text-gray-950">Insight UMKM</Link>
                            </li>
                            <li data-animate="fade-down" data-animate-delay="400">
                                <Link href="/how-it-works" className="hover:text-gray-950">Cara Kerja</Link>
                            </li>
                            <li data-animate="fade-down" data-animate-delay="200">
                                <Link href="/faq" className="hover:text-gray-950">FAQ</Link>
                            </li>
                        </ul>

                        {/* Desktop Button */}
                        <div className="hidden md:flex items-center gap-4" data-animate="fade-left">
                            <Link
                                href="/register"
                                className="bg-blue-700 hover:bg-blue-900 transition text-white px-6 py-2 rounded-full font-medium"
                            >
                                Mulai Sekarang
                            </Link>
                        </div>

                        {/* Mobile Button */}
                        <button
                            id="mobile-menu-btn"
                            onClick={() => setOpen(true)}
                            className="md:hidden text-gray-50 text-lg z-[1001]"
                            data-animate="fade-left"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>

                {/* Overlay */}
                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden"
                    />
                )}

                {/* Mobile Sidebar */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[1001] transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
                        <div className="flex items-center">
                            <Image src="/assets/images/logo.png" alt="Main Logo" width={40} height={40} />
                            <p className="text-xl font-bold ml-2 text-gray-800">NexumAI</p>
                        </div>
                        <button onClick={() => setOpen(false)} className="text-xl">
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>

                    <ul className="flex flex-col px-8 py-6 space-y-1">
                        <li><Link href="/" className="block text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-50">Beranda</Link></li>
                        <li><Link href="/features" className="block text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-50">Fitur</Link></li>
                        <li><Link href="/umkm-insights" className="block text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-50">Insight UMKM</Link></li>
                        <li><Link href="/how-it-works" className="block text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-50">Cara Kerja</Link></li>
                        <li><Link href="/faq" className="block text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-50">FAQ</Link></li>
                        <li className="pt-4">
                            <Link
                                href="/register"
                                className="block text-center bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-full"
                            >
                                Mulai Sekarang
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <NavbarEffects />
        </>
    );
}
