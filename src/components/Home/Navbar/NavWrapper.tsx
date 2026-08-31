'use client'

import { useEffect, useState } from 'react'

export function NavWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 90)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : ''} fixed z-50 h-[12vh] w-full transition-all duration-200`}
    >
      {children}
    </div>
  )
}
