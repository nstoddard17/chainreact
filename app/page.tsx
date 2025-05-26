// app/page.tsx
'use client';

import { HeroSection } from '@/components/ui/hero-section';
import { HowItWorks } from '@/components/ui/how-it-works';
import { FeatureHighlights } from '@/components/ui/feature-highlights';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4 pt-32">
      <div className="w-full max-w-5xl space-y-12">
        <section className="bg-card rounded-xl shadow-lg p-8">
          <HeroSection />
        </section>
        <section className="bg-card rounded-xl shadow-lg p-8">
          <HowItWorks />
        </section>
        <section className="bg-card rounded-xl shadow-lg p-8">
          <FeatureHighlights />
        </section>
      </div>
    </main>
  );
}