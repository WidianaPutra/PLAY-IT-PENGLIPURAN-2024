import { waves } from "@/assets/assets";

import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <div>
        <Image src={waves.wave2} className="w-full a" />
      </div>
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <h1 className="text-black text-[30px]">Galery</h1>
      </div>
    </>
  );
}
