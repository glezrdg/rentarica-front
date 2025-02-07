import ScrollWithOffsetLink from "@/hooks/ScrollWithOffsetLink";
import i18n from "@/utils/i18";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandAirbnb } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { pathname } = useRouter();
  const [mobileNav, setMobileNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const [language, setLanguage] = useState("ES");
  const { t } = useTranslation();

  useEffect(() => {
    setActiveLink(pathname.split("home.header./")[1]);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleLanguageChange = (e: any) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage.toLowerCase()); // 'es' for Spanish, 'en' for English
  };

  return (
    <header
      className={`fixed w-[100vw] bg-white z-50 transition-all duration-300 h-[100px]${
        scrollNav ? " text-black shadow-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between h-full  container m-auto px-4 lg:px-0">
        {/* LOGO */}
        <ScrollWithOffsetLink offset={80} href={"/#home"}>
          <img
            className="w-[140px] md:w-[180px]"
            src={`https://static.wixstatic.com/media/ae56f5_2c84bc9055b94c9b97193cea332fe85e~mv2.png/v1/fill/w_248,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201.png`}
          />
        </ScrollWithOffsetLink>

        {/* NAVIGATION ScrollWithOffsetLinkS */}
        <ul className="items-center gap-5 lg:gap-8  hidden lg:flex ml-14 text-sm xl:text-base mt-4">
          <Link
            href={"/propiedades"}
            className={`cursor-pointer transition-all flex items-center${
              activeLink === "projects"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className="bg-[#8b0000] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.buy_rent")}
          </Link>
          <Link
            href={"/register"}
            className={`cursor-pointer transition-all flex items-center ${
              activeLink === "register"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className=" bg-[#ffc200] rounded-full w-3 h-3 mr-2"></div>
            {t("home.header.register_property")}
          </Link>
          <Link
            href={"/invertir"}
            className={`cursor-pointer transition-all flex items-center ${
              activeLink === "invertir"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className="bg-[#25318d] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.invest_now")}
          </Link>
          <Link
            href={"https://rentarica.trafico.do/"}
            className="cursor-pointer transition-all flex items-center"
            target="_blank"
          >
            <div className=" bg-[#7c4810] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.fair")}
          </Link>
        </ul>
        <div className="flex items-center mt-4 ">
          <Dropdown
            className="h-9 mr-3 font-semibold flex items-center"
            options={["ES", "EN", "FR", "ZH"]}
            value={language}
            onChange={handleLanguageChange}
          />
          {/* AIRBNB */}
          <Link
            href={"https://www.airbnb.com/users/486228112/listings"}
            className="items-center font-bold text-[#ff5a5f] xl:mx-4 md:flex hidden  transition-all"
            target="_blank"
          >
            <TbBrandAirbnb className=" text-3xl mr-2 hover:scale-105 transition-all" />{" "}
            <span className="transition-all xl:flex hidden">Airbnb</span>
          </Link>
          {/* WHATSAPP */}

          <Link
            href={"https://wa.me/18098936553"}
            className="items-center font-bold text-[#25d366] mx-2 md:flex hidden  "
            target="_blank"
          >
            <IoLogoWhatsapp className=" text-3xl mr-2 hover:scale-105 transition-all" />{" "}
            <span className="transition-all xl:flex hidden">Whatsapp</span>
          </Link>
          <RxHamburgerMenu
            onClick={() => setMobileNav(!mobileNav)}
            className={` lg:!hidden ml-10 mr-4  border-black  rounded-full  h-8 w-8  focus:text-accent-yellow-base focus:border-accent-yellow-base`}
          />
        </div>
      </nav>

      <div
        className={`fixed lg:hidden w-[100vw] h-[100vh] bg-white bg-opacity-95 transition-all  z-[5000] ${
          mobileNav ? "right-0" : "!right-full"
        } `}
      >
        <ul className="grid h-[70%] place-items-center text-black font-bold gap-0 lg:gap-8 mt-10 text-xl">
          <Link
            onClick={() => {
              setMobileNav(false);
            }}
            href={"/propiedades"}
            className={`cursor-pointer transition-all flex items-center${
              activeLink === "projects"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className="bg-[#8b0000] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.buy_rent")}
          </Link>
          <Link
            onClick={() => {
              setMobileNav(false);
            }}
            href={"/register"}
            className={`cursor-pointer transition-all flex items-center ${
              activeLink === "register"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className=" bg-[#9b4b4f] rounded-full w-3 h-3 mr-2"></div>
            {t("home.header.register_property")}
          </Link>
          <Link
            onClick={() => {
              setMobileNav(false);
            }}
            href={"/invertir"}
            className={`cursor-pointer transition-all flex items-center ${
              activeLink === "invertir"
                ? "bg-yellow-500 text-white p-2 rounded-2xl"
                : ""
            }`}
          >
            <div className="bg-[#25318d] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.invest_now")}
          </Link>
          <Link
            onClick={() => {
              setMobileNav(false);
            }}
            href={"https://rentarica.trafico.do/"}
            className="cursor-pointer transition-all flex items-center"
            target="_blank"
          >
            <div className=" bg-[#7c4810] rounded-full w-3 h-3 mr-2"></div>

            {t("home.header.fair")}
          </Link>
          {/* AIRBNB */}
          <Link
            href={"https://www.airbnb.com/users/486228112/listings"}
            className="flex text-[#ff5a5f]"
            target="_blank"
          >
            <TbBrandAirbnb className=" text-3xl mr-2" />{" "}
            <span className="transition-all"> Airbnb</span>
          </Link>
          {/* WHATSAPP */}
          <Link
            href={"https://wa.me/18099028318"}
            className="flex text-[#25d366]"
            target="_blank"
          >
            <IoLogoWhatsapp className=" text-3xl mr-2" />{" "}
            <span className="transition-all"> Whatsapp</span>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
