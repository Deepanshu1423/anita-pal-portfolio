"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background: "var(--nav-bg)",
      }}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
            }}
          >
            AP
          </span>

          <span className="text-xl font-black">
            Anita<span className="gradient-text"> Pal</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-bold md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border text-xl font-black md:hidden"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
            aria-label="Toggle menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container pb-5 md:hidden">
          <div className="soft-card flex flex-col gap-2 p-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`mobile-nav-link ${
                    isActive ? "mobile-nav-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}