import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SolarForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const { firstName, lastName, email, phone, message } = formData;
    const apiKey = process.env.NEXT_PUBLIC_TRELLO_API_KEY;
    const apiToken = process.env.NEXT_PUBLIC_TRELLO_API_TOKEN;
    const idList = process.env.NEXT_PUBLIC_TRELLO_LIST_ID;

    const description = `
      Nombre: ${firstName} ${lastName}
      Email: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
     
    `;

    const url = `https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${apiToken}&name=${firstName}&desc=${description}`;

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-100 flex items-center flex-col ">
      {/* Hero Section */}
      <div className="bg-green-800 rounded-lg shadow-md  container text-white mt-[12dvh]">
        <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src="/assets/home_images/paneles.avif"
            alt="Paneles Solares"
            className="rounded-lg place-self-start"
          />
          <div>
            <h1 className="text-6xl font-bold mb-4">
              💡 Ilumina tu mundo con energía limpia y renovable. 💡
            </h1>
            <p className="text-2xl text-accent-yellow-base">
              Descubre cómo nuestros{" "}
              <span className="font-semibold">paneles solares</span> pueden
              hacer la diferencia.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className=" container my-20  grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="text-gray-700">
          <h2 className="text-5xl font-semibold mb-4">¡Cotiza con nosotros!</h2>
          <div className="text-xl">
            <p className="mb-6">
              Déjanos tus datos y en breve estaremos comunicándonos contigo...
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> 809-780-7577
            </p>
            <p>
              <strong>Correo:</strong> Jorge@rentarica.com
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="bg-white shadow-md p-6 rounded-lg mr-5"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Nombre *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Apellido *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium">Correo *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium">Tel: *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-medium">Mensaje:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolarForm;
