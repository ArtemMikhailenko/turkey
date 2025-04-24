'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface Product {
  id: number
  title: string
  price: number
  imageUrl?: string
}

interface NewArrivalsProps {
  data: {
    discount3to10: Product[]
    discount4to10: Product[]
    discount5to10: Product[]
  }
}

export const NewArrivals: FC<NewArrivalsProps> = ({
  data: { discount3to10, discount4to10, discount5to10 },
}) => {
  const tabs = [
    { key: '3-10', label: 'Скидка 3-10%', items: discount3to10 },
    { key: '4-10', label: 'Скидка 4-10%', items: discount4to10 },
    { key: '5-10', label: 'Скидка 5-10%', items: discount5to10 },
  ]
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-10">
      {/* Центровочный контейнер */}
      <div className="mx-auto max-w-[1200px] px-4 lg:px-0">
        {/* Заголовок */}
        <h2
          className="mb-8 font-bold text-[32px] md:text-[46px] leading-[122%] px-4 sm:px-0"
        >
          Только новинки
        </h2>

        {/* Промо-карточки */}
        <div className="mb-8">
        <div className="grid grid-cols-1 [@media(min-width:640px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Все товары — в одном месте',
                subtitle: 'Большой выбор товаров из Турции со скидкой',
                icon: '/icon-all.svg',
                alt: 'Shopping bag',
              },
              {
                title: 'Цены ниже не бывает',
                subtitle: 'WOW-цены на всё, что нужно — успей забрать выгодно',
                icon: '/icon-wow.svg',
                alt: 'WOW price',
              },
              {
                title: 'Топ-продажи со скидкой',
                subtitle: 'Топ-продажи по сниженным ценам — бери, пока не разобрали',
                icon: '/icon-sale.svg',
                alt: 'Sale',
              },
            ].map(({ title, subtitle, icon, alt }, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-[8px]
                  border border-[#2c7156]
                  p-4
                  w-full              /* полная ширина в колонке */
                  h-auto sm:h-[140px] /* авто высота на мобилках, фикс на sm+ */
                  flex items-center justify-between
                "
              >
                <div className="flex-1 pr-4 space-y-1">
                  <h3 className="font-semibold text-[23px] leading-[137%] text-gray-800">
                    {title}
                  </h3>
                  <p className="font-light text-[11px] leading-[168%] text-gray-600">
                    {subtitle}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={icon}
                    alt={alt}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
              <Link href={`/product/${idx}`}>  
                <div className="relative w-full aspect-square">
                  <Image
                    src="/slider.png"
                    alt="Превью товара"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col flex-1 p-2">
                <Link href={`/product/${idx}`} className="hover:text-[#2c7156]">
                  <h3 className="text-xs font-light leading-[168%] line-clamp-2 mb-2">
                    Футболка с принтом "Chicago" - спортивные брюки-джоггеры
                  </h3>
                </Link>
                <div className="mt-auto">
                  <div className="font-semibold text-lg leading-[137%] mb-2">
                    6 690 ₸
                  </div>
                  <button className="w-full py-2 text-sm font-medium rounded-lg bg-[#2c7156] text-white hover:bg-[#265e4f]">
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка «Посмотреть все» */}
        <div className="text-center mb-4">
          <button className="px-8 py-3 border border-[#2c7156] text-[#2c7156] rounded hover:bg-[#f0f8f7]">
            Посмотреть все
          </button>
        </div>
      </div>
    </section>
  )
}
