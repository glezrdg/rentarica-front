import React from 'react'
import Header from './Header'
import Footer from './Footer'

export interface LayoutProps {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
