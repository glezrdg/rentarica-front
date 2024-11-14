import React, { useState } from "react";
import { PiBuildingApartment } from "react-icons/pi";

interface IPropertyTypeSelectorProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const propertyTypes = [
  {
    label: "Apartamentos",
    value: "apartment",
    icon: "/assets/icons/apartment.svg",
  },
  { label: "Casas", value: "house", icon: "/assets/icons/house.svg" },
  { label: "Villas", value: "villa", icon: "/assets/icons/villa.svg" },
  { label: "Solares", value: "land", icon: "/assets/icons/land.svg" },
  { label: "Fincas", value: "farm", icon: "/assets/icons/farm.svg" },
  { label: "Naves", value: "warehouse", icon: "/assets/icons/warehouse.svg" },
  { label: "Oficinas", value: "office", icon: "/assets/icons/office.svg" },

  {
    label: "Penthouses",
    value: "penthouse",
    icon: "/assets/icons/penthouse.svg",
  },
  { label: "Negocios", value: "business", icon: "/assets/icons/business.svg" },
];

const PropertyTypeSelector: React.FC<IPropertyTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {propertyTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelectType(type.value)}
          className={`flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-100 transition-colors border border-zinc-100  ${
            selectedType === type.value ? "bg-accent-yellow-base" : "bg-white"
          }`}
        >
          <img src={type.icon} alt={type.label} className="w-6 h-6" />
          <span className="font-semibold">{type.label}</span>
        </button>
      ))}
    </div>
  );
};

export default PropertyTypeSelector;
