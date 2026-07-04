import PageShell from '@/app/components/PageShell';

const devotional = {
  verse: 'Be still, and know that I am God.',
  reflection: 'This is a season to pause, trust God, and receive His peace in the midst of life’s noise.',
  prayer: 'Lord, help me to rest in Your presence and walk in Your peace today.',
};

export default function DevotionalPage() {
  return (
    <PageShell title="Daily Devotional" description="A priest-led devotional space for scripture, reflection, and prayer.">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Verse of the day</p>
        <blockquote className="mt-4 text-2xl font-semibold text-white">“{devotional.verse}”</blockquote>
        <p className="mt-6 text-slate-300"><span className="font-semibold text-slate-200">Reflection:</span> {devotional.reflection}</p>
        <p className="mt-4 text-slate-300"><span className="font-semibold text-slate-200">Prayer:</span> {devotional.prayer}</p>
      </div>
    </PageShell>
  );
}
