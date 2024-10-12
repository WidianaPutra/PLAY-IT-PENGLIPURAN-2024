"use client";
import { useState, useEffect } from "react";
import { icons } from "@/assets/assets";
import { navbarItems } from "@/datas/navbar";

//
import Link from "next/link";
import Image from "next/image";

export default function NavgationBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full border-white border-b-2 z-[999]">
      <div className="container-navbar flex h-[60px] bg-green justify-between items-center px-[7%]">
        <div className="logo">
          <h1 className="text-white text-[25px]">Navbar</h1>
        </div>
        {/* desktop */}
        <div className="desktop hidden md:flex gap-3">
          {navbarItems.map((data, index) => (
            <>
              <Link href={data.href} key={index} className="text-white">
                {data.contain}
              </Link>
            </>
          ))}
        </div>
        {/* humberger */}
        <div className="md:hidden">
          <Image
            src={isOpen ? icons.closeIcon : icons.humbergerIcon}
            onClick={() => setIsOpen(!isOpen)}
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
      <div
        className={`mobile md:hidden flex flex-col items-center bg-red overflow-hidden transition-all  ${
          isOpen ? "h-auto px-2" : "h-0 px-0"
        }`}
      >
        {navbarItems.map((data, index) => (
          <>
            <Link href={data.href} key={index} className="p-2 text-white">
              {data.contain}
            </Link>
          </>
        ))}
      </div>
    </nav>
  );
}
