'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Bot, LineChart, Workflow } from 'lucide-react';

const features = [
  {
    title: 'Workflow Builder',
    description: 'Create complex automation chains with our intuitive drag-and-drop interface.',
    icon: Workflow,
  },
  {
    title: 'AI Assistant',
    description: 'Let our AI help you build and optimize your workflows automatically.',
    icon: Bot,
  },
  {
    title: 'Dashboard Analytics',
    description: 'Track your automation performance with detailed insights and metrics.',
    icon: LineChart,
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-24 bg-card rounded-xl shadow-lg pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to automate your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-primary">
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 