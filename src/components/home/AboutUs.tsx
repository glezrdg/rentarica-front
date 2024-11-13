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
    <>
      <section
        id="perfil"
        className="flex flex-col xl:flex-row items-center gap-16  m-auto py-10   mt-10  xl:mb-0 border-b "
      >
        {/* <div className="background-image-about w-full md:w-1/2  h-[40vh] md:h-[100vh] 2xl xl:flex hidden"></div> */}
        <Image
          className="w-[50vw] flex self-start"
          src="/assets/home_images/quienes-somos.webp"
          width={1381}
          height={1173}
          alt="Picture of the author"
        />

        <div className="text-center md:text-left  xl:w-1/2 px-10 lg::pr-10 ">
          <h1
            className={`text-5xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
          >
            {t("home.about.title")}
          </h1>

          <p className="text-sm md:w-2/3 lg:text-lg text-center md:text-start px-5  md:px-0 2xl:w-[50%]">
            {formatText(description)}
          </p>

          <div className="w-9 border-[3px] my-8 border-gray-700 hidden lg:flex"></div>

          <button className="bg-yellow-500 p-4 text-xl my-10">
            {t("home.about.button_text")}
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
