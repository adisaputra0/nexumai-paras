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
                                Cara Kerja dengan{" "}
                                <span className="text-blue-400">NexumAI</span>
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">Naik Level Dalam</h1>
                            <h1 data-animate="word-up-reverse">Empat Langkah</h1>
                        </div>

                        <p
                            className="text-blue-200/70 text-lg max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-delay="900"
                            data-animate-anchor="#hero"
                        >
                            Mulai dari menanyakan AI tentang bisnis Anda, membuat deskripsi produk,
                            mendapatkan rekomendasi pintar, hingga belajar melalui UMKM Knowledge
                            Base, NexumAI membuat setiap langkah perjalanan bisnis Anda menjadi
                            mudah.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white py-16 relative overflow-hidden">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* STEP 01 */}
                    <div
                        id="step-1"
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
                    >
                        <div>
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-4"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#step-1"
                            >
                                Langkah 01
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                                data-animate="word-up"
                            >
                                Tanyakan AI Tentang Bisnis Anda
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#step-1"
                            >
                                Mulailah dengan menanyakan apa saja tentang bisnis Anda ke AI.
                                Apakah Anda menjalankan kedai kopi, toko online, atau UMKM kreatif,
                                NexumAI memahami kebutuhan Anda dengan bahasa sederhana dan konteks
                                bisnis praktis yang disesuaikan untuk pemilik UMKM.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#step-1"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-star text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">
                                        Pemahaman Konteks Pintar:
                                    </span>{" "}
                                    AI yang benar-benar memahami tantangan UMKM dan berbicara dengan
                                    bahasa Anda.
                                </p>
                            </div>
                        </div>

                        <div
                            className="h-full"
                            data-animate="fade-up"
                            data-animate-delay="1300"
                            data-animate-anchor="#step-1"
                        >
                            <Image
                                src="/assets/images/hiw-1.png"
                                alt="Tanyakan AI Tentang Bisnis Anda"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* STEP 02 */}
                    <div
                        id="step-2"
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
                    >
                        <div
                            className="order-2 lg:order-1 h-full"
                            data-animate="fade-up"
                            data-animate-delay="300"
                            data-animate-anchor="#step-2"
                        >
                            <Image
                                src="/assets/images/hiw-2.png"
                                alt="Buat Deskripsi Produk"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-4"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#step-2"
                            >
                                Langkah 02
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                                data-animate="word-up"
                            >
                                Buat Deskripsi Produk & Promosi
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#step-2"
                            >
                                Masukkan nama produk, jenis bisnis, dan target pasar Anda. NexumAI
                                secara instan membuat deskripsi produk yang menarik, caption
                                promosi, dan headline marketing yang membantu produk Anda menonjol
                                dan lebih mudah terjual.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#step-2"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-bolt text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">
                                        Pembuatan Konten Instan:
                                    </span>{" "}
                                    Hasilkan konten marketing profesional dalam hitungan detik, bukan
                                    jam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 03 */}
                    <div
                        id="step-3"
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
                    >
                        <div>
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-4"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#step-3"
                            >
                                Langkah 03
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                                data-animate="word-up"
                            >
                                Dapatkan Rekomendasi Bisnis Cerdas
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#step-3"
                            >
                                Terima rekomendasi cerdas berdasarkan input bisnis Anda. NexumAI
                                menyarankan ide produk baru, strategi promosi, dan peningkatan
                                branding yang disajikan dalam kartu yang jelas serta highlight yang
                                mudah dipahami.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-700"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#step-3"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-arrow-trend-up text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">
                                        Insight Berbasis Data:
                                    </span>{" "}
                                    Dapatkan rekomendasi yang bisa langsung diterapkan sesuai tujuan
                                    bisnis Anda.
                                </p>
                            </div>
                        </div>

                        <div
                            data-animate="fade-up"
                            data-animate-delay="1300"
                            data-animate-anchor="#step-3"
                        >
                            <Image
                                src="/assets/images/hiw-3.png"
                                alt="Dapatkan Rekomendasi Cerdas"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* STEP 04 */}
                    <div
                        id="step-4"
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    >
                        <div
                            className="order-2 lg:order-1 h-full"
                            data-animate="fade-up"
                            data-animate-delay="300"
                            data-animate-anchor="#step-4"
                        >
                            <Image
                                src="/assets/images/hiw-4.png"
                                alt="UMKM Knowledge Base"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div
                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-4"
                                data-animate="fade-down"
                                data-animate-delay="700"
                                data-animate-anchor="#step-4"
                            >
                                Langkah 04
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
                                data-animate="word-up"
                            >
                                Belajar & Berkembang dengan Gudang Ilmu UMKM
                            </h2>

                            <p
                                className="text-gray-600 text-lg leading-relaxed mb-6"
                                data-animate="fade-up"
                                data-animate-delay="900"
                                data-animate-anchor="#step-4"
                            >
                                Jelajahi pengetahuan bisnis praktis yang dirancang untuk UMKM.
                                Mulai dari tips pemasaran hingga kisah sukses nyata, knowledge base
                                ini memperkuat respons AI dan membantu Anda terus belajar,
                                meningkatkan, dan mengembangkan bisnis dengan percaya diri.
                            </p>

                            <div
                                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-800"
                                data-animate="fade-up"
                                data-animate-delay="1100"
                                data-animate-anchor="#step-4"
                            >
                                <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-book-open text-white text-sm"></i>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-bold text-gray-900">
                                        Belajar Terus-Menerus:
                                    </span>{" "}
                                    Akses sumber daya terkurasi dan kisah sukses dari pemilik UMKM
                                    lain.
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
