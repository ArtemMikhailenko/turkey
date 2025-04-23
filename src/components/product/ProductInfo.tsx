'use client'
import { FC, useState } from 'react'

interface Option { label: string; values: string[] }
interface ProductInfoProps {
  title: string
  sku: string
  price: number
  options: Option[]
}

export const ProductInfo: FC<ProductInfoProps> = ({ title, sku, price, options }) => {
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [qty, setQty] = useState(1)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="text-sm text-gray-500">Артикул: {sku}</div>

      {/* Опции */}
      {options.map((opt) => (
        <div key={opt.label}>
          <div className="text-sm text-gray-600 mb-1">{opt.label}:</div>
          <div className="flex space-x-2">
            {opt.values.map((v) => (
              <button
                key={v}
                onClick={() => setSelected((s) => ({ ...s, [opt.label]: v }))}
                className={`px-3 py-1 border rounded ${
                  selected[opt.label] === v
                    ? 'border-orange-600 text-orange-600'
                    : 'border-gray-300'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Количество */}
      <div>
        <label className="text-sm text-gray-600">Количество:</label>
        <select
          value={qty}
          onChange={(e) => setQty(+e.target.value)}
          className="ml-2 border px-2 py-1 rounded"
        >
          {[1,2,3,4,5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Цена и кнопки */}
      <div className="flex items-center space-x-4 mt-4">
        <span className="text-3xl font-semibold">{price.toLocaleString()} ₸</span>
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Добавить в корзину
        </button>
        <button className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
          Купить сейчас
        </button>
      </div>
    </div>
  )
}
