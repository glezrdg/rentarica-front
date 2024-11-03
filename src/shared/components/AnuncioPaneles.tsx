import Image from "next/image";
import React from "react";

const AnuncioPaneles = () => {
  return (
    <div className="w-full flex items-center justify-center  my-10">
      <Image
        src="/assets/home_images/paneles-anuncio.webp"
        className="max-w-[830] max-h-[195]"
        width={830}
        height={195}
        alt="panelesr"
      />
    </div>
  );
};

export default AnuncioPaneles;
