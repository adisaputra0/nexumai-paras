'use client';
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";
import AuthGuard from "@/app/components/AuthGuard";


interface ProductInputs {
    productName: string;
    platform: string;
    targetBuyer: string;
    productAdvantages: string;
    languageStyle: string;
    price: string;
}

interface GeneratedResult {
    title: string;
    description: string;
    caption: string;
}

export default function Page() {

    const [inputs, setInputs] = useState<ProductInputs>({
        productName: '',
        platform: '',
        targetBuyer: '',
        productAdvantages: '',
        languageStyle: '',
        price: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState<GeneratedResult>({
        title: '',
        description: '',
        caption: '',
    });

    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setInputs((prev) => ({ ...prev, [id]: value }));
    };

    // Format price with thousand separator
    const formatPrice = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPrice(e.target.value);
        setInputs((prev) => ({ ...prev, price: formatted }));
    };

    // Validate inputs
    const validateInputs = (): boolean => {
        if (!inputs.productName.trim()) {
            alert('Mohon isi Nama Produk');
            return false;
        }
        if (!inputs.platform) {
            alert('Mohon pilih Jenis Platform');
            return false;
        }
        return true;
    };

    // Generate product description
    const generateDescription = async () => {
        if (!validateInputs()) return;

        setIsLoading(true);
        setShowResult(false);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/product-description-generator`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: inputs.productName,
                    platform: inputs.platform,
                    targetBuyer: inputs.targetBuyer || null,
                    advantages: inputs.productAdvantages || null,
                    languageStyle: inputs.languageStyle || null,
                    price: inputs.price || null,
                    // profile: null, // Uncomment dan isi jika ada data profil user
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || data.message || 'Gagal generate deskripsi');
            }

            setResult({
                title: data.data.title,
                description: data.data.description,
                caption: data.data.caption,
            });

            setShowResult(true);
        } catch (error) {
            console.error('Error generating description:', error);
            alert(error instanceof Error ? error.message : 'Terjadi kesalahan saat generate deskripsi');
        } finally {
            setIsLoading(false);
        }
    };

    // Copy functions
    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        alert(`${label} berhasil disalin!`);
    };

    const copyAll = () => {
        const allText = `${result.title}\n\n${result.description}\n\n${result.caption}`;
        copyToClipboard(allText, 'Semua konten');
    };

    // Regenerate
    const regenerate = () => {
        generateDescription();
    };

    // New product
    const newProduct = () => {
        setInputs({
            productName: '',
            platform: '',
            targetBuyer: '',
            productAdvantages: '',
            languageStyle: '',
            price: '',
        });
        setShowResult(false);
        setResult({
            title: '',
            description: '',
            caption: '',
        });
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
                    <div className="flex-1 p-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Welcome Section */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-pen-nib text-blue-600 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Bikin Deskripsi Produk yang Menarik!
                                </h2>
                                <p className="text-gray-500">
                                    Cukup isi detail produkmu, AI langsung bikinkan deskripsi yang juara
                                </p>
                            </div>

                            {/* Form Section */}
                            {!showResult && (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                                    {/* Field Wajib */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <i className="fa-solid fa-circle-check text-blue-600"></i>
                                            Informasi Wajib
                                        </h3>

                                        <div className="space-y-4">
                                            {/* Nama Produk */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nama Produk <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="productName"
                                                    value={inputs.productName}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Kopi Susu Gula Aren"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Jenis Platform */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Jenis Platform <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="platform"
                                                    value={inputs.platform}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                >
                                                    <option value="">Pilih platform...</option>
                                                    <option value="marketplace">Marketplace (Tokopedia, Shopee, dll)</option>
                                                    <option value="instagram">Instagram</option>
                                                    <option value="whatsapp">WhatsApp</option>
                                                    <option value="website">Website</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-200 my-6"></div>

                                    {/* Field Opsional */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                                <i className="fa-solid fa-sliders text-blue-600"></i>
                                                Opsional – Isi Kalau Mau Hasil Lebih Spesifik
                                            </h3>
                                        </div>

                                        {/* Smart Assist Info */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4 flex items-start gap-3">
                                            <i className="fa-solid fa-lightbulb text-blue-600 mt-0.5"></i>
                                            <p className="text-sm text-blue-900">
                                                Kami isi otomatis berdasarkan profil usahamu, bisa diedit kok.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Target Pembeli */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Target Pembeli
                                                </label>
                                                <input
                                                    type="text"
                                                    id="targetBuyer"
                                                    value={inputs.targetBuyer}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Mahasiswa & pekerja muda"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Keunggulan Produk */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Keunggulan Produk
                                                </label>
                                                <textarea
                                                    id="productAdvantages"
                                                    rows={3}
                                                    value={inputs.productAdvantages}
                                                    onChange={handleInputChange}
                                                    placeholder="Contoh: Tanpa pengawet, biji kopi lokal"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                                                ></textarea>
                                            </div>

                                            {/* Gaya Bahasa */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Gaya Bahasa
                                                </label>
                                                <select
                                                    id="languageStyle"
                                                    value={inputs.languageStyle}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                >
                                                    <option value="">Pilih gaya bahasa...</option>
                                                    <option value="santai">Santai</option>
                                                    <option value="profesional">Profesional</option>
                                                    <option value="promosi">Promosi</option>
                                                    <option value="friendly">Friendly</option>
                                                </select>
                                            </div>

                                            {/* Harga */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Harga
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                        Rp
                                                    </span>
                                                    <input
                                                        type="text"
                                                        id="price"
                                                        value={inputs.price}
                                                        onChange={handlePriceChange}
                                                        placeholder="18.000"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Generate Button */}
                                    <div className="mt-8">
                                        <button
                                            onClick={generateDescription}
                                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-sparkles"></i>
                                            <span>Generate Deskripsi Produk</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Loading State */}
                            {isLoading && (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                                        <p className="text-gray-700 font-medium">
                                            AI sedang menyusun deskripsi terbaik untuk produkmu...
                                        </p>
                                        <p className="text-gray-500 text-sm mt-2">Tunggu sebentar ya!</p>
                                    </div>
                                </div>
                            )}

                            {/* Result Section */}
                            {showResult && !isLoading && (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                            <i className="fa-solid fa-check-circle text-green-600"></i>
                                            Hasil Generate
                                        </h3>
                                        <button
                                            onClick={copyAll}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                                        >
                                            <i className="fa-solid fa-copy"></i>
                                            Salin Semua
                                        </button>
                                    </div>

                                    {/* Judul Produk */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-sm font-semibold text-gray-700">Judul Produk</label>
                                            <button
                                                onClick={() => copyToClipboard(result.title, 'Judul')}
                                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                            >
                                                <i className="fa-solid fa-copy"></i> Salin
                                            </button>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                            <p className="text-gray-900 font-medium">{result.title}</p>
                                        </div>
                                    </div>

                                    {/* Deskripsi Utama */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-sm font-semibold text-gray-700">Deskripsi Utama</label>
                                            <button
                                                onClick={() => copyToClipboard(result.description, 'Deskripsi')}
                                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                            >
                                                <i className="fa-solid fa-copy"></i> Salin
                                            </button>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                            <p className="text-gray-900 leading-relaxed">{result.description}</p>
                                        </div>
                                    </div>

                                    {/* Versi Pendek (Caption) */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="text-sm font-semibold text-gray-700">
                                                Versi Pendek (Caption)
                                            </label>
                                            <button
                                                onClick={() => copyToClipboard(result.caption, 'Caption')}
                                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                            >
                                                <i className="fa-solid fa-copy"></i> Salin
                                            </button>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                            <p className="text-gray-900 whitespace-pre-line">{result.caption}</p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <button
                                            onClick={regenerate}
                                            className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-rotate"></i>
                                            Generate Ulang
                                        </button>
                                        <button
                                            onClick={newProduct}
                                            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                            Produk Baru
                                        </button>
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