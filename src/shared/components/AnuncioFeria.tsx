import Image from "next/image";
import React from "react";

const AnuncioFeria = () => {
  return (
    <a
      href="https://rentarica.trafico.do/"
      target="_blank"
      className="w-full flex items-center justify-center  my-10"
    >
      <Image
        src="/assets/home_images/Banner.png"
        className="max-w-[830] max-h-[195]"
        width={616}
        height={154}
        alt="panelesr"
      />
    </a>
  );
};

export default AnuncioFeria;
