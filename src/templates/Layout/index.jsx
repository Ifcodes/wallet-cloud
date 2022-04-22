import React from 'react'
import Navbar from '../../molecules/NavBar'
import Footer from '../../organisms/Footer'
import { LayoutWrapper } from './layoutStyles'

const Layout = ({children, greenBg, activeTab}) => {
  return (
    <LayoutWrapper>
      <Navbar greenBg={greenBg} activeTab={activeTab}/>
      <main>
        {children}
      </main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout