import React, { useState, useEffect } from "react";
import SocialMedia from "@/shared/components/SocialMedia";
import { FaPlus } from "react-icons/fa";
import { noto_200, noto_thin } from "@/utils/fonts";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="relative h-[60dvh] md:h-[80dvh] lg:h-screen  w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://video.wixstatic.com/video/11062b_43edac00571f4b05bb740639157efecd/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>

      {/* Contenido sobre el video */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 pt-[10vh]">
        <div className="w-full flex items-center  justify-center mt-10 md:mb-0 xl:mb-10 ">
          <SocialMedia />
        </div>
        <h1
          className={`text-5xl md:text-[100px] xl:text-[120px] 2xl:text-[140px] md:w-full lg:w-[70%] lg:leading-[150px] font-thin uppercase text-white text-center ${noto_200.className}`}
        >
          {t("home.hero.title1")}
        </h1>
        <h1
          className={`text-5xl md:text-[90px] xl:text-[100px] 2xl:text-[120px] text-black bg-white font-[100] uppercase lg:leading-[180px] lg:pr-24 text-center ${noto_thin.className}`}
        >
          {t("home.hero.title2")}
        </h1>

        <div
          onClick={() => router.push("/propiedades")}
          className=" flex items-center gap-5 mt-10 xl:mt-5 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-md shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:text-accent-yellow-base hover:bg-transparent transition-all "
        >
          <h4 className="text-base md:text-xl lg:font-semibold">
            {t("home.hero.button")}
          </h4>
          <FaPlus className="text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
