import { noto_300 } from "@/utils/fonts";
import React from "react";

const index = () => {
  return (
    <main className="py-28">
      {/* Hero */}
      <div className="w-full h-[60vh] grid place-items-center bg-[url(https://arichyhomes.com/wp-content/uploads/2023/08/Long-term-rental-villa-in-Cap-Cana-13_1_1.jpg)] background-image">
        <div className="lg:w-[40%]">
          <h2
            className={`bg-white text-5xl uppercase p-2 ${noto_300.className}`}
          >
            Impulsa tu negocio, Crece con nostros
          </h2>
          <p className="bg-black text-white text-lg p-2 leading-8">
            Conoce nuestros nuestros paquetes publicitarios, si te interesa
            alguno favor llena el formulario debajo...
          </p>
          <div className="w-full flex items-center lg:items-start">
            <button className="bg-yellow-500 font-bold w-[20rem] !mx-auto mt-8 p-3 text-xl">
              Catalogo
            </button>
          </div>
        </div>
      </div>

      <div className="grid xl:w-[50vw] container mx-auto p-6 gap-14">
        {/* INFO */}
        <div className="">
          <h1 className="text-4xl font-bold mb-10">
            ¿Quieres Anunciarte con nosotros?
          </h1>

          <p className="text-sm text-justify">
            Tu éxito es nuestra prioridad y, para ayudarte a crecer, necesitamos
            conocer a fondo tu marca, emprendimiento o negocio.
            <br />
            <br />
            Por favor, proporciónanos la máxima información posible al completar
            el siguiente formulario.
            <br />
            <br />
            Si tu propuesta cumple con nuestros requisitos, nos pondremos en
            contacto contigo para explorar las oportunidades de colaboración.
            <br />
            <br />
            En caso contrario, recibirás una notificación vía correo
            electrónico. Agradecemos sinceramente tu interés y tiempo
            dedicado...
          </p>
        </div>
        <form className="bg-white p-6 shadow-md rounded-lg inputs-invertir">
          {/* Nombre del contacto y Compañía */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">
                Nombre del contacto *
              </label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="Nombre y apellido"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold">
                Nombre de la Compañía *
              </label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="Escribelo aquí"
              />
            </div>
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Email *</label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="e.g., email@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Número de tel: *</label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="Escribelo aquí"
              />
            </div>
          </div>

          {/* Página web y Sector */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold">
                Escribe tu página web o rrss:
              </label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="Escribelo aquí"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold">
                Sector al que pertenece la compañía:
              </label>
              <input
                className="border rounded-md p-2 text-sm"
                placeholder="Escribelo aquí"
              />
            </div>
          </div>

          {/* Paquete a adquirir */}
          <div className="grid gap-2 mb-6">
            <label className="text-sm font-semibold">
              ¿Cuál paquete quieres adquirir?
            </label>
            <input
              className="border rounded-md p-2 text-sm"
              placeholder="Escribelo aquí"
            />
          </div>

          {/* Checkboxes y Comentarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="grid gap-3">
              <label className="text-sm font-semibold">
                Escoge dónde te quieres promover: *
              </label>
              <div className="grid gap-2 text-sm">
                {[
                  "Página Web | Home",
                  "Página Web | Compra y Alquila",
                  "Página Web | Invest Now",
                  "Página Web | Consierge",
                  "Mailing",
                  "Entrevista | Radio | RRSS | PW",
                  "Airbnb Property Flyer",
                  "Redes Sociales",
                  "Otro",
                ].map((option, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input type="checkbox" className="checkbox" />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Comentarios */}
            <div className="grid gap-2">
              <label className="text-sm font-semibold">Cuéntanos más...</label>
              <textarea
                className="border rounded-md p-2 text-sm h-32"
                placeholder="Escribe aquí..."
              />
            </div>
          </div>

          {/* Botón de solicitud */}
          <div className="w-full flex mt-12">
            <button className="bg-yellow-500 font-bold w-[20rem] m-auto p-3 text-xl rounded-lg hover:bg-yellow-600 transition-all">
              Solicitar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default index;
