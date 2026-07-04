import PageShell from '@/app/components/PageShell';

export default function PrayerRequestPage() {
  return (
    <PageShell title="Prayer Request" description="Visitors can submit prayer requests here. The request is reserved for priest-only access.">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <p className="text-slate-300">This form is intended for confidential prayer support and is handled only by the priest.</p>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Name (optional)" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Email (optional)" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Phone (optional)" />
          <textarea className="min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Write your prayer request here" />
          <button className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-950">Submit Request</button>
        </form>
      </div>
    </PageShell>
  );
}
