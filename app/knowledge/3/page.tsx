import Navbar from "@/app/components/NavbarKnowledge";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function Page() {
    return (
        <>
            <Navbar />

            {/* Content */}
            <div className="bg-white py-16 md:pt-24 relative overflow-hidden">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">

                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                            <Link href="/umkm-insights" className="hover:text-blue-700 transition">
                                UMKM Insights
                            </Link>
                            <i className="fa-solid fa-chevron-right text-xs"></i>
                            <span className="text-gray-700">Studi Kasus UMKM Sukses</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Studi Kasus UMKM Sukses
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Lihat cerita sukses UMKM nyata dan pelajari strategi yang bikin bisnis mereka berkembang di
                                    pasar yang kompetitif.
                                </p>
                                <a href="/assets/images/knowledge-3.png" data-fancybox data-caption="Studi Kasus UMKM Sukses">
                                    <Image
                                        src="/assets/images/knowledge-3.png"
                                        alt="Studi Kasus UMKM Sukses"
                                        width={800}
                                        height={450}
                                        className="w-full rounded-lg"
                                    />
                                </a>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>

                            {/* Article Body */}
                            <div className="prose prose-lg max-w-none">

                                {/* Case Study 1 Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Studi Kasus: Kedai Kopi Lokal
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Sebuah kedai kopi kecil berhasil menaikkan penjualan 150% dalam setahun dengan fokus ke
                                        pengalaman pelanggan dan kampanye sosial media yang tepat sasaran. Mereka aktif terlibat
                                        dengan komunitas lewat event dan bikin promo personal untuk loyalitas pelanggan.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Cerita mereka nunjukin kalau ngerti pelanggan dan bikin koneksi yang asli bisa bikin
                                        bisnis tumbuh walau budget terbatas.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Fokus ke pengalaman pelanggan, aktif di sosial media, dan bikin program loyalitas
                                            untuk mempertahankan dan kembangkan pelanggan.
                                        </p>
                                    </div>
                                </div>

                                {/* Case Study 2 Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Studi Kasus: Bisnis Kerajinan Tangan
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        UMKM kerajinan tangan ini bisa ekspansi ke pasar internasional dengan memanfaatkan
                                        platform e-commerce dan storytelling. Dengan cerita di balik tiap produk, mereka bikin
                                        koneksi emosional dengan pembeli global, yang bikin penjualan naik dan pelanggan balik
                                        lagi.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Ini nunjukin betapa pentingnya **cerita brand** dan pilih channel jualan yang tepat.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Ceritain kisah brandmu, pilih platform yang cocok, dan tampilkan produk dengan
                                            kualitas tinggi supaya pelanggan tertarik dan loyal.
                                        </p>
                                    </div>
                                </div>

                                {/* Case Study 3 Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Studi Kasus: Layanan Delivery Makanan Online
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Startup layanan antar makanan ini berkembang cepat dengan optimasi operasional, fokus ke
                                        kecepatan antar, dan iklan digital yang tepat sasaran. Mereka pantau performa dengan
                                        teliti dan cepat adaptasi strategi, bikin pelanggan puas dan bisnis tumbuh pesat.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Cerita ini nunjukin pentingnya efisiensi operasional dan marketing yang gesit buat UMKM
                                        yang pengen berkembang cepat.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Optimalkan operasional, pantau metrik performa, dan cepat adaptasi strategi buat
                                            ningkatin layanan dan scaling bisnis.
                                        </p>
                                    </div>
                                </div>

                                {/* AI Recommendation Context */}
                                <div className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] p-8 rounded-2xl mt-12">
                                    <div className="flex items-start gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                Gimana NexumAI Pakai Cerita Ini
                                            </h3>
                                            <p className="text-blue-200/80 leading-relaxed">
                                                NexumAI menganalisis studi kasus UMKM sukses buat kasih rekomendasi yang bisa
                                                langsung diterapin. Dengan pelajari strategi, pendekatan, dan operasional yang
                                                berhasil di bisnis serupa, NexumAI bisa bantu pemilik UMKM pakai praktik terbaik
                                                buat pertumbuhan yang berkelanjutan.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">

                            {/* Quick Summary Card */}
                            <div className="bg-gray-50 rounded-2xl p-6 mb-6 sticky top-28">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Cepat</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Belajar dari cerita sukses UMKM nyata dan lihat apa
                                            yang berhasil</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Pahami strategi yang bikin penjualan naik dan pelanggan
                                            aktif</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Analisis perbaikan operasional dan pendekatan gesit
                                            yang bikin bisnis berkembang</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Identifikasi langkah praktis yang bisa diterapin di
                                            UMKM-mu sendiri</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Gunakan insight NexumAI buat ubah cerita sukses jadi
                                            rekomendasi nyata</p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Artikel Terkait</h3>
                                <div className="space-y-4">
                                    <Link href="/knowledge/6" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-6.png"
                                                    alt="Digital Marketing untuk UMKM"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Digital Marketing untuk UMKM
                                                </h4>
                                                <p className="text-xs text-gray-500">5 menit baca</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/knowledge/2" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-2.png"
                                                    alt="Strategi Marketing Praktis"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Strategi Marketing Praktis
                                                </h4>
                                                <p className="text-xs text-gray-500">7 menit baca</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/knowledge/4" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-4.png"
                                                    alt="Tips Mengatur Keuangan UMKM"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Tips Mengatur Keuangan UMKM
                                                </h4>
                                                <p className="text-xs text-gray-500">6 menit baca</p>
                                            </div>
                                        </div>
                                    </Link>
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