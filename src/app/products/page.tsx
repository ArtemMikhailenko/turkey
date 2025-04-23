'use client'

import { TopProductsSlider } from '@/components/main/TopProductsSlider'
import { useState } from 'react'
import Link from 'next/link'

const Breadcrumbs = () => (
  <nav className="text-sm text-gray-500 flex items-center space-x-1 mb-4">
    <a href="/" className="hover:underline flex items-center">
      <span>Главная</span>
      <svg className="h-3 w-3 mx-2" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    <a href="/" className="hover:underline flex items-center">
      <span>Мать и ребенок</span>
      <svg className="h-3 w-3 mx-2" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    <a href="/" className="hover:underline flex items-center">
      <span>Игрушки</span>
      <svg className="h-3 w-3 mx-2" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    <a href="/" className="hover:underline flex items-center">
      <span>Lego</span>
      <svg className="h-3 w-3 mx-2" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    <span className="font-medium text-gray-800 truncate max-w-md">NINJAGO® Конструктор «Молниеносный Джет Джей» EVO 71784</span>
  </nav>
)

const ProductGallery = () => { 
  return (
    <div className="relative">
      <div className="w-full relative">
        <img 
          src="/placeholder.png" 
          alt="LEGO Ninjago Джет" 
          className="w-[508px] h-[508px] object-contain mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button className="bg-white rounded-full p-2 shadow-md">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="bg-white rounded-full p-2 shadow-md">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex mt-4 space-x-2 justify-center">
        <div className="w-[144px] h-[144px] border-2 border-gray-200">
          <img src="/im1.png" alt="Thumbnail 1" className="w-full h-full object-contain" />
        </div>
        <div className="w-[144px] h-[144px] border-2 border-gray-200">
          <img src="/im2.png" alt="Thumbnail 2" className="w-full h-full object-contain" />
        </div>
        <div className="w-[144px] h-[144px] border-2 border-gray-200">
          <img src="/im3.png" alt="Thumbnail 3" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

const ProductInfo = () => { 
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div className="space-y-4">
      <h1 className="text-[29px] font-bold leading-[124%]">
        NINJAGO® Конструктор «Молниеносный Джет Джей» EVO 71784 - Игрушечный строительный набор для детей от 7 лет и старше (146 деталей)
      </h1>
      
      <div className="flex items-center">
        <span className="text-sm text-gray-600">Артикул:</span>
        <span className="ml-2 text-sm">0001152114</span>
        <div className="ml-auto flex space-x-2">
          <button className="p-2">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.646 4.125 12.788C3.775 12.93 3.4 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.071 4.125 7.213C4.475 7.355 4.78333 7.55067 5.05 7.8L12.075 3.7C12.0417 3.58333 12.021 3.471 12.013 3.363C12.005 3.255 12.0007 3.134 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.929 13.875 5.787C13.525 5.645 13.2167 5.44933 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97933 9.52933 5.988 9.638C5.99667 9.74667 6.00067 9.86733 6 10C5.99933 10.1327 5.99533 10.2537 5.988 10.363C5.98067 10.4723 5.95967 10.5847 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3543 13.875 14.213C14.225 14.0717 14.6 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z" fill="#2A2A2A" />
</svg>
          </button>
          <button className="p-2">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 11.3C7.85 10.5167 8.53767 9.871 9.063 9.363C9.58833 8.855 9.99233 8.41733 10.275 8.05C10.5577 7.68267 10.7493 7.362 10.85 7.088C10.9507 6.814 11.0007 6.518 11 6.2C11 5.6 10.7833 5.08333 10.35 4.65C9.91667 4.21667 9.4 4 8.8 4C8.45 4 8.11233 4.071 7.787 4.213C7.46167 4.355 7.19933 4.55067 7 4.8C6.8 4.55 6.54167 4.35433 6.225 4.213C5.90833 4.07167 5.56667 4.00067 5.2 4C4.6 4 4.08333 4.21667 3.65 4.65C3.21667 5.08333 3 5.6 3 6.2C3 6.51667 3.04567 6.80833 3.137 7.075C3.22833 7.34167 3.416 7.65833 3.7 8.025C3.984 8.39167 4.384 8.82933 4.9 9.338C5.416 9.84667 6.116 10.5007 7 11.3ZM0 18V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H12C12.55 0 13.021 0.196 13.413 0.588C13.805 0.98 14.0007 1.45067 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z" fill="#2A2A2A" />
</svg>
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm mb-2">Цвет: Resimdeki</div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm mb-2">Размер: Standart</div>
        <div className="flex items-center space-x-2">
          <button className="rounded-[30px] px-[12px] py-[4px] border border-[#ee6f2d] text-[#ee6f2d]">Standart</button>
          <button className="rounded-[30px] px-[12px] py-[4px] border border-gray-300">Big</button>
        </div>
      </div>

      <div>
        <div className="text-sm mb-2">Количество:</div>
        <div className="relative inline-block">
          <select 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="pl-2 pr-8 py-2 border border-gray-300 rounded bg-white appearance-none"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold">5 400 ₸</div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-[#2c7156] text-white rounded">
          Добавить в корзину
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded">
          Купить сейчас
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200">
        <div className="shadow-[0_1px_4px_0_rgba(12,12,13,0.05)] border border-[#e9e9e9] rounded p-4">
          <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 11.3C7.85 10.5167 8.53767 9.871 9.063 9.363C9.58833 8.855 9.99233 8.41733 10.275 8.05C10.5577 7.68267 10.7493 7.362 10.85 7.088C10.9507 6.814 11.0007 6.518 11 6.2C11 5.6 10.7833 5.08333 10.35 4.65C9.91667 4.21667 9.4 4 8.8 4C8.45 4 8.11233 4.071 7.787 4.213C7.46167 4.355 7.19933 4.55067 7 4.8C6.8 4.55 6.54167 4.35433 6.225 4.213C5.90833 4.07167 5.56667 4.00067 5.2 4C4.6 4 4.08333 4.21667 3.65 4.65C3.21667 5.08333 3 5.6 3 6.2C3 6.51667 3.04567 6.80833 3.137 7.075C3.22833 7.34167 3.416 7.65833 3.7 8.025C3.984 8.39167 4.384 8.82933 4.9 9.338C5.416 9.84667 6.116 10.5007 7 11.3ZM0 18V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H12C12.55 0 13.021 0.196 13.413 0.588C13.805 0.98 14.0007 1.45067 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z" fill="#2A2A2A" />
</svg>
            <span className='ml-2'>Доставка</span>
          </div>
          <div className="mb-1 text-sm">
            <span className="text-gray-600">Способ:</span>
            <span className="ml-2">Авиа</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Срок:</span>
            <span className="ml-2">10-12 дней</span>
          </div>
        </div>
        <div className="shadow-[0_1px_4px_0_rgba(12,12,13,0.05)] border border-[#e9e9e9] rounded p-4">
          <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.99998 16H14L12.575 6H3.42498L1.99998 16ZM7.99998 4C8.28332 4 8.52098 3.904 8.71298 3.712C8.90498 3.52 9.00065 3.28267 8.99998 3C8.99932 2.71733 8.90332 2.48 8.71198 2.288C8.52065 2.096 8.28332 2 7.99998 2C7.71665 2 7.47932 2.096 7.28798 2.288C7.09665 2.48 7.00065 2.71733 6.99998 3C6.99932 3.28267 7.09532 3.52033 7.28798 3.713C7.48065 3.90567 7.71798 4.00133 7.99998 4ZM10.825 4H12.575C13.075 4 13.5083 4.16667 13.875 4.5C14.2416 4.83333 14.4666 5.24167 14.55 5.725L15.975 15.725C16.0583 16.325 15.9043 16.8543 15.513 17.313C15.1216 17.7717 14.6173 18.0007 14 18H1.99998C1.38332 18 0.878982 17.771 0.486982 17.313C0.0949818 16.855 -0.0590181 16.3257 0.0249819 15.725L1.44998 5.725C1.53331 5.24167 1.75832 4.83333 2.12498 4.5C2.49165 4.16667 2.92498 4 3.42498 4H5.17498C5.12498 3.83333 5.08332 3.671 5.04998 3.513C5.01665 3.355 4.99998 3.184 4.99998 3C4.99998 2.16667 5.29165 1.45833 5.87498 0.875C6.45832 0.291667 7.16665 0 7.99998 0C8.83331 0 9.54165 0.291667 10.125 0.875C10.7083 1.45833 11 2.16667 11 3C11 3.18333 10.9833 3.35433 10.95 3.513C10.9166 3.67167 10.875 3.834 10.825 4Z" fill="#191919" />
</svg>
            <span className='ml-2'>Вес</span>
          </div>
          <div className="mb-1 text-sm">
            <span className="text-gray-600">Физический:</span>
            <span className="ml-2">1.5 кг</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Объемный:</span>
            <span className="ml-2">0.0002 кг</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const GeneralCharacteristics = () => { 
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Общие характеристики</h2>
      <div className="border-t border-gray-200">
        <div className="flex py-3 border-b border-gray-200">
          <div className="w-1/4 text-gray-600">Состав</div>
          <div className="w-3/4">-</div>
        </div>
        <div className="flex py-3 border-b border-gray-200">
          <div className="w-1/4 text-gray-600">Бренд:</div>
          <div className="w-3/4">Lego</div>
        </div>
      </div>
    </div>
  )
}

const ProductDescription = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Описание товара</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="mb-6">
            Ниндзя транспорт – Дети и любители мотоциклов найдут в 
            игровом наборе NINJAGO® Кая и его Робот-мотоцикл EVO 
            (71783) все необходимое для создания захватывающих 
            боевых сцен с ниндзя мотоциклом и роботом.
          </p>
          
          <ul className="space-y-4">
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">4 минифигурки</span> – В наборе представлены 2 ниндзя-воина 
                Кая и Нья, вооруженные мечами, а также 2 злодея: 
                Костяной Король и Костяной Охотник, каждый из которых 
                имеет свои оружия.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Улучшайте модель</span> – Дети могут улучшить ниндзя 
                мотоцикл, добавив большой золотой нож и пылающие 
                выхлопные трубы, чтобы создать более крупную и мощную 
                модель.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Коллекционный флаг</span> – Дети получают флаг Фокуса, 
                который можно выставить на ниндзя мотоцикле, когда они 
                успешно завершают свои испытания и одерживают победу 
                в бою.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Больше ниндзя-экшна</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="/im4.png" 
            alt="LEGO Ninjago Jet" 
            className="w-full object-contain rounded"
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="md:w-1/2">
          <img 
            src="/im5.png" 
            alt="LEGO Ninjago assembly" 
            className="w-full object-contain"
          />
        </div>
        
        <div className="md:w-1/2">
          <p className="mb-4">
            Также ознакомьтесь с другими наборами из серии LEGO® 
            NINJAGO®, такими как Роботическая битва Ллойда EVO 
            (71781), Земляной дракон Коула EVO (71782), 
            Молниеносный джет Джея EVO (71784).
          </p>
          
          <ul className="space-y-4">
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Забавная идея подарка LEGO®</span> – Эта игрушка из 312 
                деталей подходит детям от 7 лет и старше, позволяя им 
                собирать модели и играть с ними. Идеально подходит как 
                подарок на любой случай, будь то награда, день рождения 
                или новогодний подарок.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Играйте и выставляйте</span> – Этот мотоцикл высотой 10 см, 
                длиной 25 см и шириной 9 см может быть выставлен на 
                показ преданными фанатами ниндзя во время перерывов в 
                игре.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Новый способ сборки моделей</span> – Приложение LEGO® 
                Builder направляет детей на интуитивном процессе 
                сборки. Они могут сохранять наборы, отслеживать свой 
                прогресс, а также масштабировать и вращать 3D-модели 
                во время сборки.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Высокое качество</span> – Конструктивные детали LEGO® 
                производятся более шести десятилетий и всегда созданы 
                так, чтобы надежно соединяться.
              </div>
            </li>
            
            <li className="flex">
              <span className="mr-2">•</span>
              <div>
                <span className="font-medium">Гарантия безопасности</span> – Конструктивные детали LEGO® 
                соответствуют строгим международным стандартам 
                безопасности.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const ProductTabs = () => { 
  const [activeTab, setActiveTab] = useState('description')
  
  return (
    <div className="mt-12">
      <div >
        <div className="flex space-x-8">
          <button 
            className={`pb-2 ${activeTab === 'description' ? 'border-b-1 border-[#ee6f2d] text-[#ee6f2d]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Описание товара
          </button>
          <button 
            className={`pb-2 ${activeTab === 'reviews' ? 'border-b-1 border-[#ee6f2d] text-[#ee6f2d]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Отзывы 0
          </button>
        </div>
      </div>
      
      <div className="py-4">
        {activeTab === 'description' && (
          <>
            <GeneralCharacteristics />
            <ProductDescription />
          </>
        )}
        
        {activeTab === 'reviews' && (
          <div className="py-4 text-gray-500">
            На данный момент отзывов нет.
          </div>
        )}
      </div>
    </div>
  )
}

const SimilarProducts = () => { 
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img 
                src="/api/placeholder/" 
                alt="Product" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600 truncate">
                Футболка с принтом "Chicago" - спортивные брюки-джоггеры
              </div>
              <div className="mt-2 font-semibold">6 690 ₸</div>
              <button className="mt-3 w-full py-2 bg-[#2c7156] text-white text-sm rounded">
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-2 border border-[#2c7156] text-[#2c7156] rounded">
          Посмотреть все
        </button>
      </div>
    </section>
  )
}

const NinjagoProductPage = () => { 
  return (
    <div className="max-w-[1040px] mx-auto px-4 py-6">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery />
        <ProductInfo />
      </div>
      
      <ProductTabs />
      
      <SimilarProducts />
      
      <div className="mt-16">
        <TopProductsSlider products={[]} />
      </div>
    </div>
  )
}

export default NinjagoProductPage