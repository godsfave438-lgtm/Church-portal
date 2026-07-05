'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/events', label: 'Events' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-wide text-emerald-300">
          St. Michael&apos;s Church
        </Link>

        <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-emerald-300">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-200">
            Login
          </Link>
          <Link href="/register" className="rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-slate-950">
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-full border border-emerald-400/40 p-2 text-emerald-200 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="transition hover:text-emerald-300">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-200">
                Login
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)} className="rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-slate-950">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
