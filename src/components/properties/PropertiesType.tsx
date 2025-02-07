import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiBuildingApartment } from "react-icons/pi";

interface IPropertyTypeSelectorProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const propertyTypes = [
  {
    label: "properties.filters.propertyType.type1",
    value: "apartment",
    icon: "/assets/icons/apartment.svg",
  },
  {
    label: "properties.filters.propertyType.type2",
    value: "house",
    icon: "/assets/icons/house.svg",
  },
  {
    label: "properties.filters.propertyType.type3",
    value: "villa",
    icon: "/assets/icons/villa.svg",
  },
  {
    label: "properties.filters.propertyType.type4",
    value: "land",
    icon: "/assets/icons/land.svg",
  },
  {
    label: "properties.filters.propertyType.type5",
    value: "farm",
    icon: "/assets/icons/farm.svg",
  },
  {
    label: "properties.filters.propertyType.type6",
    value: "warehouse",
    icon: "/assets/icons/warehouse.svg",
  },
  {
    label: "properties.filters.propertyType.type7",
    value: "office",
    icon: "/assets/icons/office.svg",
  },
  {
    label: "properties.filters.propertyType.type8",
    value: "penthouse",
    icon: "/assets/icons/penthouse.svg",
  },
  {
    label: "properties.filters.propertyType.type9",
    value: "business",
    icon: "/assets/icons/business.svg",
  },
];

const PropertyTypeSelector: React.FC<IPropertyTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {



  const { t } = useTranslation();

  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {propertyTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelectType(type.value)}
          className={`flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-200 transition-colors border border-zinc-200  ${
            selectedType === type.value ? "bg-accent-yellow-base" : "bg-white"
          }`}
        >
          <img src={type.icon} alt={type.label} className="w-6 h-6" />
          <span className="font-semibold">{t(type.label)}</span>
        </button>
      ))}
    </div>
  );
};

export default PropertyTypeSelector;
