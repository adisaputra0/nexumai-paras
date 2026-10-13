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
                            <span className="text-gray-700">Strategi Engagement Pelanggan</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Strategi Engagement Pelanggan
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Temukan cara untuk berinteraksi dengan pelanggan secara efektif, bangun loyalitas, dan
                                    tingkatkan reputasi UMKM-mu secara online.
                                </p>
                                <a href="/assets/images/knowledge-5.png" data-fancybox
                                    data-caption="Strategi Engagement Pelanggan">
                                    <Image
                                        src="/assets/images/knowledge-5.png"
                                        alt="Strategi Engagement Pelanggan"
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

                                {/* Understand Customer Needs Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Pahami Kebutuhan Pelanggan
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Libatkan pelanggan dengan memahami kebutuhan, preferensi, dan tantangan mereka.
                                        Sesuaikan produk atau layananmu untuk menyelesaikan masalah mereka secara efektif.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Gunakan survei, formulir feedback, dan social listening untuk kumpulkan insight. Semakin
                                        kamu paham audiens, strategi engagement-mu akan lebih relevan dan berdampak.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Kumpulkan feedback, analisis perilaku pelanggan, dan sesuaikan produk atau layanan
                                            agar sesuai ekspektasi.
                                        </p>
                                    </div>
                                </div>

                                {/* Personalized Communication Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Komunikasi Personal
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Bangun loyalitas dan kepercayaan lewat pesan yang personal. Segmentasikan pelangganmu
                                        dan kirim konten, penawaran, atau update yang sesuai minat mereka.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Personalization bikin pelanggan merasa dihargai, meningkatkan interaksi dan konversi.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Segmentasikan daftar pelanggan, kirim pesan yang tepat sasaran, dan berikan
                                            penawaran atau rekomendasi yang personal.
                                        </p>
                                    </div>
                                </div>

                                {/* Engagement & Retention Programs Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Program Engagement & Retensi
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Buat program yang memberi reward untuk pelanggan setia dan dorong pembelian ulang.
                                        Contohnya poin loyalitas, insentif referral, dan acara komunitas.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Pelanggan yang terlibat lebih mungkin merekomendasikan brand-mu, memberi feedback, dan
                                        tetap terhubung dalam jangka panjang.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Terapkan program loyalitas, sistem referral, dan kampanye interaktif untuk perkuat
                                            hubungan dengan pelanggan.
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
                                                NexumAI pakai strategi engagement pelanggan ini buat kasih rekomendasi khusus
                                                untuk pemilik UMKM. Dengan menganalisis perilaku, preferensi, dan interaksi
                                                pelanggan, NexumAI bisa sarankan cara tingkatkan komunikasi, loyalitas, dan
                                                engagement jangka panjang.
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
                                        <p className="text-sm text-gray-700">Pahami kebutuhan dan preferensi pelanggan untuk
                                            sesuaikan produk atau layanan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Gunakan komunikasi personal untuk bangun kepercayaan
                                            dan engagement</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Terapkan program loyalitas dan insentif referral untuk
                                            pertahankan pelanggan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Aktif berinteraksi di media sosial dan tanggapi
                                            feedback dengan cepat</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Manfaatkan insight NexumAI untuk optimalkan strategi
                                            engagement pelanggan</p>
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