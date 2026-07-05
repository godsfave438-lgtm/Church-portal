import PortalShell from '@/app/components/PortalShell';

const adminLinks = [
  { href: '/admin/dashboard', label: 'Overview', description: 'Key church statistics' },
  { href: '/admin/announcements', label: 'Announcements', description: 'Publish updates' },
];

const stats = [
  { label: 'Total members', value: '248' },
  { label: 'Upcoming events', value: '6' },
  { label: 'Pending registrations', value: '14' },
  { label: 'Donations', value: '₦1.2M' },
];

export default function AdminDashboardPage() {
  return (
    <PortalShell
      title="Admin Portal"
      description="Manage church operations, announcements, events, and member communications from one place."
      navLinks={adminLinks}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.3)]">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
          <h2 className="text-xl font-semibold text-white">Recent actions</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• New member registration awaiting approval</li>
            <li>• Upcoming women fellowship scheduled for Friday</li>
            <li>• Announcement draft ready for review</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
          <h2 className="text-xl font-semibold text-white">Management shortcuts</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">Members</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">Meetings</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">Gallery</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">Documents</span>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
