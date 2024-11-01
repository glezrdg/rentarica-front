'use client'

import ContactUs from '@/components/home/ContactUs'
import Layout from '@/components/layout/Layout'
import Galeria from '@/components/properties/Galeria'
import { projects } from '@/utils/data'
import { noto_300 } from '@/utils/fonts'
import { useParams } from 'next/navigation'
import { Property } from '.'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { API_URL } from '@/utils/constants'

export const getServerSideProps = (async ({ query }) => {
  // Fetch data from external API
  const res = await fetch(API_URL + `api/properties/${query.id}`)
  const property: Property = await res.json()
  // Pass data to the page via props
  return { props: { property } }
}) satisfies GetServerSideProps<{ property: Property }>

const index = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const PARAMS = useParams()

  return (
    <div className='pt-36 xl:w-[85%] container mx-auto px-4 xl:px-10'>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl font-semibold'>{property?.title}</h1>
          <div className='text-right'>
            <p className={`text-lg ${noto_300.className}`}>
              {property.category}
            </p>
            <p className='font-bold text-3xl uppercase'>
              Desde USD${property.price}
            </p>
          </div>
        </div>
        <div className='text-slate-600 mt-3 text-lg'>
          <i className='pi pi-map-marker mr-2' />
          <span>{property.province}</span>
        </div>
      </div>
      <div className='grid gap-12 my-14'>
        <Galeria images={property?.images} />
        <div>
          {/*  */}
          <h3 className='text-xl font-semibold'>Descripcion:</h3>
          <div
            className='text-lg py-6 text-justify text-slate-600'
            dangerouslySetInnerHTML={{ __html: property.description }}
          />

          {/*  */}
          {/* <h3 className='text-xl font-semibold py-6'>
            Características de los Apartamentos:
          </h3>
          <ul className='text-lg list-disc text-justify p-4 text-slate-600'>
            {property?.items?.map((i) => (
              <li className='list-item'>{i}</li>
            ))}
          </ul> */}

          {/*  */}
          <h3 className='text-xl font-semibold py-6'>
            Detalle de Apartamento:
          </h3>
          <div className='grid grid-cols-3 w-1/2 gap-3'>
            <div>
              <p className='text-slate-600 mb-2'>Tipo de propiedad</p>
              <p>Apartamento</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Bedrooms</p>
              <p>{property?.rooms}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Bathrooms</p>
              <p>{property?.bathrooms}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Size</p>
              <p>{property?.size}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Floors</p>
              <p>{property?.floors}</p>
            </div>
            <div>
              <p className='text-slate-600 mb-2'>Year Built</p>
              <p>2025</p>
            </div>
          </div>
        </div>
        {/* <img
          className='w-[100%] rounded-3xl text-center'
          src='https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg'
        /> */}
      </div>

      <ContactUs bg='bg-slate-100' />
    </div>
  )
}

export default index
