"use client";

import PropertyCard from "@/components/home/Proyects/components/ProjectCard";
import Pagination from "@/components/Pagination";
import FilterProperties from "@/components/properties/FilterProperties";
import { API_URL } from "@/utils/constants";
import { noto_300 } from "@/utils/fonts";
import { queryMapper } from "@/utils/queryMapper";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Slider } from "primereact/slider";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export type Property = {
  _id: string;
  title: string;
  province: string;
  price: string;
  type: string;
  category: string;
  description: string;
  items: string[];
  images: string[];
  bathrooms: number;
  rooms: number;
  size: number;
  floors: number;
};

const index = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    title: "",
    propertyType: "",
    priceMin: 20000,
    priceMax: 8000000,
    bedMin: 1,
    bedMax: 3,
    floorMin: 1,
    floorMax: 3,
    sizeMin: 40,
    sizeMax: 400,
    bathMin: 1,
    bathMax: 6,
  });

  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    handleGetProperties(filters);
  }, [filters]);

  function updateFilter(filterName: string, value: any) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  }

  const handleGetProperties = async (queries?: any) => {
    try {
      const res = await fetch(
        API_URL + "api/properties" + queryMapper(queries)
      );
      const data = await res.json();
      setProperties(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      {/* <Hero /> */}
      <div className="pt-36"></div>

      {/* PROJECTS CARDS */}
      <div className="container px-4 xl:px-0 m-auto mb-10">
        <div className="grid grid-cols-[300px_1fr] gap-4">
          <FilterProperties filters={filters} updateFilters={updateFilter} />
          <div>
            <div className="flex gap-2">
              <div className="flex-2 flex items-center shadow-xl rounded-3xl h-[50px] md:h-[60px] w-[80vw] md:w-[60vw] lg:w-[50vw] border border-slate-200 overflow-hidden mb-4">
                <i className="pi pi-search ml-4 text-xl text-slate-600" />
                <input
                  className="bg-white focus:outline-none !border-none hover:!bg-white focus:!bg-white w-full h-full"
                  placeholder={`${t("properties.search_placeholder")}`}
                  value={filters.title}
                  onChange={(e) => updateFilter("title", e.target.value)}
                />
              </div>
              <div className="flex-1 h-[60px] border border-red-500 rounded-3xl grid grid-cols-4 place-items-center uppercase text-xs overflow-hidden cursor-pointer super-shadow">
                <div
                  onClick={() => updateFilter("category", "")}
                  className={` w-full h-full grid place-items-center ${
                    filters.category === "" && "text-white bg-red-500"
                  }`}
                >
                  <p>{t("properties.categories.all")}</p>
                </div>
                <div
                  className={` w-full h-full grid place-items-center ${
                    filters.category === "En venta" && "text-white bg-red-500"
                  }`}
                  onClick={() => updateFilter("category", "En venta")}
                >
                  <p>{t("properties.categories.sale")}</p>
                </div>
                <div
                  className={` w-full h-full grid place-items-center ${
                    filters.category === "En Alquiler" &&
                    "text-white bg-red-500"
                  }`}
                  onClick={() => updateFilter("category", "En Alquiler")}
                >
                  <p>{t("properties.categories.rent")}</p>
                </div>
                <div
                  className={` w-full h-full grid place-items-center ${
                    filters.category === "Terreno" && "text-white bg-red-500"
                  }`}
                  onClick={() => updateFilter("category", "Terreno")}
                >
                  <p>{t("properties.categories.land")}</p>
                </div>
              </div>
            </div>

            <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-10">
              {properties.length ? (
                <>
                  {properties.map((p) => (
                    <PropertyCard property={p} />
                  ))}
                </>
              ) : (
                <div className="col-span-3 py-8">
                  <p className="text-center">{t("properties.no_results")}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default index;
