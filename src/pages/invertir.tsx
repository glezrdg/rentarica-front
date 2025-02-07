"use client";

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
        <div className="absolute inset-0 bg-black bg-opacity-50 grid place-content-center text-white">
          <div className="border-l-2 border-white pl-4">
            <h2
              className={` w-full text-4xl md:text-5xl lg:text-7xl uppercase p-2 ${noto_600.className}`}
            >
              {/* {t("invest_page.banner.title")} */}
              Invierte con <br /> Nosotros
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
                className={`text-white text-4xl md:text-5xl lg:text-[52px] pt-7 pb-4 uppercase ${noto_300.className}`}
              >
                {/* {t("invest_page.banner.subtitle")} */}y Haz Crecer tu
                Patrimonio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="text-center pt-20 px-6 bg-orange-100">
        <h2 className={`text-4xl lg:text-6xl uppercase ${noto_300.className}`}>
          {t("invest_page.consultation_section.title")}
        </h2>

        <div className="xl:w-[70%] 2xl:w-1/2 justify-self-center my-7 lg:my-10 lg:mt-20">
          <p className=" text-xs lg:text-lg  text-balance bg-accent-yellow-base p-2 lg:p-4 rounded-lg shadow-md text-black">
            Explora oportunidades únicas de inversión en la República
            Dominicana. Ya sea que estés interesado en terrenos estratégicamente
            ubicados, proyectos en planos, alquiler de naves industriales o la
            adquisición de propiedades terminadas, estamos aquí para guiarte
            hacia inversiones seguras y rentables. Con nuestro equipo de
            expertos, tu inversión estará respaldada por conocimiento,
            experiencia y confianza.
          </p>
        </div>
        <h3 className="text-2xl lg:text-4xl font-semibold my-10 lg:py-10 ">
          Opciones de Inversión:
        </h3>

        {/* <div className="my-10 grid grid-cols-4">
          <div className="relative w-[300px] h-[300px] bg-cover bg-center bg-no-repeat bg-[url('public/.
          assets/invertir_images/terrenos.avif')]">
           
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
              <h2 className="text-xl font-semibold">Terrenos</h2>
              <p className="mt-2 text-center">
                Compra terrenos estratégicamente ubicados en zonas de alto
                crecimiento. Ideales para desarrollos comerciales, residenciales
                o turísticos.
              </p>
            </div>
          </div>
        </div> */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  2xl:w-[80%] gap-10 mx-auto place-items-center w-full mt-20 pb-20">
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              Terrenos
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              Compra terrenos estratégicamente ubicados en zonas de alto
              crecimiento. Ideales para desarrollos comerciales, residenciales o
              turísticos.
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
              Ver Propiedades
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              Proyectos en Planos
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              Invierte en proyectos en etapas iniciales con precios competitivos
              y un alto potencial de revalorización.
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
              Ver Propiedades
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              Naves Industriales
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base text-balance ">
              Alquiler y compra de naves industriales en ubicaciones clave,
              perfectas para negocios logísticos, manufactura o almacenamiento.
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
              Ver Propiedades
            </Link>
          </div>
          <div className="relative group flex items-center justify-center text-center card1">
            <span className="text-xl font-semibold absolute bg-black py-2 px-4 text-white self-start mt-4 rounded-lg z-10">
              Propiedades Terminadas
            </span>
            <span className="absolute group-hover:z-[100] transition-all z-10 opacity-0 group-hover:opacity-100 px-4 text-white  p-2 text-base  text-balance">
              Adquiere propiedades completamente listas para generar ingresos,
              desde apartamentos hasta locales comerciales.
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
              Ver Propiedades
            </Link>
          </div>
        </div>

        {/* <div className="lg:w-[60vw] mx-auto mt-16 gap-10 grid">
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
        </div> */}
      </div>

      <div className="  bg-white text-center flex flex-col-reverse xl:flex-row  items-center px-4 lg:px-0 pt-10  ">
        <img
          src="assets/invertir_images/feria-invertir.jpg"
          className="lg:h-[50dvh] xl:w-1/2 rounded-lg shadow-lg xl:mt-0 mt-10"
          alt=""
        />
        <div className="xl:w-1/2  lg:w-2/3  2xl:w-1/2 pt-10">
          <h1 className="text-2xl 2xl:text-4xl font-semibold">
            {" "}
            Rentarica Real Estate Summit
          </h1>
          <p className="my-5 xl:my-10 text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
            En Rentarica, conectamos sueños con oportunidades a través de
            nuestras ferias inmobiliarias internacionales. Nos enorgullece ser
            un puente entre desarrolladores y expatriados interesados en
            invertir en República Dominicana, creando un espacio donde la
            innovación, el entretenimiento y las oportunidades se encuentran.
          </p>
          <p className=" text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
            Con más de 10 ferias inmobiliarias exitosas, hemos demostrado
            nuestra capacidad para producir eventos que no solo generan
            resultados rentables para nuestros desarrolladores, sino que también
            ofrecen una experiencia unica, enriquecedora y entretenida para
            nuestros asistentes.
          </p>
          <h2 className=" text-2xl 2xl:text-4xl font-semibold my-5 xl:my-10  ">
            Haz realidad tus metas con Rentarica
          </h2>
          <p className=" text-sm mx-4 xl:mx-0 2xl:text-base text-balance">
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
              className="my-4 lg:my-0 mx-6  xl:text-base 2xl:text-lg border-accent-yellow-base  bg-accent-yellow-base rounded-md shadow-md xl:my-2 px-3 py-2 xl:px-6 xl:py-4  border-2 hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105  "
            >
              Organiza tu feria con nosotros
            </Link>
            <Link
              href="https://rentarica.trafico.do/"
              target="_blank"
              className="my-4 lg:my-0 mx-6  xl:text-base 2xl:text-lg border-accent-yellow-base  bg-accent-yellow-base rounded-md shadow-md xl:my-2 px-3 py-2 xl:px-6 xl:py-4  border-2 hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105  "
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
