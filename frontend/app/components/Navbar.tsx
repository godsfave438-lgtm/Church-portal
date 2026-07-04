import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/events', label: 'Events' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-200">
            Login
          </Link>
          <Link href="/register" className="rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-slate-950">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
