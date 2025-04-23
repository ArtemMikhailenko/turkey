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
      <div className="mx-auto px-4 max-w-[1200px]">
        {/* Заголовок */}
        <h2 className="mb-8 font-bold text-[32px] md:text-[46px] leading-[122%]">
          Только новинки
        </h2>

        {/* Информационные блоки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 justify-center">
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
        bg-white
        rounded-[8px]
        border
        border-[#2c7156]
        p-4
        w-[331px]
        h-[140px]
        flex
        items-center
        justify-between
      "
    >
      {/* Текст */}
      <div className="space-y-1">
        <h3 className="font-semibold text-[23px] leading-[137%] text-gray-800">
          {title}
        </h3>
        <p className="font-light text-[11px] leading-[168%] text-gray-600">
          {subtitle}
        </p>
      </div>

      {/* Иконка */}
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


        {/* Сетка товаров */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Карточка товара (повторяющийся элемент) */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
              <Link href={`/product/${index}`}>
                <div className="relative w-full aspect-square">
                  <Image
                    src="/slider.png"
                    alt="Футболка с принтом 'Chicago' - спортивные брюки-джоггеры"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              
              <div className="flex flex-col flex-1 p-2">
                <Link href={`/product/${index}`} className="hover:text-[#2c7156]">
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
        <div className="text-center">
          <button className="px-8 py-3 border border-[#2c7156] text-[#2c7156] rounded hover:bg-[#f0f8f7]">
            Посмотреть все
          </button>
        </div>
      </div>
    </section>
  )
}