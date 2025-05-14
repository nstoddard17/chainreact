import { DefaultSession } from 'next-auth';
import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: Role;
      organizationId: string;
      organization?: {
        id: string;
        name: string;
        website: string | null;
        industry: string | null;
      };
    } & DefaultSession['user'];
  }

  interface User {
    role: Role;
    organizationId: string;
  }
} 