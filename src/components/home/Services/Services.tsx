import { noto_200 } from "@/utils/fonts";
import React, { useState } from "react";
import ServiceCard from "./components/ServiceCard";
import { useTranslation } from "react-i18next";

interface IServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<IServicesProps> = (props) => {
  const services = [
    {
      title: "home.services.serviceCards.internationalFairs",
      description: "home.services.serviceCards.internationalFairsDescription",
      action: "home.services.serviceCards.internationalFairsAction",
      image:
        "https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2024%2F01%2Fcompaneros-trabajo-negocios-dandose-mano-reunion-oficina-foco-hombre-negocios-1-scaled.jpg%3Fv%3D25601707&w=3840&q=75",
      route: "https://rentarica.trafico.do/",
    },
    {
      title: "home.services.serviceCards.salesAndRentals",
      description: "home.services.serviceCards.salesAndRentalsDescription",
      action: "home.services.serviceCards.salesAndRentalsAction",
      image:
        "https://www.orienteraiz.co/blog/wp-content/uploads/2016/01/compra-venta-propiedades.jpg",
      contactEmail: "mailto:info@rentarica.com",
    },
    {
      title: "home.services.serviceCards.administrationAndReservations",
      description:
        "home.services.serviceCards.administrationAndReservationsDescription",
      action: "home.services.serviceCards.administrationAndReservationsAction",
      image:
        "https://gestietarcoslada.es/wp-content/uploads/2020/08/administrar-una-finca-de-la-mejor-forma-posible.jpg",
      route: "/administracion-gestion",
      fileUrl: "/assets/documents/Dossier Rentarica General- Propietarios .pdf",
    },
    {
      title: "home.services.serviceCards.concierge",
      description: "home.services.serviceCards.conciergeDescription",
      action: "home.services.serviceCards.conciergeAction",
      image:
        "https://airssist.com/wp-content/uploads/2022/12/hotel-concierge.jpg.webp?_t=1724142992",
      contactEmail: "mailto:info@rentarica.com",
    },
    {
      title: "home.services.serviceCards.eventAccommodationManagement",
      description:
        "home.services.serviceCards.eventAccommodationManagementDescription",
      action: "home.services.serviceCards.eventAccommodationManagementAction",
      image:
        "https://www.casadecampo.com.do/wp-content/uploads/2019/04/flamboyan-conference-groups-meetings.jpg",
      contactEmail: "mailto:info@rentarica.com",
    },
    {
      title: "home.services.serviceCards.turnkey",
      description: "home.services.serviceCards.turnkeyDescription",
      action: "home.services.serviceCards.turnkeyAction",
      image:
        "https://gesmansoluciones.es/wp-content/uploads/2020/03/proyecto-llave-en-mano-en-malaga.jpg",
      contactEmail: "mailto:info@rentarica.com",
    },
    {
      title: "home.services.serviceCards.rentaricaOwnersClub",
      description: "home.services.serviceCards.rentaricaOwnersClubDescription",
      action: "home.services.serviceCards.rentaricaOwnersClubAction",
      image: "https://rentarica.trafico.do/wp-content/uploads/2024/06/4.jpeg",
      fileUrl: "/assets/documents/Presentación Rentarica Owners Club.pdf",
    },
    {
      title: "home.services.serviceCards.advertiseWithUs",
      description: "home.services.serviceCards.advertiseWithUsDescription",
      action: "home.services.serviceCards.advertiseWithUsAction",
      image:
        "https://verticalcpa.ca/wp-content/uploads/2022/12/Small-Business-Accounting-Picture-4.jpg",
      fileUrl: "/assets/documents/Catálogo-Rentarica.pdf",
    },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <section id="services" className="!py-20 my-10 min-h-[100vh]">
      <div className="container m-auto px-4 xl:px-0">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl lg:text-8xl mb-4 ${noto_200.className}`}
          >
            {t("home.services.title")}
          </h2>
        </div>

        <div
          className={`relative grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 m-auto place-items-center h-full w-[80dvw]  xl:px-20 transition-all duration-300 ${
            showAll ? "max-h-full" : "max-h-[70vh] overflow-hidden"
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={t(service.title)}
              description={t(service.description)}
              action={t(service.action)}
              backgroundImage={service.image}
              route={service.route}
              fileUrl={service.fileUrl}
              contactEmail={service.contactEmail}
            />
          ))}

          {/* Difuminado */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>

        {/* Botón para ver más */}
        {!showAll && (
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="mt-8 bg-accent-yellow-base border border-accent-yellow-base text-lg font-semibold  cursor-pointer  hover:scale-105 transition-all rounded-md shadow-sm px-4 py-2   "
            >
              {t("home.services.button")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
