import React, { useState } from "react";
import { noto } from "@/utils/fonts";

interface IServiceCardProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  description,
  className,
  backgroundImage,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`w-full lg:w-[20dvw] rounded-md shadow-md  cursor-pointer snap-center  ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="relative h-[35dvh]  lg:h-[20dvh] xl:h-[30dvh] w-full ">
        {/* Overlay with yellow tint */}
        <div className="absolute inset-0 bg-yellow-500 bg-opacity-40 saturate-200 backdrop-contrast-200"></div>

        {/* Title */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 text-center flex items-center justify-center text-white text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl  uppercase  ${noto.className}  text-black lg:px-10`}
        >
          <h3>{title}</h3>
        </div>

        {/* Description on hover */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white p-4 text-center transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
