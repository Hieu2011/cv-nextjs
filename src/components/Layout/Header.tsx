import Link from "next/link";
import { menuConfig } from "@/config/menu.config";
import { DesktopNavMenu } from "@/components/Helper/Desktop-nav-menu";
import { MobileNavMenu } from "@/components/Helper/Mobile-nav-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          Logo
        </Link>
        <DesktopNavMenu items={menuConfig} />
        <div className="flex items-center gap-2">
          {/* có thể thêm nút actions (login, signup) */}
          <MobileNavMenu items={menuConfig} />
        </div>
      </div>
    </header>
  );
}
