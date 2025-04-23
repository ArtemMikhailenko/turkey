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
      <div className="mx-auto px-4 max-w-[1040px]">
        {/* Desktop Heading */}
        <h2
          style={{ fontWeight: 700, fontSize: '46px', lineHeight: '122%' }}
          className="mb-6 hidden md:block"
        >
          Только новинки
        </h2>
        {/* Mobile Heading */}
        <h2
          style={{ fontWeight: 700, fontSize: '32px', lineHeight: '1.2' }}
          className="mb-6 block md:hidden"
        >
          Взгляните ещё на эти товары
        </h2>

        {/* Mobile Info Blocks */}
        <div className="space-y-4 mb-8 block md:hidden">
          <div className="flex items-center justify-between p-4 border border-[#2c7156] rounded-lg bg-[#fdfdfd] shadow">
            <div>
              <h3 className="font-semibold text-lg">Все товары — в одном месте</h3>
              <p className="text-sm text-gray-600">Большой набор товаров из Турции со скидкой</p>
            </div>
            <Image src="/icon-all.svg" alt="Все товары" width={80} height={80} />
          </div>
          <div className="flex items-center justify-between p-4 border border-[#2c7156] rounded-lg bg-[#fdfdfd] shadow">
            <div>
              <h3 className="font-semibold text-lg">Цены ниже не бывает</h3>
              <p className="text-sm text-gray-600">WOW-цены на всё, что нужно — успей забрать выгодно.</p>
            </div>
            <Image src="/icon-wow.svg" alt="WOW цены" width={80} height={80} />
          </div>
          <div className="flex items-center justify-between p-4 border border-[#2c7156] rounded-lg bg-[#fdfdfd] shadow">
            <div>
              <h3 className="font-semibold text-lg">Топ-продажи со скидкой</h3>
              <p className="text-sm text-gray-600">Топ-продажи по сниженным ценам — бери, пока не разобрали.</p>
            </div>
            <Image src="/icon-sale.svg" alt="Sale" width={80} height={80} />
          </div>
        </div>

        {/* Tabs Nav (desktop only) */}
        <div className="border-b border-gray-200 mb-8 hidden md:block">
          <nav className="flex space-x-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                style={{ fontWeight: 400, fontSize: '18px', lineHeight: '154%' }}
                className={`pb-2 ${
                  activeTab === i
                    ? 'text-[#ee6f2d] border-b border-[#ee6f2d]'
                    : 'text-[#2a2a2a] hover:text-[#ee6f2d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {tabs[activeTab].items.map((p) => (
            <div
              key={p.id}
              style={{
                borderRadius: '8px',
                width: '188px',
                height: '329px',
                boxShadow: '0 1px 4px rgba(12,12,13,0.05),0 1px 4px rgba(12,12,13,0.1)',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '189px', height: '189px', position: 'relative' }}>
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
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '8px' }}>
                <h3
                  className="line-clamp-2"
                  style={{ fontWeight: 300, fontSize: '11px', lineHeight: '168%', margin: 0, marginBottom: 'auto' }}
                >
                  {p.title}
                </h3>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontWeight: 600, fontSize: '23px', lineHeight: '137%', marginBottom: '8px' }}>
                    {p.price.toLocaleString()} ₸
                  </div>
                  <button
                    style={{ fontWeight: 700, fontSize: '14px', lineHeight: '168%', borderRadius: '8px', padding: '8px 16px', width: '170px', height: '40px' }}
                    className="bg-[#2c7156] text-white hover:bg-[#265e4f]"
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 border border-[#2c7156] text-[#2c7156] rounded hover:bg-[#f0f8f7]">
            Посмотреть все
          </button>
        </div>
      </div>
    </section>
  )
}

/**
 * Для работы line-clamp-2 подключи плагин Tailwind:
 * npm install -D @tailwindcss/line-clamp
 * и добавь в tailwind.config.js:
 * plugins: [require('@tailwindcss/line-clamp')]
 */
