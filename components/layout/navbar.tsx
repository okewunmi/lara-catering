"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/cakes", label: "Cakes" },
  { href: "/small-chops", label: "Small Chops" },
  { href: "/event-catering", label: "Catering" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-plum/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl tracking-wide text-plum">
          <Image src="/logo.png" alt="Lara Cake & Treats logo" width={48} height={48} className="h-12 w-12 object-contain" />
          Lara <span className="text-amber-deep">Cake &amp; Treats</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-plum/80 transition-colors hover:text-plum"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/booking" variant="secondary">
            Book now
          </Button>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-plum/10 px-6 py-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-plum/80"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/booking" variant="secondary" className="w-full">
            Book now
          </Button>
        </nav>
      )}
    </header>
  );
}
