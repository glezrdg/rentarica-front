import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-[100px]'>
      <nav className='flex items-center justify-between h-full w-full container m-auto xl:px-10'>
        {/* LOGO */}
        <Link href={'/'}>
          <img className='w-[120px]' src='/assets/logos/logo_light.png' />
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className='flex items-center gap-8'>
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
