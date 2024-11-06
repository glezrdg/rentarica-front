import { Property } from "@/pages/propiedades";
import { API_URL } from "@/utils/constants";
import { noto, noto_200, noto_300 } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

export interface IPropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<IPropertyCardProps> = ({ property }) => {
  return (
    <Link
      href={`/propiedades/${property?._id}`}
      className="grid relative rounded-lg bg-slate-100 w-full  overflow-hidden super-shadow"
    >
      <div className="absolute right-5 top-2 bg-slate-100 p-2 px-3 rounded-md text-xs text-slate-600 uppercase font-semibold">
        {property?.category}
      </div>
      {/* IMAGE */}
      <div className="mb-4">
        <img
          className="h-[200px] w-full object-cover"
          src={API_URL + `uploads/${property?.images[0]}`}
        />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-2">
        <h2 className="font-bold text-base mb-2 text-slate-800">
          {property?.title}
        </h2>
        <div className="text-slate-600">
          <i className="pi pi-map-marker mr-2" />
          <span>{property.province}</span>
        </div>
        <div
          className={`grid grid-cols-4 w-full my-3 bg-white rounded-lg p-2 shadow-md text-slate-700`}
        >
          <div className="text-center">
            <p>Bed</p>
            <p className={`text-slate-800`}>{property?.rooms}</p>
          </div>
          <div className="text-center">
            <p>Bath</p>
            <p className={`text-slate-800`}>{property?.bathrooms}</p>
          </div>
          <div className="text-center">
            <p>Floors</p>
            <p className={`text-slate-800`}>{property?.floors}</p>
          </div>
          <div className="text-center">
            <p>Size</p>
            <p className={`text-slate-800`}>{property?.size}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-base uppercase">
            Desde USD${property.price}
          </p>
          <p className="bg-yellow-400 px-2 h-9 leading-9 rounded-3xl">202327</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
