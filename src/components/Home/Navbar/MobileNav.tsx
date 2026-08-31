import MobileNavItem from '@/components/Home/Navbar/MobileNavItem'
import { MenuItem } from '@/config/menu.config'
import { X } from 'lucide-react'
import React from 'react'

interface MobileNavProps {
  items: MenuItem[]
  showNav: boolean
  onClose: () => void
}
const MobileNav = ({ items, showNav, onClose }: MobileNavProps) => {
  const shidebaClose = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${shidebaClose} inset-0 z-1002 h-screen w-full transform bg-black opacity-70 transition-all duration-500`}
      ></div>
      {/* mobile menu */}
      <div
        className={`fixed ${shidebaClose} z-1050 flex h-full w-[80%] transform flex-col space-y-6 overflow-y-auto bg-purple-700 pt-20 text-white transition-all delay-300 duration-500`}
      >
        {items.map((item, idx) => (
          <MobileNavItem key={idx} item={item} index={idx} />
        ))}
        {/* close button */}
        <X
          onClick={onClose}
          className='absolute top-[0.7rem] right-[1.4rem] h-6 w-6 text-white sm:h-8 sm:w-8'
        />
      </div>
    </div>
  )
}

export default MobileNav
