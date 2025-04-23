// components/TopBar.tsx
import Link from 'next/link'
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaTiktok, FaMobileAlt } from 'react-icons/fa'

export const TopBar: React.FC = () => (
  <div className="bg-[#ee6f2d] text-white text-sm">
    <div className="container mx-auto px-4 flex flex-wrap items-center justify-between py-2">
      {/* Social icons */}
      <div className="flex space-x-6">
        <Link href="#" aria-label="Telegram" className="hover:text-gray-200">
          <FaTelegramPlane size={18} />
        </Link>
        <Link href="#" aria-label="Instagram" className="hover:text-gray-200">
          <FaInstagram size={18} />
        </Link>
        <Link href="#" aria-label="WhatsApp" className="hover:text-gray-200">
          <FaWhatsapp size={18} />
        </Link>
        <Link href="#" aria-label="TikTok" className="hover:text-gray-200">
          <FaTiktok size={18} />
        </Link>
      </div>

      {/* App download */}
      <div className="flex items-center space-x-4">
        <Link href="#" className="flex items-center hover:underline">
          <FaMobileAlt className="mr-2" />
          <span>Скачать приложение Türkiye Mart</span>
        </Link>
      </div>

      {/* Links */}
      <div className="flex space-x-4 items-center">
        <Link href="#" className="hover:underline">
          Стать продавцом
        </Link>
        <div className="border border-white rounded overflow-hidden flex">
          <button className="px-2 py-1 bg-transparent hover:bg-orange-600">RU</button>
          <button className="px-2 py-1 bg-transparent hover:bg-orange-600 border-l border-white">Тенге</button>
        </div>
      </div>
    </div>
  </div>
)