import PageShell from '@/app/components/PageShell';

const events = [
  { title: 'Harvest Thanksgiving', description: 'A special celebration of God\'s faithfulness and provision.', badge: 'Upcoming', date: '12th October', time: '10:00 AM', venue: 'Church Grounds' },
  { title: 'Women Fellowship Conference', description: 'An inspiring conference for spiritual growth and support.', badge: 'Upcoming', date: '2nd November', time: '9:00 AM', venue: 'Parish Hall' },
  { title: 'Youth Week', description: 'A week of activities, worship, and fellowship for the youth.', badge: 'Upcoming', date: '20th November', time: '6:00 PM', venue: 'Youth Centre' },
];

export default function EventsPage() {
  return (
    <PageShell title="Events" description="Browse the church calendar and upcoming special occasions.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <div key={event.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{event.title}</h2>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">{event.badge}</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{event.description}</p>
            <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-slate-200">Date:</span> {event.date}</p>
            <p className="mt-2 text-sm text-slate-400"><span className="font-semibold text-slate-200">Time:</span> {event.time}</p>
            <p className="mt-2 text-sm text-slate-400"><span className="font-semibold text-slate-200">Venue:</span> {event.venue}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
