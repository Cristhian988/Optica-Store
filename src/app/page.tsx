"use client";

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
    </div>
  );
}
