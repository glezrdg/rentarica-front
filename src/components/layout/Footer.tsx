import SocialMedia from "@/shared/components/SocialMedia";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const { t } = useTranslation("translation");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const { name, lastName, email, phoneNumber, message, eventInfo } = data;
    const apiKey = process.env.NEXT_PUBLIC_TRELLO_API_KEY;
    const apiToken = process.env.NEXT_PUBLIC_TRELLO_API_TOKEN;
    const idList = process.env.NEXT_PUBLIC_TRELLO_LIST_ID;

    const description = `
      Nombre: ${name} ${lastName}
      Email: ${email}
      Teléfono: ${phoneNumber}
      Mensaje: ${message}
      Información del Evento: ${eventInfo}
    `;

    const url = `https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${apiToken}&name=${name}&desc=${description}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      if (response.ok) {
        toast.success("Mensaje exitoso!");
        reset(); // Resetea el formulario después de enviarlo
      } else {
        toast.error("Mensaje fallido, escribenos en whatsapp!");
      }
    } catch (error) {
      console.error("Error en la conexión con la API", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <footer className="bg-black py-10 relative pb-[15vh] lg:pb-0">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="container xl:!w-[70%] m-auto grid grid-col-1 lg:grid-cols-10 text-white px-5 gap-10 lg:gap-0 ">
        <div className="col-span-3">
          <h3 className="flex items-center gap-4 text-xl mb-12">
            <span className="w-4 h-4 rounded-full bg-yellow-400 block"></span>
            {t("footer.contact.title")}
          </h3>
          <ul className="space-y-3 pl-2 text-lg">
            <li>{t("footer.contact.phone")}</li>
            <li>{t("footer.contact.email")}</li>
          </ul>
          <div className="mt-10 absolute bottom-7">
            <SocialMedia />
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="flex items-center gap-4 text-xl mb-12 ">
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
            <Link href={"/panelessolares"} className="block">
              {t("footer.menu.solar_panels")}
            </Link>
            <Link href={"/#contact"} className="block">
              {t("footer.menu.properties")}
            </Link>
          </ul>
        </div>

        <div className="text-white w-full justify-items-end col-span-4">
          <h3 className="flex items-center gap-4 text-xl mb-12 text-start justify-self-start">
            <span className="w-4 h-4 rounded-full bg-white block"></span>
            {t("footer.message_form.title")}
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full grid grid-cols-2 gap-7 mb-10"
          >
            <div className="flex flex-col">
              <label>{t("footer.message_form.name")}</label>
              <input
                {...register("name", { required: true })}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.last_name")}</label>
              <input
                {...register("lastName", { required: true })}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.email")}</label>
              <input
                {...register("email", { required: true })}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label>{t("footer.message_form.phone_number")}</label>
              <input
                {...register("phoneNumber")}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label>{t("footer.message_form.message")}</label>
              <textarea
                {...register("message")}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label>{t("footer.message_form.event_info")}</label>
              <input
                {...register("eventInfo")}
                className="!bg-transparent border-b-2 border-white rounded-none focus:outline-none mt-2"
              />
            </div>
            <button className="bg-yellow-500 p-2 text-xl w-32 text-black self-end place-self-end col-span-2">
              {t("footer.message_form.submit")}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
