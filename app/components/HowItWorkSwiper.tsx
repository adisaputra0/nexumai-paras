'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Controller } from 'swiper/modules'
import { useState } from 'react'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function HowItWorks() {
    const [leftSwiper, setLeftSwiper] = useState<SwiperType | null>(null)
    const [rightSwiper, setRightSwiper] = useState<SwiperType | null>(null)

    const steps = [
        {
            number: '01',
            title: 'Tanya',
            titleHighlight: 'AI Soal\nBisnis Kamu',
            description:
                'Mulai dengan tanya apa aja ke AI tentang bisnis kamu. Mau kamu punya warung kopi, toko online, atau UMKM kreatif, NexumAI paham kebutuhan kamu pakai bahasa sederhana dan konteks bisnis praktis yang cocok buat pemilik UMKM.',
            image: '/assets/images/hiw-1.png',
        },
        {
            number: '02',
            title: 'Bikin',
            titleHighlight: 'Deskripsi Produk & Promosi',
            description:
                'Masukin nama produk, jenis bisnis, dan target pasar kamu. NexumAI langsung buatin deskripsi produk yang menarik, caption promosi, dan headline marketing yang bikin produk kamu menonjol dan laris manis.',
            image: '/assets/images/hiw-2.png',
        },
        {
            number: '03',
            title: 'Dapetin',
            titleHighlight: 'Rekomendasi Bisnis\nyang Cerdas',
            description:
                'Terima rekomendasi cerdas berdasarkan input bisnis kamu. NexumAI kasih saran ide produk baru, strategi promosi, dan peningkatan branding yang ditampilin dalam card yang jelas dan highlight yang gampang dipahami.',
            image: '/assets/images/hiw-3.png',
        },
        {
            number: '04',
            title: 'Belajar dengan',
            titleHighlight: 'Gudang Ilmu UMKM',
            description:
                'Jelajahi pengetahuan bisnis praktis yang dirancang khusus buat UMKM. Dari tips marketing sampai kisah sukses nyata, basis pengetahuan ini memperkuat respons AI dan bantu kamu terus belajar dan mengembangkan bisnis dengan percaya diri.',
            image: '/assets/images/hiw-4.png',
        },
    ]

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 items-center">
                {/* Left Side - Illustration Card */}
                <div className="order-1 h-full">
                    <Swiper
                        modules={[Controller, EffectFade]}
                        onSwiper={setLeftSwiper}
                        controller={{ control: rightSwiper }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={false}
                        speed={800}
                        effect="fade"
                        className="h-full"
                    >
                        {steps.map((step, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-3xl overflow-hidden border border-blue-900/10">
                                    <Image
                                        src={step.image}
                                        alt={`Step ${step.number}`}
                                        width={800}
                                        height={600}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Side - Steps Content */}
                <div className="order-2 relative">
                    <Swiper
                        modules={[Controller, Navigation]}
                        onSwiper={setRightSwiper}
                        controller={{ control: leftSwiper }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={false}
                        speed={800}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                    >
                        {steps.map((step, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                                    <p className="text-blue-700 text-base mb-4 font-medium">
                                        Langkah {step.number}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        {step.title}{' '}
                                        <span className="text-blue-700">
                                            {step.titleHighlight.split('\n').map((line, i) => (
                                                <span key={i}>
                                                    {line}
                                                    {i < step.titleHighlight.split('\n').length - 1 && <br />}
                                                </span>
                                            ))}
                                        </span>
                                    </h3>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-end gap-4 mt-10">
                <button className="swiper-button-prev-custom text-gray-900 hover:text-blue-700 transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-left"></i>
                    <span className="font-medium">Sebelumnya</span>
                </button>
                <button className="swiper-button-next-custom text-gray-900 hover:text-blue-700 transition flex items-center gap-2">
                    <span className="font-medium">Selanjutnya</span>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}