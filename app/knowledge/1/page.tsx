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
                            <span className="text-gray-700">Tips Kembangin Bisnis UMKM</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Tips Kembangin Bisnis UMKM
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Cari tau langkah praktis buat naikin bisnis UMKM kamu, dari bikin strategi sampai action
                                    yang nyata dan ngasih hasil.
                                </p>
                                <a href="/assets/images/knowledge-1.png" data-fancybox
                                    data-caption="Tips Kembangin Bisnis UMKM">
                                    <Image
                                        src="/assets/images/knowledge-1.png"
                                        alt="Tips Kembangin Bisnis UMKM"
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

                                {/* Planning & Strategy Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Bikin Rencana & Strategi
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Langkah pertama buat ngembangin UMKM kamu adalah bikin rencana yang mantap. Kenali dulu
                                        target market kamu dan pahami apa yang mereka butuhin. Dengan gitu, produk atau
                                        layananmu bisa lebih nyambung sama mereka.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Tentuin juga tujuan yang jelas dan realistis. Apa sih sukses buat bisnis kamu, baik
                                        jangka pendek maupun panjang? Pecah tujuan besar jadi langkah kecil biar gampang
                                        dilacak.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Tentuin keunggulanmu, pelajari pesaing, dan bikin roadmap dengan milestone jelas.
                                            Jangan lupa cek dan sesuaikan strategi supaya tetap relevan sama pasar.
                                        </p>
                                    </div>
                                </div>

                                {/* Marketing & Promotion Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Marketing & Promosi
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Marketing nggak cuma soal iklan, tapi bikin nilai dan bangun kepercayaan sama audiens.
                                        Pilih channel yang pas, bisa media sosial, email, atau event offline.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Konsistensi dan jelasnya pesan itu penting. Sampaikan keunggulanmu dengan jelas dan
                                        pastiin setiap interaksi bikin brand kamu makin dipercaya. Pakai storytelling biar lebih
                                        nyambung sama pelanggan.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Pilih channel marketing yang paling efektif, bikin campaign menarik, pantau
                                            performa, dan ubah strategi sesuai data biar jangkauan dan konversi maksimal.
                                        </p>
                                    </div>
                                </div>

                                {/* Operational Efficiency Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Efisiensi Operasional
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Operasi yang efisien bikin bisnis kamu tetap berkualitas tanpa boros biaya. Cek alur
                                        kerja, supply chain, dan pengelolaan sumber daya buat tahu titik lemah dan peluang
                                        perbaikan.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Pakai tools otomatis, sistem manajemen stok, dan SOP yang jelas biar kesalahan minimal
                                        dan hemat waktu. Operasi yang rapi bikin kamu bisa fokus ke hal lain buat kembangin
                                        bisnis.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Pahami alur proses, pakai tools buat otomatisasi tugas berulang, latih tim dengan
                                            praktik terbaik, dan cek rutin operasi buat terus meningkatin efisiensi.
                                        </p>
                                    </div>
                                </div>

                                {/* AI Recommendation Context */}
                                <div className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] p-8 rounded-2xl mt-12">
                                    <div className="flex items-start gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                Gimana NexumAI Pakai Ilmu Ini
                                            </h3>
                                            <p className="text-blue-200/80 leading-relaxed">
                                                NexumAI pakai prinsip pengembangan bisnis ini buat kasih saran yang praktis dan
                                                pas buat pemilik UMKM. Dengan menganalisis kondisi bisnis kamu, NexumAI bisa
                                                kasih strategi buat ningkatin efisiensi, tarik lebih banyak pelanggan, dan bikin
                                                pertumbuhan yang stabil.
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
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Ringkasannya</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Bikin rencana jelas dengan tujuan dan pemahaman pasar
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Tentukan keunggulan unikmu dan lacak milestone</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Gunakan strategi marketing efektif dan pesan yang jelas
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Rapiin operasi dan pakai tools buat efisiensi</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Manfaatin insight NexumAI buat saran pertumbuhan yang
                                            nyata</p>
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
                                    <Link href="/knowledge/3" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-3.png"
                                                    alt="Studi Kasus UMKM Sukses"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Studi Kasus UMKM Sukses
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