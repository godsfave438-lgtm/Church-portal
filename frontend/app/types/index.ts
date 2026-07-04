export type UserRole = 'visitor' | 'member' | 'admin' | 'priest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
