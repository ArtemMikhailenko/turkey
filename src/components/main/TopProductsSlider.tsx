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
      {/* Заголовок */}
      <div className="mx-auto px-4 flex items-center justify-between mb-4 max-w-[1040px]">
        <h2
          style={{
            fontWeight: 700,
            fontSize: '46px',
            lineHeight: '122%',
          }}
        >
          Топ 30 товаров
        </h2>
        <div className="flex space-x-6">
          <button
            className="slider-prev p-2 bg-white shadow rounded-full hover:bg-gray-100"
            aria-label="Prev"
          >
            <svg width="16" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.85002 7.00004L6.70002 9.85004C6.90002 10.05 6.99602 10.2834 6.98802 10.55C6.98002 10.8167 6.88402 11.05 6.70002 11.25C6.50002 11.45 6.26269 11.5544 5.98802 11.563C5.71336 11.5717 5.47569 11.4757 5.27502 11.275L0.700024 6.70004C0.500024 6.50004 0.400024 6.26671 0.400024 6.00004C0.400024 5.73337 0.500024 5.50004 0.700024 5.30004L5.27502 0.72504C5.47502 0.52504 5.71269 0.429373 5.98802 0.43804C6.26336 0.446707 6.50069 0.550706 6.70002 0.75004C6.88336 0.95004 6.97936 1.18337 6.98802 1.45004C6.99669 1.71671 6.90069 1.95004 6.70002 2.15004L3.85002 5.00004H15C15.2834 5.00004 15.521 5.09604 15.713 5.28804C15.905 5.48004 16.0007 5.71737 16 6.00004C15.9994 6.28271 15.9034 6.52037 15.712 6.71304C15.5207 6.90571 15.2834 7.00137 15 7.00004H3.85002Z" fill="#2C7156" />
</svg>
          </button>
          <button
            className="slider-next p-2 bg-white shadow rounded-full hover:bg-gray-100"
            aria-label="Next"
          >
           <svg width="16" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.15 6.99996H1C0.71667 6.99996 0.479337 6.90396 0.288004 6.71196C0.0966702 6.51996 0.000670115 6.28263 3.44827e-06 5.99996C-0.000663218 5.7173 0.0953369 5.47996 0.288004 5.28796C0.48067 5.09596 0.718003 4.99996 1 4.99996H12.15L9.3 2.14996C9.1 1.94996 9.004 1.71663 9.012 1.44996C9.02 1.1833 9.116 0.949963 9.3 0.749963C9.5 0.549963 9.73767 0.445963 10.013 0.437963C10.2883 0.429963 10.5257 0.525629 10.725 0.724963L15.3 5.29996C15.4 5.39996 15.471 5.5083 15.513 5.62496C15.555 5.74163 15.5757 5.86663 15.575 5.99996C15.5743 6.1333 15.5537 6.2583 15.513 6.37496C15.4723 6.49163 15.4013 6.59996 15.3 6.69996L10.725 11.275C10.525 11.475 10.2877 11.571 10.013 11.563C9.73834 11.555 9.50067 11.4506 9.3 11.25C9.11667 11.05 9.02067 10.8166 9.012 10.55C9.00334 10.2833 9.09934 10.05 9.3 9.84996L12.15 6.99996Z" fill="#2C7156" />
</svg>
          </button>
        </div>
      </div>

      {/* Слайдер */}
      <div className="mx-auto max-w-[1040px]">
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
              <div
                style={{
                  borderRadius: '8px',
                  width: '188px',
                  height: '329px',
                  boxShadow:
                    '0 1px 4px 0 rgba(12, 12, 13, 0.05), 0 1px 4px 0 rgba(12, 12, 13, 0.1)',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '189px',
                    height: '189px',
                    position: 'relative',
                  }}
                >
                  {p.imageUrl ? (
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      📷
                    </div>
                  )}
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '8px',
                  }}
                >
                  <h3
                    className="line-clamp-3"
                    style={{
                      fontWeight: 300,
                      fontSize: '11px',
                      lineHeight: '168%',
                      margin: 0,
                      marginBottom: 'auto',
                    }}
                  >
                    {p.title}
                  </h3>
                  <div style={{ marginTop: 'auto' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '23px',
                        lineHeight: '137%',
                        marginBottom: '8px',
                      }}
                    >
                      {p.price.toLocaleString()} ₸
                    </div>
                    <button
                      style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '168%',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        width: '170px',
                        height: '40px',
                      }}
                      className="bg-[#2c7156] text-white hover:bg-[#265e4f]"
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Кнопка "Посмотреть все" */}
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 border border-[#2c7156] text-[#2c7156] rounded hover:bg-[#f0f8f7]"
        >
          Посмотреть все
        </button>
      </div>
    </section>
  )
}

/**
 * Для работы line-clamp-3 подключи плагин Tailwind:
 * npm install -D @tailwindcss/line-clamp
 * и добавь в tailwind.config.js:
 * plugins: [require('@tailwindcss/line-clamp')]
 */
