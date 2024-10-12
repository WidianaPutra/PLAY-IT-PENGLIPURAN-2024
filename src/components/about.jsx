import { images, imagess } from "@/assets/assets";

//
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full md:h-screen sm:h-screen h-max bg-green flex justify-center items-center">
      {/* bang shaka */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        <div className="img w-full">
          <div className="pt-[6%] px-[10%]">
            <Image
              src={images.jalanPenglipuran}
              className="w-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="description w-full flex items-center py-[10%] px-[5%]">
          <p className="md:text-[16px] text-white text-justify">
            Penglipuran adalah desa tradisional di Bali yang terkenal karena
            tata letak dan arsitektur uniknya yang mempertahankan budaya asli
            Bali. Setiap rumah diatur rapi dan seragam. Desa ini juga terkenal
            sebagai salah satu desa terbersih di dunia, menonjolkan harmoni
            dengan alam dan budaya.
          </p>
        </div>
      </div>
    </div>
  );
}
