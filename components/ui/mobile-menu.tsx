'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from './button';
import { Menu, X, ChevronRight, Home, Settings, HelpCircle, Users } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Features', href: '/features', icon: Settings },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Pricing', href: '/pricing', icon: HelpCircle },
  { name: 'Contact', href: '/contact', icon: Users },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 p-6"
            >
              <div className="flex flex-col h-full">
                <nav className="flex-1 space-y-2 mt-8">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                          activeItem === item.name
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          setActiveItem(item.name);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5" />
                          <span className="text-lg font-medium">{item.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="pt-6 border-t">
                  <motion.div
                    variants={itemVariants}
                    custom={menuItems.length}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-4"
                  >
                    <Button asChild className="w-full" variant="outline">
                      <Link href="/login">Sign in</Link>
                    </Button>
                    <Button asChild className="w-full bg-primary-600 hover:bg-primary-700">
                      <Link href="/login#signup">Get Started</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 