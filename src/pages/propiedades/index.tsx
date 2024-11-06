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
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { VscSettings } from "react-icons/vsc";
import { BsHouseCheck } from "react-icons/bs";

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
    sizeMin: 1,
    sizeMax: 5000,
    bathMin: 1,
    bathMax: 6,
  });

  const [visible, setVisible] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    handleGetProperties(filters);
    console.log(properties, "lapropiedade");
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
      console.log(data);
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
      <div className="container px-4 xl:px-0 m-auto mb-10 min-h-[80vh]">
        <div className="grid grid-cols-1  gap-4">
          <h1 className="text-5xl place-self-center font-semibold my-20 ">
            Tu Próxima Inversión Inmobiliaria:
          </h1>
          {/* <div className="hidden lg:flex">
            <FilterProperties filters={filters} updateFilters={updateFilter} />
          </div> */}
          <div className="w-full">
            <div className="flex flex-col  items-center justify-center  gap-2 w-full">
              <div className=" flex items-center shadow-md rounded-3xl h-[50px]  w-full   lg:w-[50vw] border border-slate-200 overflow-hidden mb-10">
                <i className="pi pi-search ml-4 text-xl text-slate-600" />
                <input
                  className="bg-white focus:outline-none !border-none hover:!bg-white focus:!bg-white w-full h-full"
                  placeholder={`${t("properties.search_placeholder")}`}
                  value={filters.title}
                  onChange={(e) => updateFilter("title", e.target.value)}
                />
              </div>
              <div className="flex items-center flex-col lg:flex-row  ">
                <div className=" rounded-md grid grid-cols-4 place-items-center text-xs gap-4 cursor-pointer  my-5 lg:mb-0 lg:mt-0">
                  <div
                    onClick={() => updateFilter("category", "")}
                    className={` px-4 py-2  w-full h-full grid place-items-center ${
                      filters.category === "" &&
                      " border-accent-yellow-base border-b-4 rounded-lg"
                    }`}
                  >
                    <img
                      src="/assets/svgs/house.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                    <p className="text-base font-semibold mt-1">
                      {t("properties.categories.all")}
                    </p>
                  </div>
                  <div
                    className={` px-4 py-2  w-full h-full grid place-items-center ${
                      filters.category === "En venta" &&
                      " border-accent-yellow-base border-b-4 rounded-lg"
                    }`}
                    onClick={() => updateFilter("category", "En venta")}
                  >
                    <img
                      src="/assets/svgs/onsale.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                    <p className="text-base font-semibold mt-1">
                      {t("properties.categories.sale")}
                    </p>
                  </div>
                  <div
                    className={` px-4 py-2  w-full h-full grid place-items-center ${
                      filters.category === "En Alquiler" &&
                      " border-accent-yellow-base border-b-4 rounded-lg"
                    }`}
                    onClick={() => updateFilter("category", "En Alquiler")}
                  >
                    <img
                      src="/assets/svgs/rent.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                    <p className="text-base font-semibold mt-1">
                      {t("properties.categories.rent")}
                    </p>
                  </div>
                  <div
                    className={` px-4 py-2  w-full h-full grid place-items-center ${
                      filters.category === "Terreno" &&
                      " border-accent-yellow-base border-b-4 rounded-lg"
                    }`}
                    onClick={() => updateFilter("category", "Terreno")}
                  >
                    <img
                      src="/assets/svgs/terrain.svg"
                      alt=""
                      className="h-10 w-10"
                    />
                    <p className="text-base font-semibold mt-1">
                      {t("properties.categories.land")}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center self-start mt-10 lg:my-0  lg:self-auto lg:ml-10 cursor-pointer rounded-xl border border-zinc-200 py-2 px-6 lg:px-3"
                  onClick={() => setVisible(true)}
                >
                  <VscSettings className="text-xl mr-2" />
                  <span className="font-semibold transition-all">
                    Más Filtros:
                  </span>
                </div>
              </div>
            </div>

            <div className="grid  w-full md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
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
