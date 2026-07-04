import Link from 'next/link';
import SectionCard from '@/app/components/SectionCard';

const highlights = [
  { title: 'Welcome', description: 'A modern digital home for worship, fellowship, and church administration.' },
  { title: 'Services', description: 'Stay connected with weekly services, meetings, and ministry updates.' },
  { title: 'Prayer', description: 'Share a prayer request securely with the priest.' },
];

const quickLinks = [
  { title: 'About the Church', description: 'Learn about our history, mission, and leadership.', href: '/about', badge: 'Vision' },
  { title: 'Upcoming Events', description: 'Explore services, meetings, and special programs.', href: '/events', badge: 'Calendar' },
  { title: 'Prayer Requests', description: 'Submit a confidential request for the priest.', href: '/prayer-request', badge: 'Support' },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_28%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
          <div className="relative max-w-2xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">St. Michael&apos;s Anglican Church Amatta</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">A luminous, reflective place for worship, fellowship, and growth.</h1>
            <p className="text-lg text-slate-300">
              This platform brings together public information, member access, admin management, and priest-led ministry tools in one calm digital sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-slate-950">Register</Link>
              <Link href="/prayer-request" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur">Submit Prayer Request</Link>
            </div>
          </div>

          <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <h2 className="font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Explore the church</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">A calm digital home for every part of church life.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((link) => (
            <SectionCard key={link.title} title={link.title} description={link.description} href={link.href} badge={link.badge} />
          ))}
        </div>
      </section>
    </main>
  );
}
