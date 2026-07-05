import PortalShell from '@/app/components/PortalShell';

const priestLinks = [
  { href: '/priest/dashboard', label: 'Overview', description: 'Priest operations' },
  { href: '/priest/prayer-requests', label: 'Prayer requests', description: 'Review and respond' },
];

const priorities = [
  { title: 'Prayer requests', detail: '3 new requests need attention today.' },
  { title: 'Devotional', detail: 'The weekly reflection is ready to publish.' },
  { title: 'Sermon notes', detail: 'Update the latest teaching materials for Sunday.' },
];

export default function PriestDashboardPage() {
  return (
    <PortalShell
      title="Priest Portal"
      description="Manage prayer requests, devotionals, sermons, and spiritual guidance with dedicated tools."
      navLinks={priestLinks}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {priorities.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.3)]">
            <p className="text-sm font-semibold text-emerald-200">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <h2 className="text-xl font-semibold text-white">Priest actions</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          <li>• Review prayer requests privately and archive resolved items.</li>
          <li>• Prepare Sunday devotionals and sermon notes.</li>
          <li>• Share spiritual messages with the congregation.</li>
        </ul>
      </div>
    </PortalShell>
  );
}
