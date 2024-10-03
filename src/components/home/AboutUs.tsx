import React from 'react'

const AboutUs = () => {
  return (
    <section
      id='perfil'
      className='flex flex-col md:flex-row items-center gap-16  lg:h-[90vh] container  m-auto px-4 xl:px-0 mt-10 mb-6 xl:mb-0'
    >
      <img
        className='w-[25%]'
        src='/assets/logos/logo_without_text_light.png'
      />

      <div className='text-center md:text-left'>
        <h3 className='text-xl mb-4'>Nuestro Perfil</h3>
        <h1 className='text-4xl mb-8 t-blue-dark font-bold'>
          Sobre <span className='t-blue-light'>Nosotros</span>
        </h1>

        <p className='text-lg text-justify'>
          Somos una empresa comprometida con el desarrollo y la implementación
          de{' '}
          <strong>proyectos electromecánicos y civiles de alta calidad</strong>
          . Contamos con un equipo de profesionales altamente calificados en las
          áreas de mecánica, eléctrica y civil, lo que nos permite ofrecer
          soluciones integrales adaptadas a las necesidades específicas de
          nuestros clientes.
          <br />
          <br />
          Nuestra <strong>misión</strong> es generar valor excediendo las
          expectativas del cliente mediante servicios integrados en el diseño,
          desarrollo y construcción de proyectos, siempre cumpliendo con los más
          altos estándares de calidad y eficiencia.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
