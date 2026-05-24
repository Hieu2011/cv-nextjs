"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItem } from "@/config/menu.config";

interface MobileNavMenuProps {
  items: MenuItem[];
}

export function MobileNavMenu({ items }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] pr-0">
        <nav className="flex flex-col gap-4 mt-8">
          {items.map((item, idx) => (
            <MobileNavItem
              key={idx}
              item={item}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavItem({
  item,
  level = 0,
  onNavigate,
}: {
  item: MenuItem;
  level?: number;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = level * 16;

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className="flex items-center py-2 text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        style={{ paddingLeft }}
        onClick={onNavigate}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        style={{ paddingLeft }}
      >
        {item.title}
        <ChevronRight
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 flex flex-col gap-2 border-l border-border pl-4">
          {item.children?.map((child, i) => (
            <MobileNavItem
              key={i}
              item={child}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
