'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { animations } from '@/lib/design';
import { InteractiveCard } from '@/components/ui/interactive-card';
import { ScrollReveal, AnimatedText, FloatingElement, ShimmerButton } from '@/components/ui/micro-interactions';
import { ParallaxSection, TiltCard, AnimatedGradient, AnimatedBorder } from '@/components/ui/interactive-elements';
import { Settings, Zap, Shield, BarChart, Users, Code } from 'lucide-react';

const features = [
  {
    name: 'Workflow Automation',
    description: 'Streamline your processes with our powerful automation tools. Create custom workflows that save time and reduce errors.',
    icon: Settings,
    color: 'from-blue-600 to-blue-500',
    href: '/features/workflow-automation',
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights with our advanced analytics dashboard. Track performance, monitor trends, and make data-driven decisions.',
    icon: BarChart,
    color: 'from-purple-600 to-purple-500',
    href: '/features/analytics',
  },
  {
    name: 'Team Collaboration',
    description: 'Enhance team productivity with our collaboration tools. Share files, communicate effectively, and work together seamlessly.',
    icon: Users,
    color: 'from-green-600 to-green-500',
    href: '/features/collaboration',
  },
  {
    name: 'API Integration',
    description: 'Connect with your favorite tools and services through our robust API. Build custom integrations that work for your needs.',
    icon: Code,
    color: 'from-red-600 to-red-500',
    href: '/features/api',
  },
  {
    name: 'Security & Compliance',
    description: 'Keep your data safe with enterprise-grade security features. Meet compliance requirements and protect sensitive information.',
    icon: Shield,
    color: 'from-yellow-600 to-yellow-500',
    href: '/features/security',
  },
  {
    name: 'Performance Optimization',
    description: 'Optimize your application performance with our advanced tools. Monitor, analyze, and improve your system efficiency.',
    icon: Zap,
    color: 'from-indigo-600 to-indigo-500',
    href: '/features/performance',
  },
];

export default function FeaturesPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        style={{ opacity, scale }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/10 via-transparent to-transparent" />
      </motion.div>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedText
                text="Powerful Features for Modern Workflows"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              />
              <AnimatedText
                text="Discover how our platform can transform your business with cutting-edge features designed for efficiency and growth."
                className="text-lg sm:text-xl text-gray-600 mb-8"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild>
                  <Link href="/login#signup">Get Started</Link>
                </ShimmerButton>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.name} delay={index * 0.1}>
                  <TiltCard>
                    <InteractiveCard
                      title={feature.name}
                      description={feature.description}
                      icon={<feature.icon className="h-6 w-6" />}
                      href={feature.href}
                      color={feature.color}
                    />
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedBorder className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Transform Your Workflow?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Join thousands of businesses already using our platform to streamline their operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ShimmerButton asChild>
                      <Link href="/login#signup">Get Started Free</Link>
                    </ShimmerButton>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Schedule Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedBorder>
          </div>
        </section>
      </main>
    </div>
  );
} 