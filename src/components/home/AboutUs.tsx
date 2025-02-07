import { noto_300 } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";

const AboutUs = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  // Arreglo de imágenes basado en archivos dentro de /public/assets/fotos_personal
  const images = [
    {
      itemImageSrc: "/assets/fotos_personal/quienes-somos.webp",
      thumbnailImageSrc: "/assets/fotos_personal/quienes-somos.webp",
      alt: "Persona 0",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Jorge Perrotta.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Jorge Perrotta.jpg",
      alt: "Persona 0",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Madrileydi Martinez.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Madrileydi Martinez.jpg",
      alt: "Persona 0",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Sergio Carlo.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Sergio Carlo.jpg",
      alt: "Persona 0",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Elizabeth Camacho.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Elizabeth Camacho.jpg",
      alt: "Persona 1",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Gabriela Escobar.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Gabriela Escobar.jpg",
      alt: "Persona 2",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Belen Martinez.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Belen Martinez.jpg",
      alt: "Persona 3",
    },
    {
      itemImageSrc: "/assets/fotos_personal/Grace Murphy.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Grace Murphy.jpg",
      alt: "Persona 3",
    },

    {
      itemImageSrc: "/assets/fotos_personal/Marisol Mora.jpg",
      thumbnailImageSrc: "/assets/fotos_personal/Marisol Mora.jpg",
      alt: "Persona 5",
    },
  ];

  // Configuración de la galería responsive
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    { breakpoint: "991px", numVisible: 4 },
    { breakpoint: "767px", numVisible: 3 },
    { breakpoint: "575px", numVisible: 1 },
  ];

  const itemTemplate = (item: any) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{
          maxHeight: "600px",
          objectFit: "contain",
          display: "block",
        }}
      />
    );
  };

  const thumbnailTemplate = (item: any) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ height: "100px" }}
      />
    );
  };

  const formatText = (text: string) => {
    return text.split(". ").map((sentence, index) => (
      <span key={index}>
        {sentence}.
        <br />
        <br />
      </span>
    ));
  };

  let description = t("home.about.description");

  return (
    <>
      <section
        id="perfil"
        className="flex flex-col xl:flex-row justify-center items-center gap-16 m-auto   mt-10 xl:mb-0 border-b pb-40"
      >
        {/* <Image
          className="lg:w-[50vw] flex self-start"
          src="/assets/home_images/quienes-somos.webp"
          width={1381}
          height={1173}
          alt="Picture of the author"
        /> */}
        <div className=" xl:w-1/2 flex justify-center xl:justify-end w-full px-4">
          <Galleria
            value={images}
            numVisible={3}
            style={{ maxWidth: "600px", maxHeight: " 600px" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            showItemNavigators
            showThumbnails={false}
            autoPlay
            circular
            transitionInterval={2000}
          />
        </div>

        <div className="text-center flex flex-col justify-center  items-center lg:text-left xl:w-1/2 px-10 lg:pr-10 lg:pt-20">
          <h1
            className={`text-5xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
          >
            {t("home.about.title")}
          </h1>

          <div
            className={`relative text-sm md:w-2/3 lg:text-lg text-center xl:text-start px-5 md:px-0 2xl:w-[50%] ${
              expanded ? "" : "line-clamp-6"
            }`}
          >
            <p
              className={`transition-all duration-300 ${
                expanded ? "" : "max-h-[20em] overflow-hidden"
              }`}
            >
              {formatText(description)}
            </p>

            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-5 mt-5 text-md lg:text-xl font-semibold  bg-accent-yellow-base border border-accent-yellow-base  rounded-md shadow-sm px-4 py-2  cursor-pointer  hover:scale-105 transition-all mx-auto lg:m-0"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>

          <div className="w-9 border-[3px] my-8 border-gray-700 hidden lg:flex"></div>
        </div>
      </section>

      {/* Galleria */}
      <div className="flex w-full justify-center mt-10">
        <div className="card"></div>
      </div>
    </>
  );
};

export default AboutUs;
