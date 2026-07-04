import PageShell from '@/app/components/PageShell';

export default function RegisterPage() {
  return (
    <PageShell title="Member Registration" description="Registration form and approval flow will be implemented here.">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Full Name" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Email" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Phone" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Gender" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Birthday" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100" placeholder="Department" />
          <div className="md:col-span-2">
            <button className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-950">Submit Registration</button>
          </div>
        </form>
      </div>
    </PageShell>
  );
}
