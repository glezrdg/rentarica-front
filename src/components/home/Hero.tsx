import ScrollWithOffsetLink from '@/hooks/ScrollWithOffsetLink'
import React from 'react'

const Hero = () => {
  return (
    <div
      className='w-full h-[100vh]'
      id='home'
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(https://paladinsecurity.com/wp-content/uploads/2020/06/shivendu-shukla-3yoTPuYR9ZY-unsplash.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col gap-10 justify-center items-center h-full bg-black bg-opacity-50'>
        <h1 className='text-4xl md:text-6xl w-[70%] text-white font-bold text-center leading-10 md:leading-[70px]'>
          Soluciones Electromecánicas y Civiles
        </h1>

        <div className='text-white flex gap-10'>
          <ScrollWithOffsetLink
            href='/#services'
            offset={80}
            className='btn-orange text-center md:w-[200px] !py-3'
          >
            Nuestros Servicios
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            href='/#projects'
            offset={80}
            className='border-2 text-center border-white rounded-3xl md:w-[200px] !py-3'
          >
            Proyectos Recientes
          </ScrollWithOffsetLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
