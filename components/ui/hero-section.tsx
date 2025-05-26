'use client';

import { motion } from 'framer-motion';
import { Button } from './button';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden bg-card rounded-xl shadow-lg pt-12 md:pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Automate Your Business,</span>
            <span className="block text-primary">One Flow at a Time</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Build powerful, AI-powered workflows. No dev team required.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => router.push('/login?signup=true')}
            >
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 