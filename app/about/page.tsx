import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function Home() {
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
                            data-animate-delay="700"
                            data-animate-anchor="#hero"
                        >
                            <span className="text-blue-200 text-sm">
                                Temukan <span className="text-blue-400">NexumAI</span>
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">AI Simpel Biar</h1>
                            <h1 data-animate="word-up-reverse">
                                Bisnismu Makin Tumbuh
                            </h1>
                        </div>

                        <p
                            className="text-blue-200/70 text-lg max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-delay="900"
                            data-animate-anchor="#hero"
                        >
                            NexumAI adalah asisten bisnis berbasis AI yang dibuat khusus buat
                            UMKM dan pelaku Ekonomi Kreatif di Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white py-16 relative overflow-hidden">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Our Mission */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32" id="mission">
                        <div>
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#mission"
                            >
                                Misi Kami
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 my-6"
                                data-animate="word-up"
                            >
                                Menghubungkan Teknologi & Kebutuhan Bisnis
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#mission"
                            >
                                NexumAI dibuat untuk menjembatani teknologi canggih dengan kebutuhan bisnis nyata. Banyak UMKM
                                kesulitan karena keterbatasan waktu, sumber daya, dan pengetahuan digital. Meski teknologi AI
                                ada,
                                sering terasa ribet dan susah dipakai. Nah, kita ingin ubah itu.
                            </p>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#mission"
                            >
                                Kami percaya teknologi harus memudahkan, bukan membingungkan. Fokus kami adalah menghadirkan
                                solusi
                                AI yang gampang dipakai, praktis, dan langsung bisa diaplikasikan, khusus untuk kebutuhan UMKM,
                                tanpa
                                perlu paham teknis.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                                data-animate="fade"
                                data-animate-delay="1300"
                                data-animate-anchor="#mission"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-lightbulb text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">Tujuan Kami:</span> Bantu pemilik bisnis bikin
                                    keputusan
                                    lebih tepat, tingkatkan branding, dan hemat waktu lewat otomatisasi cerdas.
                                </p>
                            </div>
                        </div>

                        <div className="h-full">
                            <Image
                                src="/assets/images/about-1.png"
                                alt="NexumAI Mission"
                                width={2000}
                                height={2000}
                                className="w-full h-full object-cover rounded-2xl"
                                data-animate="fade-up"
                                data-animate-delay="1500"
                                data-animate-anchor="#mission"
                            />
                        </div>
                    </div>

                    {/* What NexumAI Does */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32" id="doing">
                        <div className="order-2 lg:order-1 h-full">
                            <Image
                                src="/assets/images/about-2.png"
                                alt="What NexumAI Does"
                                width={2000}
                                height={2000}
                                className="w-full h-full object-cover rounded-2xl"
                                data-animate="fade-up"
                                data-animate-delay="300"
                                data-animate-anchor="#doing"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#doing"
                            >
                                Apa yang Kami Lakukan
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 my-6"
                                data-animate="word-up"
                            >
                                Teman Bisnis Digitalmu
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#doing"
                            >
                                NexumAI jadi teman digital untuk bisnismu. Bantu dari perencanaan dan pengembangan ide,
                                perbaikan produk dan branding, strategi pemasaran & promosi, sampai bikin konten buat produk dan
                                medsos.
                            </p>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#doing"
                            >
                                Semua saran disampaikan pakai bahasa yang gampang dimengerti, fokus ke situasi nyata UMKM
                                sehari-hari.
                                Gak ribet, gak pakai istilah susah, cuma solusi praktis yang langsung bisa dipakai.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600"
                                data-animate="fade"
                                data-animate-delay="1300"
                                data-animate-anchor="#doing"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-handshake text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">Dibuat untuk Kamu:</span> Khusus untuk pelaku UMKM dan
                                    Ekonomi Kreatif di Indonesia yang butuh bantuan AI praktis.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Key Features */}
                    <div className="mb-32" id="key">
                        <div className="text-center mb-16">
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-4"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#key"
                            >
                                Fitur Utama
                            </div>
                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                                data-animate="word-down"
                            >
                                Alat Keren untuk Bisnismu
                            </h2>
                            <p
                                className="text-gray-600 text-lg max-w-3xl mx-auto"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#key"
                            >
                                Semua yang kamu butuhin buat ngembangin bisnis, pakai AI dan gampang dipakai.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Feature 1 - AI Business Assistant */}
                            <div data-animate="fade-up" data-animate-delay="1100" data-animate-anchor="#key">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-300 hover:shadow-blue-400 relative transition h-full flex flex-col justify-evenly">
                                    <div className="w-16 h-16 bg-blue-400/30 rounded-2xl flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-comments text-3xl text-blue-100"></i>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">Asisten Bisnis AI</h3>

                                    <p className="text-blue-100 text-sm mb-4">
                                        Tanyain apa aja soal bisnis, dapetin jawaban yang jelas dan gampang dimengerti, khusus
                                        buat UMKM. Langsung dapat jawaban, tanpa ribet teknis.
                                    </p>

                                    <ul className="text-xs text-blue-100 space-y-2 mb-6">
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-300"></i>
                                            Panduan bisnis & produk
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-300"></i>
                                            Jawaban simpel & jelas
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-300"></i>
                                            Fokus kebutuhan UMKM
                                        </li>
                                    </ul>

                                    <Link
                                        href="/login"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white transition"
                                    >
                                        Coba Asisten <i className="fa-solid fa-arrow-right"></i>
                                    </Link>

                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                                </div>
                            </div>

                            {/* Feature 2 - AI Product Description Generator */}
                            <div data-animate="fade-up" data-animate-delay="1300" data-animate-anchor="#key">
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-wand-magic-sparkles text-3xl text-blue-700"></i>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Pembuat Deskripsi Produk
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4">
                                        Bikin deskripsi produk, caption promo, atau headline menarik cuma dalam hitungan
                                        detik. Hemat banyak waktu nulis.
                                    </p>

                                    <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Copy siap jual
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Cocok buat UMKM & toko online
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Buat konten lebih cepat
                                        </li>
                                    </ul>

                                    <Link
                                        href="/login"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                    >
                                        Buat Konten <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 3 - Smart Recommendation Panel */}
                            <div data-animate="fade-up" data-animate-delay="1500" data-animate-anchor="#key">
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-lightbulb text-3xl text-blue-700"></i>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Rekomendasi Pintar
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4">
                                        Dapetin rekomendasi visual yang gampang dipahami buat ide produk, strategi branding,
                                        dan kampanye marketing. Langsung bisa dipraktikkan.
                                    </p>

                                    <ul className="text-xs text-gray-500 space-y-2 mb-6">
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Ide produk & promo
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Langkah selanjutnya jelas
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-blue-600"></i>
                                            Insight penting ditonjolkan
                                        </li>
                                    </ul>

                                    <Link
                                        href="/login"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                    >
                                        Lihat Rekomendasi <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 4 - UMKM Knowledge Base */}
                            <div data-animate="fade-up" data-animate-delay="1700" data-animate-anchor="#key">
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-blue-700/30 h-full flex flex-col justify-evenly">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                        <i className="fa-solid fa-book-open text-3xl text-blue-700"></i>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Gudang Ilmu UMKM
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4">
                                        Akses tips bisnis, strategi marketing, dan cerita sukses UMKM asli, yang juga bikin AI
                                        ngerti konteksmu lebih baik.
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
                                            Insight fokus UMKM
                                        </li>
                                    </ul>

                                    <Link
                                        href="/umkm-insights"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                    >
                                        Jelajahi Knowledge <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What Makes Us Different */}
                    <div
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        id="different"
                    >
                        <div className="h-full">
                            <Image
                                src="/assets/images/about-3.png"
                                alt="Apa yang Bikin NexumAI Berbeda"
                                width={2000}
                                height={2000}
                                className="w-full h-full object-cover rounded-2xl"
                                data-animate="fade-up"
                                data-animate-delay="300"
                                data-animate-anchor="#different"
                                priority
                            />
                        </div>

                        <div>
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#different"
                            >
                                Keunggulan Kami
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 my-6"
                                data-animate="word-up"
                            >
                                Kenapa Pilih NexumAI?
                            </h2>

                            <div className="space-y-5 mb-6">
                                {[
                                    {
                                        title: "AI Ramah UMKM",
                                        desc: "Gampang dipakai, non-teknis, fokus ke masalah bisnis nyata yang kamu hadapi sehari-hari.",
                                    },
                                    {
                                        title: "AI Terintegrasi di UI/UX",
                                        desc: "AI terlihat langsung, interaktif, dan fokus ke pengalaman pengguna sepanjang perjalananmu.",
                                    },
                                    {
                                        title: "Hasil Praktis, Bukan Teori",
                                        desc: "Hasil AI bisa langsung diterapkan tanpa harus belajar konsep rumit atau skill teknis.",
                                    },
                                    {
                                        title: "Desain Modern & Responsif",
                                        desc: "Optimasi untuk mobile dan desktop, akses AI-mu kapan saja dan di mana saja.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4"
                                        data-animate="fade-up"
                                        data-animate-delay={900 + i * 200}
                                        data-animate-anchor="#different"
                                    >
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i className="fa-solid fa-check text-white"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-800"
                                data-animate="fade"
                                data-animate-delay="1700"
                                data-animate-anchor="#different"
                            >
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">Visi Kami:</span>{" "}
                                    Menjadi platform AI terpercaya yang membantu UMKM dan bisnis kreatif
                                    berkembang dengan efisien, kreatif, dan percaya diri lewat teknologi
                                    yang mudah diakses.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Founder Section */}
            <div className="bg-white py-24" id="founder">
                <div className="px-8 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="h-full order-1 lg:order-2" data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#founder">
                        <Image
                            src="/assets/images/founder.jpeg"
                            alt="Founder NexumAI"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-6" data-animate="fade-down" data-animate-delay="700" data-animate-anchor="#founder">
                            Founder NexumAI
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-animate="word-up">
                            Dibangun dengan Visi untuk UMKM Indonesia
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6" data-animate="fade-up" data-animate-delay="900" data-animate-anchor="#founder">
                            NexumAI lahir dari keresahan melihat banyak UMKM yang punya potensi besar,
                            tapi terkendala waktu, strategi, dan akses teknologi. Saya percaya AI
                            seharusnya tidak hanya untuk perusahaan besar, tapi juga bisa membantu
                            bisnis kecil tumbuh dengan percaya diri.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8" data-animate="fade-up" data-animate-delay="1100" data-animate-anchor="#founder">
                            Visi saya sederhana: membuat teknologi yang powerful terasa mudah,
                            ramah, dan benar-benar membantu pelaku usaha di Indonesia berkembang
                            secara nyata.
                        </p>

                        <div className="flex items-center gap-4">
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg" data-animate="fade-up" data-animate-delay="1300" data-animate-anchor="#founder">
                                    Adi Saputra
                                </h4>
                                <p className="text-gray-500 text-sm" data-animate="fade-up" data-animate-delay="1400" data-animate-anchor="#founder">
                                    Founder & Developer NexumAI
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
