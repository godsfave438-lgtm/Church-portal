'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import PageShell from '@/app/components/PageShell';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [createName, setCreateName] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createRole, setCreateRole] = useState('priest');
  const [createLoading, setCreateLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedUser = window.localStorage.getItem('church_auth_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || 'Unable to sign in');
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('church_auth_token', payload.token);
        window.localStorage.setItem('church_auth_user', JSON.stringify(payload.user));
      }

      setUser(payload.user);
      setMessage('Signed in successfully.');
      const destination = payload.user.role === 'admin' ? '/admin/dashboard' : payload.user.role === 'priest' ? '/priest/dashboard' : '/member/dashboard';
      router.push(destination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = async (event: FormEvent) => {
    event.preventDefault();
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('church_auth_token') : null;

    if (!token) {
      setError('Please sign in first with an admin or priest account.');
      return;
    }

    setCreateLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/create-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: createName, email: createEmail, password: createPassword, role: createRole }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || 'Unable to create elevated account');
      }

      setMessage(payload.message || 'Elevated account created.');
      setCreateName('');
      setCreateEmail('');
      setCreatePassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to create elevated account');
    } finally {
      setCreateLoading(false);
    }
  };

  return (
    <PageShell title="Login" description="Access the member, admin, or priest portal securely.">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Secure access</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Welcome back</h2>
          <p className="mt-3 text-slate-600">Sign in to reach your dashboard. Admin and priest accounts can also create elevated accounts here.</p>

          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button className="w-full rounded-full bg-emerald-800 px-5 py-3 text-sm font-medium text-white" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {message ? <p className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-800">{message}</p> : null}
          {error ? <p className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p> : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/member/dashboard" className="rounded-full bg-emerald-800 px-5 py-3 text-sm font-medium text-white">Member Portal</Link>
            <Link href="/admin/dashboard" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">Admin Portal</Link>
            <Link href="/priest/dashboard" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">Priest Portal</Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Privileged access</p>
          <h2 className="mt-3 text-2xl font-semibold">Create elevated accounts</h2>
          <p className="mt-3 text-slate-300">Only an authenticated admin or priest can use this form to create admin or priest accounts.</p>

          {user ? (
            <form className="mt-6 space-y-4" onSubmit={handleCreateAccount}>
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
                placeholder="Full name"
                value={createName}
                onChange={(event) => setCreateName(event.target.value)}
                required
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
                placeholder="Email"
                type="email"
                value={createEmail}
                onChange={(event) => setCreateEmail(event.target.value)}
                required
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
                placeholder="Temporary password"
                type="password"
                value={createPassword}
                onChange={(event) => setCreatePassword(event.target.value)}
                required
              />
              <select
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
                value={createRole}
                onChange={(event) => setCreateRole(event.target.value)}
              >
                <option value="priest">Priest</option>
                <option value="admin">Admin</option>
              </select>
              <button className="w-full rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950" type="submit" disabled={createLoading}>
                {createLoading ? 'Creating...' : 'Create elevated account'}
              </button>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
              Sign in first to unlock account creation for admin and priest roles.
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
