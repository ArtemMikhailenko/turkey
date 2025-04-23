// components/TopProductsSlider.tsx
'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Navigation } from 'swiper/modules'

interface Product {
  id: number
  title: string
  price: number
  imageUrl?: string
}

interface TopProductsSliderProps {
  products: Product[]
}

export const TopProductsSlider: FC<TopProductsSliderProps> = ({ products }) => {
  return (
    <section className="py-8">
<div className="mx-auto px-4 flex items-center justify-between mb-4 max-w-[1240px]">        <h2 className="text-2xl font-bold">Топ 30 товаров</h2>

        <div className="flex space-x-2">
          <button
            className="slider-prev p-2 bg-white shadow rounded-full hover:bg-gray-100"
            aria-label="Prev"
          >
            <FaArrowLeft />
          </button>
          <button
            className="slider-next p-2 bg-white shadow rounded-full hover:bg-gray-100"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px]">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.slider-next',
          prevEl: '.slider-prev',
        }}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative h-48 bg-gray-100">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    📷
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-medium mb-2 line-clamp-2">
                  {p.title}
                </h3>
                <div className="mt-auto">
                  <div className="text-xl font-semibold mb-3">
                    {p.price.toLocaleString()} ₸
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      <div className="text-center mt-6">
        <button className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
          Посмотреть все
        </button>
      </div>
    </section>
  )
}
