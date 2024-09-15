'use client'

import ContactUs from '@/components/home/ContactUs'
import Layout from '@/components/layout/Layout'
import Galeria from '@/components/projects/Galeria'

const index = () => {
  return (
    <>
      <div
        className='w-full h-[60vh] text-white'
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://paladinsecurity.com/wp-content/uploads/2020/06/shivendu-shukla-3yoTPuYR9ZY-unsplash.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col gap-10 justify-center items-center h-full bg-black bg-opacity-50'>
          <h1 className='text-4xl md:text-5xl w-[70%] text-white font-bold text-center leading-[50px] lg:leading-[70px]'>
            Proyecto de Laguna Artificial #7, Azua
          </h1>

          <div className='bg-slate-100 p-1 px-3 rounded-2xl text-xs text-slate-600'>
            Categoria
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-[40%_1fr] gap-12 my-14 place-items-center container mx-auto px-4 xl:px-10'>
        <p className='text-xl leading-10 py-6'>
          En el Proyecto de Laguna Artificial #7 en Azua, GRUPO INAP fue
          responsable del diseño e instalación de infraestructura hidráulica
          crucial para la operación de la laguna. Este proyecto incluyó la
          instalación de tuberías de conducción de 1500 mm para el llenado y la
          descarga de la laguna, así como la instalación de cajas de válvulas
          asociadas.
          <br />
          <br />
          Este esfuerzo no solo involucró la ingeniería detallada y la logística
          de montaje de tuberías de gran diámetro en un entorno desafiante, sino
          que también aseguró la funcionalidad y eficiencia del sistema de
          manejo de agua de la laguna, esencial para el control de caudales y la
          gestión de recursos hídricos en la región.
        </p>
        <Galeria />
        {/* <img
          className='w-[100%] rounded-3xl text-center'
          src='https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg'
        /> */}
      </div>

      <ContactUs bg='bg-slate-100' />
    </>
  )
}

export default index
