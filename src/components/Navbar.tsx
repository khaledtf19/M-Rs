import { Menu, Moon, PanelRightCloseIcon, Sun } from "lucide-react";
import { PanelRightClose } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
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
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
    <NavigationMenu className="justify-between hidden lg:flex">
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
  const { pathname } = useRouter();
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <PanelRightCloseIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7 flex flex-col justify-between w-full h-full">
          <div className="flex flex-col justify-center gap-3 items-center">
            <Link
              aria-label="Home"
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Sun className="mr-2 h-4 w-4" aria-hidden="true" />
              <span className="font-bold">Home</span>
            </Link>
          </div>
          <div>
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const LinkButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  return (
    <NavigationMenuItem asChild>
      <NavigationMenuLink asChild>
        <Link href={href} className={buttonVariants({ variant: "link" })}>
          {text}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
