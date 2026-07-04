import PageShell from '@/app/components/PageShell';

export default function AboutPage() {
  return (
    <PageShell title="About the Church" description="Discover the history, mission, vision, and leadership of St. Michael's Anglican Church Amatta.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Our Story</h2>
          <p className="mt-3 text-slate-600">The church is committed to faithful worship, genuine fellowship, and spiritual growth for all ages.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Mission & Vision</h2>
          <p className="mt-3 text-slate-600">To raise a worshipping community that loves God, serves humanity, and advances the gospel.</p>
        </div>
      </div>
    </PageShell>
  );
}
