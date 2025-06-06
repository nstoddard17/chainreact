'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Suspense } from 'react';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' },
];

function NavbarContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLoginPage = pathname === '/login';
  const isSignup = searchParams?.get('signup') === 'true';

  const getLoginLink = () => {
    if (isLoginPage && isSignup) {
      return '/login';
    }
    return '/login';
  };

  const getSignupLink = () => {
    if (isLoginPage && !isSignup) {
      return '/login?signup=true';
    }
    return '/login?signup=true';
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-card/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-foreground">ChainReact</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-primary hover:bg-transparent transition-colors duration-200"
            asChild
          >
            <Link href={getLoginLink()}>Log in</Link>
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
            asChild
          >
            <Link href={getSignupLink()}>Get started</Link>
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-xl font-bold text-gray-900">ChainReact</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center text-gray-900 hover:text-blue-600 hover:bg-transparent transition-colors duration-200"
                      asChild
                    >
                      <Link href={getLoginLink()} onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                    </Button>
                    <Button 
                      className="mt-4 w-full justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm hover:shadow transition-all duration-200"
                      asChild
                    >
                      <Link href={getSignupLink()} onClick={() => setMobileMenuOpen(false)}>Get started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Navbar() {
  return (
    <Suspense fallback={
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <span className="text-xl font-bold text-gray-900">ChainReact</span>
          </div>
        </nav>
      </header>
    }>
      <NavbarContent />
    </Suspense>
  );
} 