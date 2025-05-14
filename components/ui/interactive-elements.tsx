'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className = '', speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  max?: number;
}

export function TiltCard({ children, className = '', perspective = 1000, max = 10 }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / (rect.width / 2)) * max;
    const rotateX = -(mouseY / (rect.height / 2)) * max;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
}

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorder({ children, className = '' }: AnimatedBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          background: [
            'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            'linear-gradient(45deg, #8b5cf6, #ec4899)',
            'linear-gradient(45deg, #ec4899, #3b82f6)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-white rounded-lg p-[1px]">{children}</div>
    </div>
  );
} 