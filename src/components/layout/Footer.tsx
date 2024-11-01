import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation");

  return (
    <footer className="bg-black py-10">
      <div className="container xl:!w-[70%] m-auto grid grid-cols-2">
        <div className="text-white grid gap-12">
          <div>
            <h3 className="flex items-center gap-4 text-xl mb-12">
              <span className="w-4 h-4 rounded-full bg-orange-700 block"></span>
              {t("footer.menu.title")}
            </h3>

            <ul className="space-y-3 pl-2">
              <Link href={"/#perfil"} className="block">
                {t("footer.menu.home")}
              </Link>
              <Link href={"/#services"} className="block">
                {t("footer.menu.invest_with_us")}
              </Link>
              <Link href={"/#projects"} className="block">
                {t("footer.menu.rentarica_fair")}
              </Link>
              <Link href={"/#contact"} className="block">
                {t("footer.menu.register_property")}
              </Link>
              <Link href={"/#contact"} className="block">
                {t("footer.menu.advertise_with_us")}
              </Link>
              <Link href={"/#contact"} className="block">
                {t("footer.menu.solar_panels")}
              </Link>
              <Link href={"/#contact"} className="block">
                {t("footer.menu.properties")}
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-4 text-xl mb-12">
              <span className="w-4 h-4 rounded-full bg-yellow-400 block"></span>
              {t("footer.contact.title")}
            </h3>

            <ul className="space-y-3 pl-2 text-lg">
              <li>{t("footer.contact.phone")}</li>
              <li>{t("footer.contact.email")}</li>
            </ul>
          </div>
        </div>

        <div className="text-white w-full justify-items-end">
          <h3 className="flex items-center gap-4 text-xl mb-12 w-3/4">
            <span className="w-4 h-4 rounded-full bg-white block"></span>
            {t("footer.message_form.title")}
          </h3>

          <form className="w-[70%] space-y-8">
            <div className="flex flex-col">
              <label>{t("footer.message_form.name")}</label>
              <input className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none " />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.last_name")}</label>
              <input className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none " />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.email")}</label>
              <input className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none " />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.phone_number")}</label>
              <input className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none " />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.event_info")}</label>
              <input
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none "
                placeholder={t("footer.message_form.placeholder")}
              />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.message")}</label>
              <textarea className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none " />
            </div>
            <button className="bg-yellow-500 p-2 text-xl w-32 text-black">
              {t("footer.message_form.submit")}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
