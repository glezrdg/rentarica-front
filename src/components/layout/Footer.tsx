import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='b-blue-dark py-20'>
      <div className='container m-auto xl:px-10 flex items-center justify-between flex-col md:flex-row md:gap-16'>
        <img
          src='/assets/logos/logo_dark.png'
          className='w-[240px] lg:w-[300px] mb-10 md:mb-0'
        />

        <div className='flex flex-col text-center md:text-left md:flex-row gap-8 md:gap-10 lg:gap-24 text-slate-300'>
          <div>
            <h4 className='font-bold text-white'>Navegación</h4>
            <ul>
              <Link href={'/#perfil'} className='block'>
                Perfil
              </Link>
              <Link href={'/#services'} className='block'>
                Servicios
              </Link>
              <Link href={'/#projects'} className='block'>
                Proyectos
              </Link>
              <Link href={'/#contact'} className='block'>
                Contáctanos
              </Link>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-white'>Contacto</h4>
            <ul>
              <li>+1 (809) 902-8318</li>
              <li>ventas@inaprd.com</li>
              <li>grupoinap.com</li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-white'>Redes Sociales</h4>
            <ul>
              <li>Linkdin</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
