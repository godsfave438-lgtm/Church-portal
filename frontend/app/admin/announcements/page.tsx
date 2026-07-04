import PageShell from '@/app/components/PageShell';

export default function AdminAnnouncementsPage() {
  return (
    <PageShell title="Announcements" description="Publish and manage announcements for the church community.">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
        <p className="text-slate-300">Admin announcement management tools will appear here.</p>
      </div>
    </PageShell>
  );
}
