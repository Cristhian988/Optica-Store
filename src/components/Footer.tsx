import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="container py-24">
      {/* Top */}
      <div className="flex justify-between gap-24">
        {/* Left */}
        <div className="w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Optical Store</div>
          </Link>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
          <span className="font-semibold text-sm">hello@opticalstore.com</span>
          <span className="font-semibold text-sm">+51 9876543210</span>
          <div className="flex gap-6">
            <Image
              src={"/facebook.png"}
              alt="facebook"
              width={20}
              height={20}
            />
            <Image
              src={"/instagram.png"}
              alt="instagram"
              width={20}
              height={20}
            />
            <Image src={"/tiktok.png"} alt="tiktok" width={20} height={20} />
            <Image src={"/twitter.png"} alt="twitter" width={20} height={20} />
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2"></div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Contacto</h1>
          <div>
            <ul className="space-y-4">
              <li>Horario para atención:</li>
              <li>Lunes a Sábado de 10:00 a 19:00</li>
              <li>Consultas Venta Tienda: 0800-14600</li>
              <li>Horario atención venta telefónica:</li>
              <li>Lunes a Sábado de 11:00 a 19:00</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className=""></div>
    </div>
  );
}
