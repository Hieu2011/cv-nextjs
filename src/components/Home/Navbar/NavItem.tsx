import SubMenu from '@/components/Home/Navbar/SubMenu'
import { MenuItem } from '@/config/menu.config'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

interface NavItemProps {
  item: MenuItem
}

export default function NavItem({ item }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className='font-semibold text-black transition-all duration-200
          hover:text-yellow-500 dark:text-white dark:hover:text-yellow-200'
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className='group relative'>
      <button
        className='flex cursor-pointer items-center gap-0.5 font-semibold
          text-black transition-all duration-200 hover:text-yellow-500
          dark:text-white dark:hover:text-yellow-200'
      >
        {item.title}
        <ChevronDown
          className='h-3.5 w-3.5 transition-transform duration-200
            group-hover:rotate-180'
        />
      </button>
      <div
        className='invisible absolute top-full left-0 z-50 w-56 -translate-x-96
          transform pt-2 opacity-0 shadow-xl transition-all duration-300
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100'
      >
        <div
          className='bg-popover text-popover-foreground rounded-lg border p-1
            shadow-md'
        >
          {item.children?.map((child, i) => (
            <SubMenu key={i} item={child} />
          ))}
        </div>
      </div>
    </div>
  )
}
