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
    </div>
  )
}

export default Layout
