"use client";

import { Slider } from "primereact/slider";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FilterProperties = ({ filters, updateFilters }: any) => {
  const { t } = useTranslation();
  const [bathroom, setbathroom] = useState<any>([
    filters.bathMin,
    filters.bathMax,
  ]);
  const [floors, setFloors] = useState<any>([
    filters.floorMin,
    filters.floorMax,
  ]);
  const [price, setPrice] = useState<any>([filters.priceMin, filters.priceMax]);
  const [size, setSize] = useState<any>([filters.sizeMin, filters.sizeMax]);

  useEffect(() => {
    updateFilters("bathMin", bathroom[0]);
    updateFilters("bathMax", bathroom[1]);
    updateFilters("priceMin", price[0]);
    updateFilters("priceMax", price[1]);
    updateFilters("floorMin", floors[0]);
    updateFilters("floorMax", floors[1]);
    updateFilters("sizeMin", size[0]);
    updateFilters("sizeMax", size[1]);
  }, [bathroom, price, size, floors]);

  return (
    <div className="bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-4 space-y-12">
      {/* BATHROOMS */}
      <div>
        <h4 className={`text-lg uppercase mb-4`}>
          {t("properties.filters.bathrooms")}{" "}
          {bathroom[0] === bathroom[1]
            ? `(${bathroom[0]})`
            : `(${bathroom[0]} - ${bathroom[1]})`}
        </h4>
        <Slider
          value={bathroom}
          onChange={(e) => setbathroom(e.value)}
          range
          min={1}
          max={6}
        />
      </div>
      {/* PRICE */}
      <div>
        <h4 className={`text-lg uppercase mb-4`}>
          {t("properties.filters.price")}
          {price[0] === price[1]
            ? `($${price[0]})`
            : `($${price[0]} - $${price[1]})`}
        </h4>
        <Slider
          value={price}
          onChange={(e) => setPrice(e.value)}
          range
          min={20000}
          max={10000000}
        />
      </div>
      {/* FLOORS */}
      <div>
        <h4 className={`text-lg uppercase mb-4`}>
          {t("properties.filters.floors")}
          {floors[0] === floors[1]
            ? `(${floors[0]})`
            : `(${floors[0]} - ${floors[1]})`}
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
        <h4 className={`text-lg uppercase mb-4`}>
          {t("properties.filters.size")}
          {size[0] === size[1] ? `(${size[0]})` : `(${size[0]} - ${size[1]})`}
        </h4>
        <Slider
          value={size}
          onChange={(e) => setSize(e.value)}
          range
          min={40}
          max={400}
        />
      </div>
    </div>
  );
};

export default FilterProperties;
