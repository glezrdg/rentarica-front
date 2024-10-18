import { noto_300 } from '@/utils/fonts'
import React from 'react'

const AboutUs = () => {
  return (
    <section
      id='perfil'
      className='flex flex-col md:flex-row items-center gap-16 lg:h-[120vh] m-auto px-4 xl:px-0 mt-10 mb-6 xl:mb-0'
    >
      <div className='flex-1 overflow-hidden h-full background-image bg-cover bg-[url(https://static.wixstatic.com/media/828c94_cefb7475c65246fba77d5cda0f55c902~mv2.jpg/v1/fill/w_1381,h_1173,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/828c94_cefb7475c65246fba77d5cda0f55c902~mv2.jpg)]'></div>

      <div className='text-center md:text-left flex-1'>
        <h1
          className={`text-4xl mb-8 t-blue-dark font-bold uppercase ${noto_300.className}`}
        >
          Quienes Somos
        </h1>

        <p className='text-lg text-justify w-[60%]'>
          En Rentarica, estamos dedicados a ayudarte a explorar los mejores
          destinos vacacionales en la República Dominicana. <br /> <br />​ Ya
          sea que estés buscando comprar una propiedad, alquilar una propiedad o
          invertir en bienes raíces, nuestro equipo de expertos está aquí para
          guiarte en cada paso del camino. <br /> <br />​ Nos enorgullece
          proporcionar un servicio personalizado para asegurarnos de que todos
          nuestros clientes tengan una experiencia memorable y placentera. ​
          <br /> <br /> Puedes confiar en que tus propiedades están en buenas
          manos con Rentarica, lo que te permite relajarte y disfrutar de los
          beneficios de tu inversión en bienes raíces. Contáctanos hoy mismo
          para obtener más información sobre cómo podemos ayudarte a alcanzar
          tus objetivos en bienes raíces en la República Dominicana.
        </p>

        <div className='w-9 border-[3px] my-8 border-gray-700'></div>

        <button className='bg-yellow-500 p-4 text-xl'>Más Info</button>
      </div>
    </section>
  )
}

export default AboutUs
