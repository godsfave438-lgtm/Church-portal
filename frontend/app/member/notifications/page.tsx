import PortalShell from '@/app/components/PortalShell';

const memberLinks = [
  { href: '/member/dashboard', label: 'Dashboard', description: 'Your church home' },
  { href: '/member/profile', label: 'Profile', description: 'Update details' },
  { href: '/member/notifications', label: 'Notifications', description: 'Recent updates' },
];

const notifications = [
  { title: 'New devotional posted', detail: 'A new reflection is ready for today.' },
  { title: 'Sunday reminder', detail: 'Service begins at 8:00 a.m. tomorrow.' },
  { title: 'Meeting update', detail: 'Bible study has moved to the church hall.' },
];

export default function MemberNotificationsPage() {
  return (
    <PortalShell title="Notifications" description="Receive updates about announcements, events, and devotional reminders." navLinks={memberLinks}>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <h2 className="text-xl font-semibold text-white">Recent activity</h2>
        <div className="mt-4 space-y-3">
          {notifications.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
