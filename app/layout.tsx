import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { AuthProvider } from '@/context/auth-context';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'ChainReact - Workflow Automation Made Simple',
  description: 'Automate your business workflows with our intuitive platform. No coding required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <SessionProvider>
          <AuthProvider>
            <div className="relative flex-grow">
              {/* Background Elements */}
              <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-background-light" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 bg-[url('/chain-links.svg')] bg-center opacity-10" />
              </div>
              
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
                  </div>
                }>
                  {children}
                </Suspense>
              </main>
            </div>
            <Footer />
          </AuthProvider>
          <Toaster position="top-right" />
        </SessionProvider>
      </body>
    </html>
  );
}