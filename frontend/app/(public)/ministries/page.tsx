import PageShell from '@/app/components/PageShell';

const ministries = [
  { title: 'Anglican Youth Fellowship', description: 'A vibrant youth ministry focused on discipleship, mentorship, and outreach.', badge: 'Youth', leaders: 'Youth Coordinators', schedule: 'Fridays @ 6:00 PM' },
  { title: 'Choir', description: 'Leading worship through music, praise, and sacred celebration.', badge: 'Worship', leaders: 'Choir Director', schedule: 'Thursdays @ 6:30 PM' },
  { title: 'Women\'s Fellowship', description: 'Encouraging fellowship, prayer, and support among women.', badge: 'Women', leaders: 'Women Leaders', schedule: 'Second Saturday @ 10:00 AM' },
  { title: 'Men\'s Fellowship', description: 'Building men of integrity, spiritual maturity, and service.', badge: 'Men', leaders: 'Men Leaders', schedule: 'First Saturday @ 10:00 AM' },
  { title: 'Sunday School', description: 'Teaching children and young ones the Word of God with care.', badge: 'Children', leaders: 'Sunday School Teachers', schedule: 'Sundays @ 9:00 AM' },
  { title: 'Evangelism', description: 'Reaching out and sharing the gospel in the wider community.', badge: 'Outreach', leaders: 'Evangelism Team', schedule: 'Monthly outreach programs' },
];

export default function MinistriesPage() {
  return (
    <PageShell title="Ministries" description="Explore the diverse ministries that serve the church and its community.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ministries.map((ministry) => (
          <div key={ministry.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{ministry.title}</h2>
              <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">{ministry.badge}</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{ministry.description}</p>
            <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-slate-200">Leaders:</span> {ministry.leaders}</p>
            <p className="mt-2 text-sm text-slate-400"><span className="font-semibold text-slate-200">Schedule:</span> {ministry.schedule}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
