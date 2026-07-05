import PortalShell from '@/app/components/PortalShell';

const adminLinks = [
  { href: '/admin/dashboard', label: 'Overview', description: 'Key church statistics' },
  { href: '/admin/announcements', label: 'Announcements', description: 'Publish updates' },
];

export default function AdminAnnouncementsPage() {
  return (
    <PortalShell
      title="Announcements"
      description="Publish and manage announcements for the church community."
      navLinks={adminLinks}
    >
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">Upcoming announcements</h2>
            <p className="mt-2 text-slate-300">Create new updates for the congregation and schedule them for publishing.</p>
          </div>
          <button className="rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-slate-950">New announcement</button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm font-semibold text-emerald-200">Sunday service reminder</p>
            <p className="mt-2 text-sm text-slate-300">Please arrive by 8:30 a.m. for the morning worship and fellowship hour.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm font-semibold text-emerald-200">Youth week</p>
            <p className="mt-2 text-sm text-slate-300">The AYF program begins this Thursday with a special prayer and outreach session.</p>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
