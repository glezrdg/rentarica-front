import { Property } from "@/pages/propiedades";
import React, { useEffect, useState } from "react";
import PropertyCard from "./Proyects/components/ProjectCard";
import { useTranslation } from "react-i18next";
import { queryMapper } from "@/utils/queryMapper";
import { API_URL } from "@/utils/constants";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { noto_200 } from "@/utils/fonts";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    handleGetProperties();
  }, []);

  const handleGetProperties = async () => {
    try {
      const res = await fetch(API_URL + "api/properties");
      const data = await res.json();
      setProperties(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[10vh] lg:pb-[10vh]">
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-5 lg:my-10 lg:mb-16 ${noto_200.className}`}
      >
        Propiedades Destacadas
      </h1>
      <div
        className={`container relative mx-auto my-10 grid grid-cols-1 md:grid-cols-2 px-6 lg:px-10 lg:grid-cols-3 xl:grid-cols-4  gap-10 transition-all duration-300 ${
          showAll ? "max-h-full" : "max-h-[70vh] overflow-hidden"
        } `}
      >
        {properties.length ? (
          <>
            {properties.map((p) => (
              <PropertyCard key={p.title} property={p} />
            ))}
          </>
        ) : (
          <div className="col-span-3 py-8">
            <p className="text-center">{t("properties.no_results")}</p>
          </div>
        )}

        {/* Difuminado en la parte inferior */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
        {!showAll && (
          <div
            onClick={() => router.push("/propiedades")}
            className="absolute bottom-5 place-self-center flex items-center gap-5 -mt-10 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-lg shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:scale-105 transition-all "
          >
            <h4 className="text-xl font-semibold">Ver mas propiedades</h4>
            <FaPlus className="text-xs" />
          </div>
        )}
      </div>

      {/* Botón para ver más */}
    </div>
  );
};

export default FeaturedProperties;
