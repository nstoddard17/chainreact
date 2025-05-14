import '../styles/globals.css';
import "@/app/globals.css";
import { AuthProvider } from '@/contexts/AuthContext';
import { Navbar } from '@/components/ui/navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-gray-50 text-gray-900">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}