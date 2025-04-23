'use client'
import { FC, useState } from 'react'

interface Tab {
  key: string
  label: string
  content: React.ReactNode
}

interface ProductTabsProps {
  tabs: Tab[]
}

export const ProductTabs: FC<ProductTabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0)

  return (
    <section className="mt-10">
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-8">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`pb-2 ${
                active === i
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {tabs[active].content}
      </div>
    </section>
  )
}
