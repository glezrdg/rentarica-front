import React from 'react'

const Hero = () => {
  return (
    <div
      className='w-full h-[30vh] text-white'
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(https://static.wixstatic.com/media/828c94_c3682209e1c1481dafa95a80268508e0~mv2.jpg/v1/fill/w_840,h_197,al_c,lg_1,q_80,enc_auto/828c94_c3682209e1c1481dafa95a80268508e0~mv2.jpg)',
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
