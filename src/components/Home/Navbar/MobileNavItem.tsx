'use client'
import { MenuItem } from '@/config/menu.config'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface MobileNavItemProps {
  item: MenuItem
  index: number
}
const MobileNavItem = ({ item, index }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0
  const paddingLeft = 2 * 16
  if (!hasChildren) {
    return (
      <Link href={item.href!} style={{ paddingLeft }}>
        <p className='w-fit border-b-[1.5px] border-white pb-2 text-[20px] text-white no-underline sm:text-[30px]'>
          {item.title}
        </p>
      </Link>
    )
  }
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between py-2 text-[20px] text-white sm:text-[30px]'
        style={{ paddingLeft }}
      >
        <p className='w-fit border-b-[1.5px] border-white pb-2 text-[20px] text-white no-underline sm:text-[30px]'>
          {item.title}
        </p>
        <ChevronRight
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div
          style={{ paddingLeft }}
          className='border-border mt-1 flex flex-col gap-2 border-l'
        >
          {item.children?.map((child, i) => (
            <MobileNavItem key={i} item={child} index={index + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileNavItem
