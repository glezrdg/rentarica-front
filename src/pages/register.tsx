"use client";

import React from "react";
import Link from "next/link";
import { GiIsland } from "react-icons/gi";
import { FaHouseChimney, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { Gi3dStairs } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const RegisterProperty = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 container mx-auto">
      {/* ABOUT */}
      <div className="grid grid-cols-2">
        <div className="text-justify place-content-center">
          <div className="text-5xl text-start font-bold mb-6">
            <h1>{t("register_property.title")}</h1>
          </div>
          <p className="mb-3">{t("register_property.intro")}</p>
          <p className="mb-3">{t("register_property.instructions")}</p>
          <p>{t("register_property.cta")}</p>
        </div>
        <div>
          <img src="/Apartment.png" alt="Apartment" />
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-3 h-[400px] gap-4 mb-16">
        <div className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500">
          <div className="text-center">
            <FaHouseChimney className="text-5xl mb-3 m-auto" />
            <p className="text-xl">
              {t("register_property.buttons.sell_property")}
            </p>
          </div>
        </div>

        <div className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500">
          <div className="text-center">
            <GiIsland className="text-5xl mb-3 m-auto" />
            <p className="text-xl">
              {t("register_property.buttons.sell_land")}
            </p>
          </div>
        </div>

        <div className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500">
          <div className="text-center">
            <i className="pi pi-dollar text-5xl mb-3" />
            <p className="text-xl">
              {t("register_property.buttons.rent_property")}
            </p>
          </div>
        </div>

        <div className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500">
          <div className="text-center">
            <FaMoneyBillTrendUp className="text-5xl mb-3" />
            <p className="text-xl">{t("register_property.buttons.invest")}</p>
          </div>
        </div>

        <div className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500">
          <div className="text-center">
            <BiSearchAlt className="text-5xl mb-3 m-auto" />
            <p className="text-xl">
              {t("register_property.buttons.find_home")}
            </p>
          </div>
        </div>

        <Link
          href="/services/anunciate"
          className="grid place-items-center bg-white super-shadow rounded-t-3xl transition-all duration-300 hover:shadow-orange-200 hover:text-orange-500"
        >
          <div className="text-center">
            <Gi3dStairs className="text-5xl mb-3 m-auto" />
            <p className="text-xl">
              {t("register_property.buttons.advertise")}
            </p>
          </div>
        </Link>
      </div>

      <div className="w-3/4 text-lg space-y-4">
        <p>{t("register_property.additional_info.text")}</p>
        <p>{t("register_property.additional_info.closing")}</p>
        <p>{t("register_property.additional_info.thank_you")}</p>
      </div>
    </div>
  );
};

export default RegisterProperty;
