import { noto_200 } from "@/utils/fonts";
import React, { useState } from "react";
import ServiceCard from "./components/ServiceCard";

interface IServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<IServicesProps> = (props) => {
  // const services = [
  //   {
  //     title: "Ferias Internacionales",
  //     description:
  //       "Realizamos Feria Internacionales para desarrolladores interesados en expandir su exposición y lograr mayor venta y rentabilidad en sus proyectos.",
  //     image:
  //       "https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2024%2F01%2Fcompaneros-trabajo-negocios-dandose-mano-reunion-oficina-foco-hombre-negocios-1-scaled.jpg%3Fv%3D25601707&w=3840&q=75",
  //     action: "Más Info",
  //     route: "https://rentarica.trafico.do/", // Example route for navigation
  //   },
  //   {
  //     title: "Venta & Alquiler",
  //     description:
  //       "Facilitamos la venta y alquiler de propiedades de manera rápida y efectiva, conectándote con los mejores compradores e interesados en alquilar tu propiedad.",
  //     image:
  //       "https://www.orienteraiz.co/blog/wp-content/uploads/2016/01/compra-venta-propiedades.jpg",
  //     action: "Contáctanos",
  //     contactEmail: "mailto:info@rentarica.com", // Example contact email
  //   },
  //   {
  //     title: "Administración & Gestión de Reservas",
  //     description:
  //       "Gestionamos y cuidamos de tu propiedad, así como de generar reservas a corto plazo y brindar un servicio al cliente de excelencia, maximizando su rentabilidad y ocupándonos de todos los detalles para garantizar una experiencia sin preocupaciones.",
  //     image:
  //       "https://gestietarcoslada.es/wp-content/uploads/2020/08/administrar-una-finca-de-la-mejor-forma-posible.jpg",
  //     action: "Nuestros Paquetes",
  //     route: "/administracion-gestion", // Example route for navigation
  //     fileUrl: "/assets/documents/Dossier Rentarica General- Propietarios .pdf",
  //   },
  //   {
  //     title: "Concierge",
  //     description:
  //       "Servicio personalizado para cubrir todas tus necesidades y asegurar una experiencia única en cada detalle de tus vacaciones.",
  //     image:
  //       "https://airssist.com/wp-content/uploads/2022/12/hotel-concierge.jpg.webp?_t=1724142992",
  //     action: "Cotiza con Nosotros",
  //     contactEmail: "info@rentarica.com", // Example contact email
  //   },
  //   {
  //     title: "Gestión de Alojamientos para Eventos",
  //     description:
  //       "Gestionamos alojamientos para tus invitados de tus eventos, asegurando un excelente servicio al cliente, comodidad y conveniencia.",
  //     image:
  //       "https://www.casadecampo.com.do/wp-content/uploads/2019/04/flamboyan-conference-groups-meetings.jpg",
  //     action: "Cotiza con Nosotros",
  //     contactEmail: "info@rentarica.com", // Example contact email
  //   },
  //   {
  //     title: "Mano en Llave",
  //     description:
  //       "Ofrecemos un servicio integral que se ocupa de todo, desde la compra de todo lo que necesita tu inmueble, hasta la administración, para que solo te preocupes de disfrutar.",
  //     image:
  //       "https://gesmansoluciones.es/wp-content/uploads/2020/03/proyecto-llave-en-mano-en-malaga.jpg",
  //     action: "Cotiza con Nosotros",
  //     contactEmail: "info@rentarica.com", // Example contact email
  //   },
  //   {
  //     title: "Rentarica Owner's Club",
  //     description:
  //       "Descubre todo los beneficios que Rentarica tiene para ti al unirte a nuestra familia de propietarios y socios.",
  //     image: "https://rentarica.trafico.do/wp-content/uploads/2024/06/4.jpeg",
  //     action: "Descargalo aquí",
  //     fileUrl: "/assets/documents/Presentación Rentarica Owners Club.pdf", // Example file URL for download
  //   },
  //   {
  //     title: "Anúnciate con Nosotros",
  //     description:
  //       "Promociona tu proyecto, propiedad o negocio con nosotros y alcanza una audiencia amplia y cualificada.",
  //     image:
  //       "https://verticalcpa.ca/wp-content/uploads/2022/12/Small-Business-Accounting-Picture-4.jpg",
  //     action: "Cotiza con Nosotros",
  //     contactEmail: "info@rentarica.com", // Example contact email
  //   },
  // ];

  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <section id="services" className="!py-20 my-10 min-h-[100vh]">
      <div className="container m-auto px-4 xl:px-0">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl lg:text-8xl mb-4 ${noto_200.className}`}
          >
            Nuestros Servicios
          </h2>
        </div>

        <div
          className={`relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 m-auto place-items-center h-full w-[80vw] lg:w-[80dvw] xl:px-20 transition-all duration-300 ${
            showAll ? "max-h-full" : "max-h-[70vh] overflow-hidden"
          }`}
        >
          {/* {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              backgroundImage={service.image}
              action={service.action}
              route={service.route}
              fileUrl={service.fileUrl}
              contactEmail={service.contactEmail}
            />
          ))} */}

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
              Ver más
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
