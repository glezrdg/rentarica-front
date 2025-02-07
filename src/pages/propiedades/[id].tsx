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
import { TiArrowLeftThick } from "react-icons/ti";
import { useRouter } from "next/router";
import { propertyFeatures } from "@/utils/data";
import { useEffect } from "react";
import WhatsAppLink from "@/shared/components/WhatsappLink";

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
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="pt-32 xl:w-[85%] container mx-auto px-4 xl:px-10">
      <div>
        <div className="mb-4 text-4xl " onClick={() => router.back()}>
          <TiArrowLeftThick />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold flex items-center cursor-pointer">
            {property?.title}
          </h1>
          <div className="text-right">
            <p className={`text-lg ${noto_300.className}`}>
              {property.category}
            </p>
            <p className="font-bold text-3xl uppercase">
              {property.unitPrice} ${property.price}
            </p>
          </div>
        </div>
        <div className="text-slate-600 mt-3 text-lg">
          <i className="pi pi-map-marker mr-2" />
          <span>{property.zone}</span>
        </div>
      </div>

      <div className="grid  my-14">
        <Galeria images={property?.images} />
        <div>
          <div
            className="text-xs lg:text-lg py-6 text-justify text-slate-600 !max-w-[90dvw]"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />

          {property?.items?.length ? (
            <>
              <ul className="text-lg flex items-center gap-4 flex-wrap lg:max-w-[700px] my-6 text-justify py-4 text-slate-600">
                {property?.items?.map((i) => {
                  const feature = propertyFeatures.find((e) => e.value == i);
                  return (
                    <button
                      key={i}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors borderbg-yellow-300 border-yellow-500`}
                    >
                      <i className={feature?.icon} />
                      <span className="text-base font-semibold">
                        {t(
                          propertyFeatures.find((e) => e.value === i)?.label ||
                            "default.label" // Cambia "default.label" por un texto clave genérico.
                        )}
                      </span>
                    </button>
                  );
                })}
              </ul>
            </>
          ) : (
            ""
          )}
          <div className="grid grid-cols-2 lg:grid-cols-3 w-1/2 gap-3">
            <div>
              <p className="text-slate-600 mb-2">Rooms:</p>
              <p>{property?.rooms}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Bathrooms:</p>
              <p>{property?.bathrooms}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Size:</p>
              <p>{property?.size}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Floors:</p>
              <p>{property?.floors}</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Year:</p>
              <p>2025</p>
            </div>
          </div>
          <div className="my-20">
            <p className="text-lg font-semibold ">
              {" "}
              Escribenos por esta propiedad:{" "}
            </p>
            <WhatsAppLink propertyName={property.title} />
          </div>
          <div className="mt-10">
            {property.googleMapsLink ? (
              <div className="map-container">
                <div
                  className="iframe-wrapper"
                  dangerouslySetInnerHTML={{ __html: property.googleMapsLink }}
                />
              </div>
            ) : (
              <p>No hay ubicación disponible para esta propiedad.</p>
            )}
          </div>
        </div>
      </div>

      <ContactUs bg="bg-transparent" />
    </div>
  );
};

export default PropertyDetail;
