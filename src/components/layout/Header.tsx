import ScrollWithOffsetLink from '@/hooks/ScrollWithOffsetLink'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  return (
    <header
      className={`fixed w-[100vw] z-50 h-[85px] transition-all duration-300 md:h-[100px] ${
        scrollNav ? 'bg-white text-black' : 'text-white'
      }`}
    >
      <nav className='flex items-center justify-between h-full  container m-auto px-4 lg:px-0'>
        {/* LOGO */}
        <ScrollWithOffsetLink offset={80} href={'/#home'}>
          <img
            className='w-[100px] md:w-[120px]'
            src={`/assets/logos/logo_${scrollNav ? 'light' : 'dark'}.png`}
          />
        </ScrollWithOffsetLink>

        <i
          onClick={() => setMobileNav(!mobileNav)}
          className={`block md:!hidden pi pi-align-right text-2xl ${
            scrollNav ? 'text-slate-500' : 'text-white'
          } hover:text-orange-600`}
        />

        {/* NAVIGATION ScrollWithOffsetLinkS */}
        <ul className='items-center gap-5 lg:gap-8 hidden md:flex'>
          <ScrollWithOffsetLink
            offset={80}
            href={'/#perfil'}
            className='cursor-pointer'
          >
            Perfil
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            offset={80}
            href={'/#services'}
            className='cursor-pointer'
          >
            Servicios
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            offset={80}
            href={'/#projects'}
            className='cursor-pointer'
          >
            Proyectos
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            offset={80}
            href={'/#clients'}
            className='cursor-pointer'
          >
            Clientes
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            href={'/#contact'}
            offset={80}
            className='btn-orange !px-3 !py-3'
          >
            Contáctanos
          </ScrollWithOffsetLink>
        </ul>
      </nav>

      <div
        className={`fixed md:hidden w-[100vw] h-[100vh] bg-orange-600 transition-all ${
          mobileNav ? 'right-0' : '!right-full'
        } `}
      >
        <ul className='grid h-[60%] place-items-center text-white gap-0 lg:gap-8'>
          <ScrollWithOffsetLink
            onClick={() => setMobileNav(false)}
            href={'/#perfil'}
            className='cursor-pointer'
            offset={80}
          >
            Perfil
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            onClick={() => setMobileNav(false)}
            href={'/#services'}
            className='cursor-pointer'
            offset={80}
          >
            Servicios
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            onClick={() => setMobileNav(false)}
            href={'/#projects'}
            className='cursor-pointer'
            offset={80}
          >
            Proyecto
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            onClick={() => setMobileNav(false)}
            href={'/#clients'}
            className='cursor-pointer'
            offset={80}
          >
            Clientes
          </ScrollWithOffsetLink>
          <ScrollWithOffsetLink
            onClick={() => setMobileNav(false)}
            offset={80}
            href={'/#contact'}
            className='btn-orange !bg-white !text-orange-600 !px-3 !py-3'
          >
            Contáctanos
          </ScrollWithOffsetLink>
        </ul>
      </div>
    </header>
  )
}

export default Header
