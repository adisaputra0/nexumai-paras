'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'

export default function TestimonialSwiper() {
    const testimonials = [
        {
            name: 'Rizky Pratama',
            role: 'Pemilik Coffee Shop',
            rating: 4.8,
            image: '/assets/images/user-1.jpg',
            testimonial:
                '"NexumAI ngebantu banget bikin deskripsi menu dan caption promo cuma dalam hitungan menit. Bahasanya simpel, jelas, dan cocok buat coffee shop kecil kayak punya saya. Toko saya sekarang kelihatan jauh lebih profesional di online."',
        },
        {
            name: 'Aulia Rahma',
            role: 'Pemilik UMKM Fashion',
            rating: 5.0,
            image: '/assets/images/user-2.jpg',
            testimonial:
                '"Saya pakai NexumAI buat bikin caption Instagram dan ide promo harian. Tinggal masukin produk dan target pasar, langsung jadi dan siap posting. Hemat waktu banget!"',
        },
        {
            name: 'Dimas Saputra',
            role: 'Pemilik UMKM Minuman',
            rating: 4.9,
            image: '/assets/images/user-3.jpg',
            testimonial:
                '"Rekomendasi dari NexumAI tuh masuk akal dan relevan buat bisnis saya. Mulai dari ide promo sampai saran pengembangan produk, semuanya gampang diterapin."',
        },
        {
            name: 'Nadia Putri',
            role: 'Pemilik Home Bakery',
            rating: 4.8,
            image: '/assets/images/user-4.jpg',
            testimonial:
                '"Sebagai pemilik usaha kecil, kadang bingung harus ngapain selanjutnya. NexumAI rasanya kayak asisten bisnis yang bisa diajak ngobrol kapan aja, dengan bahasa yang gampang dipahami."',
        },
        {
            name: 'Andi Wijaya',
            role: 'Pemilik UMKM Retail',
            rating: 4.9,
            image: '/assets/images/user-5.jpg',
            testimonial:
                '"NexumAI bener-bener kayak punya asisten bisnis digital. Saya bisa tanya soal harga, promo, sampai ide produk, dan jawabannya selalu relevan buat UMKM."',
        },
        {
            name: 'Salsa Maharani',
            role: 'Pemilik Toko Online',
            rating: 5.0,
            image: '/assets/images/user-6.jpg',
            testimonial:
                '"Konten dari NexumAI terdengar natural dan tetap profesional. Deskripsi produk dan caption promo saya jadi lebih meyakinkan, dan interaksi pelanggan juga meningkat."',
        },
        {
            name: 'Fajar Nugroho',
            role: 'Pemilik Warung Makan',
            rating: 4.9,
            image: '/assets/images/user-7.jpg',
            testimonial:
                '"Saya suka banget dengan materi UMKM dan tips bisnis di NexumAI. Contohnya realistis dan sesuai kondisi usaha kecil, jadi bantu saya ambil keputusan bisnis yang lebih tepat."',
        },
    ]

    return (
        <>
            {/* Testimonial Cards */}
            <div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                    navigation={{
                        nextEl: '.testimonial-button-next',
                        prevEl: '.testimonial-button-prev',
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                                <div className="flex items-center gap-6 mb-6 flex-col md:flex-row">
                                    <div className="w-full md:w-56 h-56 rounded-2xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={224}
                                            height={224}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-blue-900 leading-relaxed">
                                            {testimonial.testimonial}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                    <div>
                                        <p className="text-gray-900 font-bold text-base">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-blue-600/70 text-sm uppercase tracking-wide">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <div className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-1">
                                        <span className="text-lg font-bold">{testimonial.rating}</span>
                                        <i className="fa-solid fa-star text-sm"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-10">
                <button className="testimonial-button-prev w-14 h-14 rounded-full bg-white text-gray-900 hover:bg-blue-800 hover:text-white transition flex items-center justify-center">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="testimonial-button-next w-14 h-14 rounded-full bg-white text-gray-900 hover:bg-blue-800 hover:text-white transition flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    )
}