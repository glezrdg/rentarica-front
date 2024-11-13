import React, { useState } from "react";

interface IPropertyFeaturesSelectorProps {
  selectedFeatures: string[];
  onSelectFeature: (features: string[]) => void;
}

const propertyFeatures = [
  {
    label: "En Planos",
    value: "en_planos",
    icon: "/assets/icons/blueprint.svg",
  },
  { label: "Studio", value: "studio", icon: "/assets/icons/studio.svg" },
  { label: "Piscina", value: "piscina", icon: "/assets/icons/pool.svg" },
  { label: "Terraza", value: "terraza", icon: "/assets/icons/terrace.svg" },
  { label: "Balcón", value: "balcon", icon: "/assets/icons/balcony.svg" },
  {
    label: "Área Social",
    value: "area_social",
    icon: "/assets/icons/social-area.svg",
  },
  { label: "Lobby", value: "lobby", icon: "/assets/icons/lobby.svg" },
  {
    label: "Seguridad",
    value: "seguridad",
    icon: "/assets/icons/security.svg",
  },
  { label: "Parqueo", value: "parqueo", icon: "/assets/icons/parking.svg" },
  { label: "Gym", value: "gym", icon: "/assets/icons/gym.svg" },
  {
    label: "Áreas Deportivas",
    value: "areas_deportivas",
    icon: "/assets/icons/sports-area.svg",
  },
  {
    label: "Pet Friendly",
    value: "petfriendly",
    icon: "/assets/icons/pet-friendly.svg",
  },
  {
    label: "Beach Front",
    value: "beach_front",
    icon: "/assets/icons/beach-front.svg",
  },
  {
    label: "Amueblado",
    value: "amueblado",
    icon: "/assets/icons/furnished.svg",
  },
  {
    label: "Sin Amueblar",
    value: "sin_amueblar",
    icon: "/assets/icons/unfurnished.svg",
  },
];

const PropertyFeaturesSelector: React.FC<IPropertyFeaturesSelectorProps> = ({
  selectedFeatures,
  onSelectFeature,
}) => {
  const toggleFeature = (value: string) => {
    const isSelected = selectedFeatures.includes(value);
    const updatedFeatures = isSelected
      ? selectedFeatures.filter((feature) => feature !== value)
      : [...selectedFeatures, value];

    onSelectFeature(updatedFeatures);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {propertyFeatures.map((feature) => (
        <button
          key={feature.value}
          onClick={() => toggleFeature(feature.value)}
          className={`flex items-center gap-2 p-2 rounded-lg transition-colors border ${
            selectedFeatures.includes(feature.value)
              ? "bg-yellow-300 border-yellow-500"
              : "bg-white border-gray-300"
          }`}
        >
          <img src={feature.icon} alt={feature.label} className="w-6 h-6" />
          <span className="text-base">{feature.label}</span>
        </button>
      ))}
    </div>
  );
};

export default PropertyFeaturesSelector;
