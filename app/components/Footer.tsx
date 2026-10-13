'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SubscribeModal from './SubscribeModal';
import FloatingChatBot from './FloatingChatBot';

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* CTA */}
            <div className="bg-gray-50 py-16 overflow-hidden" id="cta">
                <div className="px-8 py-10 max-w-7xl mx-auto">
                    <div className="bg-[#1e1b4b] rounded-xl md:rounded-3xl overflow-hidden shadow-lg grid lg:grid-cols-2">
                        {/* Content */}
                        <div className="text-center md:text-start px-5 pt-12 md:p-16 z-10 max-w-4xl mx-auto">
                            <h2
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                                data-animate="word-up"
                            >
                                Sudah Siap Kembangkan Bisnismu Lebih Pintar Bareng NexumAI?
                            </h2>

                            <p
                                className="text-blue-200/70 text-base md:text-lg mb-8 max-w-2xl mx-auto"
                                data-animate="fade-down"
                                data-animate-anchor="#cta"
                                data-animate-delay="700"
                            >
                                Mulai dari deskripsi produk, ide promo, sampai rekomendasi bisnis
                                yang cerdas, NexumAI bantu UMKM ambil keputusan lebih tepat setiap
                                hari.
                            </p>

                            <div
                                data-animate="fade"
                                data-animate-anchor="#cta"
                                data-animate-delay="900"
                            >
                                <Link
                                    href="/login"
                                    className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-3 text-base md:text-lg"
                                >
                                    Mulai Pakai AI untuk Bisnismu
                                    <div className="w-10 h-10 bg-white rounded-full hidden md:flex items-center justify-center">
                                        <i className="fa-solid fa-arrow-right text-blue-700"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="w-full h-[15rem] md:h-full flex items-end justify-center"
                            data-animate="fade-up"
                            data-animate-anchor="#cta"
                            data-animate-delay="1200"
                        >
                            <Image
                                src="/assets/images/cta.png"
                                alt="CTA"
                                width={1920}
                                height={927}
                                className="w-4/5 h-5/6 object-cover rounded-t-3xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] py-16 relative overflow-hidden">
                <div className="px-8 pt-10 max-w-7xl mx-auto">
                    {/* Main Footer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <Link href="/" className="flex items-center text-white mb-6">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="NexumAI Logo"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12"
                                />
                                <span className="text-xl font-bold ml-2">NexumAI</span>
                            </Link>

                            <p className="text-blue-200/70 text-sm mb-6 leading-relaxed">
                                Asisten AI pintar untuk UMKM & ekonomi kreatif. Panduan praktis
                                berbasis AI yang bantu bisnismu berkembang.
                            </p>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#1b1840]/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:bg-blue-700 transition text-blue-200 hover:text-white"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#1b1840]/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:bg-blue-700 transition text-blue-200 hover:text-white"
                                >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#1b1840]/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:bg-blue-700 transition text-blue-200 hover:text-white"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#1b1840]/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:bg-blue-700 transition text-blue-200 hover:text-white"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        {/* Produk */}
                        <div>
                            <h3 className="text-white font-bold text-base mb-6">Produk</h3>
                            <ul className="space-y-5 text-sm">
                                <li><Link href="/login" className="text-gray-400 hover:text-gray-200 transition">Asisten Bisnis AI</Link></li>
                                <li><Link href="/login" className="text-gray-400 hover:text-gray-200 transition">Pembuat Deskripsi Produk</Link></li>
                                <li><Link href="/login" className="text-gray-400 hover:text-gray-200 transition">Rekomendasi Pintar</Link></li>
                                <li><Link href="/umkm-insights" className="text-gray-400 hover:text-gray-200 transition">Gudang Ilmu UMKM</Link></li>
                            </ul>
                        </div>

                        {/* Perusahaan */}
                        <div>
                            <h3 className="text-white font-bold text-base mb-6">Perusahaan</h3>
                            <ul className="space-y-5 text-sm">
                                <li><Link href="/about" className="text-gray-400 hover:text-gray-200 transition">Tentang NexumAI</Link></li>
                                <li><Link href="/features" className="text-gray-400 hover:text-gray-200 transition">Fitur</Link></li>
                                <li><Link href="/umkm-insights" className="text-gray-400 hover:text-gray-200 transition">Insight UMKM</Link></li>
                            </ul>
                        </div>

                        {/* Bantuan */}
                        <div>
                            <h3 className="text-white font-bold text-base mb-6">Bantuan</h3>
                            <ul className="space-y-5 text-sm">
                                <li><Link href="/how-it-works" className="text-gray-400 hover:text-gray-200 transition">Cara Kerja</Link></li>
                                <li><Link href="/faq" className="text-gray-400 hover:text-gray-200 transition">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-[#1b1840]/60 backdrop-blur-md rounded-3xl p-8 border border-blue-500/20 mb-12">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">
                                    Langganan Newsletter
                                </h3>
                                <p className="text-blue-200/70 text-sm">
                                    Dapatkan update terbaru seputar AI dan tips bisnis untuk UMKM
                                </p>
                            </div>
                            <div className="flex gap-2 flex-col md:flex-row">
                                <input
                                    id="emailInput"
                                    type="email"
                                    placeholder="Masukkan email kamu"
                                    className="flex-1 px-5 py-3 rounded-full bg-[#0c0b14]/50 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none"
                                />
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-medium text-sm"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="pt-8 border-t border-blue-500/20 text-center">
                        <p className="text-blue-200/50 text-sm">
                            © 2026 NexumAI. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
            <FloatingChatBot />
            {/* Effects */}
            <SubscribeModal open={modalOpen} setOpen={setModalOpen} />
        </>
    );
}
