import Logo from '@/components/Helper/Logo'
import React from 'react'
import { MenuItem } from '@/config/menu.config'
import NavItem from '@/components/Home/Navbar/NavItem'
import { Download } from 'lucide-react'
import { ModeToggle } from '@/components/Helper/ModeToggle'

interface NavMenuProps {
  items: MenuItem[]
}
const Nav = ({ items }: NavMenuProps) => {
  return (
    <div className='fixed z-100 h-[12vh] w-full transition-all duration-200'>
      <div
        className='mx-auto flex h-full w-[90%] items-center justify-between
          xl:w-[80%]'
      >
        {/* Logo */}
        <Logo />
        {/* Nav items */}
        <div className='hidden items-center space-x-10 lg:flex'>
          {items.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </div>
        {/* Button CV */}
        <div className='flex items-center space-x-4'>
          <button
            className='group ease relative z-20 box-border inline-flex w-auto
              cursor-pointer items-center justify-center overflow-hidden
              rounded-md bg-indigo-600 px-6 py-3 font-bold text-white ring-1
              ring-indigo-300 ring-offset-2 ring-offset-indigo-200
              transition-all duration-300
              hover:animate-[shake_0.5s_linear_infinite]
              hover:ring-offset-indigo-500 focus:outline-none sm:px-8'
          >
            <span className='relative z-20 flex items-center space-x-2 text-sm'>
              <Download className='h-4 w-4' />
              <span className=''>Download CV</span>
            </span>
          </button>
          {/* Toggle button */}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Nav
