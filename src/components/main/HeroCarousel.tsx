// components/HeroCarousel.tsx
'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Slide {
  id: string
  image: string
}

const slides: Slide[] = [
  { id: '1', image: '/banner1.png' },
  { id: '2', image: '/banner2.png' },
]

export const HeroCarousel: FC = () => (
  <section className="py-8 px-4 sm:px-0">
    <div className="max-w-[1040px] mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[180px] sm:h-[250px] md:h-[347px] rounded-lg overflow-hidden">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)
