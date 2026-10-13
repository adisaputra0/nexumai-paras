'use client';
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import AuthGuard from "@/app/components/AuthGuard";
import { useEffect, useState } from "react";

export default function Page() {
    const [profileData, setProfileData] = useState({
        ownerName: '',
        businessName: '',
        businessCategory: '',
        businessLocation: '',
        website: '',
        mainProduct: '',
        productCount: '',
        avgPrice: '',
        profitPerProduct: '',
        monthlyRevenue: '',
        operatingHours: '',
        targetAge: '',
        targetGender: '',
        targetSegment: '',
        buyerPreference: '',
        languageStyle: '',
        promoFocus: [],
        aiPriority: '',
    });

    const fetchBusinessProfile = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/business-profile/me`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch profile");
            }

            const data = await response.json();

            setProfileData({
                ownerName: data.nama_pemilik || '',
                businessName: data.nama_usaha || '',
                businessCategory: data.kategori_usaha || '',
                businessLocation: data.lokasi_usaha || '',
                website: data.website_marketplace || '',
                mainProduct: data.produk_utama || '',
                productCount: data.jumlah_varian_produk?.toString() || '',
                avgPrice: data.harga_rata_rata?.toString() || '',
                profitPerProduct: data.keuntungan_per_produk?.toString() || '',
                monthlyRevenue: data.omset_bulanan?.toString() || '',
                operatingHours: data.jam_operasional || '',
                targetAge: data.target_usia || '',
                targetGender: data.target_gender || '',
                targetSegment: data.segmentasi_pasar || '',
                buyerPreference: data.preferensi_pembeli || '',
                languageStyle: data.gaya_bahasa_ai || '',
                promoFocus: data.fokus_promosi || [],
                aiPriority: data.prioritas_ai || '',
            });

        } catch (error) {
            console.error("Error fetching business profile:", error);
        }
    };

    useEffect(() => {
        fetchBusinessProfile();
    }, []);

    return (
        <AuthGuard>
            <div className="relative flex overflow-hidden max-w-[1440px] mx-auto">

                {/* Sidebar */}
                <Sidebar />

                {/* Empty */}
                <aside className="w-80 hidden md:flex">
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden pt-16 md:pt-0">
                    {/* Header */}
                    <header className="px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-semibold text-gray-900">
                                    {profileData.ownerName
                                        ? `Selamat datang kembali, ${profileData.ownerName}!`
                                        : "Selamat datang kembali!"}
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    {profileData.businessName
                                        ? `Ringkasan performa ${profileData.businessName}`
                                        : "Lengkapi profil bisnismu untuk insight yang lebih akurat"}
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="p-8 pt-0">
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                {
                                    label: "Jumlah Varian Produk",
                                    value: profileData.productCount || "-"
                                },
                                {
                                    label: "Harga Rata-rata",
                                    value: profileData.avgPrice
                                        ? `Rp ${Number(profileData.avgPrice).toLocaleString()}`
                                        : "-"
                                },
                                {
                                    label: "Keuntungan / Produk",
                                    value: profileData.profitPerProduct
                                        ? `Rp ${Number(profileData.profitPerProduct).toLocaleString()}`
                                        : "-"
                                },
                                {
                                    label: "Omset Bulanan",
                                    value: profileData.monthlyRevenue
                                        ? `Rp ${Number(profileData.monthlyRevenue).toLocaleString()}`
                                        : "-"
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-all"
                                >
                                    <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                                    <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Onboarding Banner */}
                        <div className="mb-8">
                            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 shadow-lg overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-32 -mt-32" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/30 rounded-full -ml-24 -mb-24" />

                                <div className="relative flex flex-col md:flex-row justify-between gap-4 items-center">
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-2">
                                            Aktifkan Mode Pintar NexumAI!
                                        </h3>
                                        <p className="text-blue-100 text-sm max-w-2xl mb-1">
                                            Lengkapi profil bisnismu supaya rekomendasi AI lebih personal dan tepat sasaran.
                                        </p>
                                        <p className="text-blue-200 text-xs flex items-center">
                                            <i className="fa-regular fa-clock mr-1" />
                                            Cuma butuh ±5 menit
                                        </p>
                                    </div>

                                    <Link
                                        href="/profile"
                                        className="h-max bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 shadow-md"
                                    >
                                        Lengkapi Sekarang
                                        <i className="fa-solid fa-arrow-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Aksi Cepat AI
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Tanya AI Bisnismu",
                                        desc: "Dapatkan saran praktis untuk masalah bisnismu",
                                        href: "/ai-business-assistant",
                                        action: "Mulai Chat",
                                    },
                                    {
                                        title: "Bikin Deskripsi Produk",
                                        desc: "Caption dan judul siap pakai",
                                        href: "/product-description-generator",
                                        action: "Generate",
                                    },
                                    {
                                        title: "Rekomendasi Pintar",
                                        desc: "Insight branding & promosi",
                                        href: "/smart-recommendations",
                                        action: "Lihat Rekomendasi",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex flex-col justify-between bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6"
                                    >
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-blue-100 text-sm mb-4">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <Link
                                            href={item.href}
                                            className="text-center bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50"
                                        >
                                            {item.action}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* UMKM Insight */}
                        <div>
                            <div className="flex justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Insight UMKM Terbaru
                                </h2>
                                <Link
                                    href="/umkm-insights"
                                    className="text-sm font-medium text-blue-700 hover:text-blue-900"
                                >
                                    Lihat Semua <i className="fa-solid fa-arrow-right ml-1" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Link
                                        key={i}
                                        href={`/knowledge-${i}`}
                                        className="group bg-white rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden"
                                    >
                                        <div className="relative h-48">
                                            <Image
                                                src={`/assets/images/knowledge-${i}.png`}
                                                alt="Insight UMKM"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-3">
                                                Insight UMKM #{i}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                Insight dan strategi praktis untuk pengembangan UMKM.
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthGuard>
    );
}
