// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'

export const NavBar: React.FC = () => {
  const [catalogOpen, setCatalogOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]">
        <div className="mx-auto px-4 max-w-[1040px] w-full flex justify-between items-center py-4 space-x-4">
          {/* Burger on desktop */}
          <button
            onClick={() => setCatalogOpen(!catalogOpen)}
            className="p-2 hover:bg-gray-100 rounded"
            aria-label="Toggle menu"
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

          {/* Catalog dropdown */}
          <div className="relative flex-none">
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

              {catalogOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border shadow-md z-20">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Категория 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Категория 2
                  </Link>
                </div>
              )}
            </button>
          </div>

          {/* Search form - unified input+button */}
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

          {/* Cart & Profile */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-800 hover:text-orange-500">
              <FaShoppingCart size={20} />
            </Link>
            <Link href="/profile" className="text-gray-800 hover:text-orange-500">
              <FaUser size={20} />
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
