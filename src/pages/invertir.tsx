"use client";

import { noto_200, noto_300, noto_thin } from "@/utils/fonts";
import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const invertir = () => {
  const { t } = useTranslation();
  return (
    <div className="py-28 ">
      {/* Hero */}
      <div className="w-full h-[50dvh] lg:h-[70vh] grid place-items-center  background-image-invertir">
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
              className={`bg-white text-black text-4xl lg:text-[52px] pt-7 -mt-8 uppercase  p-2 lg:leading-[60px] ${noto_thin.className}`}
            >
              {t("invest_page.banner.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="text-center mt-16 px-6">
        <h2 className={`text-4xl lg:text-6xl uppercase ${noto_200.className}`}>
          {t("invest_page.consultation_section.title")}
        </h2>

        <div className="lg:w-[60vw] mx-auto mt-16 gap-10 grid">
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

      <div className="bg-white mt-16 text-center flex items-center flex-col mb-40 ">
        <div className="w-full mx-4 lg:w-2/3 xl:w-[60%] 2xl:w-1/2">
          <h1 className="text-2xl xl:text-4xl font-semibold">
            {" "}
            Rentarica Real Estate Summit
          </h1>
          <p className="my-10 text-sm mx-4 xl:mx-0 xl:text-lg">
            En Rentarica, conectamos sueños con oportunidades a través de
            nuestras ferias inmobiliarias internacionales. Nos enorgullece ser
            un puente entre desarrolladores y expatriados interesados en
            invertir en República Dominicana, creando un espacio donde la
            innovación, el entretenimiento y las oportunidades se encuentran.
          </p>
          <p className="mb-10 text-sm mx-4 xl:mx-0 xl:text-lg">
            Con más de 10 ferias inmobiliarias exitosas, hemos demostrado
            nuestra capacidad para producir eventos que no solo generan
            resultados rentables para nuestros desarrolladores, sino que también
            ofrecen una experiencia unica, enriquecedora y entretenida para
            nuestros asistentes.
          </p>
          <span className=" text-xl xl:text-3xl font-semibold my-5 mb-10">
            Haz realidad tus metas con Rentarica
          </span>
          <p className="mt-10 text-sm mx-4 xl:mx-0 xl:text-lg">
            <span>
              ¿Deseas organizar una feria internacional con nosotros o encontrar
              la propiedad de tus sueños?
            </span>
            Estamos aquí para asesorarte en cada paso del camino. Con Rentarica,
            cada evento y cada inversión cuentan con la experiencia y compromiso
            de un equipo dedicado a tu éxito. ¿Listo para comenzar?
          </p>
          <div className="flex flex-col md:flex-row  items-center w-full mt-12 xl:mt-20 justify-center text-base xl:text-xl">
            <Link
              href="assets/documents/Dossier Rentarica General- Propietarios .pdf"
              target="_blank"
              download
              className="mx-6 bg-accent-yellow-base rounded-md shadow-md my-2 px-6 py-4 hover:bg-transparent border border-accent-yellow-base hover:text-accent-yellow-base transition-all hover:scale-105  font-semibold"
            >
              Organiza tu feria con nosotros
            </Link>
            <Link
              href="https://rentarica.trafico.do/"
              target="_blank"
              className="mx-6  bg-accent-yellow-base rounded-md shadow-md my-2 px-6 py-4 hover:bg-transparent border border-accent-yellow-base hover:text-accent-yellow-base transition-all hover:scale-105  font-semibold"
            >
              Quiero Mi Próxima Propiedad
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16"></section>
    </div>
  );
};

export default invertir;
