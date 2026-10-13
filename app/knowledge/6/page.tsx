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
                            <span className="text-gray-700">Digital Marketing untuk UMKM</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-2">

                            {/* Article Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    Digital Marketing untuk UMKM
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Tips memanfaatkan media sosial, email marketing, dan iklan online untuk mengembangkan
                                    UMKM-mu di era digital.
                                </p>
                                <a href="/assets/images/knowledge-6.png" data-fancybox
                                    data-caption="Digital Marketing untuk UMKM">
                                    <Image
                                        src="/assets/images/knowledge-6.png"
                                        alt="Digital Marketing untuk UMKM"
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

                                {/* Social Media Marketing Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Social Media Marketing
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Media sosial adalah alat powerful buat UMKM untuk menjangkau lebih banyak orang. Post
                                        secara rutin di platform tempat pelangganmu aktif, bagikan konten bermanfaat, dan
                                        interaksi dengan followers untuk membangun kepercayaan.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Gunakan visual, video, dan stories biar brand-mu gampang diingat. Pantau engagement
                                        untuk tahu konten apa yang disukai, lalu perbaiki strategi secara berkala.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Buat kalender konten, posting konten menarik, dan interaksi rutin dengan audiens di
                                            media sosial.
                                        </p>
                                    </div>
                                </div>

                                {/* Email Marketing Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        Email Marketing
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Email marketing memungkinkan komunikasi langsung dengan pelanggan. Kirim newsletter,
                                        update, dan penawaran personal supaya audiens tetap engaged dan informed.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Segmentasikan daftar email berdasarkan minat dan perilaku beli pelanggan supaya lebih
                                        relevan dan tingkat konversi meningkat.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Bangun mailing list, desain template email menarik, dan analisis open/click rate
                                            untuk tingkatkan kampanye.
                                        </p>
                                    </div>
                                </div>

                                {/* SEO & Content Strategy Section */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        SEO & Strategi Konten
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Optimalkan website dan konten supaya mudah ditemukan di mesin pencari. Fokus pada kata
                                        kunci relevan, buat konten berkualitas, dan jaga website tetap user-friendly.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Blog, tutorial video, dan panduan informatif bisa bikin UMKM-mu terlihat ahli di
                                        bidangnya sekaligus meningkatkan engagement.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong className="text-blue-900">Langkah Penting:</strong>
                                            Lakukan riset kata kunci, buat konten bernilai, dan optimalkan website untuk SEO
                                            serta mobile.
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
                                                NexumAI pakai strategi digital marketing ini buat kasih rekomendasi khusus buat
                                                pemilik UMKM. Dengan menganalisis online presence, konten, dan engagement,
                                                NexumAI bisa sarankan channel, ide konten, dan kampanye paling efektif buat
                                                tingkatkan visibilitas, tarik pelanggan, dan jualan lebih laris.
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
                                        <p className="text-sm text-gray-700">Rencanakan dan jalankan campaign media sosial untuk
                                            engage audiens</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Gunakan email marketing untuk komunikasi langsung
                                            dengan pelanggan</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Optimalkan konten dan SEO website untuk tarik traffic
                                            organik</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Buat konten menarik seperti blog, video, dan tutorial
                                            untuk bangun authority brand</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check-circle text-blue-700 mt-1"></i>
                                        <p className="text-sm text-gray-700">Manfaatkan insight NexumAI untuk tailor strategi
                                            digital marketing dan tingkatkan penjualan</p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Artikel Terkait</h3>
                                <div className="space-y-4">
                                    <Link href="/knowledge/1" className="block group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src="/assets/images/knowledge-1.png"
                                                    alt="Tips Pengembangan UMKM"
                                                    width={64}
                                                    height={64}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4
                                                    className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition mb-1">
                                                    Tips Pengembangan UMKM
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