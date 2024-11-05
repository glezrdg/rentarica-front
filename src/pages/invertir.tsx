"use client";

import { noto_200, noto_300, noto_thin } from "@/utils/fonts";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const invertir = () => {
  const { t } = useTranslation();
  return (
    <div className="py-28">
      {/* Hero */}
      <div className="w-full h-[70vh] grid place-items-center  background-image-invertir">
        <div className="w-[80%] lg:w-[40%]">
          <h2
            className={`bg-yellow-500 w-fit mb-[2px] text-3xl lg:text-7xl uppercase p-2 ${noto_300.className}`}
          >
            {t("invest_page.banner.title")}
          </h2>
          <div className="z-20">
            <h2
              className={`bg-yellow-500 w-fit text-3xl lg:text-7xl uppercase p-2 z-50 pb-10 ${noto_300.className} `}
            >
              {t("invest_page.banner.title2")}
            </h2>
          </div>
          <div className="-z-10">
            <p
              className={`bg-white text-black text-[52px] pt-7 -mt-8 uppercase  p-2 leading-[60px] ${noto_thin.className}`}
            >
              {t("invest_page.banner.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="text-center mt-16">
        <h2 className={`text-6xl uppercase ${noto_200.className}`}>
          {t("invest_page.consultation_section.title")}
        </h2>

        <div className="w-[60vw] mx-auto mt-16 gap-10 grid">
          <img
            src="https://static.wixstatic.com/media/828c94_e91d4c32bf6242298b29677d0bc1c5b0~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/828c94_28140ea91f934daea51b9dcdf0d319f4~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/828c94_3944dc6b74a4450bb064560085d280ce~mv2.png/v1/fill/w_1200,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Terrenos.png"
            alt=""
          />
        </div>
      </div>

      {/* FERIAS */}
      <div className="bg-white mt-16 text-center">
        <h3 className={`text-4xl text-gray-800 font-semibold mb-10`}>
          {t("invest_page.upcoming_fairs.title")}
        </h3>

        <p className="leading-8 w-[40%] m-auto">
          {t("invest_page.upcoming_fairs.description")}
        </p>

        <div className="w-[70vw] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-16">
          <div className="grid grid-cols-2 gap-4">
            {/* Img */}
            <div>
              <img
                src="https://static.wixstatic.com/media/828c94_4201a7f3fac541c8b9b22322e034c1fc~mv2.jpg/v1/fill/w_345,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pier-6-at-Brooklyn-Bridge-Park.jpg"
                alt=""
                className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
              />
            </div>
            {/* Info */}
            <div className="text-start">
              <h4 className="text-xl mb-2">
                {t("invest_page.upcoming_fairs.event.location")}
              </h4>
              <label className="text-sm">
                {t("invest_page.upcoming_fairs.event.date")}
              </label>
              <label className="text-sm">
                {t("invest_page.upcoming_fairs.event.hour")}
              </label>

              <p className="my-6 text-[13px]">
                {t("invest_page.upcoming_fairs.event.location")}
              </p>

              <label className="text-sm">
                {t("invest_page.upcoming_fairs.contact.phone")}
              </label>
              <label className="text-sm block">
                {t("invest_page.upcoming_fairs.contact.email")}
              </label>

              <button className="flex gap-4 items-center text-sm bg-orange-500 p-3 my-2">
                {t("invest_page.upcoming_fairs.contact.register_button")}
                <FaArrowRight />
              </button>

              {/* Social media */}
              <div className="flex gap-2">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Img */}
            <div>
              <img
                src="https://static.wixstatic.com/media/828c94_4201a7f3fac541c8b9b22322e034c1fc~mv2.jpg/v1/fill/w_345,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pier-6-at-Brooklyn-Bridge-Park.jpg"
                alt=""
                className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
              />
            </div>
            {/* Info */}
            <div className="text-start">
              <h4 className="text-xl mb-2">
                {t("invest_page.upcoming_fairs.event.location")}
              </h4>
              <label className="text-sm">
                {t("invest_page.upcoming_fairs.event.date")}
              </label>
              <label className="text-sm">
                {t("invest_page.upcoming_fairs.event.hour")}
              </label>

              <p className="my-6 text-[13px]">
                {t("invest_page.upcoming_fairs.event.location")}
              </p>

              <label className="text-sm">
                {t("invest_page.upcoming_fairs.contact.phone")}
              </label>
              <label className="text-sm block">
                {t("invest_page.upcoming_fairs.contact.email")}
              </label>

              <button className="flex gap-4 items-center text-sm bg-orange-500 p-3 my-2">
                {t("invest_page.upcoming_fairs.contact.phone")}
                <FaArrowRight />
              </button>

              {/* Social media */}
              <div className="flex gap-2">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <section className="mt-16">
        <h3 className="text-3xl text-gray-800 text-center font-semibold mb-10">
          {t("invest_page.contact_form.title")}
        </h3>
        <form className="bg-white p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[45vw] mx-auto">
          {/* Name and Country/City Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-2">
              <label>{t("invest_page.contact_form.fields.name")}</label>
              <input placeholder={t("invest_page.contact_form.fields.name")} />
            </div>
            <div className="grid gap-2">
              <label>{t("invest_page.contact_form.fields.country_city")}</label>
              <input
                placeholder={t("invest_page.contact_form.fields.country_city")}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="grid gap-2 mb-6">
            <label>{t("invest_page.contact_form.fields.email")}</label>
            <input placeholder={t("invest_page.contact_form.fields.email")} />
          </div>

          {/* Phone Number and Referral Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-2">
              <label>{t("invest_page.contact_form.fields.phone")}</label>
              <input placeholder={t("invest_page.contact_form.fields.phone")} />
            </div>
            <div className="grid gap-2">
              <label>{t("invest_page.contact_form.fields.referral")}</label>
              <Dropdown
                placeholder={t("invest_page.contact_form.fields.referral")}
                options={[]}
              />
            </div>
          </div>

          {/* Promotion Days and Message Fields */}
          <div className="grid gap-6 mb-6">
            <div className="grid gap-2">
              <label>
                {t("invest_page.contact_form.fields.promote_options")}
              </label>
              <div className="grid grid-cols-3 lg:grid-cols-7 gap-3 text-sm mt-2">
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.mon")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.tue")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.wed")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.thu")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.fri")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.sat")}
                </label>
                <label className="flex items-center gap-8">
                  <input type="checkbox" className="!p-2" />{" "}
                  {t("invest_page.contact_form.days.sun")}
                </label>
              </div>
            </div>
            <div className="grid gap-2">
              <textarea
                placeholder={t("invest_page.contact_form.fields.message")}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex mt-12">
            <button className="bg-yellow-500 font-bold w-[20rem] m-auto p-3 text-xl">
              {t("invest_page.contact_form.button")}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default invertir;
