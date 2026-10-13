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
                            <span className="text-gray-700">Tips Mengatur Keuangan UMKM</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Tips Mengatur Keuangan UMKM
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Pelajari cara mengelola arus kas, membuat anggaran, dan investasi skala kecil agar UMKM
                                    tetap sehat secara finansial.
                                </p>
                                <a href="/assets/images/knowledge-4.png" data-fancybox
                                    data-caption="Tips Mengatur Keuangan UMKM">
                                    <Image
                                        src="/assets/images/knowledge-4.png"
                                        alt="Tips Mengatur Keuangan UMKM"
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

                                {/* Budgeting Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Membuat Anggaran
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Anggaran yang rapi bantu pemilik UMKM pakai sumber daya dengan efisien dan hindari
                                        pengeluaran berlebihan. Mulai dengan mencatat semua pemasukan dan pengeluaran untuk tahu
                                        kondisi keuanganmu.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Kategorikan pengeluaran jadi tetap, variabel, dan discretionary. Ini bikin kamu tahu
                                        mana yang prioritas dan bisa dikurangi kalau perlu.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Catat pemasukan dan pengeluaran secara rutin, buat anggaran bulanan, dan sesuaikan
                                            alokasi sesuai prioritas bisnis.
                                        </p>
                                    </div>
                                </div>

                                {/* Cash Flow Management Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Mengelola Arus Kas
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Mengatur arus kas memastikan UMKM bisa bayar kewajiban dan berinvestasi untuk
                                        pertumbuhan. Pantau pemasukan dan pengeluaran secara konsisten untuk hindari kekurangan.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Gunakan alat sederhana atau spreadsheet untuk prediksi kebutuhan kas, rencanakan variasi
                                        musiman, dan identifikasi saat perlu dana tambahan.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Pantau arus kas harian, prediksi kebutuhan kas ke depan, dan simpan cadangan untuk
                                            pengeluaran tak terduga.
                                        </p>
                                    </div>
                                </div>

                                {/* Cost Control Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Kontrol Biaya
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Mengontrol biaya bikin bisnis tetap untung. Tinjau pengeluaran secara rutin, negosiasi
                                        dengan supplier, dan cari cara kurangi pemborosan tanpa mengorbankan kualitas.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Gunakan alat pelacakan biaya sederhana dan tetapkan batas pengeluaran tiap divisi atau
                                        proyek supaya setiap rupiah berkontribusi ke pertumbuhan.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Pantau pengeluaran, optimalkan kontrak supplier, dan terapkan langkah penghematan
                                            untuk maksimalkan margin keuntungan.
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
                                                NexumAI pakai prinsip pengelolaan keuangan ini buat kasih rekomendasi yang bisa
                                                langsung diterapin. Dengan menganalisis arus kas, cara buat anggaran, dan
                                                struktur biaya, NexumAI bisa sarankan cara optimalkan pengeluaran, jaga
                                                likuiditas, dan pertahankan keuntungan yang sehat.
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
                                        <p className="text-sm text-gray-700">Rencanain dan atur anggaran UMKM supaya pakai sumber
                                            daya dengan efektif</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Pantau arus kas secara rutin untuk hindari kekurangan
                                            dan jaga likuiditas</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Kontrol biaya dengan tinjau pengeluaran, optimalkan
                                            supplier, dan kurangi pemborosan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Gunakan alat sederhana buat lacak pemasukan,
                                            pengeluaran, dan cadangan kas</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Manfaatin insight NexumAI buat optimalkan keputusan
                                            keuangan dan tingkatkan profit</p>
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
                                    <Link href="/knowledge/5" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-5.png"
                                                    alt="Strategi Engagement Pelanggan"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Strategi Engagement Pelanggan
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