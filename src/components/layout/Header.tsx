import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <header className='fixed bg-white w-[100vw] z-50 h-[85px] md:h-[100px]'>
      <nav className='flex items-center justify-between h-full w-full container m-auto px-4 xl:px-10'>
        {/* LOGO */}
        <Link href={'/'}>
          <img
            className='w-[100px] md:w-[120px]'
            src='/assets/logos/logo_light.png'
          />
        </Link>

        <i
          onClick={() => setMobileNav(!mobileNav)}
          className='pi pi-align-right text-2xl text-slate-500 hover:text-orange-600'
        />

        {/* NAVIGATION LINKS */}
        <ul className='items-center gap-5 lg:gap-8 hidden md:flex'>
          <Link href={'/#perfil'} className='cursor-pointer'>
            Perfil
          </Link>
          <Link href={'/#services'} className='cursor-pointer'>
            Servicios
          </Link>
          <Link href={'/#projects'} className='cursor-pointer'>
            Proyecto bg-orange-600 -right-fulls
          </Link>
          <Link href={'/#clients'} className='cursor-pointer'>
            Clientes
          </Link>
          <Link href={'/#contact'} className='btn-orange !px-3 !py-3'>
            Contactanos
          </Link>
        </ul>
      </nav>

      <div
        className={`fixed w-[100vw] h-[100vh] bg-orange-600 transition-all ${
          mobileNav ? 'right-0' : '!right-full'
        } `}
      >
        <ul className='grid h-[60%] place-items-center text-white gap-0 lg:gap-8'>
          <Link
            onClick={() => setMobileNav(false)}
            href={'/#perfil'}
            className='cursor-pointer'
          >
            Perfil
          </Link>
          <Link
            onClick={() => setMobileNav(false)}
            href={'/#services'}
            className='cursor-pointer'
          >
            Servicios
          </Link>
          <Link
            onClick={() => setMobileNav(false)}
            href={'/#projects'}
            className='cursor-pointer'
          >
            Proyecto
          </Link>
          <Link
            onClick={() => setMobileNav(false)}
            href={'/#clients'}
            className='cursor-pointer'
          >
            Clientes
          </Link>
          <Link
            onClick={() => setMobileNav(false)}
            href={'/#contact'}
            className='btn-orange !bg-white !text-orange-600 !px-3 !py-3'
          >
            Contactanos
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
