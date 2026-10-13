'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const menuItems = [
        {
            href: '/overview',
            icon: 'fa-chart-line',
            label: 'Beranda',
        },
        {
            href: '/ai-business-assistant',
            icon: 'fa-robot',
            label: 'Asisten Bisnis AI',
        },
        {
            href: '/product-description-generator',
            icon: 'fa-pen-nib',
            label: 'Pembuat Deskripsi Produk',
        },
        {
            href: '/smart-recommendations',
            icon: 'fa-lightbulb',
            label: 'Rekomendasi Pintar',
        },
        {
            href: '/profile',
            icon: 'fa-user',
            label: 'Profil',
        },
    ];

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            // Hapus session di server (cookie Supabase)
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
                method: "POST",
                credentials: "include",
            });

            // Redirect ke halaman login
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    const isActive = (href: string) => pathname === href;

    return (
        <>
            {/* Sidebar */}
            <aside className="hidden w-80 bg-white shadow-sm md:flex flex-col border-r border-gray-100 h-screen fixed top-0">
                {/* Logo */}
                <div className="p-6 border-b border-gray-100">
                    <Link href="/overview" className="flex items-center">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="ml-2 text-xl font-bold text-gray-900">NexumAI</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive(item.href)
                                        ? 'text-white bg-blue-600 shadow-sm'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                >
                                    <i className={`fa-solid ${item.icon} w-5`}></i>
                                    <span className={`ml-3 ${isActive(item.href) ? 'font-medium' : ''}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="flex items-center px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl w-full transition-all duration-200 disabled:opacity-50"
                    >
                        <i className="fa-solid fa-right-from-bracket w-5"></i>
                        <span className="ml-3">{isLoggingOut ? 'Keluar...' : 'Keluar'}</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                {/* Top Navbar */}
                <nav className="w-full border-b border-gray-200 fixed top-0 bg-white z-[999]">
                    <div className="px-6 py-3 flex items-center justify-between">
                        <Link href="/overview" className="flex items-center">
                            <Image
                                src="/assets/images/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10"
                            />
                            <span className="ml-2 text-lg font-bold text-gray-900">
                                NexumAI
                            </span>
                        </Link>

                        <button
                            onClick={() => setMobileOpen(true)}
                            className="text-gray-800 text-lg z-[1001]"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>

                {/* Overlay */}
                {mobileOpen && (
                    <div
                        onClick={() => setMobileOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[1000]"
                    />
                )}

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[1001]
    transform transition-transform duration-300 ease-in-out
    ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <Image
                                src="/assets/images/logo.png"
                                alt="Logo"
                                width={36}
                                height={36}
                                className="w-9 h-9"
                            />
                            <span className="ml-2 text-lg font-bold text-gray-900">
                                NexumAI
                            </span>
                        </div>

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 text-xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>

                    {/* Menu */}
                    <ul className="flex flex-col px-4 py-6 space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center px-4 py-3 rounded-lg transition
              ${isActive(item.href)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                >
                                    <i className={`fa-solid ${item.icon} w-5`}></i>
                                    <span className="ml-3">{item.label}</span>
                                </Link>
                            </li>
                        ))}

                        {/* Logout */}
                        <li className="pt-4">
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="w-full bg-red-600 hover:bg-red-800 transition text-white px-6 py-3 rounded-full font-medium disabled:opacity-50"
                            >
                                <i className="mr-3 fa-solid fa-right-from-bracket"></i>
                                {isLoggingOut ? 'Keluar...' : 'Keluar'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};