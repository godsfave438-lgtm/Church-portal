import PageShell from '@/app/components/PageShell';

const albums = [
  { title: 'Youth Week', description: 'Moments of fellowship, worship, and service.', badge: 'Youth' },
  { title: 'Harvest', description: 'Celebration of God’s faithfulness and provision.', badge: 'Community' },
  { title: 'Choir', description: 'A gallery of worship and musical ministry.', badge: 'Worship' },
  { title: 'Variety Night', description: 'An evening of creativity, fun, and community.', badge: 'Events' },
];

export default function GalleryPage() {
  return (
    <PageShell title="Gallery" description="Browse highlights from church events, ministries, and special occasions.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {albums.map((album) => (
          <div key={album.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
            <h2 className="text-xl font-semibold text-white">{album.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{album.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-300">{album.badge}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
