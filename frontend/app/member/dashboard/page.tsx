import PortalShell from '@/app/components/PortalShell';

const memberLinks = [
  { href: '/member/dashboard', label: 'Dashboard', description: 'Your church home' },
  { href: '/member/profile', label: 'Profile', description: 'Update details' },
  { href: '/member/notifications', label: 'Notifications', description: 'Recent updates' },
];

const quickLinks = [
  { title: 'Upcoming meetings', detail: 'Bible study on Wednesday at 6:00 p.m.' },
  { title: 'Latest devotional', detail: 'A fresh reflection from the priest is ready.' },
  { title: 'Announcements', detail: 'Read the latest church updates and reminders.' },
];

export default function MemberDashboardPage() {
  return (
    <PortalShell
      title="Member Portal"
      description="Stay connected with meetings, devotionals, announcements, and your church community."
      navLinks={memberLinks}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {quickLinks.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.3)]">
            <p className="text-sm font-semibold text-emerald-200">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <h2 className="text-xl font-semibold text-white">Your weekly rhythm</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>• Sunday worship service at 8:00 a.m.</li>
          <li>• Wednesday Bible study and prayer meeting.</li>
          <li>• Friday choir rehearsal and fellowship.</li>
        </ul>
      </div>
    </PortalShell>
  );
}
