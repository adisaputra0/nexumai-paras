'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/free-mode'

export default function PartnerSwiper() {
    const partners = [
        { name: 'InovaTech', logo: '/assets/images/inovatech.png' },
        { name: 'BizCore', logo: '/assets/images/bizcore.png' },
        { name: 'DataNest', logo: '/assets/images/datanest.png' },
        { name: 'EconoNext', logo: '/assets/images/econonext.png' },
        { name: 'GrowthLab', logo: '/assets/images/growthlab.png' },
        { name: 'KreasiHub', logo: '/assets/images/kreasihub.png' },
        { name: 'Marketra', logo: '/assets/images/marketra.png' },
        { name: 'Neocommerce', logo: '/assets/images/neocommerce.png' },
        { name: 'Cloudify', logo: '/assets/images/cloudify.png' },
        { name: 'SmartWorks', logo: '/assets/images/smartworks.png' },
    ]

    return (
        <div className="mt-24 mb-12">
            <p className="text-center text-blue-200/50 text-sm mb-8 uppercase tracking-wider">
                Dipercaya oleh Mitra Terkemuka
            </p>

            <div className="overflow-hidden">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    speed={5000}
                    freeMode={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="flex items-center"
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.name} className="flex items-center justify-center">
                            <div className="px-8 py-3 md:py-5 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition group">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={60}
                                    className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}