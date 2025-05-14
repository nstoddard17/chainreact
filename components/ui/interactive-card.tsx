'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  className?: string;
}

export function InteractiveCard({
  title,
  description,
  icon: Icon,
  color,
  href,
  className,
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg',
        className
      )}
    >
      <Link href={href} className="block">
        <div className="flex items-center gap-4">
          <div className={cn('rounded-lg p-2 bg-gradient-to-br', color)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center text-primary-600">
          <span className="text-sm font-medium">Learn more</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
} 