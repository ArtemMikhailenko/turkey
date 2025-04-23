'use client'
import { FC } from 'react'
import { TopProductsSlider } from '../main/TopProductsSlider';

interface SimilarProps {
  products: Array<{ id:number; title:string; price:number; imageUrl:string }>
}

export const SimilarProductsSlider: FC<SimilarProps> = ({ products }) => (
  <section className="mt-16">
    <h2 className="text-2xl font-bold mb-4">Похожие товары</h2>
    <TopProductsSlider products={products} />
  </section>
)
