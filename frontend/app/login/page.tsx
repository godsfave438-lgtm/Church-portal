import Link from 'next/link';
import PageShell from '@/app/components/PageShell';

export default function LoginPage() {
  return (
    <PageShell title="Login" description="Access the member, admin, or priest portal securely.">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Secure access</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">Welcome back</h2>
        <p className="mt-3 text-slate-600">Authentication and role-based access will be implemented here.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/member/dashboard" className="rounded-full bg-emerald-800 px-5 py-3 text-sm font-medium text-white">Member Portal</Link>
          <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">Admin Portal</Link>
          <Link href="/priest/dashboard" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">Priest Portal</Link>
        </div>
      </div>
    </PageShell>
  );
}
