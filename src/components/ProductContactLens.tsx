import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactLens1 from "../../public/SunGlasses/ContactLens1.jpg";
import ContactLens2 from "../../public/SunGlasses/ContactLens2.jpg";
import ContactLens3 from "../../public/SunGlasses/ContactLens3.jpg";
import ContactLens4 from "../../public/SunGlasses/ContactLens4.jpg";

export default function ProductContactLens() {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={ContactLens1}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Acuvue</span>
          <span>S/. 209.99</span>
        </div>
        <div className="text-sm text-gray-500">
          1-DAY ACUVUE® MOIST with LACREON®
        </div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={ContactLens2}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Acuvue</span>
          <span>S/. 339.99</span>
        </div>
        <div className="text-sm text-gray-500">
          1-Day Acuvue Moist Astigmatismo con Lacreon
        </div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={ContactLens3}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Dailies Aqua</span>
          <span>S/. 169.99</span>
        </div>
        <div className="text-sm text-gray-500">Dailies ®Aqua Comfort Plus</div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={ContactLens4}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Air Optix</span>
          <span>S/. 389.99</span>
        </div>
        <div className="text-sm text-gray-500">
          Air Optix ® Aqua para Astigmatismo
        </div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
    </div>
  );
}
