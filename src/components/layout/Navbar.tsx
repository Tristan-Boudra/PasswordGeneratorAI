"use client";

import Image from "next/image";
import { Layout } from "@/src/components/layout/Layout";
import { ModeToggle } from "@/src/features/theme/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-border py-1">
      <Layout className="flex flex-row items-center justify-between px-4 py-2">
        <div className="flex lg:hidden relative z-40">
          <button
            className="text-muted-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <XIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger onClick={closeMenu}>
                    Accueil
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger onClick={closeMenu}>
                    A propos
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger onClick={closeMenu}>
                    Actions
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuTrigger onClick={closeMenu}>
                    Contact
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
        <div
          className={`lg:hidden fixed inset-0 z-10 bg-primary-foreground dark:bg-primary-foreground ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4 py-2 h-full w-full">
            <Link href="/" passHref onClick={closeMenu}>
              Accueil
            </Link>
            <Link href="/" passHref onClick={closeMenu}>
              A propos
            </Link>
            <Link href="/" passHref onClick={closeMenu}>
              Actions
            </Link>
            <Link href="/" passHref onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
        <div
          className={`lg:hidden z-10 ${
            menuOpen ? "block" : "hidden"
          } absolute right-14 top-8`}
        >
          <ModeToggle />
        </div>
        <div
          className={`lg:hidden ${
            menuOpen ? "block" : "hidden"
          } absolute right-4 top-4`}
        >
          <button
            className="text-muted-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <XIcon size={24} />
          </button>
        </div>
      </Layout>
    </nav>
  );
};
