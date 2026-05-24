"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MenuItem } from "@/config/menu.config";

interface DesktopNavMenuProps {
  items: MenuItem[];
}

export function DesktopNavMenu({ items }: DesktopNavMenuProps) {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {items.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </nav>
  );
}

function NavItem({ item }: { item: MenuItem }) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className="transition-colors hover:text-foreground/80 text-foreground/60"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-0.5 transition-colors hover:text-foreground/80 text-foreground/60">
        {item.title}
        {/* Mũi tên xuống, khi hover group sẽ xoay lên 180 độ */}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-1 group-hover:translate-y-0 z-50">
        <div className="rounded-lg border bg-popover p-1 text-popover-foreground shadow-md">
          {item.children?.map((child, i) => (
            <SubMenu key={i} item={child} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SubMenu({ item }: { item: MenuItem }) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group/sub">
      <button className="relative flex w-full cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
        {item.title}
        <ChevronRight className="h-3.5 w-3.5 ml-auto transition-transform duration-200 group-hover/sub:translate-x-0.5" />
      </button>
      <div className="absolute left-full top-0 ml-1 w-56 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
        <div className="rounded-lg border bg-popover p-1 text-popover-foreground shadow-md">
          {item.children?.map((child, i) => (
            <Link
              key={i}
              href={child.href!}
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
