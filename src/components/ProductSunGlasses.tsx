import Image from "next/image";
import Link from "next/link";
import React from "react";

import SunGlasses1 from "../../public/SunGlasses/SunGlasses1.jpg";
import SunGlasses2 from "../../public/SunGlasses/SunGlasses2.jpg";
import SunGlasses3 from "../../public/SunGlasses/SunGlasses3.jpg";
import SunGlasses4 from "../../public/SunGlasses/SunGlasses4.jpg";
import SunGlassesHover1 from "../../public/SunGlasses/SunGlassesHover1.jpg";
import SunGlassesHover2 from "../../public/SunGlasses/SunGlassesHover2.jpg";
import SunGlassesHover3 from "../../public/SunGlasses/SunGlassesHover3.jpg";
import SunGlassesHover4 from "../../public/SunGlasses/SunGlassesHover4.jpg";

export default function ProductSunGlasses() {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={SunGlassesHover1}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={SunGlasses1}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Jean Monnier</span>
          <span>S/. 99.99</span>
        </div>
        <div className="text-sm text-gray-500">J84150 Café Mujer</div>
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
            src={SunGlassesHover2}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={SunGlasses2}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Ralph</span>
          <span>S/. 239.99</span>
        </div>
        <div className="text-sm text-gray-500">RA5286U Crema Mujer</div>
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
            src={SunGlassesHover3}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={SunGlasses3}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bvlgari</span>
          <span>S/. 849.99</span>
        </div>
        <div className="text-sm text-gray-500">BV8255B Negro Mujer</div>
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
            src={SunGlassesHover4}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={SunGlasses4}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bvlgari</span>
          <span>S/. 1049.99</span>
        </div>
        <div className="text-sm text-gray-500">BV6176 Dorado Mujer</div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
    </div>
  );
}
