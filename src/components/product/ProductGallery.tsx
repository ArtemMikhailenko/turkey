'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface ProductGalleryProps {
  images: string[]
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className="space-y-4">
      {/* Основной слайдер */}
      <div className="relative">
        <button className="slider-prev absolute left-0 top-1/2 z-10 p-2 bg-white rounded-full shadow">
          <FaArrowLeft />
        </button>
        <button className="slider-next absolute right-0 top-1/2 z-10 p-2 bg-white rounded-full shadow">
          <FaArrowRight />
        </button>

        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="rounded-lg overflow-hidden"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="h-[400px] bg-gray-100 relative">
              <Image fill src={src} alt={`Screenshot ${idx}`} className="object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Миниатюры */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        slidesPerView={4}
        spaceBetween={8}
        className="h-24"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="relative overflow-hidden rounded">
            <Image fill src={src} alt={`Thumb ${idx}`} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
