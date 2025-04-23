import { NewArrivals, Product } from "@/components/main/NewArrivals";
import { TopProductsSlider } from "@/components/main/TopProductsSlider";
import Image from "next/image";

export default function Home() {
  const mockProducts = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    title: `Футболка с принтом "Chicago" – спортивные брюки-джоггеры №${i + 1}`,
    price: 6690,
    imageUrl: '/slider.png',
  }))
  const mock = {
    discount3to10: Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      title: `Футболка с принтом "Chicago" – новинка #${i + 1}`,
      price: 6690,
      imageUrl: '/slider.png',
    })),
    discount4to10: Array.from({ length: 8 }).map((_, i) => ({
      id: i + 101,
      title: `Футболка с принтом "Chicago" – скидка 4-10% #${i + 1}`,
      price: 6290,
      imageUrl: '/slider.png',
    })),
    discount5to10: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 201,
      title: `Футболка с принтом "Chicago" – скидка 5-10% #${i + 1}`,
      price: 5990,
      imageUrl: '/slider.png',
    })),
  }
  return (
    <div className="max-w-[1040px] mx-auto py-8"><h2
    style={{
      fontWeight: 700,
      fontSize: '46px',
      lineHeight: '122%',
    }}
  >
    Топ 30 товаров
  </h2>
       <TopProductsSlider products={mockProducts} />
       <NewArrivals data={mock} />
    </div>
  );
}
