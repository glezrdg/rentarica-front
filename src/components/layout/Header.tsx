import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-[85px] md:h-[100px]'>
      <nav className='flex items-center justify-between h-full w-full container m-auto px-4 xl:px-10'>
        {/* LOGO */}
        <Link href={'/'}>
          <img
            className='w-[100px] md:w-[120px]'
            src='/assets/logos/logo_light.png'
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className='items-center gap-5 lg:gap-8 hidden md:flex'>
          <Link href={'/#perfil'} className='cursor-pointer'>
            Perfil
          </Link>
          <Link href={'/#services'} className='cursor-pointer'>
            Servicios
          </Link>
          <Link href={'/#projects'} className='cursor-pointer'>
            Proyectos
          </Link>
          <Link href={'/#clients'} className='cursor-pointer'>
            Clientes
          </Link>
          <Link href={'/#contact'} className='btn-orange !px-3 !py-3'>
            Contactanos
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
