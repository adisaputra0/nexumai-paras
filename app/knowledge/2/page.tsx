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
                            <span className="text-gray-700">Strategi Marketing Praktis</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Strategi Marketing Praktis
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Temukan cara marketing yang simpel tapi efektif buat tarik pelanggan dan naikin penjualan
                                    UMKM kamu.
                                </p>
                                <a href="/assets/images/knowledge-2.png" data-fancybox
                                    data-caption="Strategi Marketing Praktis">
                                    <Image
                                        src="/assets/images/knowledge-2.png"
                                        alt="Strategi Marketing Praktis"
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

                                {/* Understand Your Audience Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Kenali Pelangganmu
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Marketing yang sukses dimulai dari tahu siapa pelangganmu. Pelajari kebutuhan,
                                        preferensi, dan kebiasaan belanja mereka biar kampanye yang kamu buat nyambung banget.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Bisa lewat survei, dengarkan obrolan di sosial media, atau analisis pesaing. Semakin
                                        paham audiensmu, makin besar peluang marketingmu berhasil.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Segmentasikan audiens, temukan masalah utama mereka, dan buat pesan yang tepat buat
                                            kebutuhan mereka.
                                        </p>
                                    </div>
                                </div>

                                {/* Cost-Effective Marketing Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Marketing Hemat & Efektif
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Kamu nggak perlu budget gede buat marketing UMKM. Fokus ke channel yang murah tapi
                                        efektif, kayak sosial media, email, atau kerjasama komunitas.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Posting rutin, konten bermanfaat, dan storytelling yang menarik bisa lebih efektif
                                        daripada iklan mahal. Tunjukkan keahlian dan perhatianmu supaya audiens percaya.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Pilih channel marketing yang terjangkau, bikin kalender konten, dan pantau interaksi
                                            buat sesuaikan kampanye biar hasil maksimal.
                                        </p>
                                    </div>
                                </div>

                                {/* Engagement & Retention Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Interaksi & Pelihara Pelanggan
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Tarik pelanggan itu langkah awal, tapi bikin mereka betah bikin bisnis kamu tumbuh
                                        jangka panjang. Layani dengan baik, aktif berinteraksi, dan cepat tanggapi feedback.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Program loyalitas, penawaran personal, dan bangun komunitas bisa bikin hubungan tetap
                                        solid dan pelanggan balik lagi. Pelanggan senang bisa jadi marketing terbaik lewat
                                        rekomendasi.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Aktif di sosial media, cepat tanggapi pertanyaan, dan buat program loyalitas atau
                                            referral biar pelanggan tetap setia.
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
                                                NexumAI pakai strategi marketing praktis ini buat kasih rekomendasi yang pas
                                                buat pemilik UMKM. Dengan analisis kondisi bisnis kamu, NexumAI bisa kasih saran
                                                channel, konten, dan cara interaksi yang paling efektif buat naikin visibilitas,
                                                tarik pelanggan, dan tingkatkan penjualan.
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
                                        <p className="text-sm text-gray-700">Kenali audiensmu dan sesuaikan pesan buat mereka</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Pakai channel marketing hemat biaya kayak sosial media
                                            & email</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Konsisten dan jelas dalam komunikasi biar bangun
                                            kepercayaan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Aktif berinteraksi, tanggapi feedback, dan bangun
                                            loyalitas</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Manfaatin insight NexumAI buat rekomendasi marketing
                                            yang nyata dan pas</p>
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