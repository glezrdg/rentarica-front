import React from 'react'
import ServiceCard from './components/ServiceCard'

interface IServicesProps {
  children?: React.ReactNode
}

const Services: React.FC<IServicesProps> = (props) => {
  return (
    <section id='services' className=' b-blue-dark text-white !py-20'>
      <div className='container m-auto px-4 xl:px-10'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl mb-4'>
            ¿Qué <span className='t-orange'>ofrecemos</span>?
          </h1>
          <p className='text-lg md:text-xl'>
            Soluciones integrales y de alta calidad para todos sus proyectos
            industriales.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-6 w-full place-items-center'>
          <ServiceCard
            title='Servicios Mecánicos'
            description='Ofrecemos soluciones mecánicas completas que incluyen montaje, fabricación y mantenimiento de equipos y estructuras industriales. Nuestros servicios están diseñados para mejorar la eficiencia y la funcionalidad de sus instalaciones'
          />
          <ServiceCard
            title='Servicios Civiles'
            description='Proporcionamos servicios de diseño, construcción y rehabilitación de infraestructuras civiles. Nos especializamos en la construcción de edificios industriales y comerciales, así como en el desarrollo de proyectos de infraestructura de alta calidad y durabilidad'
          />
          <ServiceCard
            className='md:col-span-2 lg:col-span-1'
            title='Servicios de Mantenimiento & Reparaciones'
            description='Brindamos servicios de mantenimiento integral que incluyen tratamiento contra la corrosión, limpieza industrial y señalización de procesos. Nuestro objetivo es garantizar el óptimo funcionamiento y prolongar la vida útil de sus equipos'
          />
        </div>
      </div>
    </section>
  )
}

export default Services
