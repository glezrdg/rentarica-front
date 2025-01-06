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

  // // Array con los diferentes Heros
  // const heros = [
  //   <div className="relative w-full mt-[10vh] lg:pt-0 h-[50dvh] lg:h-screen">
  //     <video
  //       className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
  //       autoPlay
  //       loop
  //       muted
  //       playsInline
  //     >
  //       <source
  //         src="https://video.wixstatic.com/video/11062b_43edac00571f4b05bb740639157efecd/1080p/mp4/file.mp4"
  //         type="video/mp4"
  //       />
  //     </video>

  //     {/* Contenido sobre el video */}
  //     <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 ">
  //       <div className="w-full flex items-center  justify-center mt-10 md:mb-0 xl:mb-10 ">
  //         <SocialMedia />
  //       </div>
  //       <h1
  //         className={`text-5xl md:text-[100px] xl:text-[120px] 2xl:text-[140px] md:w-full lg:w-[70%] lg:leading-[150px] font-thin uppercase text-white text-center ${noto_200.className}`}
  //       >
  //         {t("home.hero.unforgettable")}
  //       </h1>
  //       <h1
  //         className={`text-5xl md:text-[90px] xl:text-[100px] 2xl:text-[120px] text-black bg-white font-[100] uppercase lg:leading-[180px] lg:pr-24 text-center ${noto_thin.className}`}
  //       >
  //         {t("home.hero.properties")}
  //       </h1>

  //       <div className=" flex items-center gap-5 mt-10 xl:mt-5 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-sm shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:text-accent-yellow-base hover:bg-transparent transition-all ">
  //         <h4 className="text-base md:text-xl lg:font-semibold">
  //           {t("home.hero.view_properties")}
  //         </h4>
  //         <FaPlus className="text-xs" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div className="mt-[10dvh] lg:mt-0 relative w-full h-[50dvh] lg:h-[100vh] ">
  //     <div className="background-image-hero absolute inset-0  object-cover bg-center flex items-center justify-evenly">
  //       <div className="w-1/3"></div>
  //       <div className="flex flex-col items-center justify-center h-full">
  //         <img
  //           src="/assets/home_images/hero/banner-feria-2.webp"
  //           className="h-[20dvh] lg:h-[50vh]  self-start -mt-4"
  //           alt=""
  //         />
  //         <h2 className="text-xs md:text-sm lg:text-4xl font-bold text-white  ">
  //           Recibe un Bono de US$2,000 dólares <br /> en la propiedad de tu
  //           preferencia!{" "}
  //         </h2>
  //         <a
  //           href="https://rentarica.trafico.do/"
  //           className="bg-accent-yellow-base px-4 py-2 mt-5 lg:px-20 lg:py-5 lg:text-5xl font-semibold lg:mt-20 rounded-full"
  //         >
  //           Registrate Aquí
  //         </a>
  //       </div>
  //     </div>
  //   </div>,
  //   <div className="relative w-full h-[50dvh] mt-[10vh] lg:mt-0 lg:h-screen background-image-hero2 flex items-center justify-center"></div>,
  // ];

  // // Cambia de slide cada 4 segundos
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % heros.length);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [heros.length]);

  return (
    <div className="relative min-h-[80dvh] md:h-[100dvh]  lg:h-screen xl:min-h-[100dvh] w-full overflow-hidden">
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
          {t("home.hero.unforgettable")}
        </h1>
        <h1
          className={`text-5xl md:text-[90px] xl:text-[100px] 2xl:text-[120px] text-black bg-white font-[100] uppercase lg:leading-[180px] lg:pr-24 text-center ${noto_thin.className}`}
        >
          {t("home.hero.properties")}
        </h1>

        <div
          onClick={() => router.push("/propiedades")}
          className=" flex items-center gap-5 mt-10 xl:mt-5 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-sm shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:text-accent-yellow-base hover:bg-transparent transition-all "
        >
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
