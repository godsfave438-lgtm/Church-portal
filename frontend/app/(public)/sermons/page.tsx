import PageShell from '@/app/components/PageShell';

const sermons = [
  { title: 'Faith That Moves Mountains', description: 'A sermon on confidence in God during difficult seasons.', badge: 'Audio', speaker: 'Rev. John Okafor', topic: 'Faith' },
  { title: 'The Power of Prayer', description: 'A teaching on the importance of consistent prayer.', badge: 'Video', speaker: 'Rev. Mary Ibe', topic: 'Prayer' },
  { title: 'Living in Purpose', description: 'Discovering purpose and calling in everyday life.', badge: 'PDF', speaker: 'Deaconess Ada', topic: 'Purpose' },
];

export default function SermonsPage() {
  return (
    <PageShell title="Sermons" description="Listen, watch, and read sermons from the church’s teaching ministry.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sermons.map((sermon) => (
          <div key={sermon.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{sermon.title}</h2>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">{sermon.badge}</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{sermon.description}</p>
            <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-slate-200">Speaker:</span> {sermon.speaker}</p>
            <p className="mt-2 text-sm text-slate-400"><span className="font-semibold text-slate-200">Topic:</span> {sermon.topic}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
