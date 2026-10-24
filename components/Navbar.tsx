"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

function NavbarLinks() {
  const pathname = usePathname();

  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Hobby", href: "/hobby" },
  ];


  return (
    <nav className="navbar">
      {menus.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className={
            pathname === menu.href ? "active" : ""
          }
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<nav>Home | About | Contact | Hobby</nav>}>
      <NavbarLinks/>
    </Suspense>
  );
}
