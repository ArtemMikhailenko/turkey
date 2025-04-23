'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { SideMenu } from './SideMenu'
import { ExactCatalogDropdown } from './CatalogDropdown'

export const NavBar: React.FC = () => {
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Side menu (off-canvas) */}
      <SideMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]">
        <div className="relative mx-auto max-w-[1040px] w-full flex justify-between items-center py-4 px-4 lg:px-0">
          {/* Left: burger + logo */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
            <Link
              href="/"
              className="text-orange-500 font-bold text-[28px] leading-[1.2]"
            >
              Türkiye Mart
            </Link>
          </div>

          {/* Center: catalog & search */}
          <div className="flex items-center flex-1 justify-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setCatalogOpen(!catalogOpen)}
                className="flex items-center space-x-1 px-4 py-2"
              >
                <span className="font-normal text-[14px] leading-[168%]">
                  Каталог
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${catalogOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ExactCatalogDropdown isOpen={catalogOpen} setIsOpen={setCatalogOpen} />
            </div>

            <form className="flex items-center max-w-[360px] flex-1">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Я ищу..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2c7156] text-white px-4 py-2 border border-[#2c7156] rounded-r font-bold text-[14px] leading-[168%]"
              >
                Найти
              </button>
            </form>
          </div>

          {/* Right: cart & profile icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-800 hover:text-orange-500">
              {/* Cart SVG or icon here */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 20C5.45 20 4.97934 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18C3.99934 17.4493 4.19534 16.9787 4.588 16.588C4.98067 16.1973 5.45134 16.0013 6 16C6.54867 15.9987 7.01967 16.1947 7.413 16.588C7.80634 16.9813 8.002 17.452 8 18C7.998 18.548 7.80234 19.019 7.413 19.413C7.02367 19.807 6.55267 20.0027 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.1967 19.0217 14.0007 18.5507 14 18C13.9993 17.4493 14.1953 16.9787 14.588 16.588C14.9807 16.1973 15.4513 16.0013 16 16C16.5487 15.9987 17.0197 16.1947 17.413 16.588C17.8063 16.9813 18.002 17.452 18 18C17.998 18.548 17.8023 19.019 17.413 19.413C17.0237 19.807 16.5527 20.0027 16 20ZM5.15 4L7.55 9H14.55L17.3 4H5.15ZM4.2 2H18.95C19.3333 2 19.625 2.171 19.825 2.513C20.025 2.855 20.0333 3.20067 19.85 3.55L16.3 9.95C16.1167 10.2833 15.871 10.5417 15.563 10.725C15.255 10.9083 14.9173 11 14.55 11H7.1L6 13H17C17.2833 13 17.521 13.096 17.713 13.288C17.905 13.48 18.0007 13.7173 18 14C17.9993 14.2827 17.9033 14.5203 17.712 14.713C17.5207 14.9057 17.2833 15.0013 17 15H6C5.25 15 4.68334 14.671 4.3 14.013C3.91667 13.355 3.9 12.7007 4.25 12.05L5.6 9.6L2 2H1C0.71667 2 0.479337 1.904 0.288003 1.712C0.0966701 1.52 0.000670115 1.28267 3.44828e-06 1C-0.000663218 0.717333 0.0953368 0.48 0.288003 0.288C0.48067 0.0960001 0.718003 0 1 0H2.625C2.80834 0 2.98334 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2Z" fill="#191919" />
</svg>
            </Link>
            <Link href="/profile" className="text-gray-800 hover:text-orange-500">
              {/* User SVG or icon here */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9377 6.7 13.563C7.75 13.1883 8.85 13.0007 10 13C11.15 12.9993 12.25 13.187 13.3 13.563C14.35 13.939 15.3 14.4513 16.15 15.1C16.7333 14.4167 17.1877 13.6417 17.513 12.775C17.8383 11.9083 18.0007 10.9833 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.105 2.77833 12.2173 1.99933 10 2C7.78267 2.00067 5.895 2.78 4.337 4.338C2.779 5.896 2 7.78333 2 10C2 10.9833 2.16267 11.9083 2.488 12.775C2.81333 13.6417 3.26733 14.4167 3.85 15.1ZM10 11C9.01667 11 8.18734 10.6627 7.512 9.988C6.83667 9.31333 6.49933 8.484 6.5 7.5C6.50067 6.516 6.83833 5.68667 7.513 5.012C8.18767 4.33733 9.01667 4 10 4C10.9833 4 11.8127 4.33767 12.488 5.013C13.1633 5.68833 13.5007 6.51733 13.5 7.5C13.4993 8.48267 13.162 9.312 12.488 9.988C11.814 10.664 10.9847 11.0013 10 11ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C10.8833 18 11.7167 17.871 12.5 17.613C13.2833 17.355 14 16.984 14.65 16.5C14 16.0167 13.2833 15.646 12.5 15.388C11.7167 15.13 10.8833 15.0007 10 15C9.11667 14.9993 8.28333 15.1287 7.5 15.388C6.71667 15.6473 6 16.018 5.35 16.5C6 16.9833 6.71667 17.3543 7.5 17.613C8.28333 17.8717 9.11667 18.0007 10 18ZM10 9C10.4333 9 10.7917 8.85833 11.075 8.575C11.3583 8.29167 11.5 7.93333 11.5 7.5C11.5 7.06667 11.3583 6.70833 11.075 6.425C10.7917 6.14167 10.4333 6 10 6C9.56667 6 9.20833 6.14167 8.925 6.425C8.64167 6.70833 8.5 7.06667 8.5 7.5C8.5 7.93333 8.64167 8.29167 8.925 8.575C9.20833 8.85833 9.56667 9 10 9Z" fill="#191919" />
</svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]">
        <div className="mx-auto max-w-[1040px] px-4 py-3 flex items-center space-x-2">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded"
            aria-label="Open menu"
          >
            <FaBars size={20} />
          </button>

          <form className="flex items-center flex-1">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Я ищу..."
                className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2c7156] text-white px-4 py-2 border border-[#2c7156] rounded-r font-bold text-[14px] leading-[168%]"
            >
              Найти
            </button>
          </form>
        </div>
      </nav>
    </>
  )
}
