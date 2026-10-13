import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import PartnerSwiper from "./components/PartnerSwiper";
import HowItWorkSwiper from "./components/HowItWorkSwiper";
import TestimonialSwiper from "./components/TestimonialSwiper";

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <div
                className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] pt-24"
                id="hero"
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
                                Berkembang Lebih Cerdas Dengan{" "}
                                <span className="text-blue-400">NexumAI</span>
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">Asisten AI Pintar Untuk</h1>
                            <h1 data-animate="word-up-reverse">
                                UMKM & Ekonomi Kreatif
                            </h1>
                        </div>

                        <p
                            className="text-blue-200/70 text-lg max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-anchor="#hero"
                            data-animate-delay="900"
                        >
                            NexumAI bantu bisnis kecil kamu berkembang lebih cepat dengan ide
                            produk, konten promosi, dan rekomendasi bisnis yang didukung AI,
                            semua dalam satu platform.
                        </p>

                        <div
                            data-animate="fade-down"
                            data-animate-anchor="#hero"
                            data-animate-delay="1000"
                        >
                            <Link
                                href="/login"
                                className="bg-blue-700 hover:bg-blue-900 transition text-white ps-6 pe-2 rounded-full text-base font-medium mt-8 inline-flex items-center gap-3"
                            >
                                Coba NexumAI Sekarang
                                <div className="py-3 px-4 rounded-full bg-white my-3">
                                    <i className="fa-solid fa-arrow-right-long text-xl text-blue-700 mt-1"></i>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
                        {/* Business Insight */}
                        <div
                            className="bg-[#1b1840]/60 backdrop-blur-md rounded-3xl p-6 border border-blue-500/20"
                            data-animate="fade-up"
                            data-animate-anchor="#hero"
                            data-animate-delay="1200"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <p className="text-blue-200/70 text-sm mb-1">
                                        Insight Bisnis
                                    </p>
                                    <p className="text-blue-300/50 text-xs mb-2">
                                        Evaluasi AI Terbaru
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-blue-400 text-4xl font-bold">
                                            87%
                                        </span>
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                            <i className="fa-solid fa-check"></i> Stabil
                                        </span>
                                    </div>
                                    <p className="text-blue-200/60 text-xs mt-1">
                                        Skor Kesiapan Bisnis Keseluruhan
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    href="/knowledge/1"
                                    className="bg-[#0c0b14]/50 rounded-xl p-3 flex items-center justify-between border border-blue-500/10 hover:border-blue-500/30 transition"
                                >
                                    <div>
                                        <p className="text-white text-sm font-medium">
                                            Tips Pengembangan Bisnis
                                        </p>
                                        <p className="text-blue-200/60 text-xs">
                                            Cara buat naikin bisnis kamu
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-angle-right text-blue-400 me-4"></i>
                                </Link>

                                <Link
                                    href="/knowledge/2"
                                    className="bg-[#0c0b14]/50 rounded-xl p-3 flex items-center justify-between border border-blue-500/10 hover:border-blue-500/30 transition"
                                >
                                    <div>
                                        <p className="text-white text-sm font-medium">
                                            Strategi Marketing Praktis
                                        </p>
                                        <p className="text-blue-200/60 text-xs">
                                            Cara marketing simpel tapi efektif
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-angle-right text-blue-400 me-4"></i>
                                </Link>

                                <Link
                                    href="/knowledge/3"
                                    className="bg-[#0c0b14]/50 rounded-xl p-3 flex items-center justify-between border border-blue-500/10 hover:border-blue-500/30 transition"
                                >
                                    <div>
                                        <p className="text-white text-sm font-medium">
                                            Studi Kasus UMKM Sukses
                                        </p>
                                        <p className="text-blue-200/60 text-xs">
                                            Pelajari strategi mereka yang sukses
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-angle-right text-blue-400 me-4"></i>
                                </Link>

                                <Link
                                    href="/knowledge/4"
                                    className="bg-[#0c0b14]/50 rounded-xl p-3 flex items-center justify-between border border-blue-500/10 hover:border-blue-500/30 transition"
                                >
                                    <div>
                                        <p className="text-white text-sm font-medium">
                                            Mengatur Keuangan UMKM
                                        </p>
                                        <p className="text-blue-200/60 text-xs">
                                            Pelajari cara mengelola uang kas
                                        </p>
                                    </div>
                                    <i className="fa-solid fa-angle-right text-blue-400 me-4"></i>
                                </Link>
                            </div>
                        </div>

                        {/* AI Analysis */}
                        <div
                            className="bg-white rounded-3xl p-6 relative overflow-hidden"
                            data-animate="fade-up"
                            data-animate-anchor="#hero"
                            data-animate-delay="1400"
                        >
                            <div className="text-center mb-6">
                                <span className="inline-block bg-blue-50 px-4 py-1 rounded-full text-sm text-blue-700 mb-4 border border-blue-200">
                                    Analisis Bisnis AI
                                </span>
                                <h3 className="text-2xl font-bold text-[#0c0b14] mb-2">
                                    Menganalisis{" "}
                                    <span className="text-blue-800">Performa UMKM</span>
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Insight cerdas dibuat oleh AI
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <svg className="w-24 h-24 transform -rotate-90">
                                        <circle
                                            cx="48"
                                            cy="48"
                                            r="40"
                                            stroke="#e0e7ff"
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        <circle
                                            cx="48"
                                            cy="48"
                                            r="40"
                                            stroke="#3b82f6"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray="251"
                                            strokeDashoffset="35"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-950">
                                        92%
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-950 text-sm">
                                        Bisnis kamu punya potensi besar untuk berkembang secara
                                        digital
                                    </p>
                                </div>
                            </div>

                            <Image
                                src="/assets/images/business.jpg"
                                alt="Business"
                                width={400}
                                height={160}
                                className="w-full h-40 object-cover rounded-xl"
                            />
                        </div>

                        {/* Best Suggestion */}
                        <div
                            className="bg-[#1b1840]/60 backdrop-blur-md rounded-3xl p-6 border border-blue-500/20 h-full relative"
                            data-animate="fade-up"
                            data-animate-anchor="#hero"
                            data-animate-delay="1600"
                        >
                            <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-blue-400/30">
                                <span className="text-white text-xs">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                </span>
                                <span className="text-white text-xs font-medium">
                                    Rekomendasi AI Terbaik
                                </span>
                            </div>

                            <p className="text-blue-200 text-xs mb-2 mt-8">
                                Strategi yang AI Sarankan
                            </p>
                            <h3 className="text-white text-3xl font-bold mb-2">
                                Tingkatkan Visibilitas Digital
                            </h3>
                            <p className="text-white text-xl font-bold mb-2">
                                Peluang Tumbuh +35%
                            </p>
                            <p className="text-blue-100 text-sm mb-6">
                                Didukung oleh insight bisnis dan rekomendasi berbasis AI
                            </p>

                            <div className="relative h-52 border border-blue-400/30 rounded-xl">
                                <svg
                                    className="absolute bottom-0 left-0 w-full"
                                    viewBox="0 0 200 80"
                                >
                                    <defs>
                                        <linearGradient
                                            id="gradient"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop
                                                offset="0%"
                                                style={{
                                                    stopColor: "#60a5fa",
                                                    stopOpacity: 0.5,
                                                }}
                                            />
                                            <stop
                                                offset="100%"
                                                style={{
                                                    stopColor: "#3b82f6",
                                                    stopOpacity: 0.5,
                                                }}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,60 L20,55 L40,50 L60,45 L80,42 L100,40 L120,45 L140,50 L160,48 L180,45 L200,40"
                                        stroke="url(#gradient)"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                    <path
                                        d="M0,60 L20,55 L40,50 L60,45 L80,42 L100,40 L120,45 L140,50 L160,48 L180,45 L200,40 L200,80 L0,80 Z"
                                        fill="url(#gradient)"
                                        opacity="0.3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Partners */}
                    <div data-animate="fade">
                        <PartnerSwiper />
                    </div>
                </div>
            </div>

            {/* AI Feature Preview */}
            <div className="bg-gray-50 py-16 relative overflow-hidden" id="features">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span
                            className="inline-block bg-blue-100 px-6 py-2 rounded-full text-sm text-blue-700 mb-6 font-medium"
                            data-animate="fade-down"
                            data-animate-anchor="#features"
                            data-animate-delay="700"
                        >
                            Fitur NexumAI
                        </span>

                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-7 flex flex-col gap-1">
                            <h2 data-animate="word-down-reverse">
                                Fitur yang Dibuat untuk
                            </h2>
                            <h2 data-animate="word-up">
                                Kemajuan UMKM
                            </h2>
                        </div>

                        <p
                            className="text-gray-500 text-base max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-anchor="#features"
                            data-animate-delay="700"
                        >
                            Fitur AI yang pintar, simpel, dan praktis, dirancang khusus
                            <br />
                            buat bantu UMKM berkembang lebih cepat dan lebih cerdas.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* 1. AI Business Assistant */}
                        <div data-animate="fade-up" data-animate-anchor="#features" data-animate-delay="1200">
                            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-300 hover:shadow-blue-400 relative transition h-full flex flex-col justify-evenly">

                                <div className="w-16 h-16 bg-blue-400/30 rounded-2xl flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-robot text-3xl text-blue-100"></i>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">
                                    Asisten Bisnis AI
                                </h3>

                                <p className="text-blue-100 text-sm mb-4">
                                    Tanya apa aja soal bisnis kamu
                                    dan dapetin saran yang gampang dipahami.
                                </p>

                                <ul className="text-xs text-blue-100 space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-300"></i>
                                        Panduan bisnis & produk
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-300"></i>
                                        Jawaban simpel dan mudah dimengerti
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-300"></i>
                                        Fokus ke kebutuhan UMKM
                                    </li>
                                </ul>

                                <a
                                    href="login"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white transition"
                                >
                                    Coba asisten <i className="fa-solid fa-arrow-right"></i>
                                </a>

                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* 2. Product Description */}
                        <div data-animate="fade-up" data-animate-anchor="#features" data-animate-delay="1400">
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">

                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-wand-magic-sparkles text-3xl text-blue-700"></i>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Pembuat Deskripsi Produk
                                </h3>

                                <p className="text-gray-500 text-sm mb-4">
                                    Bikin deskripsi produk, caption,
                                    dan headline dalam sekejap.
                                </p>

                                <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Copywriting siap jual
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Cocok buat UMKM & toko online
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Bikin konten jadi lebih cepat
                                    </li>
                                </ul>

                                <a
                                    href="login"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                >
                                    Buat konten <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* 3. Smart Recommendation */}
                        <div data-animate="fade-up" data-animate-anchor="#features" data-animate-delay="1600">
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">

                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-lightbulb text-3xl text-blue-700"></i>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Rekomendasi Pintar
                                </h3>

                                <p className="text-gray-500 text-sm mb-4">
                                    Rekomendasi visual yang bantu kamu
                                    tingkatkan penjualan dan branding.
                                </p>

                                <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Ide produk & promo
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Langkah aksi yang jelas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Insight yang menonjol
                                    </li>
                                </ul>

                                <a
                                    href="login"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                >
                                    Lihat rekomendasi <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* 4. Knowledge Base */}
                        <div data-animate="fade-up" data-animate-anchor="#features" data-animate-delay="1800">
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">

                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-book-open text-3xl text-blue-700"></i>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Gudang Ilmu UMKM
                                </h3>

                                <p className="text-gray-500 text-sm mb-4">
                                    Panduan praktis, strategi, dan
                                    contoh sukses UMKM yang nyata.
                                </p>

                                <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Tips bisnis & marketing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Jadi konteks pengetahuan AI
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fa-solid fa-check text-blue-600"></i>
                                        Insight khusus UMKM
                                    </li>
                                </ul>

                                <a
                                    href="umkm-insights"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                >
                                    Jelajahi ilmu <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* More Features Hint */}
                    <div
                        className="text-center mt-12"
                        data-animate="fade"
                        data-animate-anchor="#features"
                        data-animate-delay="2000"
                    >
                        <p className="text-gray-500 text-sm">
                            Dibuat khusus buat dukung UMKM dengan AI yang pintar, insight praktis,
                            dan dampak bisnis yang nyata.
                        </p>
                    </div>

                </div>
            </div>

            {/* Benefit */}
            <div className="bg-gray-50/50 py-16 relative overflow-hidden" id="benefits">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span
                            className="inline-block bg-blue-100 px-6 py-2 rounded-full text-sm text-blue-700 mb-6 font-medium"
                            data-animate="fade-down"
                            data-animate-anchor="#benefits"
                            data-animate-delay="700"
                        >
                            Keuntungan untuk UMKM
                        </span>

                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <h2 data-animate="word-down">Keputusan Lebih Cerdas,</h2>
                            <h2 data-animate="word-up-reverse">UMKM Makin Berkembang</h2>
                        </div>

                        <p
                            className="text-gray-500 text-base max-w-2xl mx-auto"
                            data-animate="fade-up"
                            data-animate-anchor="#benefits"
                            data-animate-delay="700"
                        >
                            NexumAI bantu pemilik UMKM berpikir lebih jernih, ambil keputusan lebih cepat,<br />
                            dan berkembang dengan panduan AI yang praktis.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

                        {/* Understand Your Business */}
                        <div
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                            data-animate="fade-up"
                            data-animate-anchor="#benefits"
                            data-animate-delay="1200"
                        >
                            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6">
                                <i className="fa-solid fa-brain text-2xl text-white"></i>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Pahami Bisnis <br />Kamu Lebih Dalam
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Tanya soal bisnis dan dapetin penjelasan yang simpel
                                dan mudah dipahami khusus untuk UMKM.
                            </p>
                        </div>

                        {/* AI Guidance (Featured) */}
                        <div
                            className="rounded-3xl shadow-xl relative overflow-hidden"
                            data-animate="fade-up"
                            data-animate-anchor="#benefits"
                            data-animate-delay="1400"
                        >
                            <img
                                src="../assets/images/benefits.jpg"
                                alt="AI Insights"
                                className="w-full min-h-72 h-full object-cover"
                            />

                            <div className="absolute z-10 bottom-0 bg-gradient-to-t from-blue-900 via-blue-900 to-blue-50/0 left-0 p-5 pb-0 h-3/4 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Panduan Bisnis <br />Bertenaga AI
                                </h3>
                                <p className="text-blue-50 text-sm mb-6">
                                    Dapetin saran yang bisa langsung dipraktekkin untuk ide produk,
                                    promosi, dan branding sesuai kebutuhan UMKM.
                                </p>
                            </div>
                        </div>

                        {/* Improve Efficiency */}
                        <div
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                            data-animate="fade-up"
                            data-animate-anchor="#benefits"
                            data-animate-delay="1600"
                        >
                            <div className="absolute top-0 right-0 w-10 h-full bg-blue-800 rounded-l-full"></div>
                            <div className="absolute top-0 right-0 w-5 h-full bg-blue-600 rounded-l-full"></div>

                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-gray-900 mb-3">65%</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Tingkatkan Efisiensi Operasional
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    kurangi pekerjaan manual dan optimalkan operasional harian dengan bantuan AI yang cerdas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Grow With AI */}
                        <div
                            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 grid md:grid-cols-2 gap-5"
                            data-animate="fade-down"
                            data-animate-anchor="#benefits"
                            data-animate-delay="1800"
                        >
                            <div className="col-span-1">
                                <span className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm text-blue-700 mb-6 font-medium">
                                    Berkembang Bareng AI
                                </span>

                                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Ubah Pertanyaan Jadi Aksi Bisnis yang Jelas Bareng NexumAI.
                                </h3>

                                <a
                                    href="login"
                                    className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2"
                                >
                                    Tanya NexumAI
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>

                            {/* Insight Types */}
                            <div
                                className="bg-gray-50 rounded-3xl p-5 md:p-8 border border-gray-200 col-span-1"
                                data-animate="fade-up"
                                data-animate-anchor="#benefits"
                                data-animate-delay="2000"
                            >
                                <div className="space-y-4">

                                    <div className="flex items-center gap-4">
                                        <div className="p-3 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                            <i className="fa-solid fa-box text-blue-700 text-xl"></i>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            Saran produk & strategi harga
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="p-3 md:w-16 md:h-16 bg-blue-700 rounded-full flex items-center justify-center">
                                            <i className="fa-solid fa-bullhorn text-white text-xl"></i>
                                        </div>
                                        <p className="text-gray-900 font-semibold">
                                            Ide promosi & konten jualan
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                                        <span className="text-gray-900 font-bold text-lg">
                                            Rekomendasi Cerdas
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Saran langkah selanjutnya yang jelas sesuai kondisi UMKM kamu
                                        </p>
                                    </div>

                                    <div className="bg-gray-100 rounded-2xl p-4">
                                        <span className="text-gray-900 font-bold text-lg">
                                            Gudang Ilmu UMKM
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Tips, strategi, dan contoh nyata dari UMKM lainnya
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Business Score Chart */}
                        <div
                            className="flex flex-col lg:col-span-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-[400px] md:h-full"
                            data-animate="fade-down"
                            data-animate-anchor="#benefits"
                            data-animate-delay="2000"
                        >
                            <div className="mb-6">
                                <p className="text-blue-600 text-sm mb-2">Skor Performa Bisnis</p>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-4xl font-bold text-gray-900">87%</span>
                                </div>
                                <p className="text-gray-400 text-xs mb-2">
                                    peningkatan bulanan: <span className="text-green-500">+11%</span>
                                </p>
                            </div>

                            {/* Simple Bar Chart */}
                            <div className="h-full">
                                <div className="relative h-5/6">
                                    <div className="flex items-end justify-between h-full gap-2">
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[45%]"></div>
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[50%]"></div>
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[48%]"></div>
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[55%]"></div>
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[60%]"></div>

                                        <div className="flex-1 bg-blue-600 rounded-t-lg relative h-[90%]">
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                                                Insight NexumAI
                                            </div>
                                        </div>

                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[65%]"></div>
                                        <div className="flex-1 bg-blue-100 rounded-t-lg h-[58%]"></div>
                                        <div className="flex-1 bg-blue-200 rounded-t-lg h-[60%]"></div>
                                    </div>

                                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                                        <span>Jan</span>
                                        <span>Feb</span>
                                        <span>Mar</span>
                                        <span>Apr</span>
                                        <span>Mei</span>
                                        <span>Jun</span>
                                        <span>Jul</span>
                                        <span>Agu</span>
                                        <span>Sep</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Showcase */}
            <div className="bg-gray-50 py-16 relative overflow-hidden" id="showcase">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span
                            className="inline-block bg-blue-100 px-6 py-2 rounded-full text-sm text-blue-700 mb-6 font-medium"
                            data-animate="fade-down"
                            data-animate-anchor="#showcase"
                            data-animate-delay="700"
                        >
                            Bukti Nyata AI
                        </span>

                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <h2 data-animate="word-down-reverse">
                                Hasil AI yang Beneran
                            </h2>
                            <h2 data-animate="word-up">
                                Buat UMKM Makin Maju
                            </h2>
                        </div>

                        <p
                            className="text-gray-500 text-base max-w-2xl mx-auto"
                            data-animate="fade-down"
                            data-animate-anchor="#showcase"
                            data-animate-delay="700"
                        >
                            contoh nyata gimana NexumAI bantu UMKM bikin konten, atur promosi, <br />
                            dan ambil keputusan bisnis yang lebih cerdas pakai AI
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* AI BUSINESS ASSISTANT */}
                        <div
                            className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                            data-animate="fade-up"
                            data-animate-anchor="#showcase"
                            data-animate-delay="1000"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-robot text-blue-700 text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">
                                        Asisten Bisnis AI
                                    </p>
                                    <p className="text-blue-600 text-xs">
                                        Fitur Utama NexumAI
                                    </p>
                                </div>
                            </div>

                            {/* Chat Example */}
                            <div className="space-y-4 text-sm">

                                {/* USER 1 */}
                                <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
                                    <p className="text-gray-700 font-medium mb-1">
                                        <i className="fa-solid fa-user text-gray-500 mr-1"></i>
                                        Pertanyaan Kamu
                                    </p>
                                    <p className="text-gray-700">
                                        Aku jualan kopi susu nih, gimana caranya biar bisa dapet pelanggan baru?
                                    </p>
                                </div>

                                {/* AI 1 */}
                                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                                    <p className="text-blue-700 font-medium mb-1">
                                        <i className="fa-solid fa-robot mr-1"></i>
                                        Jawaban NexumAI
                                    </p>
                                    <p className="text-gray-900 leading-relaxed">
                                        Coba fokus promosi di jam sore sampe malam, bikin paket bundling yang menarik,
                                        terus manfaatin sosmed dengan bahasa yang santai biar lebih nyambung
                                        sama target pasarmu.
                                    </p>
                                </div>

                                {/* USER 2 */}
                                <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
                                    <p className="text-gray-700 font-medium mb-1">
                                        <i className="fa-solid fa-user text-gray-500 mr-1"></i>
                                        Pertanyaan Kamu
                                    </p>
                                    <p className="text-gray-700">
                                        Perlu gak sih nambahin varian produk biar penjualan naik?
                                    </p>
                                </div>

                                {/* AI 2 */}
                                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                                    <p className="text-blue-700 font-medium mb-1">
                                        <i className="fa-solid fa-robot mr-1"></i>
                                        Jawaban NexumAI
                                    </p>
                                    <p className="text-gray-900 leading-relaxed">
                                        Tambahin 1–2 varian yang lagi hits kayak kopi susu gula aren
                                        bisa banget bikin jualan lebih menarik tanpa nambah biaya terlalu banyak.
                                        Coba test dulu dalam skala kecil ya buat lihat responnya!
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-7 grid grid-cols-1 gap-6">

                            {/* PRODUCT DESCRIPTION GENERATOR */}
                            <div
                                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                                data-animate="fade-up"
                                data-animate-anchor="#showcase"
                                data-animate-delay="1200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-wand-magic-sparkles text-blue-700"></i>
                                    </div>
                                    <p className="text-gray-900 font-bold">
                                        Pembuat Deskripsi Produk
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                                        <p className="text-gray-600 text-xs font-semibold mb-1">
                                            SEBELUM PAKAI AI
                                        </p>
                                        <p className="text-gray-700">
                                            Kopi enak dari Aceh.
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                        <p className="text-blue-700 text-xs font-semibold mb-1">
                                            SESUDAH PAKAI AI
                                        </p>
                                        <p className="text-gray-900 leading-relaxed">
                                            Kopi Arabika Gayo premium dengan aroma khas
                                            dan rasa yang pas banget, cocok buat kamu
                                            pecinta kopi yang mau ngopi setiap hari.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SMART RECOMMENDATION PANEL */}
                            <div
                                className="bg-blue-950 rounded-3xl p-6 shadow-xl text-white"
                                data-animate="fade-up"
                                data-animate-anchor="#showcase"
                                data-animate-delay="1400"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-lightbulb"></i>
                                    </div>
                                    <p className="font-bold">
                                        Rekomendasi Pintar
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                        <p className="font-semibold mb-1">
                                            <i className="fa-solid fa-box-open mr-1"></i>
                                            Ide Produk
                                        </p>
                                        <p className="text-blue-200">
                                            Varian kopi susu gula aren
                                        </p>
                                    </div>

                                    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                        <p className="font-semibold mb-1">
                                            <i className="fa-solid fa-bullhorn mr-1"></i>
                                            Promosi
                                        </p>
                                        <p className="text-blue-200">
                                            Diskon jam 18.00 – 21.00
                                        </p>
                                    </div>

                                    <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                        <p className="font-semibold mb-1">
                                            <i className="fa-solid fa-palette mr-1"></i>
                                            Branding
                                        </p>
                                        <p className="text-blue-200">
                                            Desain kemasan lebih simpel
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* KNOWLEDGE BASE UMKM */}
                            <div
                                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                                data-animate="fade-up"
                                data-animate-anchor="#showcase"
                                data-animate-delay="1600"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-book text-blue-700"></i>
                                    </div>
                                    <p className="text-gray-900 font-bold">
                                        Gudang Ilmu UMKM
                                    </p>
                                </div>

                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>
                                        <i className="fa-solid fa-check text-blue-600 mr-2"></i>
                                        Tips kembangkan bisnis UMKM
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check text-blue-600 mr-2"></i>
                                        Strategi marketing yang praktis
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check text-blue-600 mr-2"></i>
                                        Studi kasus UMKM yang sukses
                                    </li>
                                </ul>

                                <p className="text-xs text-gray-400 mt-5">
                                    Dipakai sebagai referensi konteks dan rekomendasi AI.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="text-center mt-14"
                        data-animate="fade"
                        data-animate-anchor="#showcase"
                        data-animate-delay="1700"
                    >
                        <a
                            href="login"
                            className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-3"
                        >
                            Coba NexumAI buat UMKM-mu
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>

            {/* How It Works */}
            <div className="bg-white py-16 relative overflow-hidden" id="how-it-works">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block bg-blue-100 px-6 py-2 rounded-full text-sm text-blue-700 mb-6 font-medium" data-animate="fade-down"
                            data-animate-anchor="#how-it-works"
                            data-animate-delay="700">
                            Cara Kerja
                        </span>
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <h2 data-animate="word-down">Kembangkan Bisnis dengan</h2>
                            <h2 data-animate="word-up-reverse">Empat Langkah Mudah</h2>
                        </div>
                        <p className="text-gray-400 text-base max-w-2xl mx-auto" data-animate="fade-down"
                            data-animate-anchor="#how-it-works"
                            data-animate-delay="700">
                            dari analisis sampai optimasi hingga insight real-time,
                            <br />
                            NexumAI bikin semua urusan bisnis kamu jadi gampang banget.
                        </p>
                    </div>

                    {/* Steps Swiper */}
                    <div data-animate="fade" data-animate-delay="800">
                        <HowItWorkSwiper />
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div
                className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] py-16 relative overflow-hidden"
                id="testimonials"
            >
                <div className="px-8 py-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="inline-block bg-[#1b1840]/70 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20" data-animate="fade-down"
                                data-animate-anchor="#testimonials"
                                data-animate-delay="700">
                                <span className="text-blue-200 text-sm">Testimoni</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" data-animate="word-down-reverse">Kata Mereka</h2>
                            <h2 className="text-4xl md:text-5xl font-bold text-white text-center" data-animate="word-up">
                                Tentang NexumAI
                            </h2>
                        </div>

                        <div className="text-right">
                            <div className="flex items-center gap-2 mb-3 justify-center md:justify-end">
                                <div
                                    className={`w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30`}
                                    data-animate="fade-up"
                                    data-animate-anchor="#testimonials"
                                    data-animate-delay="800"
                                >
                                    <Image
                                        src="/assets/images/user-1.jpg"
                                        alt={`UMKM Owner 1`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className={`w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 -ml-4`}
                                    data-animate="fade-up"
                                    data-animate-anchor="#testimonials"
                                    data-animate-delay="900"
                                >
                                    <Image
                                        src="/assets/images/user-2.jpg"
                                        alt={`UMKM Owner 2`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className={`w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 -ml-4`}
                                    data-animate="fade-up"
                                    data-animate-anchor="#testimonials"
                                    data-animate-delay="1000"
                                >
                                    <Image
                                        src="/assets/images/user-3.jpg"
                                        alt={`UMKM Owner 3`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <p className="text-blue-200/70 text-sm" data-animate="word-down">Cerita nyata dari pemilik UMKM</p>
                            <p className="text-blue-200/70 text-sm" data-animate="word-up">yang berkembang bersama NexumAI</p>
                        </div>
                    </div>

                    {/* Swiper Testimonial */}
                    <div data-animate="fade" data-animate-delay="1000">
                        <TestimonialSwiper />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
