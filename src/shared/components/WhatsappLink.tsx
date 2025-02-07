import Link from "next/link";
import { useRouter } from "next/router";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppLink = ({ propertyName }: any) => {
  // Obtener la información de la ruta
  const router = useRouter();

  // Construir URL base y ruta actual
  const baseUrl = "https://rentarica-front.vercel.app";
  const fullPath = `${baseUrl}${router.asPath}`; // Ruta completa con parámetros dinámicos

  // Crear el mensaje dinámico
  const message = `Hola, estoy interesado en la propiedad "${propertyName}". Puedes obtener más detalles en: ${fullPath}`;

  // Codificar el mensaje para la URL de WhatsApp
  const encodedMessage = encodeURIComponent(message);

  // URL completa para WhatsApp
  const whatsappUrl = `https://wa.me/18098936553?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      className="items-center font-bold text-[#25d366] mx-2 flex  mt-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoWhatsapp className="text-3xl mr-2 hover:scale-105 transition-all" />{" "}
      <span className="transition-all text-2xl 2xl:text-3xl">Whatsapp</span>
    </Link>
  );
};

export default WhatsAppLink;
