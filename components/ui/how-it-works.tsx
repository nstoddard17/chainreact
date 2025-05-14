'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Trigger',
    description: 'Start your workflow with any event',
    icon: '🎯',
  },
  {
    title: 'Action',
    description: 'Define what happens next',
    icon: '⚡',
  },
  {
    title: 'Result',
    description: 'See your automation in action',
    icon: '✨',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Create powerful automations in three simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1 text-center"
              >
                <div className="relative">
                  <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 