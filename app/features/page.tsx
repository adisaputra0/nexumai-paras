"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Page() {
    const [activeTab, setActiveTab] = useState("ai-business-assistant");

    const features = [
        {
            id: "ai-business-assistant",
            icon: "fa-robot",
            label: "Asisten Bisnis AI"
        },
        {
            id: "product-description-generator",
            icon: "fa-wand-magic-sparkles",
            label: "Pembuat Deskripsi Produk"
        },
        {
            id: "smart-recommendations",
            icon: "fa-lightbulb",
            label: "Rekomendasi Pintar"
        },
        {
            id: "umkm-knowledge-base",
            icon: "fa-book",
            label: "Gudang Ilmu UMKM"
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero */}
            <div
                id="hero"
                className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] pt-24"
            >
                <div className="px-8 py-10 max-w-7xl mx-auto">
                    {/* Text */}
                    <div className="text-center mb-12 z-10">
                        <div
                            className="inline-block bg-[#1b1840]/70 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20"
                            data-animate="fade-down"
                            data-animate-anchor="#hero"
                            data-animate-delay="700"
                        >
                            <span className="text-blue-200 text-sm">
                                Jelajahi Fitur Pintar dari{" "}
                                <span className="text-blue-400">NexumAI</span>
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">AI Pendukung</h1>
                            <h1 data-animate="word-up-reverse">Pertumbuhan UMKM</h1>
                        </div>

                        <p
                            className="text-blue-200/70 text-lg max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-anchor="#hero"
                            data-animate-delay="900"
                        >
                            NexumAI adalah asisten berbasis AI untuk UMKM yang memberikan ide jelas,
                            saran praktis, dan insight bisnis yang bisa langsung diterapkan,
                            tanpa perlu keahlian teknis.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="bg-white py-16 relative overflow-hidden">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">
                    {/* Sidebar + Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Menu */}
                        <div className="lg:col-span-1 h-max" id="sidebar">
                            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100" data-animate="fade-up"
                                data-animate-anchor="#sidebar">
                                <h3 className="text-gray-900 font-bold text-lg mb-6">Fitur AI</h3>
                                <nav className="space-y-2">
                                    {features.map((feature) => (
                                        <button
                                            key={feature.id}
                                            onClick={() => setActiveTab(feature.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center gap-3 ${activeTab === feature.id
                                                ? "bg-blue-700 text-white"
                                                : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                                                }`}
                                        >
                                            <i className={`fa-solid ${feature.icon}`}></i>
                                            <span>{feature.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            {/* AI Business Assistant */}
                            <div className={activeTab === "ai-business-assistant" ? "" : "hidden"} id="feature-1">
                                {/* Hero */}
                                <div className="mb-12">
                                    <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-xs text-blue-700 mb-4 font-medium"
                                        data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#feature-1">
                                        AI Business Assistant
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-animate="word-fade">
                                        Asisten Bisnis AI untuk UMKM
                                    </h2>

                                    <p className="text-gray-500 text-base mb-6" data-animate="fade-up" data-animate-delay="700"
                                        data-animate-anchor="#feature-1">
                                        Asisten digital yang membantu Anda mengambil keputusan bisnis dengan lebih cepat, jelas,
                                        dan mudah.
                                    </p>

                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div data-animate="fade-up" data-animate-delay="900" data-animate-anchor="#feature-1">
                                            <a href="/login"
                                                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-rocket"></i>
                                                Coba Sekarang
                                            </a>
                                        </div>
                                        <div data-animate="fade-up" data-animate-delay="1100" data-animate-anchor="#feature-1">
                                            <a href="#example-f1"
                                                className="bg-white hover:bg-gray-50 transition text-blue-700 px-6 py-3 rounded-full font-medium border border-blue-200 inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                Lihat Contoh
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Problems */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade"
                                        data-animate-anchor="#feature-1" data-animate-delay="1200">
                                        Tantangan Umum yang Dihadapi UMKM
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="1400" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                                <i className="fa-solid fa-tags text-blue-700"></i>
                                            </div>
                                            <h4 className="text-gray-900 font-bold text-base mb-2">
                                                Kesulitan Menentukan Harga
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                Bingung menentukan harga yang tetap untung dan kompetitif
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="1600" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                                <i className="fa-solid fa-bullhorn text-blue-700"></i>
                                            </div>
                                            <h4 className="text-gray-900 font-bold text-base mb-2">
                                                Strategi Marketing Tidak Jelas
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                Promosi jalan, tapi tidak tahu mana yang benar-benar efektif
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="1800" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                                <i className="fa-solid fa-lightbulb text-blue-700"></i>
                                            </div>
                                            <h4 className="text-gray-900 font-bold text-base mb-2">
                                                Kurang Ide untuk Berkembang
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                Ingin berkembang tapi bingung harus mulai dari mana
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2000" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                                <i className="fa-solid fa-list-check text-blue-700"></i>
                                            </div>
                                            <h4 className="text-gray-900 font-bold text-base mb-2">
                                                Terlalu Banyak Hal yang Harus Diurus
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                Mengelola bisnis sendirian tanpa bantuan yang tepat
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* What AI Can Do */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade"
                                        data-animate-anchor="#feature-1" data-animate-delay="2000">
                                        Bagaimana AI Membantu Bisnis Anda?
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
                                            data-animate="fade-up" data-animate-delay="2200" data-animate-anchor="#feature-1">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl">
                                            </div>
                                            <div className="relative z-10">
                                                <div
                                                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30">
                                                    <i className="fa-solid fa-comments text-white text-xl"></i>
                                                </div>
                                                <h4 className="text-lg font-bold mb-2">Konsultasi Bisnis</h4>
                                                <p className="text-blue-100 text-sm">Tanyakan apa pun seputar bisnis Anda</p>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2400" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                <i className="fa-solid fa-box text-blue-700 text-xl"></i>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Pengembangan Produk</h4>
                                            <p className="text-gray-500 text-sm">Ide produk baru atau pengembangan produk yang sudah
                                                ada</p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2600" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                <i className="fa-solid fa-chart-line text-blue-700 text-xl"></i>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Strategi Marketing</h4>
                                            <p className="text-gray-500 text-sm">Ide promosi sesuai target pasar Anda</p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2800" data-animate-anchor="#feature-1">
                                            <div
                                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                <i className="fa-solid fa-wand-magic-sparkles text-blue-700 text-xl"></i>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Insight Siap Pakai</h4>
                                            <p className="text-gray-500 text-sm">Solusi praktis yang bisa langsung diterapkan</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Examples */}
                                <div className="mb-12" id="example-f1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade"
                                        data-animate-delay="3000" data-animate-anchor="#feature-1">
                                        Contoh Pertanyaan & Jawaban
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="3200" data-animate-anchor="#feature-1">
                                            <div className="space-y-3">
                                                <div className="flex gap-3 justify-end" data-animate="fade-up"
                                                    data-animate-delay="3400" data-animate-anchor="#feature-1">
                                                    <div className="bg-blue-700 rounded-xl rounded-tr-none p-4 max-w-[80%]">
                                                        <p className="text-white text-sm">
                                                            Saya jual kopi susu, bagaimana cara menarik pelanggan baru?
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <i className="fa-solid fa-user text-blue-700 text-xs"></i>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3" data-animate="fade-up" data-animate-delay="3600"
                                                    data-animate-anchor="#feature-1">
                                                    <div
                                                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <i className="fa-solid fa-robot text-white text-xs"></i>
                                                    </div>
                                                    <div
                                                        className="bg-gray-50 rounded-xl rounded-tl-none p-4 border border-gray-200 max-w-[80%]">
                                                        <p className="text-gray-900 text-sm">
                                                            Kamu bisa menambahkan <span
                                                                className="font-semibold text-blue-700">varian rasa musiman</span>,
                                                            memberi <span className="font-semibold text-blue-700">promo bundling
                                                                pagi hari</span>,
                                                            dan aktif di Instagram Reels.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="3800" data-animate-anchor="#feature-1">
                                            <div className="space-y-3">
                                                <div className="flex gap-3 justify-end" data-animate="fade-up"
                                                    data-animate-delay="4000" data-animate-anchor="#feature-1">
                                                    <div className="bg-blue-700 rounded-xl rounded-tr-none p-4 max-w-[80%]">
                                                        <p className="text-white text-sm">
                                                            Bagaimana cara menentukan harga produk yang tepat?
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <i className="fa-solid fa-user text-blue-700 text-xs"></i>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3" data-animate="fade-up" data-animate-delay="4200"
                                                    data-animate-anchor="#feature-1">
                                                    <div
                                                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <i className="fa-solid fa-robot text-white text-xs"></i>
                                                    </div>
                                                    <div
                                                        className="bg-gray-50 rounded-xl rounded-tl-none p-4 border border-gray-200 max-w-[80%]">
                                                        <p className="text-gray-900 text-sm">
                                                            Hitung <span className="font-semibold text-blue-700">total biaya
                                                                produksi + operasional</span>,
                                                            tambahkan <span className="font-semibold text-blue-700">margin
                                                                30–40%</span>,
                                                            lalu bandingkan dengan harga kompetitor.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3" data-animate="fade-up"
                                        data-animate-delay="5200" data-animate-anchor="#feature-1">
                                        Siap Konsultasi dengan AI?
                                    </h3>

                                    <p className="text-blue-100 mb-6" data-animate="fade-up" data-animate-delay="5400"
                                        data-animate-anchor="#feature-1">
                                        Mulai bertanya dan dapatkan solusi bisnis Anda hari ini
                                    </p>

                                    <div data-animate="fade-up" data-animate-delay="5600" data-animate-anchor="#feature-1">
                                        <a href="/login"
                                            className="bg-white hover:bg-blue-50 transition text-blue-700 px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                                            Mulai Chat dengan AI
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Product Description Generator */}
                            <div className={activeTab === "product-description-generator" ? "" : "hidden"} id="feature-2">
                                {/* Hero */}
                                <div className="mb-12">
                                    <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-xs text-blue-700 mb-4 font-medium"
                                        data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#feature-2">
                                        Generator Deskripsi Produk
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-animate="word-fade">
                                        Buat Deskripsi Produk, Caption, dan Headline Secara Instan
                                    </h2>

                                    <p className="text-gray-500 text-base mb-6" data-animate="fade-up" data-animate-delay="1100"
                                        data-animate-anchor="#feature-2">
                                        Masukkan nama produk, jenis usaha, dan target pasar, lalu dapatkan konten siap jual yang
                                        dioptimalkan untuk UMKM & toko online.
                                    </p>

                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div data-animate="fade-up" data-animate-delay="1300" data-animate-anchor="#feature-2">
                                            <a href="/login"
                                                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-rocket"></i>
                                                Coba Sekarang
                                            </a>
                                        </div>

                                        <div data-animate="fade-up" data-animate-delay="1500" data-animate-anchor="#feature-2">
                                            <a href="#example-f2"
                                                className="bg-white hover:bg-gray-50 transition text-blue-700 px-6 py-3 rounded-full font-medium border border-blue-200 inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                Lihat Contoh
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Input & Output Description */}
                                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="1700" data-animate-anchor="#feature-2">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Input dari User</h4>
                                        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-2">
                                            <li>Nama produk</li>
                                            <li>Jenis usaha</li>
                                            <li>Target pasar</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
                                        data-animate="fade-up" data-animate-delay="1900" data-animate-anchor="#feature-2">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl">
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-lg font-bold mb-4">Output AI</h4>
                                            <ul className="list-disc pl-5 text-blue-100 text-sm space-y-2">
                                                <li>Deskripsi produk</li>
                                                <li>Caption promosi</li>
                                                <li>Headline menarik</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Use This */}
                                <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 mb-12" data-animate="fade-up"
                                    data-animate-delay="2100" data-animate-anchor="#feature-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Mengapa Menggunakan Generator Deskripsi Produk?
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-start gap-3" data-animate="fade-up" data-animate-delay="2300"
                                            data-animate-anchor="#feature-2">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Konten Siap Jual</h4>
                                                <p className="text-gray-500 text-xs">Konten yang bisa langsung digunakan untuk
                                                    promosi</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3" data-animate="fade-up" data-animate-delay="2500"
                                            data-animate-anchor="#feature-2">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Dioptimalkan untuk UMKM & Toko
                                                    Online</h4>
                                                <p className="text-gray-500 text-xs">Cocok untuk bisnis kecil dan penjual online</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3" data-animate="fade-up" data-animate-delay="2700"
                                            data-animate-anchor="#feature-2">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Pembuatan Konten Cepat</h4>
                                                <p className="text-gray-500 text-xs">Hasil konten berkualitas dalam hitungan detik
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example */}
                                <div className="mb-12" id="example-f2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade"
                                        data-animate-delay="2900" data-animate-anchor="#feature-2">
                                        Contoh Input & Output
                                    </h3>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="3000" data-animate-anchor="#feature-2">
                                        <div className="space-y-4">
                                            <div className="flex gap-3 justify-end" data-animate="fade-up" data-animate-delay="3200"
                                                data-animate-anchor="#feature-2">
                                                <div className="bg-blue-700 rounded-xl rounded-tr-none p-4 max-w-[80%]">
                                                    <p className="text-white text-sm">Nama produk: Kopi Susu</p>
                                                    <p className="text-white text-sm">Jenis usaha: Kedai Kopi</p>
                                                    <p className="text-white text-sm">Target pasar: Mahasiswa & pekerja muda</p>
                                                </div>
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fa-solid fa-user text-blue-700 text-xs"></i>
                                                </div>
                                            </div>

                                            <div className="flex gap-3" data-animate="fade-up" data-animate-delay="3400"
                                                data-animate-anchor="#feature-2">
                                                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                                                    <i className="fa-solid fa-robot text-white text-xs"></i>
                                                </div>
                                                <div
                                                    className="bg-gray-50 rounded-xl rounded-tl-none p-4 border border-gray-200 max-w-[80%]">
                                                    <p className="text-gray-900 text-sm">
                                                        Deskripsi: Kopi susu dengan cita rasa lembut, cocok menemani aktivitas
                                                        harian.<br />
                                                        Caption: Nikmati kesegaran kopi susu kami setiap pagi!<br />
                                                        Headline: Kopi Susu Lezat untuk Energi Seharimu!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3" data-animate="fade-up"
                                        data-animate-delay="3600" data-animate-anchor="#feature-2">
                                        Mulai Buat Konten Produk Instan
                                    </h3>
                                    <p className="text-blue-100 mb-6" data-animate="fade-up" data-animate-delay="3800"
                                        data-animate-anchor="#feature-2">
                                        Buat deskripsi produk, caption, dan headline menarik untuk bisnis Anda hari ini
                                    </p>
                                    <a href="/login" data-animate="fade-up" data-animate-delay="4000"
                                        data-animate-anchor="#feature-2"
                                        className="bg-white hover:bg-blue-50 transition text-blue-700 px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                                        Mulai Membuat Konten
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Smart Recommendations */}
                            <div className={activeTab === "smart-recommendations" ? "" : "hidden"} id="feature-3">
                                {/* Hero */}
                                <div className="mb-12">
                                    <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-xs text-blue-700 mb-4 font-medium"
                                        data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#feature-3">
                                        Rekomendasi Cerdas
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-animate="word-fade"
                                        data-animate-anchor="#feature-3">
                                        Rekomendasi Visual untuk Tingkatkan Penjualan & Branding
                                    </h2>

                                    <p className="text-gray-500 text-base mb-6" data-animate="fade-up" data-animate-delay="1100"
                                        data-animate-anchor="#feature-3">
                                        Dapatkan ide produk, strategi promo, dan wawasan branding dalam format yang jelas,
                                        praktis, dan visual.
                                    </p>

                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div data-animate="fade-up" data-animate-delay="1300" data-animate-anchor="#feature-3">
                                            <a href="/login"
                                                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-rocket"></i>
                                                Coba Rekomendasi
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Recommendation Cards */}
                                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
                                        data-animate="fade-up" data-animate-delay="1500" data-animate-anchor="#feature-3">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl">
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-lg font-bold mb-2">Ide Produk Selanjutnya</h4>
                                            <p className="text-blue-100 text-sm">
                                                Temukan varian atau upgrade produk apa yang bisa diperkenalkan selanjutnya.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
                                        data-animate="fade-up" data-animate-delay="1700" data-animate-anchor="#feature-3">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl">
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-lg font-bold mb-2">Strategi Promo & Marketing</h4>
                                            <p className="text-blue-100 text-sm">
                                                Dapatkan ide kampanye, diskon, dan taktik engagement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
                                        data-animate="fade-up" data-animate-delay="1900" data-animate-anchor="#feature-3">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl">
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-lg font-bold mb-2">Sorotan Branding</h4>
                                            <p className="text-blue-100 text-sm">
                                                Wawasan visual yang jelas untuk meningkatkan pengenalan merek Anda.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Smart Recommendations */}
                                <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 mb-12" data-animate="fade-up"
                                    data-animate-delay="2100" data-animate-anchor="#feature-3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Mengapa Menggunakan Rekomendasi Cerdas?
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Ide Produk & Promo</h4>
                                                <p className="text-gray-500 text-xs">
                                                    Dapatkan saran untuk produk atau kampanye selanjutnya
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Langkah Tindak Lanjut yang
                                                    Jelas</h4>
                                                <p className="text-gray-500 text-xs">
                                                    Tahu persis apa yang harus dilakukan untuk pertumbuhan bisnis
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <i className="fa-solid fa-check text-blue-700 text-xs"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-900 font-bold text-sm mb-1">Wawasan Terhighlight</h4>
                                                <p className="text-gray-500 text-xs">
                                                    Rekomendasi yang visual, jelas, dan bisa langsung diterapkan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example Recommendations */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade"
                                        data-animate-delay="2300" data-animate-anchor="#feature-3">
                                        Contoh Rekomendasi
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2500" data-animate-anchor="#feature-3">
                                            <h4 className="text-gray-900 font-bold mb-2">Upgrade Produk</h4>
                                            <p className="text-gray-500 text-sm">
                                                Tambahkan rasa musiman pada menu kopi untuk menarik pelanggan setia.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2700" data-animate-anchor="#feature-3">
                                            <h4 className="text-gray-900 font-bold mb-2">Ide Promo</h4>
                                            <p className="text-gray-500 text-sm">
                                                Jalankan diskon paket pagi untuk meningkatkan kunjungan langsung dan pesanan
                                                online.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"
                                            data-animate="fade-up" data-animate-delay="2900" data-animate-anchor="#feature-3">
                                            <h4 className="text-gray-900 font-bold mb-2">Sorotan Brand</h4>
                                            <p className="text-gray-500 text-sm">
                                                Buat highlight Instagram untuk menampilkan produk unggulan dan promo.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3" data-animate="fade-up"
                                        data-animate-delay="3100" data-animate-anchor="#feature-3">
                                        Dapatkan Rekomendasi Cerdas Sekarang
                                    </h3>
                                    <p className="text-blue-100 mb-6" data-animate="fade-up" data-animate-delay="3300"
                                        data-animate-anchor="#feature-3">
                                        Wawasan visual dan praktis untuk tingkatkan penjualan dan branding Anda
                                    </p>
                                    <a href="/login" data-animate="fade-up" data-animate-delay="3500"
                                        data-animate-anchor="#feature-3"
                                        className="bg-white hover:bg-blue-50 transition text-blue-700 px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                                        Lihat Rekomendasi
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            {/* UMKM Knowledge Base */}
                            <div className={activeTab === "umkm-knowledge-base" ? "" : "hidden"} id="feature-4">
                                {/* Hero */}
                                <div className="mb-12">
                                    <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-xs text-blue-700 mb-4 font-medium"
                                        data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#feature-4">
                                        Basis Pengetahuan UMKM
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-animate="word-fade">
                                        Panduan Praktis & Kisah Sukses UMKM Nyata
                                    </h2>

                                    <p className="text-gray-500 text-base mb-6" data-animate="fade-up" data-animate-delay="1100"
                                        data-animate-anchor="#feature-4">
                                        Akses tips pengembangan bisnis, strategi pemasaran, dan studi kasus UMKM Indonesia yang
                                        sukses.
                                    </p>

                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div data-animate="fade-up" data-animate-delay="1300" data-animate-anchor="#feature-4">
                                            <a href="umkm-insights"
                                                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 text-sm">
                                                <i className="fa-solid fa-rocket"></i>
                                                Jelajahi Basis Pengetahuan
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Knowledge Cards */}
                                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="1500" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-gear text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Tips Pengembangan Bisnis UMKM
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Panduan praktis untuk mengembangkan bisnis langkah demi langkah, dari operasional
                                            hingga optimasi penjualan.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="1700" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-bullhorn text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Strategi Pemasaran Praktis
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Taktik pemasaran langkah demi langkah yang disesuaikan untuk UMKM agar dapat
                                            menjangkau lebih banyak pelanggan secara efektif.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="1900" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-star text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Studi Kasus UMKM Sukses
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Pelajari dari kisah sukses nyata, termasuk strategi dan praktik yang membawa
                                            pertumbuhan dan pengakuan.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="2100" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-wallet text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Tips Manajemen Keuangan UMKM
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Saran praktis untuk mengelola keuangan secara efisien, mulai dari budgeting hingga
                                            pelacakan arus kas.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="2300" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-users text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Strategi Engagement Pelanggan
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Teknik untuk membangun loyalitas dan meningkatkan pembelian ulang melalui pengalaman
                                            pelanggan yang dipersonalisasi.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow border border-gray-100" data-animate="fade-up"
                                        data-animate-delay="2500" data-animate-anchor="#feature-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                            <i className="fa-solid fa-laptop text-blue-700"></i>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-base mb-2">
                                            Pemasaran Digital untuk UMKM
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Manfaatkan platform dan tools digital untuk mempromosikan bisnis, menjangkau audiens
                                            baru, dan meningkatkan penjualan.
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-3" data-animate="fade-up"
                                        data-animate-delay="2700" data-animate-anchor="#feature-4">
                                        Jelajahi Basis Pengetahuan UMKM
                                    </h3>
                                    <p className="text-blue-100 mb-6" data-animate="fade-up" data-animate-delay="2900"
                                        data-animate-anchor="#feature-4">
                                        Panduan praktis, strategi, dan contoh keberhasilan untuk pertumbuhan bisnis Anda
                                    </p>
                                    <a href="umkm-insights" data-animate="fade-up" data-animate-delay="3100"
                                        data-animate-anchor="#feature-4"
                                        className="bg-white hover:bg-blue-50 transition text-blue-700 px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                                        Lihat Basis Pengetahuan
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}