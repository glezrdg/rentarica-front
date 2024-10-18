import ScrollWithOffsetLink from '@/hooks/ScrollWithOffsetLink'
import Link from 'next/link'
import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const [language, setLanguage] = useState('ES')

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
      className={`fixed w-[100vw] bg-white z-50 h-[85px] transition-all duration-300 md:h-[120px] ${
        scrollNav ? ' text-black shadow-md' : ''
      }`}
    >
      <nav className='flex items-center justify-between h-full  container m-auto px-4 lg:px-0'>
        {/* LOGO */}
        <ScrollWithOffsetLink offset={80} href={'/#home'}>
          <img
            className='w-[100px] md:w-[200px]'
            src={`https://static.wixstatic.com/media/ae56f5_2c84bc9055b94c9b97193cea332fe85e~mv2.png/v1/fill/w_248,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201.png`}
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
          <Link href={'/projects'} className='cursor-pointer'>
            Compra | Alquila
          </Link>
          <Link href={'/register'} className='cursor-pointer'>
            Registra Tu Propiedad
          </Link>
          <ScrollWithOffsetLink
            offset={80}
            href={'/#projects'}
            className='cursor-pointer'
          >
            Invierte Ahora
          </ScrollWithOffsetLink>
        </ul>
        <div className='flex items-center gap-3'>
          <Dropdown
            className='h-9'
            options={['ES', 'EN']}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <Link href={'https://wa.me/18099028318'} className='' target='_blank'>
            <img
              className='w-[30px] cursor-pointer'
              src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'
            />
          </Link>
        </div>
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
