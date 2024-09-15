import React from 'react'

const Clients = () => {
  return (
    <section
      id='clients'
      className='grid place-items-center py-20 w-full b-blue-dark'
    >
      <div>
        <h1 className='text-center text-white font-bold text-3xl mb-12'>
          Compañias que confian en nosotros
        </h1>

        <div className='flex justify-center items-center gap-32'>
          <img
            className='w-[200px]'
            src='/assets/home_images/clients/caribbean_glass.png'
          />
          <img
            className='w-[200px]'
            src='/assets/home_images/clients/induban.png'
          />
          <img
            className='w-[200px]'
            src='/assets/home_images/clients/tinflex.png'
          />
        </div>
      </div>
    </section>
  )
}

export default Clients
