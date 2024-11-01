import { noto_300 } from "@/utils/fonts";
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
      className="flex flex-col md:flex-row items-center gap-16 lg:h-[120vh] m-auto px-4 xl:px-0 mt-10 mb-6 xl:mb-0"
    >
      <div className="flex-1 overflow-hidden h-full background-image bg-cover bg-[url(https://static.wixstatic.com/media/828c94_cefb7475c65246fba77d5cda0f55c902~mv2.jpg/v1/fill/w_1381,h_1173,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/828c94_cefb7475c65246fba77d5cda0f55c902~mv2.jpg)]"></div>

      <div className="text-center md:text-left flex-1">
        <h1
          className={`text-4xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
        >
          {t("home.about.title")}
        </h1>

        <p className="text-lg text-justify w-[60%]">
          {formatText(description)}
        </p>

        <div className="w-9 border-[3px] my-8 border-gray-700"></div>

        <button className="bg-yellow-500 p-4 text-xl">
          {t("home.about.button_text")}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
