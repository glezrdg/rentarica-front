"use client";

import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropertyTypeSelector from "./PropertiesType";
import PropertyFeaturesSelector from "./PropertyFeaturesSelector";

const zones = [
  {
    label: "Santo Domingo y Santiago",
    code: "DO",
    items: [
      { label: "Santo Domingo Centro", value: "Santo Domingo Centro" },
      { label: "Santo Domingo Este", value: "Santo Domingo Este" },
      { label: "Santo Domingo Norte", value: "Santo Domingo Norte" },
      { label: "Santo Domingo Oeste", value: "Santo Domingo Oeste" },
      { label: "Santiago", value: "Santiago" },
    ],
  },
  {
    label: "Zonas Turísticas",
    code: "TO",
    items: [
      { label: "Bávaro, Punta Cana y la Altagracia", value: "Bávaro" },
      { label: "La Romana", value: "La Romana" },
      { label: "Puerto Plata", value: "Puerto Plata" },
      { label: "Samaná", value: "Samaná" },
      { label: "San Pedro de Macorís", value: "San Pedro de Macorís" },
    ],
  },
  {
    label: "Otras Zonas",
    code: "OZ",
    items: [
      { label: "Azua", value: "Azua" },
      { label: "Bahoruco", value: "Bahoruco" },
      { label: "Barahona", value: "Barahona" },
      { label: "Dajabón", value: "Dajabón" },
      { label: "Duarte", value: "Duarte" },
      { label: "El Seibo", value: "El Seibo" },
      { label: "Elías Piña", value: "Elías Piña" },
      { label: "Espaillat", value: "Espaillat" },
      { label: "Hato Mayor", value: "Hato Mayor" },
      { label: "Independencia", value: "Independencia" },
      { label: "La Vega", value: "La Vega" },
      { label: "Monte Cristi", value: "Monte Cristi" },
      { label: "Pedernales", value: "Pedernales" },
    ],
  },
];

const FilterProperties = ({ filters, updateFilters }: any) => {
  const { t } = useTranslation();
  const [bathroomCount, setBathroomCount] = useState<number>(
    filters.bathMin || 1
  );
  const [roomCount, setRoomCount] = useState<number>(filters.bedMin || 1);
  const [floors, setFloors] = useState<any>([
    filters.floorMin,
    filters.floorMax,
  ]);
  const [price, setPrice] = useState<any>([filters.priceMin, filters.priceMax]);
  const [size, setSize] = useState<any>([filters.sizeMin, filters.sizeMax]);
  const [zone, setZone] = useState<string>(filters.zone || "");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  useEffect(() => {
    updateFilters("bathMin", bathroomCount);
    updateFilters("bedMin", roomCount);
    updateFilters("priceMin", price[0]);
    updateFilters("priceMax", price[1]);
    updateFilters("floorMin", floors[0]);
    updateFilters("floorMax", floors[1]);
    updateFilters("sizeMin", size[0]);
    updateFilters("sizeMax", size[1]);
    updateFilters("zone", zone);
  }, [bathroomCount, price, size, floors, zone]);

  const handleSelectPropertyType = (type: string) => {
    setSelectedPropertyType(type);
    updateFilters("propertyType", type);
  };

  const handleSelectFeature = (features: string[]) => {
    setSelectedFeatures(features);
    updateFilters("features", features);
  };
  const incrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    setter(value + 1);
  };

  const decrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  return (
    <div className="shadow-md rounded-lg p-4 space-y-12 min-h-[60vh] ">
      <PropertyTypeSelector
        selectedType={selectedPropertyType}
        onSelectType={handleSelectPropertyType}
      />
      {/* Zonas Dropdown */}
      <div>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={zones}
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          placeholder="Selecciona una zona"
          className="w-full"
        />
      </div>
      {/* PRICE */}
      <div>
        <h4 className="text-lg uppercase mb-4">
          {t("properties.filters.price")}
          (${price[0].toLocaleString()} - ${price[1].toLocaleString()})
        </h4>
        <Slider
          value={price}
          onChange={(e) => setPrice(e.value)}
          range
          min={20000}
          max={10000000}
        />
      </div>

      {/* BATHROOMS */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg uppercase ">
          {t("properties.filters.bathrooms")}
        </h4>
        <div className="flex items-center space-x-4">
          <button
            className="px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border "
            onClick={() => decrementCounter(setBathroomCount, bathroomCount, 1)}
          >
            -
          </button>
          <span className="text-xl">{bathroomCount}</span>
          <button
            className="px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border "
            onClick={() => incrementCounter(setBathroomCount, bathroomCount)}
          >
            +
          </button>
        </div>
      </div>
      {/* HABITACIONE */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg uppercase ">HABITACIONES</h4>
        <div className="flex items-center space-x-4">
          <button
            className="px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border "
            onClick={() => decrementCounter(setRoomCount, roomCount, 1)}
          >
            -
          </button>
          <span className="text-xl">{roomCount}</span>
          <button
            className="px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border "
            onClick={() => incrementCounter(setRoomCount, roomCount)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <span>Features</span>
        <PropertyFeaturesSelector
          selectedFeatures={selectedFeatures}
          onSelectFeature={handleSelectFeature}
        />
      </div>

      {/* FLOORS */}
      <div>
        <h4 className="text-lg uppercase mb-4">
          {t("properties.filters.floors")} ({floors[0]} - {floors[1]})
        </h4>
        <Slider
          value={floors}
          onChange={(e) => setFloors(e.value)}
          range
          min={1}
          max={3}
        />
      </div>

      {/* SIZE */}
      <div>
        <h4 className="text-lg uppercase mb-4">
          {t("properties.filters.size")} ({size[0]} m² - {size[1]} m²)
        </h4>
        <Slider
          value={size}
          onChange={(e) => setSize(e.value)}
          range
          min={1}
          max={5000}
        />
      </div>
    </div>
  );
};

export default FilterProperties;
