import React from 'react'

const Hero = () => {
  return (
    <div
      className='w-full h-[60vh] text-white'
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://iili.io/dthmSNs.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col gap-10 justify-center items-center h-full bg-black bg-opacity-50'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl w-[70%] text-white font-bold text-center leading-[70px]'>
          Proyectos
        </h1>
      </div>
    </div>
  )
}

export default Hero
