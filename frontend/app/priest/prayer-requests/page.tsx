import PageShell from '@/app/components/PageShell';

export default function PriestPrayerRequestsPage() {
  return (
    <PageShell title="Prayer Requests" description="Review and respond to prayer requests with priest-only access.">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <p className="text-slate-300">Priest prayer request management will be implemented here.</p>
      </div>
    </PageShell>
  );
}
