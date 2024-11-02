"use client";

import ContactUs from "@/components/home/ContactUs";
import Layout from "@/components/layout/Layout";
import Galeria from "@/components/properties/Galeria";
import { noto_300 } from "@/utils/fonts";
import { useParams } from "next/navigation";
import { Property } from ".";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API_URL } from "@/utils/constants";
import { useTranslation } from "react-i18next";

export const getServerSideProps = (async ({ query }) => {
  // Fetch data from external API
  const res = await fetch(API_URL + `api/properties/${query.id}`);
  const property: Property = await res.json();
  // Pass data to the page via props
  return { props: { property } };
}) satisfies GetServerSideProps<{ property: Property }>;

const PropertyDetail = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation("common");
  const PARAMS = useParams();

  return (
    <div className="pt-36 xl:w-[85%] container mx-auto px-4 xl:px-10">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">{property?.title}</h1>
          <div className="text-right">
            <p className={`text-lg ${noto_300.className}`}>
              {t("home.property_details.category")}: {property.category}
            </p>
            <p className="font-bold text-3xl uppercase">
              {t("home.property_details.price")} ${property.price}
            </p>
          </div>
        </div>
        <div className="text-slate-600 mt-3 text-lg">
          <i className="pi pi-map-marker mr-2" />
          <span>{property.province}</span>
        </div>
      </div>

      <div className="grid gap-12 my-14">
        <Galeria images={property?.images} />
        <div>
          <h3 className="text-xl font-semibold">
            {t("home.property_details.description.title")}:
          </h3>
          <div
            className="text-lg py-6 text-justify text-slate-600"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />

          <h3 className="text-xl font-semibold py-6">
            {t("home.property_details.apartment_details.title")}:
          </h3>
          <div className="grid grid-cols-3 w-1/2 gap-3">
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.property_type")}
              </p>
              <p>
                {t(
                  "home.property_details.apartment_details.property_type_value"
                )}
              </p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.bedrooms")}
              </p>
              <p>{property?.rooms}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.bathrooms")}
              </p>
              <p>{property?.bathrooms}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.size")}
              </p>
              <p>{property?.size}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.floors")}
              </p>
              <p>{property?.floors}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">
                {t("home.property_details.apartment_details.year_built")}
              </p>
              <p>2025</p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs bg="bg-slate-100" />
    </div>
  );
};

export default PropertyDetail;
