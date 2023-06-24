import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="container sticky py-2 top-0 right-0 left-0 z-50">
      <MainNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;

const MainNav = () => {
  const { setTheme } = useTheme();
  return (
    <NavigationMenu className="flex justify-between">
      <NavigationMenuList>
        <LinkButton href="/" text="Home" />
        <LinkButton href="/movies" text="Movies" />
        <LinkButton href="/reviews" text="Reviews" />
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={navigationMenuTriggerStyle()}
                variant={"ghost"}
                size="icon"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const MobileNav = () => {
  return <></>;
};

const LinkButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  return (
    <NavigationMenuItem>
      <Link href={href}>
        <NavigationMenuLink className={buttonVariants({ variant: "link" })}>
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
