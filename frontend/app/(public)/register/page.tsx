'use client';

import { FormEvent, useState } from 'react';
import PageShell from '@/app/components/PageShell';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: 'member' }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || 'Registration failed');
      }

      setMessage('Registration successful. You can now sign in with your new account.');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell title="Member Registration" description="Create your church member account and sign in immediately.">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
            placeholder="Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <div className="md:col-span-2">
            <button className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-950" type="submit" disabled={loading}>
              {loading ? 'Creating account...' : 'Submit Registration'}
            </button>
          </div>
        </form>

        {message ? <p className="mt-4 rounded-2xl bg-emerald-500/10 p-3 text-sm text-emerald-300">{message}</p> : null}
        {error ? <p className="mt-4 rounded-2xl bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p> : null}
      </div>
    </PageShell>
  );
}
