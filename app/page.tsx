// app/page.tsx
'use client';

import { HeroSection } from '@/components/ui/hero-section';
import { HowItWorks } from '@/components/ui/how-it-works';
import { FeatureHighlights } from '@/components/ui/feature-highlights';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeatureHighlights />
    </main>
  );
}