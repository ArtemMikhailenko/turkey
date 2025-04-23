'use client'
import { useState } from 'react'

const Breadcrumbs = () => (
  <nav className="flex items-center space-x-1 mb-4 text-sm text-gray-500">
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
          className="w-full object-contain"
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
      <div className="flex mt-4 space-x-2 overflow-x-auto">
        <div className="w-24 h-24 border-2 border-gray-200 flex-shrink-0">
          <img src="/placeholder.png" alt="Thumbnail 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 border-2 border-gray-200 flex-shrink-0">
          <img src="/placeholder.png" alt="Thumbnail 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 border-2 border-gray-200 flex-shrink-0">
          <img src="/placeholder.png" alt="Thumbnail 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        NINJAGO® Конструктор «Молниеносный Джет Джей» EVO 71784 - Игрушечный строительный набор для детей от 7 лет и старше (146 деталей)
      </h1>
      
      <div className="flex items-center">
        <span className="text-sm text-gray-600">Артикул:</span>
        <span className="ml-2 text-sm">0001152114</span>
        <div className="ml-auto flex space-x-2">
          <button className="p-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
          <button className="p-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.9 18.1,3 17,3M17,18L12,15.82L7,18V5H17V18Z" />
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
          <button className="px-4 py-1 border border-gray-300 rounded bg-gray-100">Standart</button>
          <button className="px-4 py-1 border border-gray-300 rounded">Big</button>
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
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Добавить в корзину
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded">
          Купить сейчас
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200">
        <div>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
            </svg>
            <span>Доставка</span>
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
        <div>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12,3C7.58,3 4,4.79 4,7V17C4,19.21 7.59,21 12,21C16.41,21 20,19.21 20,17V7C20,4.79 16.42,3 12,3M18,17C18,17.5 15.87,19 12,19C8.13,19 6,17.5 6,17V14.77C7.61,15.55 9.72,16 12,16C14.28,16 16.39,15.55 18,14.77V17M18,12.45C16.7,13.4 14.42,14 12,14C9.58,14 7.3,13.4 6,12.45V9.64C7.47,10.47 9.61,11 12,11C14.39,11 16.53,10.47 18,9.64V12.45M12,9C8.13,9 6,7.5 6,7C6,6.5 8.13,5 12,5C15.87,5 18,6.5 18,7C18,7.5 15.87,9 12,9Z" />
            </svg>
            <span>Вес</span>
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
            src="/placeholder.png" 
            alt="LEGO Ninjago Jet" 
            className="w-full object-contain rounded"
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="md:w-1/2">
          <img 
            src="/placeholder.png" 
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
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          <button 
            className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-orange-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Описание товара
          </button>
          <button 
            className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-orange-500 font-medium' : 'text-gray-500'}`}
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
    <div className="mt-16">
      <h2 className="text-2xl font-medium mb-6">Похожие товары</h2>
      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img 
                src="/api/placeholder/200/300" 
                alt="Product" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600 truncate">
                Футболка с принтом "Chicago" - спортивные брюки-джоггеры
              </div>
              <div className="mt-2 font-semibold">6 690 ₸</div>
              <button className="mt-3 w-full py-2 bg-green-600 text-white text-sm rounded">
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-2 border border-green-600 text-green-600 rounded">
          Посмотреть все
        </button>
      </div>
    </div>
  )
}

const NinjagoProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery />
        <ProductInfo />
      </div>
      
      <ProductTabs />
      
      <SimilarProducts />
    </div>
  )
}

export default NinjagoProductPage