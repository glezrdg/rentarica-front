import React, { useState } from 'react'
import ScrollWithOffsetLink from '@/hooks/ScrollWithOffsetLink'
import { Galleria } from 'primereact/galleria'

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://iili.io/dthmYPV.jpg',
    'https://iili.io/dthmSNs.jpg',
    'https://iili.io/dthmrxf.jpg',
  ]

  const itemTemplate = (item: any) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        className='w-[100vw] h-[100vh] text-center object-cover'
      />
    )
  }
  return (
    <div className='relative'>
      <Galleria
        value={images?.map((p: any) => ({
          itemImageSrc: p,
          thumbnailImageSrc: p,
          alt: 'Description for Image 1',
          title: 'Title 1',
        }))}
        className='w-[100%] h-[100vh] text-center'
        showThumbnails={false}
        autoPlay
        onItemChange={(e) => setSelectedImage(e.index)}
        activeIndex={selectedImage}
        circular
        item={itemTemplate}
      />
      <div className='absolute inset-0 flex flex-col gap-10 justify-center items-center bg-black bg-opacity-50'>
        <h1 className='text-4xl md:text-6xl md:w-[70%] text-white font-bold text-center leading-10 md:leading-[70px]'>
          Soluciones Electromecánicas y Civiles
        </h1>

        <div className='text-white flex gap-10'>
          <ScrollWithOffsetLink
            href='/#services'
            offset={80}
            className='btn-orange p-3 text-center md:w-[200px] !py-3'
          >
            Nuestros Servicios
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            href='/#projects'
            offset={80}
            className='border-2 p-3 text-center border-white rounded-3xl md:w-[200px] !py-3'
          >
            Proyectos Recientes
          </ScrollWithOffsetLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
