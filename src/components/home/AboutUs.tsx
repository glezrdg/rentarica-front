import { noto_300 } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

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
        className="flex flex-col xl:flex-row items-center gap-16 m-auto py-10 mt-10 xl:mb-0 border-b"
      >
        <Image
          className="w-[50vw] flex self-start"
          src="/assets/home_images/quienes-somos.webp"
          width={1381}
          height={1173}
          alt="Picture of the author"
        />

        <div className="text-center md:text-left xl:w-1/2 px-10 lg:pr-10">
          <h1
            className={`text-5xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
          >
            {t("home.about.title")}
          </h1>

          {/* Texto inicial con más líneas visibles */}
          <div
            className={`relative text-sm md:w-2/3 lg:text-lg text-center md:text-start px-5 md:px-0 2xl:w-[50%] ${
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

            {/* Gradiente para difuminado */}
            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-5 mt-5 text-md lg:text-xl font-semibold m bg-accent-yellow-base border border-accent-yellow-base  rounded-md shadow-sm px-4 py-2  cursor-pointer  hover:scale-105 transition-all "
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>

          <div className="w-9 border-[3px] my-8 border-gray-700 hidden lg:flex"></div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
