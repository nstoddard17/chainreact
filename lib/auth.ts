import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        // Check if user has an invitation
        const invitation = await prisma.invitation.findFirst({
          where: {
            email: user.email!,
            expiresAt: { gt: new Date() }
          }
        });

        if (invitation) {
          // Create user with organization from invitation
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name,
              image: user.image,
              organizationId: invitation.organizationId,
              emailVerified: new Date(),
            }
          });

          // Delete the invitation
          await prisma.invitation.delete({
            where: { id: invitation.id }
          });
        }
      }
      return true;
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
        session.user.organizationId = user.organizationId;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
}; 