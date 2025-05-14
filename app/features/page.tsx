'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ButtonVariants } from '@/components/ui/button-variants';
import { InteractiveCard } from '@/components/ui/interactive-card';
import { ScrollReveal } from '@/components/ui/micro-interactions';
import { AnimatedText } from '@/components/ui/micro-interactions';
import { FloatingElement } from '@/components/ui/micro-interactions';
import { ShimmerButton } from '@/components/ui/micro-interactions';
import { animations } from '@/lib/design';
import {
  Workflow,
  BarChart3,
  Users,
  Code2,
  Shield,
  Zap
} from 'lucide-react';

const features = [
  {
    name: 'Workflow Automation',
    description: 'Streamline your processes with intelligent automation tools that save time and reduce errors.',
    icon: Workflow,
    color: 'from-blue-500 to-blue-600',
    href: '/features/workflow'
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights with powerful analytics and customizable dashboards.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    href: '/features/analytics'
  },
  {
    name: 'Team Collaboration',
    description: 'Enhance team productivity with seamless collaboration tools and real-time updates.',
    icon: Users,
    color: 'from-green-500 to-green-600',
    href: '/features/collaboration'
  },
  {
    name: 'API Integration',
    description: 'Connect your tools and services with our robust API and integration platform.',
    icon: Code2,
    color: 'from-orange-500 to-orange-600',
    href: '/features/integration'
  },
  {
    name: 'Security & Compliance',
    description: 'Keep your data safe with enterprise-grade security and compliance features.',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    href: '/features/security'
  },
  {
    name: 'Performance Optimization',
    description: 'Optimize your application performance with advanced monitoring and optimization tools.',
    icon: Zap,
    color: 'from-yellow-500 to-yellow-600',
    href: '/features/performance'
  }
];

export default function FeaturesPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700 py-24 sm:py-32"
      >
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedText
              text="Powerful Features for Modern Applications"
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            />
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Discover the tools and capabilities that make our platform the perfect solution for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonVariants
                variant="gradient"
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
                asChild
              >
                <Link href="/login?signup=true">Get Started</Link>
              </ButtonVariants>
              <ButtonVariants
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </ButtonVariants>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for your workflow
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to build, deploy, and scale your applications.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <ScrollReveal key={feature.name}>
                <InteractiveCard
                  title={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  href={feature.href}
                />
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-90" />
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <FloatingElement>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your workflow?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join thousands of developers and teams who are already using our platform to build better applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ShimmerButton
                className="bg-white text-primary-600 hover:bg-primary-50"
                asChild
              >
                <Link href="/login?signup=true">Get Started</Link>
              </ShimmerButton>
              <ButtonVariants
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </ButtonVariants>
            </div>
          </FloatingElement>
        </div>
      </div>
    </div>
  );
} 