'use client'

import ContactUs from '@/components/home/ContactUs'
import Layout from '@/components/layout/Layout'
import Galeria from '@/components/properties/Galeria'
import { noto_300 } from '@/utils/fonts'
import { useParams } from 'next/navigation'
import { Property } from '.'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { API_URL } from '@/utils/constants'
import { useTranslation } from 'react-i18next'
import { TiArrowLeftThick } from 'react-icons/ti'
import { useRouter } from 'next/router'
import { propertyFeatures } from '@/utils/data'

export const getServerSideProps = (async ({ query }) => {
  // Fetch data from external API
  const res = await fetch(API_URL + `api/properties/${query.id}`)
  const property: Property = await res.json()
  // Pass data to the page via props
  return { props: { property } }
}) satisfies GetServerSideProps<{ property: Property }>

const PropertyDetail = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className='pt-36 xl:w-[85%] container mx-auto px-4 xl:px-10'>
      <div>
        <div className='flex items-center justify-between'>
          <h1
            className='text-4xl font-semibold flex items-center cursor-pointer'
            onClick={() => router.back()}
          >
            <TiArrowLeftThick /> {property?.title}
          </h1>
          <div className='text-right'>
            <p className={`text-lg ${noto_300.className}`}>
              {property.category}
            </p>
            <p className='font-bold text-3xl uppercase'>
              {property.unitPrice} ${property.price}
            </p>
          </div>
        </div>
        <div className='text-slate-600 mt-3 text-lg'>
          <i className='pi pi-map-marker mr-2' />
          <span>{property.zone}</span>
        </div>
      </div>

      <div className='grid gap-12 my-14'>
        <Galeria images={property?.images} />
        <div>
          <div
            className='text-lg py-6 text-justify text-slate-600'
            dangerouslySetInnerHTML={{ __html: property.description }}
          />

          {property?.items?.length ? (
            <>
              <ul className='text-lg flex items-center gap-4 flex-wrap max-w-[700px] my-6 text-justify py-4 text-slate-600'>
                {property?.items?.map((i) => {
                  const feature = propertyFeatures.find((e) => e.value == i)
                  return (
                    <button
                      key={i}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors borderbg-yellow-300 border-yellow-500`}
                    >
                      <img
                        src={feature?.icon}
                        alt={feature?.label}
                        className='w-6 h-6'
                      />
                      <span className='text-base font-semibold'>
                        {' '}
                        {propertyFeatures.find((e) => e.value == i)?.label}
                      </span>
                    </button>
                  )
                })}
              </ul>
            </>
          ) : (
            ''
          )}

          <div className='grid grid-cols-3 w-1/2 gap-3'>
            <div>
              <p className='text-slate-600 mb-2'>Rooms:</p>
              <p>{property?.rooms}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Bathrooms:</p>
              <p>{property?.bathrooms}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Size:</p>
              <p>{property?.size}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Floors:</p>
              <p>{property?.floors}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Year:</p>
              <p>2025</p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs bg='bg-transparent' />
    </div>
  )
}

export default PropertyDetail
