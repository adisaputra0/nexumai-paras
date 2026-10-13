'use client';
import Sidebar from "@/app/components/Sidebar";
import { useEffect, useState } from "react";
import AuthGuard from "@/app/components/AuthGuard";

interface ProfileData {
    // Informasi Dasar
    ownerName: string;
    businessName: string;
    businessCategory: string;
    businessLocation: string;
    website: string;

    // Informasi Produk / Operasional
    mainProduct: string;
    productCount: string;
    avgPrice: string;
    profitPerProduct: string;
    monthlyRevenue: string;
    operatingHours: string;

    // Target Pasar
    targetAge: string;
    targetGender: string;
    targetSegment: string;
    buyerPreference: string;

    // Preferensi Konten AI
    languageStyle: string;
    promoFocus: string[];
    aiPriority: string;
}
export default function Page() {
    const [profileData, setProfileData] = useState<ProfileData>({
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

    const [smartModeProgress, setSmartModeProgress] = useState(0);

    // Calculate Smart Mode progress
    useEffect(() => {
        const calculateProgress = () => {
            const fields = [
                profileData.businessName,
                profileData.businessCategory,
                profileData.businessLocation,
                profileData.mainProduct,
                profileData.productCount,
                profileData.avgPrice,
                profileData.targetAge,
                profileData.targetGender,
                profileData.targetSegment,
                profileData.languageStyle,
                profileData.aiPriority,
                profileData.promoFocus.length > 0 ? 'filled' : '',
            ];

            const filledFields = fields.filter(field => field && field.trim() !== '').length;
            const totalFields = fields.length;
            const percentage = Math.round((filledFields / totalFields) * 100);

            setSmartModeProgress(percentage);
        };

        calculateProgress();
    }, [profileData]);

    // Handle text input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setProfileData(prev => ({ ...prev, [id]: value }));
    };

    // Format price with thousand separator
    const formatPrice = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target;
        const formatted = formatPrice(e.target.value);
        setProfileData(prev => ({ ...prev, [id]: formatted }));
    };

    // Handle checkbox changes for promo focus
    const handlePromoFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setProfileData(prev => ({
            ...prev,
            promoFocus: checked
                ? [...prev.promoFocus, value]
                : prev.promoFocus.filter(item => item !== value),
        }));
    };

    // Validate required fields
    const validateProfile = (): boolean => {
        if (!profileData.businessName.trim()) {
            alert('Nama Usaha wajib diisi');
            return false;
        }
        if (!profileData.mainProduct.trim()) {
            alert('Produk Utama wajib diisi');
            return false;
        }
        return true;
    };

    //Fetch Business Profile
    const fetchBusinessProfile = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/business-profile/me`, {
                method: "GET",
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch profile");
            }

            const data = await response.json();

            const formatToID = (num: number | null) => {
                if (!num) return '';
                return Number(num).toLocaleString('id-ID');
            };

            // Mapping backend field → frontend state
            setProfileData({
                ownerName: data.nama_pemilik || '',
                businessName: data.nama_usaha || '',
                businessCategory: data.kategori_usaha || '',
                businessLocation: data.lokasi_usaha || '',
                website: data.website_marketplace || '',
                mainProduct: data.produk_utama || '',
                productCount: formatToID(data.jumlah_varian_produk),
                avgPrice: formatToID(data.harga_rata_rata),
                profitPerProduct: formatToID(data.keuntungan_per_produk),
                monthlyRevenue: formatToID(data.omset_bulanan),
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

    const parseNumber = (value: string): number | null => {
        if (!value) return null;
        const clean = value.replace(/[^\d]/g, '');
        return clean ? parseInt(clean) : null;
    };


    // Save profile
    const saveProfile = async () => {
        if (!validateProfile()) return;

        try {
            const payload = {
                nama_pemilik: profileData.ownerName || null,
                nama_usaha: profileData.businessName || null,
                kategori_usaha: profileData.businessCategory || null,
                lokasi_usaha: profileData.businessLocation || null,
                website_marketplace: profileData.website || null,

                produk_utama: profileData.mainProduct || null,
                jumlah_varian_produk: parseNumber(profileData.productCount),
                harga_rata_rata: parseNumber(profileData.avgPrice),
                keuntungan_per_produk: parseNumber(profileData.profitPerProduct),
                omset_bulanan: parseNumber(profileData.monthlyRevenue),
                jam_operasional: profileData.operatingHours || null,

                target_usia: profileData.targetAge || null,
                target_gender: profileData.targetGender || null,
                segmentasi_pasar: profileData.targetSegment || null,
                preferensi_pembeli: profileData.buyerPreference || null,

                gaya_bahasa_ai: profileData.languageStyle || null,
                fokus_promosi: profileData.promoFocus || [],
                prioritas_ai: profileData.aiPriority || null,
            };

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/business-profile/me`,
                {
                    method: "PUT",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

            const updatedData = await response.json();

            alert("Profil berhasil disimpan!");
            console.log("Updated profile:", updatedData);

        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Terjadi kesalahan saat menyimpan profil.");
        }
    };

    return (
        <AuthGuard>
            <div className="relative flex overflow-hidden max-w-[1440px] mx-auto">

                {/* Sidebar */}
                <Sidebar />

                {/* Empty */}
                <aside className="w-80 hidden md:flex">
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden pt-16 md:pt-0 text-gray-800">
                    <div className="flex-1 overflow-y-auto p-8 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="max-w-4xl mx-auto">

                            {/* Header Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profil Usaha</h2>
                                <p className="text-gray-500">
                                    Lengkapi profil usahamu untuk rekomendasi AI yang lebih personal dan tepat sasaran
                                </p>
                            </div>

                            {/* Smart Mode Status */}
                            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 shadow-lg mb-8 relative overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/30 rounded-full -ml-24 -mb-24"></div>

                                <div className="relative">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <i className="fa-solid fa-brain text-white text-xl"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg">Smart Mode</h3>
                                                <p className="text-blue-100 text-sm">
                                                    Profil terisi {smartModeProgress}%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-semibold text-2xl">{smartModeProgress}%</p>
                                            <p className="text-blue-100 text-xs">Lengkapi profil</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-blue-900/50 rounded-full h-2 mt-4">
                                        <div
                                            className="bg-white h-2 rounded-full transition-all duration-500 ease-in-out"
                                            style={{ width: `${smartModeProgress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-blue-100 text-xs mt-2">
                                        <i className="fa-solid fa-lightbulb mr-1"></i>
                                        Lengkapi informasi produk dan target pasar untuk aktivasi penuh
                                    </p>
                                </div>
                            </div>

                            {/* Form Sections */}
                            <div className="space-y-6">

                                {/* 1. Informasi Dasar */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-user text-blue-600"></i>
                                        Informasi Dasar
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Nama Pemilik */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nama Pemilik / User
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ownerName"
                                                    value={profileData.ownerName}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Adi Saputra"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Nama Usaha */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nama Usaha <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="businessName"
                                                    value={profileData.businessName}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Warung Kopi"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Jenis Usaha */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Jenis Usaha / Kategori
                                                </label>
                                                <select
                                                    id="businessCategory"
                                                    value={profileData.businessCategory}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                >
                                                    <option value="">Pilih kategori...</option>
                                                    <option value="makanan-minuman">Makanan & Minuman</option>
                                                    <option value="fashion">Fashion</option>
                                                    <option value="kreatif">Kreatif</option>
                                                    <option value="jasa">Jasa</option>
                                                    <option value="teknologi">Teknologi</option>
                                                    <option value="kesehatan">Kesehatan & Kecantikan</option>
                                                    <option value="lainnya">Lainnya</option>
                                                </select>
                                            </div>

                                            {/* Lokasi Usaha */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Lokasi Usaha
                                                </label>
                                                <input
                                                    type="text"
                                                    id="businessLocation"
                                                    value={profileData.businessLocation}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Bali"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Website / Marketplace */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Website / Marketplace <span className="text-gray-400 text-xs">(Opsional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="website"
                                                value={profileData.website}
                                                onChange={handleInputChange}
                                                placeholder="Contoh: tokopedia.com/kopisusuaren"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Informasi Produk / Operasional */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-box text-blue-600"></i>
                                        Informasi Produk / Operasional
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Produk Utama */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Produk Utama <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="mainProduct"
                                                    value={profileData.mainProduct}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Kopi Susu Gula Aren"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Jumlah Produk */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Jumlah Produk / Varian
                                                </label>
                                                <input
                                                    type="number"
                                                    id="productCount"
                                                    value={profileData.productCount}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: 3"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Harga Rata-rata */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Harga Rata-rata <span className="text-gray-400 text-xs">(Opsional)</span>
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                        Rp
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="avgPrice"
                                                        value={profileData.avgPrice}
                                                        onChange={handlePriceChange}
                                                        placeholder="18.000"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>

                                            {/* Keuntungan per Produk */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Keuntungan per Produk <span className="text-gray-400 text-xs">(Opsional)</span>
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                        Rp
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="profitPerProduct"
                                                        value={profileData.profitPerProduct}
                                                        onChange={handlePriceChange}
                                                        placeholder="5.000"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Omset Bulanan */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Omset Bulanan <span className="text-gray-400 text-xs">(Opsional, untuk AI analisis)</span>
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                        Rp
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="monthlyRevenue"
                                                        value={profileData.monthlyRevenue}
                                                        onChange={handlePriceChange}
                                                        placeholder="10.000.000"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>

                                            {/* Jam Operasional */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Jam Operasional <span className="text-gray-400 text-xs">(Opsional)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="operatingHours"
                                                    value={profileData.operatingHours}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: 08.00 - 20.00"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Target Pasar */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-users text-blue-600"></i>
                                        Target Pasar
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Target Usia */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Target Usia
                                                </label>
                                                <input
                                                    type="text"
                                                    id="targetAge"
                                                    value={profileData.targetAge}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: 18-30"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Target Gender */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Target Gender
                                                </label>
                                                <select
                                                    id="targetGender"
                                                    value={profileData.targetGender}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                >
                                                    <option value="">Pilih...</option>
                                                    <option value="Semua">Semua</option>
                                                    <option value="Pria">Pria</option>
                                                    <option value="Wanita">Wanita</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Target Segmentasi */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Target Segmentasi <span className="text-gray-400 text-xs">(Opsional, lebih spesifik)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="targetSegment"
                                                value={profileData.targetSegment}
                                                onChange={handleInputChange}
                                                placeholder="Contoh: Mahasiswa & pekerja muda"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            />
                                        </div>

                                        {/* Preferensi Pembeli */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Preferensi Pembeli <span className="text-gray-400 text-xs">(Opsional)</span>
                                            </label>
                                            <textarea
                                                id="buyerPreference"
                                                rows={3}
                                                value={profileData.buyerPreference}
                                                onChange={handleInputChange}
                                                placeholder="Contoh: Lebih suka promo bundle, sering order saat weekend"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Preferensi Konten AI */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-wand-magic-sparkles text-blue-600"></i>
                                        Preferensi Konten AI
                                    </h3>

                                    <div className="space-y-4">
                                        {/* Gaya Bahasa */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Gaya Bahasa
                                            </label>
                                            <p className="text-xs text-gray-500 mb-2">Untuk deskripsi produk & rekomendasi AI</p>
                                            <select
                                                id="languageStyle"
                                                value={profileData.languageStyle}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            >
                                                <option value="">Pilih gaya bahasa...</option>
                                                <option value="Formal">Formal</option>
                                                <option value="Santai">Santai</option>
                                                <option value="Profesional">Profesional</option>
                                                <option value="Friendly">Friendly</option>
                                                <option value="Persuasif">Persuasif</option>
                                            </select>
                                        </div>

                                        {/* Fokus Promosi */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Fokus Promosi <span className="text-gray-400 text-xs">(Opsional)</span>
                                            </label>
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="promoFocus"
                                                        value="instagram"
                                                        checked={profileData.promoFocus.includes('instagram')}
                                                        onChange={handlePromoFocusChange}
                                                        className="w-4 h-4 text-blue-600 rounded"
                                                    />
                                                    <span className="text-sm text-gray-700">Instagram</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="promoFocus"
                                                        value="marketplace"
                                                        checked={profileData.promoFocus.includes('marketplace')}
                                                        onChange={handlePromoFocusChange}
                                                        className="w-4 h-4 text-blue-600 rounded"
                                                    />
                                                    <span className="text-sm text-gray-700">Marketplace</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="promoFocus"
                                                        value="offline"
                                                        checked={profileData.promoFocus.includes('offline')}
                                                        onChange={handlePromoFocusChange}
                                                        className="w-4 h-4 text-blue-600 rounded"
                                                    />
                                                    <span className="text-sm text-gray-700">Offline</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="promoFocus"
                                                        value="whatsapp"
                                                        checked={profileData.promoFocus.includes('whatsapp')}
                                                        onChange={handlePromoFocusChange}
                                                        className="w-4 h-4 text-blue-600 rounded"
                                                    />
                                                    <span className="text-sm text-gray-700">WhatsApp Business</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Prioritas AI */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Prioritas AI <span className="text-gray-400 text-xs">(Opsional, AI akan lebih fokus di sini)</span>
                                            </label>
                                            <select
                                                id="aiPriority"
                                                value={profileData.aiPriority}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            >
                                                <option value="">Pilih prioritas...</option>
                                                <option value="Ide Produk Baru">Ide Produk Baru</option>
                                                <option value="Strategi Promosi">Strategi Promosi</option>
                                                <option value="Meningkatkan Penjualan">Meningkatkan Penjualan</option>
                                                <option value="Optimasi Konten">Optimasi Konten</option>
                                                <option value="Analisis Keuangan">Analisis Keuangan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={saveProfile}
                                        className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-solid fa-check"></i>
                                        Simpan Profil
                                    </button>
                                </div>

                                {/* Info Note */}
                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                                    <i className="fa-solid fa-info-circle text-blue-600 mt-0.5"></i>
                                    <div className="text-sm text-blue-900">
                                        <p className="font-semibold mb-1">Catatan Penting:</p>
                                        <ul className="space-y-1 text-xs">
                                            <li>Field yang wajib diisi hanya <strong>Nama Usaha</strong> dan <strong>Produk Utama</strong></li>
                                            <li>Smart Mode aktif otomatis ketika sebagian besar field terisi</li>
                                            <li>Profil bisa diedit kapan saja sesuai perkembangan bisnismu</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthGuard>
    );
}
