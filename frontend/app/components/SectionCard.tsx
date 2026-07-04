import Link from 'next/link';

type SectionCardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
};

export default function SectionCard({ title, description, href, badge }: SectionCardProps) {
  const card = (
    <div className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-slate-800/80">
      {badge ? <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{badge}</p> : null}
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{card}</Link>;
  }

  return card;
}
