'use client';
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import { useState } from "react";
import AuthGuard from "@/app/components/AuthGuard";

interface RecommendationInputs {
    targetMarket: string;
    productCategory: string;
    promoType: 'online' | 'offline' | 'both';
    currentProblem: string;
}

interface RecommendationDetail {
    summary: string;
    steps: string[];
}

interface ApiRecommendationResponse {
    productIdea: RecommendationDetail;
    promoStrategy: RecommendationDetail;
    branding: RecommendationDetail;
    management: RecommendationDetail;
}

interface Recommendation {
    id: string;
    title: string;
    icon: string;
    content: string;
    details: string[];
}

export default function Page() {
    const [inputs, setInputs] = useState<RecommendationInputs>({
        targetMarket: '',
        productCategory: '',
        promoType: 'online',
        currentProblem: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
    const [error, setError] = useState<string>('');

    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setInputs((prev) => ({ ...prev, [id]: value }));
    };

    const handleRadioChange = (value: 'online' | 'offline' | 'both') => {
        setInputs((prev) => ({ ...prev, promoType: value }));
    };

    // Validate inputs
    const validateInputs = (): boolean => {
        if (!inputs.targetMarket.trim()) {
            alert('Mohon isi Target Pasar');
            return false;
        }
        if (!inputs.productCategory.trim()) {
            alert('Mohon isi Jenis Produk / Kategori');
            return false;
        }
        if (!inputs.currentProblem.trim()) {
            alert('Mohon isi Masalah yang Sedang Dihadapi');
            return false;
        }
        return true;
    };

    // Transform API response to UI format
    const transformApiResponse = (apiData: ApiRecommendationResponse): Recommendation[] => {
        return [
            {
                id: 'productIdea',
                title: 'Ide Produk',
                icon: 'fa-box',
                content: apiData.productIdea.summary,
                details: apiData.productIdea.steps,
            },
            {
                id: 'promoStrategy',
                title: 'Strategi Promosi',
                icon: 'fa-bullhorn',
                content: apiData.promoStrategy.summary,
                details: apiData.promoStrategy.steps,
            },
            {
                id: 'branding',
                title: 'Branding',
                icon: 'fa-palette',
                content: apiData.branding.summary,
                details: apiData.branding.steps,
            },
            {
                id: 'management',
                title: 'Manajemen',
                icon: 'fa-chart-line',
                content: apiData.management.summary,
                details: apiData.management.steps,
            },
        ];
    };

    // Generate recommendations
    const generateRecommendations = async () => {
        if (!validateInputs()) return;

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ai/smart-recommendations`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        targetMarket: inputs.targetMarket,
                        productCategory: inputs.productCategory,
                        promoType: inputs.promoType,
                        currentProblem: inputs.currentProblem,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || errorData.message || 'Gagal mengambil rekomendasi');
            }

            const result = await response.json();

            if (result.success && result.data) {
                const transformedRecommendations = transformApiResponse(result.data);
                setRecommendations(transformedRecommendations);
                setShowRecommendations(true);
            } else {
                throw new Error('Format response tidak valid');
            }
        } catch (err) {
            console.error('Error generating recommendations:', err);
            setError(
                err instanceof Error
                    ? err.message
                    : 'Terjadi kesalahan saat menghasilkan rekomendasi'
            );
            alert(`Error: ${err instanceof Error ? err.message : 'Terjadi kesalahan'}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Toggle card expansion
    const toggleExpand = (cardId: string) => {
        setExpandedCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    };

    // Copy to clipboard
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Berhasil disalin ke clipboard!');
    };

    // Back to input
    const backToInput = () => {
        setShowRecommendations(false);
        setExpandedCards({});
    };

    // Regenerate all
    const regenerateAll = () => {
        generateRecommendations();
    };

    return (
        <AuthGuard>
            <div className="relative flex overflow-hidden max-w-[1440px] mx-auto text-gray-800">

                {/* Sidebar */}
                <Sidebar />

                {/* Empty */}
                <aside className="w-80 hidden md:flex">
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden pt-16 md:pt-0">
                    <div className="flex-1 overflow-y-auto p-8 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="max-w-6xl mx-auto">

                            {/* Welcome Section */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-lightbulb text-blue-600 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Rekomendasi Pintar
                                </h2>
                                <p className="text-gray-500">
                                    Dapatkan rekomendasi cerdas untuk bisnismu berdasarkan profil dan kebutuhanmu
                                </p>
                            </div>

                            {/* Mode Indicator */}
                            <div className="mb-8">
                                <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-6 shadow-lg overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-32 -mt-32"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/30 rounded-full -ml-24 -mb-24"></div>

                                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-3">
                                                <h3 className="text-white font-bold text-xl">
                                                    Aktifkan Mode Pintar NexumAI!
                                                </h3>
                                            </div>
                                            <p className="text-blue-100 text-sm mb-2 max-w-2xl">
                                                Lengkapi profil bisnismu supaya rekomendasi AI lebih personal dan tepat sasaran.
                                            </p>
                                            <p className="text-blue-200 text-xs flex items-center">
                                                <i className="fa-regular fa-clock mr-1"></i>
                                                Cuma butuh ±5 menit
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Link
                                                href="/profile"
                                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
                                            >
                                                Lengkapi Sekarang
                                                <i className="fa-solid fa-arrow-right ml-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                                    <div className="flex items-center gap-2 text-red-800">
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                        <span className="font-medium">{error}</span>
                                    </div>
                                </div>
                            )}

                            {/* Optional Input Section */}
                            {!showRecommendations && (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                            <div className="hidden md:flex">
                                                <i className="fa-solid fa-sliders text-blue-600"></i>
                                            </div>
                                            Sesuaikan Rekomendasi
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Target Pasar */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Target Pasar <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="targetMarket"
                                                    value={inputs.targetMarket}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Mahasiswa, Ibu Rumah Tangga"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Jenis Produk */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Jenis Produk / Kategori <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="productCategory"
                                                    value={inputs.productCategory}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Makanan & Minuman"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Jenis Promosi */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Jenis Promosi yang Diinginkan
                                            </label>
                                            <div className="flex gap-3">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="promoType"
                                                        value="online"
                                                        checked={inputs.promoType === 'online'}
                                                        onChange={() => handleRadioChange('online')}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-sm text-gray-700">Online</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="promoType"
                                                        value="offline"
                                                        checked={inputs.promoType === 'offline'}
                                                        onChange={() => handleRadioChange('offline')}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-sm text-gray-700">Offline</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="promoType"
                                                        value="both"
                                                        checked={inputs.promoType === 'both'}
                                                        onChange={() => handleRadioChange('both')}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-sm text-gray-700">Keduanya</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Masalah yang Dihadapi */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Masalah yang Sedang Dihadapi <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="currentProblem"
                                                rows={3}
                                                value={inputs.currentProblem}
                                                onChange={handleInputChange}
                                                placeholder="Contoh: Jualan sepi, promosi kurang efektif, stok sering habis"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Generate Button */}
                                        <div className="mt-4">
                                            <button
                                                onClick={generateRecommendations}
                                                disabled={isLoading}
                                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <div className="hidden md:flex">
                                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                                </div>
                                                <span>Generate Rekomendasi Cerdas</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Loading State */}
                            {isLoading && (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 mb-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                                        <p className="text-gray-700 font-medium">
                                            AI sedang menganalisis dan menyusun rekomendasi terbaik...
                                        </p>
                                        <p className="text-gray-500 text-sm mt-2">Tunggu sebentar ya!</p>
                                    </div>
                                </div>
                            )}

                            {/* Recommendations Section */}
                            {showRecommendations && !isLoading && (
                                <div>
                                    <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                            <i className="fa-solid fa-star text-blue-600"></i>
                                            Rekomendasi untuk Bisnismu
                                        </h3>
                                        <button
                                            onClick={regenerateAll}
                                            disabled={isLoading}
                                            className="justify-center w-full md:w-max px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <i className="fa-solid fa-rotate"></i>
                                            Generate Ulang Semua
                                        </button>
                                    </div>

                                    {/* Recommendations Cards Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        {recommendations.map((rec) => (
                                            <div
                                                key={rec.id}
                                                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
                                            >
                                                <div className="p-5">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                                <i className={`fa-solid ${rec.icon} text-blue-600`}></i>
                                                            </div>
                                                            <h4 className="font-bold text-gray-900">{rec.title}</h4>
                                                        </div>
                                                        <button className="text-gray-400 hover:text-blue-600">
                                                            <i className="fa-regular fa-bookmark"></i>
                                                        </button>
                                                    </div>
                                                    <p className="text-gray-700 text-sm mb-4">{rec.content}</p>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => toggleExpand(rec.id)}
                                                            className="expand-btn flex-1 text-blue-600 bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
                                                        >
                                                            <i
                                                                className={`fa-solid ${expandedCards[rec.id] ? 'fa-chevron-up' : 'fa-chevron-down'
                                                                    }`}
                                                            ></i>{' '}
                                                            Detail
                                                        </button>
                                                        <button
                                                            onClick={() => copyToClipboard(rec.content)}
                                                            className="copy-btn bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200"
                                                        >
                                                            <i className="fa-solid fa-copy"></i>
                                                        </button>
                                                    </div>
                                                    {expandedCards[rec.id] && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                                            <h5 className="font-semibold text-gray-900 mb-2">Langkah-langkah:</h5>
                                                            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                                                                {rec.details.map((detail, index) => (
                                                                    <li key={index}>{detail}</li>
                                                                ))}
                                                            </ol>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Additional Actions */}
                                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                                        <div className="flex items-center justify-between flex-col md:flex-row gap-3">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">
                                                    Butuh Rekomendasi Lebih Spesifik?
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Lengkapi input opsional atau chat langsung dengan AI untuk konsultasi mendalam
                                                </p>
                                            </div>
                                            <button
                                                onClick={backToInput}
                                                className="w-full justify-center md:w-max bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                                Kembali ke Input
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </AuthGuard>
    );
}