"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Page() {
    const [activeFilter, setActiveFilter] = useState("all");

    const insights = [
        {
            id: 1,
            category: "business",
            image: "/assets/images/knowledge-1.png",
            title: "Tips Pengembangan Bisnis UMKM",
            description: "Cari tau langkah praktis buat naikin bisnis UMKM kamu, dari bikin strategi sampai action yang nyata dan ngasih hasil...",
            badge: "Pertumbuhan Bisnis",
            link: "/knowledge/1",
            delay: "1000"
        },
        {
            id: 2,
            category: "marketing",
            image: "/assets/images/knowledge-2.png",
            title: "Strategi Marketing Praktis",
            description: "Temukan cara marketing yang simpel tapi efektif buat tarik pelanggan dan naikin penjualan UMKM kamu...",
            badge: "Pemasaran",
            link: "/knowledge/2",
            delay: "1200"
        },
        {
            id: 3,
            category: "business",
            image: "/assets/images/knowledge-3.png",
            title: "Studi Kasus UMKM Sukses",
            description: "Lihat cerita sukses UMKM nyata dan pelajari strategi yang bikin bisnis mereka berkembang di pasar yang kompetitif...",
            badge: "Pertumbuhan Bisnis",
            link: "/knowledge/3",
            delay: "1400"
        },
        {
            id: 4,
            category: "management",
            image: "/assets/images/knowledge-4.png",
            title: "Tips Mengatur Keuangan UMKM",
            description: "Pelajari cara mengelola arus kas, membuat anggaran, dan investasi skala kecil agar UMKM tetap sehat secara finansial...",
            badge: "Tips Manajemen",
            link: "/knowledge/4",
            delay: "1900"
        },
        {
            id: 5,
            category: "management",
            image: "/assets/images/knowledge-5.png",
            title: "Strategi Engagement Pelanggan",
            description: "Temukan cara untuk berinteraksi dengan pelanggan secara efektif, bangun loyalitas, dan tingkatkan reputasi UMKM-mu secara online...",
            badge: "Tips Manajemen",
            link: "/knowledge/5",
            delay: "1800"
        },
        {
            id: 6,
            category: "marketing",
            image: "/assets/images/knowledge-6.png",
            title: "Digital Marketing untuk UMKM",
            description: "Tips memanfaatkan media sosial, email marketing, dan iklan online untuk mengembangkan UMKM-mu di era digital...",
            badge: "Pemasaran",
            link: "/knowledge/6",
            delay: "1600"
        }
    ];

    const filters = [
        { id: "all", label: "Semua Kategori", delay: "200" },
        { id: "business", label: "Pertumbuhan Bisnis", delay: "400" },
        { id: "marketing", label: "Pemasaran", delay: "600" },
        { id: "management", label: "Tips Manajemen", delay: "800" }
    ];

    const filteredInsights = activeFilter === "all"
        ? insights
        : insights.filter(insight => insight.category === activeFilter);

    return (
        <>
            <Navbar />

            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] pt-24" id="hero">
                <div className="px-8 py-10 max-w-7xl mx-auto">
                    {/* Text */}
                    <div className="text-center mb-12 z-10">
                        <div className="inline-block bg-[#1b1840]/70 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20"
                            data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#hero">
                            <span className="text-blue-200 text-sm">
                                Jelajahi Basis Pengetahuan oleh <span className="text-blue-400">NexumAI</span>
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">Tips & Trik</h1>
                            <h1 data-animate="word-up-reverse">Sukses UMKM</h1>
                        </div>

                        <p className="text-blue-200/70 text-lg max-w-3xl mx-auto" data-animate="fade-up" data-animate-delay="900"
                            data-animate-anchor="#hero">
                            NexumAI menyediakan knowledge base untuk UMKM, berisi tips bisnis, strategi pemasaran, dan studi
                            kasus sukses, lengkap dengan rekomendasi AI untuk keputusan lebih cerdas.
                        </p>
                    </div>
                </div>
            </div>

            {/* UMKM Insights */}
            <div className="bg-white py-16 relative overflow-hidden" id="content">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Filter Controls */}
                    <div className="flex w-full overflow-y-hidden overflow-x-auto lg:justify-center gap-3 mb-12 pb-5 lg:pb-0">
                        {filters.map((filter) => (
                            <div
                                key={filter.id}
                                data-animate="fade-up"
                                data-animate-anchor="#content"
                                data-animate-delay={filter.delay}
                            >
                                <button
                                    type="button"
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`px-6 py-2.5 rounded-full border-2 font-medium text-sm transition ${activeFilter === filter.id
                                        ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800 hover:border-blue-800"
                                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-700 hover:text-blue-700"
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cards Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="insights-container">
                        {filteredInsights.map((insight) => (
                            <div
                                key={insight.id}
                                data-animate="fade-up"
                                data-animate-anchor="#content"
                                data-animate-delay={insight.delay}
                            >
                                <Link
                                    href={insight.link}
                                    className="group block bg-white rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 overflow-hidden h-full"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <Image
                                            src={insight.image}
                                            alt={insight.title}
                                            width={400}
                                            height={192}
                                            className="h-full w-full object-cover"
                                        />
                                        <span className="absolute bottom-3 left-3 inline-block px-3 py-1 bg-blue-900/80 backdrop-blur-md text-blue-50 text-xs font-medium rounded-full">
                                            {insight.badge}
                                        </span>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700">
                                            {insight.title.split(' ').length > 3 ? (
                                                <>
                                                    {insight.title.split(' ').slice(0, insight.title.split(' ').length - 2).join(' ')} <br />
                                                    {insight.title.split(' ').slice(-2).join(' ')}
                                                </>
                                            ) : (
                                                insight.title
                                            )}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {insight.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center mt-12" data-animate="fade" data-animate-delay="2000" data-animate-anchor="#content">
                        <p className="text-gray-500 text-sm">
                            Terus diperbarui dengan wawasan terbaru agar UMKM Anda selalu berada di depan.
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}