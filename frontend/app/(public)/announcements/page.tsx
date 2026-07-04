import PageShell from '@/app/components/PageShell';

const announcements = [
  { title: 'Midweek Prayer Meeting', description: 'Join us for a special time of prayer and intercession.', badge: 'General', publishedBy: 'Admin' },
  { title: 'Youth Outreach Program', description: 'A community service outreach for the youth fellowship.', badge: 'Youth', publishedBy: 'Priest' },
  { title: 'Choir Concert', description: 'The choir will present a special worship evening.', badge: 'Choir', publishedBy: 'Admin' },
];

export default function AnnouncementsPage() {
  return (
    <PageShell title="Announcements" description="Stay informed with church updates, notices, and ministry announcements.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {announcements.map((announcement) => (
          <div key={announcement.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{announcement.title}</h2>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">{announcement.badge}</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{announcement.description}</p>
            <p className="mt-4 text-sm text-slate-400">Published by {announcement.publishedBy}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
