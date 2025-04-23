'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import { SideMenu } from './SideMenu'
import { ExactCatalogDropdown } from './CatalogDropdown'

export const NavBar: React.FC = () => {
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SideMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]">
        <div className="relative mx-auto  max-w-[1040px] w-full flex justify-between items-center py-4 space-x-4">
          <div className='space-x-2'>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="text-orange-500"
              style={{ fontWeight: 700, fontSize: '28px', lineHeight: '1.2' }}
            >
              Türkiye Mart
            </Link>
          </div>
          
          <div className='flex'>
            <div className=" flex-none">
              <button
                onClick={() => setCatalogOpen(!catalogOpen)}
                className="flex items-center space-x-1 px-4 py-2"
              >
                <span
                  style={{ fontWeight: 400, fontSize: '14px', lineHeight: '168%' }}
                >
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
              
              {/* Dropdown positioned correctly under the button */}
              <ExactCatalogDropdown isOpen={catalogOpen} setIsOpen={setCatalogOpen} />
            </div>

            <form className="flex items-center flex-1 max-w-[360px]">
              <div className="relative flex-1 ">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Я ищу..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2c7156] text-white px-4 py-2 border border-[#2c7156] rounded-r"
                style={{ fontWeight: 700, fontSize: '14px', lineHeight: '168%' }}
              >
                Найти
              </button>
            </form>
          </div>
          
          {/* Cart & Profile */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-800 hover:text-orange-500">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20C5.45 20 4.97934 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18C3.99934 17.4493 4.19534 16.9787 4.588 16.588C4.98067 16.1973 5.45134 16.0013 6 16C6.54867 15.9987 7.01967 16.1947 7.413 16.588C7.80634 16.9813 8.002 17.452 8 18C7.998 18.548 7.80234 19.019 7.413 19.413C7.02367 19.807 6.55267 20.0027 6 20ZM16 20C15.45 20 14.9793 19.8043 14.588 19.413C14.1967 19.0217 14.0007 18.5507 14 18C13.9993 17.4493 14.1953 16.9787 14.588 16.588C14.9807 16.1973 15.4513 16.0013 16 16C16.5487 15.9987 17.0197 16.1947 17.413 16.588C17.8063 16.9813 18.002 17.452 18 18C17.998 18.548 17.8023 19.019 17.413 19.413C17.0237 19.807 16.5527 20.0027 16 20ZM5.15 4L7.55 9H14.55L17.3 4H5.15ZM4.2 2H18.95C19.3333 2 19.625 2.171 19.825 2.513C20.025 2.855 20.0333 3.20067 19.85 3.55L16.3 9.95C16.1167 10.2833 15.871 10.5417 15.563 10.725C15.255 10.9083 14.9173 11 14.55 11H7.1L6 13H17C17.2833 13 17.521 13.096 17.713 13.288C17.905 13.48 18.0007 13.7173 18 14C17.9993 14.2827 17.9033 14.5203 17.712 14.713C17.5207 14.9057 17.2833 15.0013 17 15H6C5.25 15 4.68334 14.671 4.3 14.013C3.91667 13.355 3.9 12.7007 4.25 12.05L5.6 9.6L2 2H1C0.71667 2 0.479337 1.904 0.288003 1.712C0.0966701 1.52 0.000670115 1.28267 3.44828e-06 1C-0.000663218 0.717333 0.0953368 0.48 0.288003 0.288C0.48067 0.0960001 0.718003 0 1 0H2.625C2.80834 0 2.98334 0.0500001 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2Z" fill="#191919" />
              </svg>
            </Link>
            <Link href="/profile" className="text-gray-800 hover:text-orange-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.85 17.1C6.7 16.45 7.65 15.9377 8.7 15.563C9.75 15.1883 10.85 15.0007 12 15C13.15 14.9993 14.25 15.187 15.3 15.563C16.35 15.939 17.3 16.4513 18.15 17.1C18.7333 16.4167 19.1877 15.6417 19.513 14.775C19.8383 13.9083 20.0007 12.9833 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.105 4.77833 14.2173 3.99933 12 4C9.78267 4.00067 7.895 4.78 6.337 6.338C4.779 7.896 4 9.78333 4 12C4 12.9833 4.16267 13.9083 4.488 14.775C4.81333 15.6417 5.26733 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1873 12.6627 9.512 11.988C8.83667 11.3133 8.49933 10.484 8.5 9.5C8.50067 8.516 8.83833 7.68667 9.513 7.012C10.1877 6.33733 11.0167 6 12 6C12.9833 6 13.8127 6.33767 14.488 7.013C15.1633 7.68833 15.5007 8.51733 15.5 9.5C15.4993 10.4827 15.162 11.312 14.488 11.988C13.814 12.664 12.9847 13.0013 12 13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C12.8833 20 13.7167 19.871 14.5 19.613C15.2833 19.355 16 18.984 16.65 18.5C16 18.0167 15.2833 17.646 14.5 17.388C13.7167 17.13 12.8833 17.0007 12 17C11.1167 16.9993 10.2833 17.1287 9.5 17.388C8.71667 17.6473 8 18.018 7.35 18.5C8 18.9833 8.71667 19.3543 9.5 19.613C10.2833 19.8717 11.1167 20.0007 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z" fill="#191919" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation: only search input with icon, no button */}
      <nav className="md:hidden bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]">
        <div className="mx-auto px-4 py-3 max-w-[1040px]">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Я ищу..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
        </div>
      </nav>
    </>
  )
}