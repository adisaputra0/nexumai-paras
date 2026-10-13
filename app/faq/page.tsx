'use client';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from 'react';

type FAQAnswer =
    | string
    | {
        intro?: string;
        list?: string[];
        ordered?: string[];
        note?: string;
    };

interface FAQItem {
    id: number;
    question: string;
    answer: FAQAnswer;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Apa itu NexumAI?",
        answer: "NexumAI adalah Asisten AI berbasis web yang dirancang untuk membantu UMKM dan bisnis ekonomi kreatif berkembang, membuat konten promosi, dan mengambil keputusan bisnis dengan lebih mudah."
    },
    {
        id: 2,
        question: "Siapa saja yang bisa menggunakan NexumAI?",
        answer: {
            intro: "NexumAI cocok untuk:",
            list: [
                "Pemilik UMKM",
                "Penjual online shop",
                "Merek lokal",
                "Content creator",
                "Pemula bisnis"
            ],
            note: "Tidak diperlukan pengetahuan teknis atau AI."
        }
    },
    {
        id: 3,
        question: "Apakah NexumAI cocok untuk pemula?",
        answer: {
            intro: "Ya, tentu. NexumAI menggunakan:",
            list: [
                "Bahasa sederhana",
                "Panduan mudah dipahami",
                "Desain ramah pengguna"
            ],
            note: "Sehingga pemula bisa menggunakannya dengan percaya diri."
        }
    },
    {
        id: 4,
        question: "Apa saja yang bisa dibantu NexumAI?",
        answer: {
            intro: "NexumAI dapat membantu Anda dalam:",
            list: [
                "Saran dan panduan bisnis",
                "Ide pengembangan produk",
                "Ide promosi dan pemasaran",
                "Rekomendasi branding",
                "Pengambilan keputusan bisnis harian"
            ]
        }
    },
    {
        id: 5,
        question: "Bagaimana cara kerja Asisten Bisnis AI?",
        answer: {
            intro: "Caranya sederhana:",
            ordered: [
                "Ketik pertanyaan bisnis Anda",
                "AI memahami konteks UMKM Anda",
                "NexumAI memberikan saran praktis dan mudah diikuti"
            ],
            note: "Semua melalui antarmuka web yang sederhana."
        }
    },
    {
        id: 6,
        question: "Apakah hasil AI bisa langsung digunakan?",
        answer: {
            intro: "Ya. Hasil NexumAI dirancang untuk:",
            list: [
                "Siap pakai",
                "Cocok untuk media sosial, marketplace, dan website",
                "Praktis, bukan teoritis"
            ]
        }
    },
    {
        id: 7,
        question: "Apa itu Pembuat Deskripsi Produk?",
        answer: {
            intro: "Fitur ini membantu Anda membuat:",
            list: [
                "Deskripsi produk",
                "Caption promosi",
                "Judul menarik"
            ],
            note: "Cukup masukkan nama produk, jenis bisnis, dan target pasar."
        }
    },
    {
        id: 8,
        question: "Apakah NexumAI bisa menggantikan konsultan bisnis?",
        answer: {
            intro: "Enggak sepenuhnya. NexumAI lebih kayak asisten digital yang:",
            list: [
                "Bantu ambil keputusan cepat",
                "Hemat waktu dan biaya",
                "Kasih panduan awal"
            ],
            note: "Kalau butuh hal yang lebih kompleks, konsultan profesional tetap diperlukan."
        }
    },
    {
        id: 9,
        question: "Apakah data saya aman pakai NexumAI?",
        answer: {
            intro: "Tenang, data kamu cuma dipakai untuk:",
            list: [
                "Buat rekomendasi",
                "Biar jawaban lebih relevan"
            ],
            note: "Enggak dipakai buat hal lain."
        }
    },
    {
        id: 10,
        question: "Bisa akses NexumAI lewat HP?",
        answer: {
            intro: "Bisa banget. NexumAI responsive dan nyaman dipakai di:",
            list: [
                "Smartphone",
                "Tablet",
                "Desktop"
            ]
        }
    },
    {
        id: 11,
        question: "Apa itu Gudang Ilmu UMKM?",
        answer: {
            intro: "Di sini kamu bisa nemu:",
            list: [
                "Tips bisnis",
                "Strategi marketing",
                "Cerita sukses UMKM"
            ],
            note: "Biar NexumAI kasih rekomendasi yang lebih tepat."
        }
    },
    {
        id: 12,
        question: "Perlu ngerti AI buat pakai NexumAI?",
        answer: {
            intro: "Enggak perlu. NexumAI dibuat supaya:",
            list: [
                "Terselubung rumitnya teknis AI",
                "Kerasa kayak asisten yang bantu",
                "Mudah dipakai semua orang"
            ]
        }
    },
    {
        id: 13,
        question: "Apa bedanya NexumAI sama AI biasa?",
        answer: {
            intro: "NexumAI itu:",
            list: [
                "Fokus ke kebutuhan UMKM",
                "Bahasa simpel, enggak teknis",
                "Hasilnya praktis dan bisa langsung dipakai",
                "Terintegrasi langsung di website"
            ],
            note: "Bukan AI umum, tapi AI khusus buat kebutuhan bisnis nyata."
        }
    },
    {
        id: 14,
        question: "Apakah NexumAI gratis?",
        answer: "Versi dasar NexumAI bisa dipakai gratis. Fitur tambahan mungkin muncul nanti."
    },
    {
        id: 15,
        question: "Gimana NexumAI bikin kerja lebih produktif?",
        answer: {
            intro: "NexumAI bantu kamu:",
            list: [
                "Hemat waktu buat riset dan planning",
                "Dapet ide lebih cepat",
                "Lebih fokus kembangin bisnis"
            ],
            note: "Semua dalam satu platform."
        }
    }
];

