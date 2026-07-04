import PageShell from '@/app/components/PageShell';

const givingOptions = ['Tithes', 'Offering', 'Building Fund', 'Donation'];

export default function GivingPage() {
  return (
    <PageShell title="Online Giving" description="A simple giving experience for tithes, offerings, and special donations.">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <p className="text-slate-300">Your support helps sustain worship, ministry, outreach, and church development.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {givingOptions.map((option) => (
            <div key={option} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-200">{option}</div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400">Receipts can be generated for each donation contribution.</p>
      </div>
    </PageShell>
  );
}
