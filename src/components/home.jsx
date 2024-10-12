"use client";
import { useState, useEffect } from "react";
import { waves } from "@/assets/assets";
//
import $ from "jquery";
import Image from "next/image";
import AOS from "aos";

//
import "aos/dist/aos.css";

AOS.init();

export default function HomePage() {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setScrollValue(Math.floor(position));

    $(".home-contain").css({
      transform: `translateY(${position * 1.1}px)`,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    $(".home-contain").removeClass("scale-0");
    $(".home-contain").css({
      transition: "2.5s",
    });

    setTimeout(() => {
      $(".home-contain").css({
        transition: "none",
      });
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-img bg-fixed h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center overflow-hidden">
      <div className="p md:w-[50%] sm:w-[60%] w-[85%]">
        <div
          className="home-contain border-2 border-red scale-0"
          // data-aos="zoom-in"
          // data-aos-duration="2000"
        >
          <h1 className="text-[45px] text-white text-center font-GeistVF">
            Penglipuran
          </h1>
        </div>
      </div>
    </div>
  );
}
