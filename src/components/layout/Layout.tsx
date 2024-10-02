import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'

export interface LayoutProps {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Footer />
      <Link
        href={'https://wa.me/18099028318'}
        className='z-50 bottom-10 fixed right-5 '
        target='_blank'
      >
        <img
          className='w-[60px] lg:w-[80px] cursor-pointer'
          src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png'
        />
      </Link>
    </div>
  )
}

export default Layout