export default function Page() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const renderAnswer = (answer: FAQAnswer) => {
        if (typeof answer === 'string') {
            return <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>;
        }

        return (
            <>
                {answer.intro && (
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{answer.intro}</p>
                )}

                {answer.list && (
                    <ul className="text-gray-700 text-sm space-y-1.5">
                        {answer.list.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {answer.ordered && (
                    <ol className="text-gray-700 text-sm space-y-1.5">
                        {answer.ordered.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-0.5">{index + 1}.</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ol>
                )}

                {answer.note && (
                    <p className="text-gray-600 text-sm mt-3 italic">{answer.note}</p>
                )}
            </>
        );
    };
    return (
        <>
            <Navbar />

            {/* Hero */}
            <div
                className="bg-gradient-to-br from-[#0c0b14] via-[#15132a] to-[#1b1840] pt-24"
                id="hero"
            >
                <div className="px-8 py-10 max-w-7xl mx-auto">
                    {/* Text */}
                    <div className="text-center mb-12 z-10">
                        <div
                            className="inline-block bg-[#1b1840]/70 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20"
                            data-animate="fade-down"
                            data-animate-delay="700"
                            data-animate-anchor="#hero"
                        >
                            <span className="text-blue-200 text-sm">
                                Pertanyaan yang Sering Diajukan
                            </span>
                        </div>

                        <div className="text-5xl md:text-7xl font-bold text-white overflow-hidden pb-6">
                            <h1 data-animate="word-down">Mengenal NexumAI</h1>
                            <h1 data-animate="word-up-reverse">Secara Ringkas</h1>
                        </div>

                        <p
                            className="text-blue-200/70 text-lg max-w-3xl mx-auto"
                            data-animate="fade-up"
                            data-animate-delay="900"
                            data-animate-anchor="#hero"
                        >
                            Temukan cara NexumAI membantu UMKM tumbuh lewat fitur, insight real-time,
                            rekomendasi, dan knowledge base untuk keputusan bisnis cerdas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white py-16 relative overflow-hidden">
                <div className="px-8 py-10 max-w-7xl mx-auto relative">
                    {/* FAQ Accordion */}
                    <div className="w-full mx-auto space-y-4">
                        {faqData.map((faq) => (
                            <div
                                data-animate="fade-up" data-animate-delay="100"
                                key={faq.id}
                                className="faq-item bg-blue-50/10 shadow-md rounded-xl border-l-4 border-blue-500 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="faq-question w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-blue-50 transition"
                                >
                                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                                    <svg
                                        className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6">
                                        {renderAnswer(faq.answer)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
