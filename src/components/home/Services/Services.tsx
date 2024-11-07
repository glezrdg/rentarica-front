import { noto_200 } from "@/utils/fonts";
import React from "react";
import ServiceCard from "./components/ServiceCard";

interface IServicesProps {
  children?: React.ReactNode;
}

const Services: React.FC<IServicesProps> = (props) => {
  const services = [
    {
      title: "Concierge",
      description:
        "Servicio personalizado para cubrir todas tus necesidades y asegurar una experiencia única en cada detalle de tu estadía.",
      image:
        "https://airssist.com/wp-content/uploads/2022/12/hotel-concierge.jpg.webp?_t=1724142992",
    },
    {
      title: "Venta",
      description:
        "Facilitamos la venta de propiedades de manera rápida y efectiva, conectándote con los mejores compradores.",
      image:
        "https://www.orienteraiz.co/blog/wp-content/uploads/2016/01/compra-venta-propiedades.jpg",
    },
    {
      title: "Alquila",
      description:
        "Encuentra el alquiler perfecto adaptado a tus necesidades y presupuesto, con una variedad de propiedades en las mejores ubicaciones.",
      image:
        "https://morillosurielabogados.b-cdn.net/wp-content/uploads/2017/09/consideraciones-legales-para-alquilar-tu-vivienda-inmueble-a-turistas-o-extranjeros.jpg",
    },
    {
      title: "Administramos",
      description:
        "Gestionamos y cuidamos de tu propiedad para maximizar su rentabilidad, ocupándonos de todos los detalles.",
      image:
        "https://gestietarcoslada.es/wp-content/uploads/2020/08/administrar-una-finca-de-la-mejor-forma-posible.jpg",
    },
    {
      title: "Gestión de Reservas",
      description:
        "Nos encargamos de todas las reservas y de brindar un servicio al cliente excepcional para garantizar una experiencia sin preocupaciones.",
      image:
        "https://partnerships.booking.com/sites/default/files/styles/magazine_desktop/public/2020-07/why_us_business.jpg.webp?itok=2k_jKbqh",
    },
    {
      title: "Mano en llave",
      description:
        "Ofrecemos un servicio integral que se ocupa de todo, desde la compra hasta la administración, para que solo te preocupes de disfrutar.",
      image:
        "https://gesmansoluciones.es/wp-content/uploads/2020/03/proyecto-llave-en-mano-en-malaga.jpg",
    },
    {
      title: "Anúnciate Aquí",
      description:
        "Promociona tu propiedad o negocio con nosotros y alcanza una audiencia amplia y cualificada.",
      image:
        "https://verticalcpa.ca/wp-content/uploads/2022/12/Small-Business-Accounting-Picture-4.jpg",
    },
    {
      title: "Ferias internacionales",
      description:
        "Participamos en las ferias inmobiliarias más importantes para promocionar tu propiedad a nivel global.",
      image:
        "https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2024%2F01%2Fcompaneros-trabajo-negocios-dandose-mano-reunion-oficina-foco-hombre-negocios-1-scaled.jpg%3Fv%3D25601707&w=3840&q=75",
    },
    {
      title: "Alojamientos Para Eventos",
      description:
        "Proveemos alojamientos de calidad para eventos especiales, asegurando comodidad y conveniencia.",
      image:
        "https://www.casadecampo.com.do/wp-content/uploads/2019/04/flamboyan-conference-groups-meetings.jpg",
    },
    {
      title: "Promos | Descuentos",
      description:
        "Descubre nuestras promociones y descuentos exclusivos para obtener el mejor valor en tu inversión inmobiliaria.",
      image:
        "https://media.istockphoto.com/id/1470006282/photo/for-sale-real-estate-sign-in-front-of-new-house.jpg?s=612x612&w=0&k=20&c=fZV_4dxnMhc3nYE1ETFLiaYzn04JPMscHbV8wh2Xn6Q=",
    },
  ];

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
          className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 gap-8  mt-20 m-auto place-items-center h-[70vh] overflow-y-scroll w-[80vw] lg:w-[80dvw] xl:px-20 
         snap-y scroll-smooth scroll-services
        "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              backgroundImage={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
