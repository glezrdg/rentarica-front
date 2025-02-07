import { propertyFeatures } from "@/utils/data";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface IPropertyFeaturesSelectorProps {
  selectedFeatures: string[];
  onSelectFeature: (features: string[]) => void;
}

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
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {propertyFeatures.map((feature) => (
        <button
          key={feature.value}
          onClick={() => toggleFeature(feature.value)}
          className={`flex items-center gap-2 p-2 rounded-lg transition-colors border ${
            selectedFeatures.includes(feature.value)
              ? "bg-yellow-300 border-yellow-500"
              : "bg-white border-zinc-300"
          }`}
        >
          <i className={feature.icon} />
          <span className="text-base font-semibold">{t(feature.label)}</span>
        </button>
      ))}
    </div>
  );
};

export default PropertyFeaturesSelector;
