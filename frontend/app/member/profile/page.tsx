import PortalShell from '@/app/components/PortalShell';

const memberLinks = [
  { href: '/member/dashboard', label: 'Dashboard', description: 'Your church home' },
  { href: '/member/profile', label: 'Profile', description: 'Update details' },
  { href: '/member/notifications', label: 'Notifications', description: 'Recent updates' },
];

export default function MemberProfilePage() {
  return (
    <PortalShell title="Profile" description="Manage your personal details and church information." navLinks={memberLinks}>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Full name</p>
            <p className="mt-1 text-base font-semibold text-white">Ada Okafor</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Department</p>
            <p className="mt-1 text-base font-semibold text-white">Women Fellowship</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Phone</p>
            <p className="mt-1 text-base font-semibold text-white">+234 801 234 5678</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-1 text-base font-semibold text-white">ada@example.com</p>
          </div>
        </div>
        <button className="mt-6 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-medium text-slate-950">Edit profile</button>
      </div>
    </PortalShell>
  );
}
