'use client'
import MobileNav from '@/components/Home/Navbar/MobileNav'
import Nav from '@/components/Home/Navbar/Nav'
import React, { useState } from 'react'
import { menuConfig } from '@/config/menu.config'
const ReponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  const openNav = () => setShowNav(true)
  const closeNav = () => setShowNav(false)
  return (
    <div className=''>
      <Nav items={menuConfig} onMenuClick={openNav} />
      <MobileNav items={menuConfig} showNav={showNav} onClose={closeNav} />
    </div>
  )
}

export default ReponsiveNav
