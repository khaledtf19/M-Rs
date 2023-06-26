import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  Github,
  Laptop,
  LogIn,
  Moon,
  PanelRightCloseIcon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { mainNavLinks } from "~/utils/utils";

import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const { userId } = useAuth();
  const { pathname } = useRouter();
  return (
    <div className="sticky top-0 right-0 left-0 z-50">
      <div className="container py-3 ">
        <MainNav userId={userId} currentPathname={pathname} />
        <MobileNav userId={userId} currentPathname={pathname} />
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;

const MainNav: React.FC<{
  userId?: string | null;
  currentPathname?: string;
}> = ({ userId, currentPathname }) => {
  const { setTheme } = useTheme();
  return (
    <NavigationMenu className="justify-between hidden lg:flex">
      <NavigationMenuList>
        {mainNavLinks.map((link) =>
          link.auth ? (
            userId ? (
              <LinkButton key={link.name} href={link.url} text={link.name} />
            ) : null
          ) : (
            <LinkButton key={link.name} href={link.url} text={link.name} />
          )
        )}
      </NavigationMenuList>
      <NavigationMenuList className=" flex gap-2">
        <NavigationMenuItem>
          <a
            href="https://github.com/khaledtf19/M-Rs"
            target="_blank"
            className={navigationMenuTriggerStyle()}
          >
            <Github className="h-5 w-5" />
          </a>
        </NavigationMenuItem>
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
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className=" flex gap-1 "
              >
                <Sun className="h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className=" flex gap-1 "
              >
                <Moon className="h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className=" flex gap-1 "
              >
                <Laptop className="h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <Button variant="outline">
                <LogIn className="h-5 w-5" />
                LogIn
                <span className="sr-only">Sign in</span>
              </Button>
            </SignInButton>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const MobileNav: React.FC<{
  userId?: string | null;
  currentPathname?: string;
}> = ({ userId, currentPathname }) => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden flex justify-between">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            size="icon"
          >
            <PanelRightCloseIcon className="h-8 w-8" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2 pt-10 text-2xl">
          <div className="px-7 flex flex-col justify-between w-full h-full">
            <div className="flex flex-col justify-center gap-3 items-start">
              {mainNavLinks.map((link) =>
                link.auth ? (
                  userId ? (
                    <Link
                      href={link.url}
                      key={link.name}
                      className="flex items-center w-full"
                    >
                      <link.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span className="font-bold">{link.name}</span>
                    </Link>
                  ) : null
                ) : (
                  <Link
                    href={link.url}
                    key={link.name}
                    className="flex items-center w-full"
                  >
                    <link.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span className="font-bold">{link.name}</span>
                  </Link>
                )
              )}
            </div>
            <div>
              {userId ? null : (
                <SignInButton mode="modal">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="h-5 w-5" />
                    LogIn
                    <span className="sr-only">Sign in</span>
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/khaledtf19/M-Rs"
          target="_blank"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Github className="h-8 w-8" />
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size="icon">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="font-bold">
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className=" flex gap-1 text-lg "
            >
              <Sun className="h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className=" flex gap-1 text-lg"
            >
              <Moon className="h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className=" flex gap-1 text-lg"
            >
              <Laptop className="h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {userId ? (
          <div className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const LinkButton: React.FC<{
  href: string;
  text: string;
}> = ({ href, text }) => {
  return (
    <NavigationMenuItem asChild>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={
            buttonVariants({ variant: "link" }) + " flex  flex-col gap-1"
          }
        >
          {text}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
