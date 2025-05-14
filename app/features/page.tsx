'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  WorkflowIcon,
  BotIcon,
  ShieldIcon,
  AnalyticsIcon,
  ClockIcon,
  CodeIcon,
  MessageIcon,
  ZapIcon,
} from '@/components/icons';
import { animations, colors } from '@/lib/design';

const features = [
  {
    name: 'Visual Workflow Builder',
    description: 'Create complex workflows with our intuitive drag-and-drop interface. No coding required.',
    icon: WorkflowIcon,
    color: colors.highlight.yellow,
  },
  {
    name: 'AI-Powered Assistant',
    description: 'Get intelligent suggestions and automate tasks with our built-in AI assistant.',
    icon: BotIcon,
    color: colors.highlight.pink,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    icon: ShieldIcon,
    color: colors.highlight.violet,
  },
  {
    name: 'Advanced Analytics',
    description: 'Track performance, identify bottlenecks, and optimize your workflows.',
    icon: AnalyticsIcon,
    color: colors.highlight.yellow,
  },
  {
    name: 'Real-time Monitoring',
    description: 'Monitor your workflows in real-time with instant notifications and alerts.',
    icon: ClockIcon,
    color: colors.highlight.pink,
  },
  {
    name: 'Developer API',
    description: 'Extend functionality with our powerful API and custom integrations.',
    icon: CodeIcon,
    color: colors.highlight.violet,
  },
  {
    name: 'Multi-channel Support',
    description: 'Connect with your customers across email, chat, and social media platforms.',
    icon: MessageIcon,
    color: colors.highlight.yellow,
  },
  {
    name: 'Lightning Fast',
    description: 'Experience sub-second response times with our optimized infrastructure.',
    icon: ZapIcon,
    color: colors.highlight.pink,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50 to-background-light">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            {...animations.fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="font-space-grotesk text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful Features for Modern Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to automate your business workflows, from simple tasks to complex processes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          {...animations.fadeUp}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of features helps you automate any business process, no matter how complex.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            {...animations.fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join thousands of businesses that are already automating their workflows with ChainReact.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
                asChild
              >
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-primary-500"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 