import React from 'react'

const Hero = () => {
  return (
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
        <h1 className='text-6xl w-[70%] text-white font-bold text-center leading-[70px]'>
          Proyectos
        </h1>

        <p className='leading-8 text-xl w-[50%] text-center'>
          Pellentesque convallis accumsan suscipit aliquet eu diam quis nulla
          turpis. In mus massa lectus laoreet sed semper bibendum id.
        </p>
      </div>
    </div>
  )
}

export default Hero
