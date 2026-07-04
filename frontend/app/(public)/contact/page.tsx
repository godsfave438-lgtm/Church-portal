import PageShell from '@/app/components/PageShell';

export default function ContactPage() {
  return (
    <PageShell title="Contact" description="Reach out to the church for general enquiries, prayer support, or ministry partnership.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
          <h2 className="text-xl font-semibold text-white">Send a message</h2>
          <p className="mt-3 text-slate-300">The general contact form will route to the priest and administrators.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-emerald-950/40 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
          <h2 className="text-xl font-semibold text-white">Church information</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><span className="font-semibold text-slate-100">Address:</span> Amatta, Nigeria</li>
            <li><span className="font-semibold text-slate-100">Phone:</span> +234 800 000 0000</li>
            <li><span className="font-semibold text-slate-100">Email:</span> info@stmichaelamatta.org</li>
            <li><span className="font-semibold text-slate-100">WhatsApp:</span> +234 800 000 0000</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
