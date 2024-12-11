"use client";

import ProductContactLens from "@/components/ProductContactLens";
import ProductGlasses from "@/components/ProductGlasses";
import ProductSunGlasses from "@/components/ProductSunGlasses";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 container">
        <h1 className="text-2xl">Lentes de Sol</h1>
        <ProductSunGlasses />
      </div>
      <div className="mt-24 container">
        <h1 className="text-2xl">Lentes Oftálmicos</h1>
        <ProductGlasses />
      </div>
      <div className="mt-24 container">
        <h1 className="text-2xl">Lentes de Contacto</h1>
        <ProductContactLens />
      </div>
    </div>
  );
}
