'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type NavLink = {
  href: string;
  label: string;
  description?: string;
};

type PortalShellProps = {
  title: string;
  description: string;
  navLinks: NavLink[];
  children: ReactNode;
};

export default function PortalShell({ title, description, navLinks, children }: PortalShellProps) {
  const pathname = usePathname();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Church Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_16px_50px_rgba(2,6,23,0.3)]">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl border px-4 py-3 transition ${
                    isActive
                      ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200'
                      : 'border-transparent bg-slate-950/50 text-slate-300 hover:border-emerald-400/20 hover:text-white'
                  }`}
                >
                  <div className="font-medium">{link.label}</div>
                  {link.description ? <div className="mt-1 text-sm text-slate-400">{link.description}</div> : null}
                </Link>
              );
            })}
          </div>
        </aside>

        <section className="space-y-6">{children}</section>
      </div>
    </main>
  );
}
