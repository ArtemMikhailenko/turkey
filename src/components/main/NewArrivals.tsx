'use client'

import { FC, useState } from 'react'
import Image from 'next/image'

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
      <div className="mx-auto px-4 max-w-[1040px]">
        {/* Заголовки */}
        <h2
          className="mb-6 hidden md:block font-bold text-[46px] leading-[122%]"
        >
          Только новинки
        </h2>
        <h2
          className="mb-6 block md:hidden font-bold text-[32px] leading-tight"
        >
          Взгляните ещё на эти товары
        </h2>

        {/* Мобильные инфоблоки (телефон) */}
        <div className="space-y-4 mb-8 block md:hidden">
          {/* ... без изменений */}
        </div>

        {/* Навигация по табам (десктоп) */}
        <div className="border-b border-gray-200 mb-8 hidden md:block">
          <nav className="flex space-x-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                className={`pb-2 text-[18px] font-normal leading-[154%] ${
                  activeTab === i
                    ? 'text-[#ee6f2d] border-b-2 border-[#ee6f2d]'
                    : 'text-[#2a2a2a] hover:text-[#ee6f2d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {tabs[activeTab].items.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow flex flex-col overflow-hidden"
            >
              {/* Обёртка для картинки с соотношением сторон 1:1 */}
              <div className="relative w-full aspect-square">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    📷
                  </div>
                )}
              </div>

              {/* Контент карточки */}
              <div className="flex flex-col flex-1 p-2">
                <h3 className="text-xs font-light leading-[168%] line-clamp-2 mb-2">
                  {p.title}
                </h3>
                <div className="mt-auto">
                  <div className="font-semibold text-lg leading-[137%] mb-2">
                    {p.price.toLocaleString()} ₸
                  </div>
                  <button className="w-full py-2 text-sm font-bold leading-[168%] rounded-lg bg-[#2c7156] text-white hover:bg-[#265e4f]">
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
