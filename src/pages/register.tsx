"use client";

import React from "react";
import Link from "next/link";
import { GiIsland } from "react-icons/gi";
import { FaHouseChimney, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { Gi3dStairs } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { noto_300, noto_600 } from "@/utils/fonts";

const RegisterProperty = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 lg:py-40 container mx-auto md:px-10 lg:px-20">
      {/* ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 px-5 lg:mt-0 lg:px-0 pb-10 xl:pb-0">
        <div className="text-justify place-content-center">
          <div
            className={`text-3xl md:text-4xl xl:text-5xl text-start font-bold mb-6 ${noto_300.className}`}
          >
            <h1>{t("register.title")}</h1>
          </div>
          <p className="text-sm  xl:text-base mb-3 ">
            {t("register.description1")}
          </p>
          <p className="text-sm  xl:text-base mb-3 ">
            {t("register.description2")}
          </p>
          <p className="text-sm  xl:text-base ">{t("register.description3")}</p>
        </div>
        <div>
          <img src="/Apartment.png" alt="Apartment" />
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 lg:grid-cols-3 h-[45dvh] lg:h-[40dvh] xl:h-[400px] gap-4 mb-16 cursor-pointer px-4 md:px-20 xl:px-0">
        <a
          href="https://es.surveymonkey.com/r/RentaricaPropertyOnBoard"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <FaHouseChimney className=" text-3xl lg:text-4xl xl:text-5xl mb-3 m-auto" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.sellProperty")}
            </p>
          </div>
        </a>

        <a
          href="https://es.surveymonkey.com/r/RentaricaTerrenosOnBoard"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <GiIsland className=" text-3xl lg:text-4xl xl:text-5xl mb-3 m-auto" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.sellSlot")}
            </p>
          </div>
        </a>

        <a
          href="https://es.surveymonkey.com/r/RentaricaOnBoardRentals"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <i className="pi pi-dollar  text-3xl lg:text-4xl xl:text-5xl mb-3" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.rent")}
            </p>
          </div>
        </a>

        <a
          href="https://es.surveymonkey.com/r/RentaricaQuieroInvertir"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <FaMoneyBillTrendUp className=" text-3xl lg:text-4xl xl:text-5xl mb-3 mx-auto" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.invest")}
            </p>
          </div>
        </a>

        <a
          href="https://es.surveymonkey.com/r/RenatricaBuscoHogar"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <BiSearchAlt className=" text-3xl lg:text-4xl xl:text-5xl mb-3 m-auto" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.searchHome")}
            </p>
          </div>
        </a>

        <Link
          href={"/assets/documents/Catálogo-Rentarica.pdf"}
          target="_blank"
          download
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <Gi3dStairs className="text-3xl lg:text-4xl xl:text-5xl mb-3 m-auto" />
            <p className=" text-sm md:text-base lg:text-lg font-semibold xl:text-xl">
              {t("register.promoteWithUs")}
            </p>
          </div>
        </Link>
      </div>

      <div className=" w-full flex flex-col items-center justify-center  text-center lg:px-0  px-10 text-lg space-y-4">
        <p className="w-full lg:w-2/3 my-5">{t("register.additionalInfo1")}</p>
        <p>{t("register.additionalInfo2")}</p>
        <p className="font-semibold">{t("register.additionalInfo3")}</p>
      </div>
    </div>
  );
};

export default RegisterProperty;
