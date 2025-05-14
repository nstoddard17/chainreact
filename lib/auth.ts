import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';
import Google from 'next-auth/providers/google';

export const { auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
        session.user.organizationId = user.organizationId;
        
        // Fetch organization details
        if (user.organizationId) {
          const organization = await prisma.organization.findUnique({
            where: { id: user.organizationId },
          });
          if (organization) {
            session.user.organization = {
              id: organization.id,
              name: organization.name,
              website: organization.website ?? undefined,
              industry: organization.industry ?? undefined,
            };
          }
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
}); 