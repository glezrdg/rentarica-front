import React, { useState } from 'react'
import ScrollWithOffsetLink from '@/hooks/ScrollWithOffsetLink'
import { Galleria } from 'primereact/galleria'
import { noto, noto_200, noto_thin } from '@/utils/fonts'

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
      <video className='h-[117vh] w-[100vw]' autoPlay loop>
        <source
          src='https://video.wixstatic.com/video/11062b_43edac00571f4b05bb740639157efecd/1080p/mp4/file.mp4'
          type='video/mp4'
          className='w-full'
        />
      </video>
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
        <h1
          className={`text-4xl md:text-[140px] md:w-[70%] leading-[150px] font-thin uppercase text-white text-center ${noto_200.className}`}
        >
          Propiedades
        </h1>
        <h1
          className={`text-4xl md:text-[120px] text-black bg-white font-[100] uppercase leading-[180px] pr-24 text-center  ${noto_thin.className}`}
        >
          Inolvidables
        </h1>

        <div className='text-white flex items-center gap-5 mt-10 text-2xl bg-orange-400 p-5 rounded-md cursor-pointer'>
          <h4>Ver propiedades</h4>
          <i className='pi pi-arrow-right' />
        </div>
      </div>
    </div>
  )
}

export default Hero
