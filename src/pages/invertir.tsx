"use client";

import AnuncioFeria from "@/shared/components/AnuncioFeria";
import { noto_200, noto_300, noto_600 } from "@/utils/fonts";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const invertir = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-28 ">
      {/* Hero */}
      <div className="w-full h-[40dvh]  md:h-[50dvh] lg:h-[70vh] grid place-items-center  relative overflow-hidden ">
        <img
          src="assets/home_images/bg-invertir.webp"
          alt=""
          className="w-full absolute object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 grid place-content-center w-full text-white">
          <div className="border-l-2 border-white pl-4 w-full">
            <h2
              className={` w-full text-4xl md:text-5xl lg:text-8xl uppercase p-2 ${noto_600.className}`}
            >
              {/* {t("invest_page.banner.title")} */}
              {t("invest.landing.titlePart1")} {t("invest.landing.titlePart2")}
            </h2>
            {/* <div className="z-20">
            <h2
              className={`bg-yellow-500 w-fit text-3xl lg:text-7xl uppercase p-2 z-50 pb-10 ${noto_300.className} `}
            >
              {t("invest_page.banner.title2")}
            </h2>
          </div> */}
            <div className="">
              <p
                className={`text-white text-4xl md:text-5xl lg:text-7xl pt-7 pb-4 uppercase ${noto_300.className}`}
              >
                {t("invest.landing.titleContinuation")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnuncioFeria />
      {/*  */}
      <div
        className="text-center pt-20 px-6 bg-white
      
      
      "
      >
        <h2
          className={`text-4xl lg:text-6xl uppercase underline decoration-accent-yellow-base decoration-4 underline-offset-8 ${noto_300.className}`}
        >
          {t("invest.investments.title")}
        </h2>

        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  2xl:w-[80%] gap-10  mx-auto place-items-center w-full  mt-10 lg:mt-20 ">
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              {t("invest.investments.slots.title")}
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              {t("invest.investments.slots.description")}
            </span>
            <img
              className="w-[400px] h-[300px] rounded-sm shadow-sm"
              src="assets/invertir_images/terrenos.avif"
              alt=""
            />
            <Link
              href="/propiedades"
              className="bg-accent-yellow-base px-4 py-2  rounded-md font-semibold absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100  p-2   bottom-10"
            >
              {t("invest.investments.goToPropertiesButton")}
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              {t("invest.investments.projects.title")}
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              {t("invest.investments.projects.description")}
            </span>
            <img
              className="w-[400px] h-[300px] rounded-sm shadow-sm"
              src="assets/invertir_images/planos.jpg"
              alt=""
            />
            <Link
              href="/propiedades"
              className="bg-accent-yellow-base px-4 py-2  rounded-md font-semibold absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100  p-2   bottom-10"
            >
              {t("invest.investments.goToPropertiesButton")}
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              {t("invest.investments.warehouses.title")}
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base text-balance ">
              {t("invest.investments.warehouses.description")}
            </span>
            <img
              className="w-[400px] h-[300px] rounded-sm shadow-sm"
              src="assets/invertir_images/naves.jpg"
              alt=""
            />
            <Link
              href="/propiedades"
              className="bg-accent-yellow-base px-4 py-2  rounded-md font-semibold absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100  p-2   bottom-10"
            >
              {t("invest.investments.goToPropertiesButton")}
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              {t("invest.investments.finishedProperties.title")}
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              {t("invest.investments.finishedProperties.description")}
            </span>
            <img
              className="w-[400px] h-[300px] rounded-sm shadow-sm"
              src="assets/invertir_images/finished.png"
              alt=""
            />
            <Link
              href="/propiedades"
              className="bg-accent-yellow-base px-4 py-2  rounded-md font-semibold absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100  p-2   bottom-10"
            >
              {t("invest.investments.goToPropertiesButton")}
            </Link>
          </div>
        </div>

        <div className="xl:w-[70%] 2xl:w-[60%] justify-self-center my-7 lg:my-10 ">
          <p className=" text-base md:text-lg lg:text-xl  text-balance  p-2 lg:p-4 rounded-lg  text-black">
            {t("invest.investments.description")}
          </p>
        </div>
        {/* <h3
          className={`text-2xl lg:text-4xl font-semibold mt-10  ${noto_300.className}`}
        >
          {t("invest.investments.callToAction")}
        </h3> */}
        <Link
          href="a"
          target="_blank"
          className="my-4 lg:my-20 mx-6  xl:text-base 2xl:text-lg border-accent-yellow-base  bg-accent-yellow-base rounded-md shadow-md xl:my-2 px-3 py-2 xl:px-6 xl:py-2  border-2 hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105  "
        >
          {t("invest.investments.callToActionButton")}
        </Link>
      </div>

      <div className="  bg-white text-center flex flex-col xl:flex-row  items-center px-4 lg:px-0 pt-10  ">
        <img
          src="assets/invertir_images/feria-invertir.jpg"
          className="lg:h-[50dvh] xl:h-auto xl:w-1/2 rounded-lg shadow-lg xl:mt-0 mt-10"
          alt=""
        />
        <div className="xl:w-1/2  lg:w-2/3  2xl:w-1/2 pt-10">
          <h2
            className={`text-2xl xl:text-4xl 2xl:text-5xl font-semibold ${noto_300.className}`}
          >
            {" "}
            Rentarica {t("invest.fairTitle")}
          </h2>
          <p className="my-5 xl:my-10 text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
            {t("invest.fairDescription1")}
          </p>
          <p className=" text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
            {t("invest.fairDescription2")}
          </p>
          <h2
            className={`text-2xl xl:text-4xl 2xl:text-4xl font-semibold my-5 xl:my-10 ${noto_300.className} `}
          >
            {t("invest.fairTitle2")}
          </h2>
          <p className=" text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
            {t("invest.fairDescription3")}
          </p>
          <div className="flex flex-col md:flex-row  items-center w-full mt-12 xl:mt-20 justify-center text-base xl:text-xl">
            <Link
              href="assets/documents/Rentarica Presentación Feria.pdf"
              target="_blank"
              download
              className="my-4 lg:my-0 mx-6  xl:text-base 2xl:text-lg border-accent-yellow-base  bg-accent-yellow-base rounded-md shadow-md xl:my-2 px-3 py-2 xl:px-6 xl:py-4  border-2 hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105  "
            >
              {t("invest.fairButton1")}
            </Link>
            <Link
              href="https://rentarica.trafico.do/"
              target="_blank"
              className="my-4 lg:my-0 mx-6  xl:text-base 2xl:text-lg border-accent-yellow-base  bg-accent-yellow-base rounded-md shadow-md xl:my-2 px-3 py-2 xl:px-6 xl:py-4  border-2 hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105  "
            >
              {t("invest.fairButton2")}
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16"></section>
    </div>
  );
};

export default invertir;
