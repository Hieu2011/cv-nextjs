'use client'

import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { MenuItem } from '@/config/menu.config'

interface DesktopNavMenuProps {
  items: MenuItem[]
}

export function DesktopNavMenu({ items }: DesktopNavMenuProps) {
  return (
    <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
      {items.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </nav>
  )
}

function NavItem({ item }: { item: MenuItem }) {
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className='hover:text-foreground/80 text-foreground/60 transition-colors'
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className='group relative'>
      <button className='hover:text-foreground/80 text-foreground/60 flex items-center gap-0.5 transition-colors'>
        {item.title}
        {/* Mũi tên xuống, khi hover group sẽ xoay lên 180 độ */}
        <ChevronDown className='h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180' />
      </button>
      <div className='invisible absolute top-full left-0 z-50 w-56 -translate-y-1 transform pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
        <div className='bg-popover text-popover-foreground rounded-lg border p-1 shadow-md'>
          {item.children?.map((child, i) => (
            <SubMenu key={i} item={child} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SubMenu({ item }: { item: MenuItem }) {
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className='hover:bg-accent hover:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className='group/sub relative'>
      <button className='hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-default items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none select-none'>
        {item.title}
        <ChevronRight className='ml-auto h-3.5 w-3.5 transition-transform duration-200 group-hover/sub:translate-x-0.5' />
      </button>
      <div className='invisible absolute top-0 left-full z-50 ml-1 w-56 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100'>
        <div className='bg-popover text-popover-foreground rounded-lg border p-1 shadow-md'>
          {item.children?.map((child, i) => (
            <Link
              key={i}
              href={child.href!}
              className='hover:bg-accent hover:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none'
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
