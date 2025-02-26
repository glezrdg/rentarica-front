import { Property } from "@/pages/propiedades";
import { API_URL } from "@/utils/constants";
import { noto_200 } from "@/utils/fonts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import PropertyCard from "./Proyects/components/ProjectCard";

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
    <div className="flex flex-col items-center  lg:pb-[10vh]">
      <h1
        className={`text-4xl px-4 text-center md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-5 lg:my-10 lg:mb-16 ${noto_200.className}`}
      >
        {t("home.featuredProperties.title")}
      </h1>
      <div
        className={`container relative mx-auto my-10 grid grid-cols-1 md:grid-cols-2 px-6 lg:px-10 lg:grid-cols-3 xl:grid-cols-4  gap-10 transition-all duration-300 ${
          showAll
            ? "max-h-full"
            : "max-h-[80dvh] md:max-h-[80vh] overflow-hidden "
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

        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
        {!showAll && (
          <div
            onClick={() => router.push("/propiedades")}
            className="absolute bottom-2 place-self-center flex items-center gap-5 -mt-10 text-md lg:text-2xl bg-accent-yellow-base border border-accent-yellow-base  rounded-md shadow-sm px-4 py-2  lg:p-5   cursor-pointer  hover:scale-105 transition-all "
          >
            <h4 className="md:text-xl md:font-semibold">
              {t("home.featuredProperties.button")}
            </h4>
            <FaPlus className="text-xs" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
