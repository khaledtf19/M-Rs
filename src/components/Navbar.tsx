import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">Home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/hello">Hello</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
