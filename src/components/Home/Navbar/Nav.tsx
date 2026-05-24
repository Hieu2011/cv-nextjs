import Logo from "@/components/Helper/Logo";
import React from "react";
import { MenuItem } from "@/config/menu.config";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavMenuProps {
  items: MenuItem[];
}
const Nav = ({ items }: NavMenuProps) => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full">
      <div className="mx-auto h-full flex items-center justify-between w-[90%] xl:w-[80%]">
        {/* Logo */}
        <Logo />
        {/* Nav items */}
        <div className="hidden lg:flex items-center space-x-10 ">
          {items.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
function NavItem({ item }: { item: MenuItem }) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex cursor-pointer items-center gap-0.5 dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200">
        {item.title}
        {/* Mũi tên xuống, khi hover group sẽ xoay lên 180 độ */}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-96 group-hover:translate-x-0 z-50 shadow-xl">
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
        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group/sub">
      <button className="relative flex w-full cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200">
        {item.title}
        <ChevronRight className="h-3.5 w-3.5 ml-auto transition-transform duration-200 group-hover/sub:translate-x-0.5" />
      </button>
      <div className="absolute left-full top-0 ml-1 w-56 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform -translate-x-96 group-hover/sub:translate-x-0 z-50 shadow-xl">
        <div className="rounded-lg border bg-popover p-1 text-popover-foreground">
          {item.children?.map((child, i) => (
            <Link
              key={i}
              href={child.href!}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Nav;
