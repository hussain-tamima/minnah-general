"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

function navClass(path: string, current: string) {
  return path === current ? "active" : undefined;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo" aria-label={`${SITE.name} home`} onClick={() => setOpen(false)}>
          <div className="logo__icon">
            <Image src="/images/icon_mark.png" alt="" width={64} height={64} priority />
          </div>
          <div className="logo__text">
            {SITE.name}
            <span>{SITE.tagline}</span>
          </div>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav${open ? " nav--open" : ""}`} aria-label="Main navigation">
          <Link href="/" className={navClass("/", pathname)} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/services" className={navClass("/services", pathname)} onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className={navClass("/contact", pathname)} onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="header-cta">
            <Link href="/contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
              Book a Repair
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
