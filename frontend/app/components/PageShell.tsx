import type { ReactNode } from 'react';

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function PageShell({ title, description, children, action }: PageShellProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.45)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Church Portal</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
            <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
          </div>
          {action ? <div>{action}</div> : null}
        </div>
      </div>
      {children}
    </main>
  );
}
