const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchDashboardStats() {
  const response = await fetch(`${API_BASE_URL}/api/dashboard/admin`);
  if (!response.ok) {
    throw new Error('Failed to load dashboard stats');
  }
  return response.json();
}
