'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import NavHeader from '../NavHeader'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true)
   const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <NavHeader />
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav