import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">St. Michael&apos;s Anglican Church Amatta</h3>
          <p className="mt-3 text-sm">Serving the community with worship, fellowship, and spiritual growth.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="transition hover:text-emerald-300">About</Link></li>
            <li><Link href="/events" className="transition hover:text-emerald-300">Events</Link></li>
            <li><Link href="/prayer-request" className="transition hover:text-emerald-300">Prayer Request</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-3 text-sm">Amatta, Nigeria</p>
          <p className="text-sm">info@stmichaelamatta.org</p>
        </div>
      </div>
    </footer>
  );
}
