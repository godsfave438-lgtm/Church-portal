import PageShell from '@/app/components/PageShell';

const meetings = [
  { title: 'Sunday Service', date: 'Every Sunday', time: '8:00 AM & 10:00 AM', venue: 'Main Sanctuary', organizer: 'Priest', description: 'Worship, prayer, and a scripture-filled sermon for the whole church family.' },
  { title: 'Bible Study', date: 'Wednesdays', time: '5:30 PM', venue: 'Church Hall', organizer: 'Bible Study Team', description: 'A midweek gathering for prayer, fellowship, and deeper teaching.' },
  { title: 'AYF Meeting', date: 'Fridays', time: '6:00 PM', venue: 'Youth Centre', organizer: 'AYF Leaders', description: 'Youth discipleship, leadership training, and outreach activities.' },
  { title: 'Choir Rehearsal', date: 'Thursdays', time: '6:30 PM', venue: 'Choir Loft', organizer: 'Choir Director', description: 'Preparation for worship and special church programs.' },
  { title: 'Women\'s Fellowship', date: 'Second Saturday', time: '10:00 AM', venue: 'Women\'s Room', organizer: 'Women Leaders', description: 'Prayer, encouragement, and support activities for women in the church.' },
  { title: 'Men\'s Fellowship', date: 'First Saturday', time: '10:00 AM', venue: 'Parish Hall', organizer: 'Men Leaders', description: 'Discipleship, service, and spiritual maturity for men.' },
];

export default function MeetingsPage() {
  return (
    <PageShell title="Meetings" description="View upcoming worship gatherings and ministry meetings for the church family.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {meetings.map((meeting) => (
          <div key={meeting.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{meeting.title}</h2>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">Weekly</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{meeting.description}</p>
            <dl className="mt-5 space-y-2 text-sm text-slate-400">
              <div><span className="font-semibold text-slate-200">Date:</span> {meeting.date}</div>
              <div><span className="font-semibold text-slate-200">Time:</span> {meeting.time}</div>
              <div><span className="font-semibold text-slate-200">Venue:</span> {meeting.venue}</div>
              <div><span className="font-semibold text-slate-200">Organizer:</span> {meeting.organizer}</div>
            </dl>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
