import React, { useState } from "react";
import { noto } from "@/utils/fonts";

interface IServiceCardProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage: string;
  action?: string;
  route?: string; // For navigation
  fileUrl?: string; // For downloads
  contactEmail?: string; // For contact actions
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  description,
  className,
  backgroundImage,
  action,
  route,
  fileUrl,
  contactEmail,
}) => {
  const [visible, setVisible] = useState(false);

  const handleAction = () => {
    if (action === "Más Info" && route) {
      // Navigate to the specified route
      window.location.href = route;
    } else if (
      (action === "Descargalo aquí" || action === "Nuestros Paquetes") &&
      fileUrl
    ) {
      // Simulate a file download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileUrl.split("/").pop() || "download";
      link.click();
    } else if (
      (action === "Contáctanos" || action === "Cotiza con Nosotros") &&
      contactEmail
    ) {
      // Redirect to a mailto link
      console.log(contactEmail);
      window.location.href = `mailto:${contactEmail}`;
    } else {
      console.warn(`No action defined for: ${action}`);
    }
  };

  return (
    <div
      className={`w-full xl:w-[20dvw] rounded-md shadow-md cursor-pointer snap-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "8px",
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="relative h-[35dvh]  xl:h-[30dvh] w-full">
        {/* Overlay with yellow tint */}
        <div className="absolute inset-0 bg-yellow-500 bg-opacity-40 rounded-md saturate-200 backdrop-contrast-200"></div>

        {/* Title */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 rounded-md text-center flex items-center justify-center text-white text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl uppercase ${noto.className} text-black lg:px-10`}
        >
          <h3>{title}</h3>
        </div>

        {/* Description on hover */}
        <div
          className={`absolute inset-0 bg-black rounded-md bg-opacity-80 flex flex-col items-center justify-center text-white p-4 text-center transition-opacity duration-500 text-base xl:text-lg  ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm 2xl:text-base text-white">{description}</p>
          <button
            className="mt-6 bg-accent-yellow-base font-semibold  px-4 py-2 hover:bg-transparent border border-accent-yellow-base hover:text-accent-yellow-base transition-all  rounded-sm shadow-lg text-black"
            onClick={handleAction}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
