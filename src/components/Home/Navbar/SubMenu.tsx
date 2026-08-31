import { MenuItem } from '@/config/menu.config'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface SubMenuProps {
  item: MenuItem
}

export default function SubMenu({ item }: SubMenuProps) {
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className='relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm font-semibold text-black transition-all duration-200 outline-none select-none hover:text-yellow-500 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:text-yellow-200'
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className='group/sub relative'>
      <button className='relative flex w-full cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm font-semibold text-black transition-all duration-200 outline-none select-none hover:text-yellow-500 dark:text-white dark:hover:text-yellow-200'>
        {item.title}
        <ChevronRight className='ml-auto h-3.5 w-3.5 transition-transform duration-200 group-hover/sub:translate-x-0.5' />
      </button>
      <div className='invisible absolute top-0 left-full z-50 ml-1 w-56 -translate-x-96 transform opacity-0 shadow-xl transition-all duration-300 ease-in-out group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100'>
        <div className='bg-popover text-popover-foreground rounded-lg border p-1'>
          {item.children?.map((child, i) => (
            <Link
              key={i}
              href={child.href!}
              className='relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm font-semibold text-black transition-all duration-200 outline-none select-none hover:text-yellow-500 dark:text-white dark:hover:text-yellow-200'
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
