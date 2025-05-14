'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './button';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  color?: string;
  className?: string;
}

export function InteractiveCard({
  title,
  description,
  icon,
  href,
  color = 'from-primary-600 to-primary-500',
  className = '',
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
      <div className="relative">
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} text-white`}
          >
            {icon}
          </motion.div>
        )}
        <h3 className="mt-4 font-space-grotesk text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          {description}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="mt-4"
        >
          <Button variant="ghost" size="sm" asChild className="text-primary-600 hover:text-primary-700 hover:bg-primary-50">
            <Link href={href}>
              Learn more
              <span className="ml-1">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
} 