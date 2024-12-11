import Image from "next/image";
import Link from "next/link";
import React from "react";
import Glasses1 from "../../public/SunGlasses/Glasses1.jpg";
import Glasses2 from "../../public/SunGlasses/Glasses2.jpg";
import Glasses3 from "../../public/SunGlasses/Glasses3.jpg";
import Glasses4 from "../../public/SunGlasses/Glasses4.jpg";
import GlassesHover1 from "../../public/SunGlasses/GlassesHover1.jpg";
import GlassesHover2 from "../../public/SunGlasses/GlassesHover2.jpg";
import GlassesHover3 from "../../public/SunGlasses/GlassesHover3.jpg";
import GlassesHover4 from "../../public/SunGlasses/GlassesHover4.jpg";

export default function ProductGlasses() {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[40%] lg:w-[22%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={GlassesHover1}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={Glasses1}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Jean Monnier</span>
          <span>S/. 109.99</span>
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
            src={GlassesHover2}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={Glasses2}
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
            src={GlassesHover3}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={Glasses3}
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
            src={GlassesHover4}
            alt="sunglasses"
            sizes="25vw"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={Glasses4}
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
