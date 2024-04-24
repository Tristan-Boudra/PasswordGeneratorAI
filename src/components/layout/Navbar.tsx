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
        <div className="flexitems-center gap-2">
          <ModeToggle />
        </div>
      </Layout>
    </nav>
  );
};
