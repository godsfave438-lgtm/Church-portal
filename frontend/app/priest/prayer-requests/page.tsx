import PortalShell from '@/app/components/PortalShell';

const priestLinks = [
  { href: '/priest/dashboard', label: 'Overview', description: 'Priest operations' },
  { href: '/priest/prayer-requests', label: 'Prayer requests', description: 'Review and respond' },
];

const requests = [
  { name: 'Martha', topic: 'Healing for a family member', status: 'New' },
  { name: 'Peter', topic: 'Strength and guidance', status: 'In review' },
];

export default function PriestPrayerRequestsPage() {
  return (
    <PortalShell title="Prayer Requests" description="Review and respond to prayer requests with priest-only access." navLinks={priestLinks}>
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">Private prayer requests</h2>
            <p className="mt-2 text-slate-300">Handle each request with care and archive completed ones when appropriate.</p>
          </div>
          <button className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-200">Archive selected</button>
        </div>
        <div className="mt-6 space-y-3">
          {requests.map((request) => (
            <div key={request.name} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{request.name}</p>
                  <p className="mt-1 text-sm text-slate-300">{request.topic}</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">{request.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
