'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

interface CatalogDropdownProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const ExactCatalogDropdown: React.FC<CatalogDropdownProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('mother-child')
  
  // Add CSS to document head when component mounts
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'catalog-dropdown-styles'
    style.innerHTML = `
      .catalog-dropdown {
         absolute
        inset-x-0        /* left:0; right:0 */
        top-full         /* сразу под контейнером */
        z-50
        overflow-auto
      }
      .catalog-dropdown * {
        background-color: inherit !important;
      }
      body.dropdown-open {
        overflow: hidden !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      const styleElement = document.getElementById('catalog-dropdown-styles')
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])
  
  // Categories for the left sidebar
  const categories = [
    { id: 'home-furniture', name: 'Дом и мебель' },
    { id: 'women', name: 'Женщинам' },
    { id: 'cosmetics', name: 'Косметика' },
    { id: 'mother-child', name: 'Мать и ребенок' },
    { id: 'men', name: 'Мужчинам' },
    { id: 'shoes', name: 'Обувь' },
    { id: 'sports', name: 'Спорт и активный отдых' },
    { id: 'supermarket', name: 'Супермаркет' }
  ]
  
  // Category content (subcategories)
  const categoryContent = {
    'mother-child': {
      'Аксессуары': [
        'Держатель для карт', 'Кошелек', 'Перчатки', 'Ремень',
        'Часы', 'Шаль', 'Шапка', 'Шарф'
      ],
      'Большие размеры': [
        'Вечерняя сумочка', 'Косметичка', 'Ланч бокс', 'Портфель',
        'Портфель для документов'
      ],
      'Нижнее белье': [
        'Держатель для карт', 'Кошелек', 'Перчатки', 'Ремень', 'Часы',
        'Шаль', 'Шапка', 'Шарф'
      ],
      'Одежда': [
        'Блузка', 'Брюки', 'Джинсовая куртка', 'Джинсы', 'Дождевик и ветровка',
        'Кардиган', 'Куртка', 'Пальто', 'Пиджак', 'Платье'
      ],
      'Сумки': [
        'Вечерняя сумочка', 'Косметичка', 'Ланч бокс', 'Портфель',
        'Портфель для документов', 'Почтальонская сумка', 'Рюкзак', 
        'Спортивная сумка', 'Сумка для мамы и ребенка', 'Сумка для ноутбука',
        'Сумка на плечо', 'Сумка на пояс', 'Сумка на руках', 'Сумка через плечо',
        'Тканевая сумка', 'Тотэ (сумка тоут)', 'Холщовая сумка', 'Школьный рюкзак'
      ],
      'Хиджаб / Закрытая одежда': [
        'Хиджаб', 'Платья'
      ]
    }
  }

  // Close dropdown when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className="
      absolute                
       inset-x-0        /* left:0; right:0 */
        top-full         /* сразу под контейнером */
        bg-white
        mt-1
        z-50
        overflow-auto
      overflow-auto
    "
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center py-3 px-4">
          <h2 className="text-xl font-medium text-[#2c7156]">
            {categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="flex">
          {/* Left sidebar with main categories */}
          <div className="w-64 bg-gray-50 rounded-l">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`flex items-center justify-between py-3 px-4 cursor-pointer ${
                  activeCategory === category.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="text-gray-800">{category.name}</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={activeCategory === category.id ? 'text-gray-800' : 'text-gray-400'}
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
            
            <div className="p-4">
              <button 
                className="w-full py-2 border border-gray-300 rounded text-gray-800 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Все категории
              </button>
            </div>
          </div>
          
          {/* Right side with subcategories */}
          <div className="flex-1 grid grid-cols-3 gap-0 bg-white rounded-r">
            {activeCategory === 'mother-child' && Object.entries(categoryContent['mother-child']).map(([section, items], index) => (
              <div key={index} className="px-6 py-4 border-r border-gray-200 last:border-r-0">
                <h3 className="font-medium text-gray-800 mb-3">{section}</h3>
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <Link href="#" className="text-gray-700 hover:text-[#2c7156] text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {activeCategory !== 'mother-child' && (
              <div className="col-span-3 flex items-center justify-center h-64 text-gray-500">
                Содержимое для категории "{categories.find(c => c.id === activeCategory)?.name}" в разработке
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}