'use client'

import { TopProductsSlider } from '@/components/product/ProductSlider'
import { useState, useCallback } from 'react'

const mockProducts = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Футболка с принтом "Chicago" – спортивные брюки-джоггеры №${i + 1}`,
  price: 6690,
  imageUrl: '/slider.png',
}))

const Breadcrumbs = () => (
  <nav className="text-sm text-gray-500 flex items-center flex-wrap mb-4">
    <a href="/" className="hover:underline cursor-pointer">
      <span>Главная</span>
    </a>
    <span className="mx-2">/</span>
    <a href="/" className="hover:underline cursor-pointer">
      <span>Мать и ребенок</span>
    </a>
    <span className="mx-2">/</span>
    <a href="/" className="hover:underline cursor-pointer">
      <span>Игрушки</span>
    </a>
    <span className="mx-2">/</span>
    <a href="/" className="hover:underline cursor-pointer">
      <span>Lego</span>
    </a>
    <span className="mx-2">/</span>
    <span className="font-medium text-gray-800 truncate max-w-md">NINJAGO® Конструктор «Молниеносный Джет Джей» EVO 71784</span>
  </nav>
)

const ProductGallery = () => { 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/placeholder.png",
    "/im1.png",
    "/im2.png",
    "/im3.png",
  ];
  
  const handlePrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);
  
  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);
  
  const handleThumbnailClick = useCallback((index:number) => {
    setCurrentImageIndex(index + 1);
  }, []);
  
  return (
    <div className="relative">
      <div className="w-full relative">
        <img 
          src={images[currentImageIndex]} 
          alt="LEGO Ninjago Джет" 
          className="w-[508px] h-[508px] object-contain mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button 
            className="bg-white rounded-full p-2 shadow-md cursor-pointer"
            onClick={handlePrevious}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="bg-white rounded-full p-2 shadow-md cursor-pointer"
            onClick={handleNext}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex mt-4 space-x-2 justify-center">
        {[0, 1, 2].map((index) => (
          <div 
            key={index}
            className={`w-[144px] h-[144px] border-2 cursor-pointer ${currentImageIndex === index + 1 ? 'border-[#ee6f2d]' : 'border-gray-200'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={`/im${index + 1}.png`} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

const NinjagoHeader = () => (
  <h1
  className="
    mb-6
    max-w-[770px]

    /* мобильная (базовая) верстка */
    text-[18px]
    font-semibold
    leading-[154%]

    /* от 768px (md) — десктоп */
    md:text-[29px]
    md:font-bold
    md:leading-[124%]
  "
>
  NINJAGO® Конструктор «Молниеносный Джет Джей» EVO 71784 – Игрушечный строительный набор для детей от 7 лет и старше (146 деталей)
</h1>
);

const ProductInfo = () => { 
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Standart');
  
  // Price configuration based on size
  const prices = {
    'Standart': 5400,
    'Big': 7800
  };
  //@ts-ignore
  const currentPrice = prices[selectedSize];
  
  return (
    <div className="space-y-4">
      <div className="flex items-center py-2 border-b-1 border-[#e9e9e9]">
        <span className="text-sm text-gray-600 ">Артикул:</span>
        <span className="ml-2 text-sm">0001152114</span>
        <div className="ml-auto flex space-x-2">
          <button className="p-2 cursor-pointer">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.646 4.125 12.788C3.775 12.93 3.4 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.071 4.125 7.213C4.475 7.355 4.78333 7.55067 5.05 7.8L12.075 3.7C12.0417 3.58333 12.021 3.471 12.013 3.363C12.005 3.255 12.0007 3.134 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.929 13.875 5.787C13.525 5.645 13.2167 5.44933 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97933 9.52933 5.988 9.638C5.99667 9.74667 6.00067 9.86733 6 10C5.99933 10.1327 5.99533 10.2537 5.988 10.363C5.98067 10.4723 5.95967 10.5847 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3543 13.875 14.213C14.225 14.0717 14.6 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z" fill="#2A2A2A" />
</svg>
          </button>
          <button className="p-2 cursor-pointer">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 11.3C7.85 10.5167 8.53767 9.871 9.063 9.363C9.58833 8.855 9.99233 8.41733 10.275 8.05C10.5577 7.68267 10.7493 7.362 10.85 7.088C10.9507 6.814 11.0007 6.518 11 6.2C11 5.6 10.7833 5.08333 10.35 4.65C9.91667 4.21667 9.4 4 8.8 4C8.45 4 8.11233 4.071 7.787 4.213C7.46167 4.355 7.19933 4.55067 7 4.8C6.8 4.55 6.54167 4.35433 6.225 4.213C5.90833 4.07167 5.56667 4.00067 5.2 4C4.6 4 4.08333 4.21667 3.65 4.65C3.21667 5.08333 3 5.6 3 6.2C3 6.51667 3.04567 6.80833 3.137 7.075C3.22833 7.34167 3.416 7.65833 3.7 8.025C3.984 8.39167 4.384 8.82933 4.9 9.338C5.416 9.84667 6.116 10.5007 7 11.3ZM0 18V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H12C12.55 0 13.021 0.196 13.413 0.588C13.805 0.98 14.0007 1.45067 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z" fill="#2A2A2A" />
</svg>
          </button>
        </div>
      </div>

      <div className='py-2 border-b-1 border-[#e9e9e9]'>
        <div className="text-sm mb-2 text-gray-500">Цвет: Resimdeki</div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 border border-[#ee6f2d] rounded p-1 cursor-pointer">
            <img src="/im1.png" alt="LEGO Ninjago Jet" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className='py-2 border-b-1 border-[#e9e9e9]'>
        <div className="text-sm mb-2 text-gray-500">Размер: {selectedSize}</div>
        <div className="flex items-center space-x-2">
          <button 
            className={`rounded-[30px] px-[12px] py-[4px] border cursor-pointer ${selectedSize === 'Standart' ? 'border-[#ee6f2d] text-[#ee6f2d]' : 'border-gray-300'}`}
            onClick={() => setSelectedSize('Standart')}
          >
            Standart
          </button>
          <button 
            className={`rounded-[30px] px-[12px] py-[4px] border cursor-pointer ${selectedSize === 'Big' ? 'border-[#ee6f2d] text-[#ee6f2d]' : 'border-gray-300'}`}
            onClick={() => setSelectedSize('Big')}
          >
            Big
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm mb-2 text-gray-500">Количество:</div>
        <div className="relative inline-block">
          <select 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="pl-2 pr-8 py-2 border border-gray-300 rounded bg-white appearance-none cursor-pointer min-w-[120px]"
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

      <div className="text-3xl font-bold">{currentPrice.toLocaleString()} ₸</div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-[#2c7156] text-white rounded cursor-pointer">
          Добавить в корзину
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded cursor-pointer">
          Купить сейчас
        </button>
      </div>

      {/* Updated delivery and weight info cards to match the image */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="grid grid-cols-2">
            {/* Delivery Card */}
            <div className="p-6 border-r border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16C6.16667 16 5.45834 15.7083 4.875 15.125C4.29167 14.5417 4 13.8333 4 13H2.725C2.44167 13 2.204 12.904 2.012 12.712C1.82 12.52 1.72434 12.2827 1.725 12C1.72567 11.7173 1.82167 11.48 2.013 11.288C2.20434 11.096 2.44167 11 2.725 11H4.775C5.05834 10.6833 5.39167 10.4377 5.775 10.263C6.15834 10.0883 6.56667 10.0007 7 10C7.43334 9.99933 7.84167 10.087 8.225 10.263C8.60834 10.439 8.94167 10.6847 9.225 11H13.4L15.5 2H5.75C5.46667 2 5.22934 1.904 5.038 1.712C4.84667 1.52 4.75067 1.28267 4.75 1C4.74934 0.717333 4.84534 0.48 5.038 0.288C5.23067 0.0960001 5.468 0 5.75 0H16.75C17.0833 0 17.35 0.125 17.55 0.375C17.75 0.625 17.8083 0.908333 17.725 1.225L17.075 4H19C19.3167 4 19.6167 4.071 19.9 4.213C20.1833 4.355 20.4167 4.55067 20.6 4.8L22.475 7.275C22.6583 7.50833 22.775 7.76267 22.825 8.038C22.875 8.31333 22.875 8.59233 22.825 8.875L22.15 12.2C22.1 12.4333 21.9833 12.625 21.8 12.775C21.6167 12.925 21.4083 13 21.175 13H20C20 13.8333 19.7083 14.5417 19.125 15.125C18.5417 15.7083 17.8333 16 17 16C16.1667 16 15.4583 15.7083 14.875 15.125C14.2917 14.5417 14 13.8333 14 13H10C10 13.8333 9.70834 14.5417 9.125 15.125C8.54167 15.7083 7.83334 16 7 16ZM15.925 9H20.75L20.85 8.475L19 6H16.625L15.925 9ZM13.45 10.825L13.613 10.1C13.721 9.61667 13.8583 9.025 14.025 8.325C14.075 8.10833 14.125 7.90833 14.175 7.725C14.225 7.54167 14.2667 7.35833 14.3 7.175L14.463 6.45C14.571 5.96667 14.7083 5.375 14.875 4.675C15.0417 3.975 15.1793 3.38333 15.288 2.9L15.45 2.175L15.5 2L13.4 11L13.45 10.825ZM1.75 9.325C1.46667 9.325 1.22934 9.22933 1.038 9.038C0.84667 8.84667 0.75067 8.609 0.750003 8.325C0.749337 8.041 0.845337 7.80367 1.038 7.613C1.23067 7.42233 1.468 7.32633 1.75 7.325H5.25C5.53334 7.325 5.771 7.421 5.963 7.613C6.155 7.805 6.25067 8.04233 6.25 8.325C6.24934 8.60767 6.15334 8.84533 5.962 9.038C5.77067 9.23067 5.53334 9.32633 5.25 9.325H1.75ZM3.75 5.675C3.46667 5.675 3.22934 5.579 3.038 5.387C2.84667 5.195 2.75067 4.95767 2.75 4.675C2.74934 4.39233 2.84534 4.155 3.038 3.963C3.23067 3.771 3.468 3.675 3.75 3.675H8.25C8.53334 3.675 8.771 3.771 8.963 3.963C9.155 4.155 9.25067 4.39233 9.25 4.675C9.24934 4.95767 9.15334 5.19533 8.962 5.388C8.77067 5.58067 8.53334 5.67633 8.25 5.675H3.75ZM7 14C7.28334 14 7.521 13.904 7.713 13.712C7.905 13.52 8.00067 13.2827 8 13C7.99934 12.7173 7.90334 12.48 7.712 12.288C7.52067 12.096 7.28334 12 7 12C6.71667 12 6.47934 12.096 6.288 12.288C6.09667 12.48 6.00067 12.7173 6 13C5.99934 13.2827 6.09534 13.5203 6.288 13.713C6.48067 13.9057 6.718 14.0013 7 14ZM17 14C17.2833 14 17.521 13.904 17.713 13.712C17.905 13.52 18.0007 13.2827 18 13C17.9993 12.7173 17.9033 12.48 17.712 12.288C17.5207 12.096 17.2833 12 17 12C16.7167 12 16.4793 12.096 16.288 12.288C16.0967 12.48 16.0007 12.7173 16 13C15.9993 13.2827 16.0953 13.5203 16.288 13.713C16.4807 13.9057 16.718 14.0013 17 14Z" fill="#191919" />
                </svg>
                <h3 className="text-xl md:text-[23px] font-bold">Доставка</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <span className="text-base md:text-lg text-gray-500">Способ:</span>
                  <span className="text-base md:text-lg ml-2">Авиа</span>
                </div>
                <div>
                  <span className="text-base md:text-lg text-gray-500">Срок:</span>
                  <span className="text-base md:text-lg ml-2">10-12 дней</span>
                </div>
              </div>
            </div>
            
            {/* Weight Card */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.99998 16H14L12.575 6H3.42498L1.99998 16ZM7.99998 4C8.28332 4 8.52098 3.904 8.71298 3.712C8.90498 3.52 9.00065 3.28267 8.99998 3C8.99932 2.71733 8.90332 2.48 8.71198 2.288C8.52065 2.096 8.28332 2 7.99998 2C7.71665 2 7.47932 2.096 7.28798 2.288C7.09665 2.48 7.00065 2.71733 6.99998 3C6.99932 3.28267 7.09532 3.52033 7.28798 3.713C7.48065 3.90567 7.71798 4.00133 7.99998 4ZM10.825 4H12.575C13.075 4 13.5083 4.16667 13.875 4.5C14.2416 4.83333 14.4666 5.24167 14.55 5.725L15.975 15.725C16.0583 16.325 15.9043 16.8543 15.513 17.313C15.1216 17.7717 14.6173 18.0007 14 18H1.99998C1.38332 18 0.878982 17.771 0.486982 17.313C0.0949818 16.855 -0.0590181 16.3257 0.0249819 15.725L1.44998 5.725C1.53331 5.24167 1.75832 4.83333 2.12498 4.5C2.49165 4.16667 2.92498 4 3.42498 4H5.17498C5.12498 3.83333 5.08332 3.671 5.04998 3.513C5.01665 3.355 4.99998 3.184 4.99998 3C4.99998 2.16667 5.29165 1.45833 5.87498 0.875C6.45832 0.291667 7.16665 0 7.99998 0C8.83331 0 9.54165 0.291667 10.125 0.875C10.7083 1.45833 11 2.16667 11 3C11 3.18333 10.9833 3.35433 10.95 3.513C10.9166 3.67167 10.875 3.834 10.825 4Z" fill="#191919" />
                </svg>
                <h3 className="text-xl md:text-[23px] font-bold">Вес</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <span className="text-base md:text-lg text-gray-500">Физический:</span>
                  <span className="text-base md:text-lg ml-2">1.5 кг</span>
                </div>
                <div>
                  <span className="text-base md:text-lg text-gray-500">Объемный:</span>
                  <span className="text-base md:text-lg ml-2">0.0002 кг</span>
                </div>
              </div>
            </div>
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
      <div className="">
        <div className="flex justify-between py-3 border-b border-gray-200 max-w-[500px]">
          <div className=" text-gray-600">Состав</div>
          <div className="">-</div>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200 max-w-[500px]">
          <div className=" text-gray-600">Бренд:</div>
          <div className="">Lego</div>
        </div>
      </div>
    </div>
  )
}

const ProductDescription = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 ">Описание товара</h2>
      
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
  
  // Mock review data - you can replace this with actual data from your API or props
  const reviews = [
    {
      id: 1,
      author: 'Лучинець Юрий',
      date: '06 августа 2024',
      rating: 5,
      text: 'Принтер супер! Настройки легкие и понятные. Главное делать все по инструкции. Качество полностью устраивает. Одним словом - рекомендую.'
    },
    {
      id: 2,
      author: 'Лучинець Юрий',
      date: '06 августа 2024',
      rating: 4,
      text: 'Принтер супер! Настройки легкие и понятные. Главное делать все по инструкции. Качество полностью устраивает. Одним словом - рекомендую.'
    },
    {
      id: 3,
      author: 'Лучинець Юрий',
      date: '06 августа 2024',
      rating: 5,
      text: 'Принтер супер! Настройки легкие и понятные. Главное делать все по инструкции. Качество полностью устраивает. Одним словом - рекомендую.'
    },
    {
      id: 4,
      author: 'Лучинець Юрий',
      date: '06 августа 2024',
      rating: 3,
      text: 'Принтер супер! Настройки легкие и понятные. Главное делать все по инструкции. Качество полностью устраивает. Одним словом - рекомендую.'
    }
  ];
  
  // Function to render star rating based on rating value
  const renderStars = (rating:any) => {
    return (
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star} 
            className={`w-5 h-5 md:w-6 md:h-6 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };
  
  return (
    <div className="mt-8 md:mt-12">
      <div>
        <div className="flex space-x-4 md:space-x-8 border-b-1 border-[#e9e9e9] overflow-x-auto">
          <button 
            className={`pb-2 cursor-pointer text-sm md:text-base whitespace-nowrap ${activeTab === 'description' ? 'border-b-2 border-[#ee6f2d] text-[#ee6f2d]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Описание товара
          </button>
          <button 
            className={`pb-2 cursor-pointer text-sm md:text-base whitespace-nowrap ${activeTab === 'reviews' ? 'border-b-2 border-[#ee6f2d] text-[#ee6f2d]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Отзывы {reviews.length}
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
          <div className="py-4">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/4 lg:pr-6 lg:border-r lg:border-gray-200 mb-8 lg:mb-0">
                <div className="max-h-[600px] overflow-y-auto pr-2">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4 md:p-6 mb-4">
                      <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-0">{review.author}</h3>
                        <span className="text-sm md:text-base text-gray-500">{review.date}</span>
                      </div>
                      {renderStars(review.rating)}
                      <p className="text-sm md:text-base">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-2/4 lg:pl-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Напишите свой отзыв об этом товаре</h2>
                  <div className="mt-6">
                    <button className="border border-[#2c7156] text-[#2c7156] rounded-lg px-6 py-3 w-full">
                      Написать отзыв
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


const NinjagoProductPage = () => { 
  return (
    <div className="max-w-[1040px] mx-auto px-4 py-6">
      <Breadcrumbs />
      
      <NinjagoHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery />
        <ProductInfo />
      </div>
      
      <ProductTabs />
      
      <div className="mt-16">
        <TopProductsSlider products={mockProducts} />
      </div>
    </div>
  )
}

export default NinjagoProductPage