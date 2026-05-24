import MobileNav from "@/components/Home/Navbar/MobileNav";
import Nav from "@/components/Home/Navbar/Nav";
import React from "react";
import { menuConfig } from "@/config/menu.config";
const ReponsiveNav = () => {
  return (
    <div>
      <Nav items={menuConfig} />
      {/* <MobileNav /> */}
    </div>
  );
};

export default ReponsiveNav;
