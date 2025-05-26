'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ButtonVariants } from '@/components/ui/button-variants';
import { InteractiveCard } from '@/components/ui/interactive-card';
import { ScrollReveal } from '@/components/ui/micro-interactions';
import { AnimatedText } from '@/components/ui/micro-interactions';
import { FloatingElement } from '@/components/ui/micro-interactions';
import { Workflow, BarChart3, Users, Code2, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Workflow Automation',
    description: 'Streamline your development process with automated workflows and CI/CD pipelines.',
    icon: Workflow,
    color: 'from-blue-600 to-blue-500',
    href: '/features/workflow-automation'
  },
  {
    title: 'Real-time Analytics',
    description: 'Get instant insights into your application performance and user behavior.',
    icon: BarChart3,
    color: 'from-purple-600 to-purple-500',
    href: '/features/analytics'
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team using integrated collaboration tools.',
    icon: Users,
    color: 'from-green-600 to-green-500',
    href: '/features/collaboration'
  },
  {
    title: 'API Integration',
    description: 'Connect your application with any service using our powerful API tools.',
    icon: Code2,
    color: 'from-orange-600 to-orange-500',
    href: '/features/api-integration'
  },
  {
    title: 'Security & Compliance',
    description: 'Keep your data safe with enterprise-grade security features.',
    icon: Shield,
    color: 'from-red-600 to-red-500',
    href: '/features/security'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your application for maximum speed and efficiency.',
    icon: Zap,
    color: 'from-yellow-600 to-yellow-500',
    href: '/features/performance'
  }
];

export default function FeaturesPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-12 px-4">
      <motion.div
        style={{ opacity, scale }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/10 via-transparent to-transparent" />
      </motion.div>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="bg-card rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Powerful Features
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to build and scale your application
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <ButtonVariants 
              variant="primary" 
              className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" 
              asChild
            >
              <Link href="/login?signup=true" className="flex items-center gap-2">
                Start Building Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </ButtonVariants>
            <ButtonVariants 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5" 
              asChild
            >
              <Link href="/pricing" className="flex items-center gap-2">
                Compare Plans
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ButtonVariants>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-card rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <InteractiveCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card rounded-xl shadow-lg p-8 text-center">
          <FloatingElement>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who are already building with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ButtonVariants 
                variant="primary" 
                className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" 
                asChild
              >
                <Link href="/login?signup=true" className="flex items-center gap-2">
                  Start Your Free Trial
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </ButtonVariants>
              <ButtonVariants 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5" 
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </ButtonVariants>
            </div>
          </FloatingElement>
        </section>
      </main>
    </div>
  );
} 