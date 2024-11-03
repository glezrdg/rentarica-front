import { noto_300 } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

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
    <section
      id="perfil"
      className="flex flex-col md:flex-row items-center gap-16 lg:h-[100vh] m-auto lg:px-4 xl:px-0 mt-10  xl:mb-0 border-b "
    >
      <div className="background-image-about w-full md:w-1/2  h-[40vh] lg:h-[100vh] 2xl"></div>
      {/* <Image
      className=""
        src="/assets/home_images/quienes-somos.webp"
        width={1381}
        height={1173}
        alt="Picture of the author"
      /> */}

      <div className="text-center md:text-left flex-1 py-10">
        <h1
          className={`text-4xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
        >
          {t("home.about.title")}
        </h1>

        <p className="text-sm lg:text-lg text-center lg:text-start px-10 lg:px-0 lg:w-[50%]">
          {formatText(description)}
        </p>

        <div className="w-9 border-[3px] my-8 border-gray-700 hidden lg:flex"></div>

        <button className="bg-yellow-500 p-4 text-xl my-10">
          {t("home.about.button_text")}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
