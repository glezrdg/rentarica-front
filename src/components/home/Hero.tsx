import React, { useState } from "react";
import ScrollWithOffsetLink from "@/hooks/ScrollWithOffsetLink";
import { Galleria } from "primereact/galleria";
import { noto, noto_200, noto_thin } from "@/utils/fonts";
import { useTranslation } from "react-i18next";
import SocialMedia from "@/shared/components/SocialMedia";
import { FaPlus } from "react-icons/fa";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { t } = useTranslation();

  const images = [
    "https://iili.io/dthmYPV.jpg",
    "https://iili.io/dthmSNs.jpg",
    "https://iili.io/dthmrxf.jpg",
  ];

  const itemTemplate = (item: any) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        className="w-screen h-screen object-cover"
      />
    );
  };

  return (
    <div className="relative min-h-[60dvh] md:h-[100dvh]  lg:h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <div className="w-full flex items-center  justify-center my-10 xl:mb-20 ">
          <SocialMedia />
        </div>
        <h1
          className={`text-5xl md:text-[100px] xl:text-[140px] md:w-full lg:w-[70%] lg:leading-[150px] font-thin uppercase text-white text-center ${noto_200.className}`}
        >
          {t("home.hero.unforgettable")}
        </h1>
        <h1
          className={`text-5xl md:text-[90px] xl:text-[120px] text-black bg-white font-[100] uppercase lg:leading-[180px] lg:pr-24 text-center ${noto_thin.className}`}
        >
          {t("home.hero.properties")}
        </h1>

        <div className=" flex items-center gap-5 mt-10 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-sm shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:text-accent-yellow-base hover:bg-transparent transition-all ">
          <h4 className="text-base md:text-xl lg:font-semibold">
            {t("home.hero.view_properties")}
          </h4>
          <FaPlus className="text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
