import React from 'react'

const Clients = () => {
  return (
    <section
      id='clients'
      className='grid place-items-center py-20 w-full b-blue-dark px-4'
    >
      <div>
        <h1 className='text-center text-white font-bold text-3xl mb-16 xl:mb-12'>
          Compañías que confían en nosotros
        </h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-24 md:gap-16 xl:gap-32'>
          <img
            className='w-[160px] md:w-[200px]'
            src='/assets/home_images/clients/caribbean_glass.png'
          />
          <img
            className='w-[160px] md:w-[200px]'
            src='/assets/home_images/clients/induban.png'
          />
          <img
            className='w-[160px] md:w-[200px]'
            src='/assets/home_images/clients/tinflex.png'
          />
        </div>
      </div>
    </section>
  )
}

export default Clients
