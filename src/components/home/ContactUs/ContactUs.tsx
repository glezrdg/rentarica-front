import React, { useState } from "react";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import WhatsAppLink from "@/shared/components/WhatsappLink";

interface IContactUsProps {
  children?: React.ReactNode;
  bg?: string;
}

const ContactUs: React.FC<IContactUsProps> = ({ bg }) => {
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
    <section
      id="contact"
      className={`py-20 ${bg && bg}  flex flex-col items-center`}
    >
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <span className="w-4 h-4 rounded-full bg-black"></span>

          <h1 className="font-bold text-4xl ml-4">Contáctanos</h1>
        </div>
        <p className="text-slate-800 text-lg">
          ¿Tienes dudas? Para consultas o más información sobre nuestros
          servicios, ¡envíanos un mensaje!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/2 grid grid-cols-2 gap-7 mb-10"
      >
        <div className="flex flex-col">
          <label>{t("footer.message_form.name")}</label>
          <input
            {...register("name", { required: true })}
            className="!bg-transparent border-b-2 border-black rounded-none focus:outline-none mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label>{t("footer.message_form.last_name")}</label>
          <input
            {...register("lastName", { required: true })}
            className="!bg-transparent border-b-2 border-black rounded-none focus:outline-none mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label>{t("footer.message_form.email")}</label>
          <input
            {...register("email", { required: true })}
            className="!bg-transparent border-b-2 border-black rounded-none focus:outline-none mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label>{t("footer.message_form.phone_number")}</label>
          <input
            {...register("phoneNumber")}
            className="!bg-transparent border-b-2 border-black rounded-none focus:outline-none mt-2"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label>{t("footer.message_form.message")}</label>
          <textarea
            {...register("message")}
            className="!bg-transparent border-b-2 border-black rounded-none focus:outline-none mt-2"
          />
        </div>

        <div className="flex items-center w-full justify-end col-span-2">
          <button className="ml-4 bg-accent-yellow-base rounded-sm shadow-md border-2 border-accent-yellow-base hover:border-accent-yellow-base font-semibold hover:bg-black hover:text-accent-yellow-base transition-all hover:scale-105 p-2 text-lg w-32 text-black self-end place-self-end col-span-2">
            {t("footer.message_form.submit")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
