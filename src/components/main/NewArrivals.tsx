// components/NewArrivals.tsx
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
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold mb-6">Только новинки</h2>

        {/* Таб-меню */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                className={`pb-2 text-lg font-medium ${
                  activeTab === i
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {tabs[activeTab].items.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow flex flex-col overflow-hidden"
            >
              <div className="relative h-48 bg-gray-100">
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
          ))}
        </div>

        {/* Кнопка «Посмотреть все» */}
        <div className="text-center">
          <button className="px-8 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
            Посмотреть все
          </button>
        </div>
      </div>
    </section>
  )
}
