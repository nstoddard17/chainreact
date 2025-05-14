'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollReveal, AnimatedText, FloatingElement, ShimmerButton } from '@/components/ui/micro-interactions';
import { ParallaxSection, TiltCard, AnimatedGradient, AnimatedBorder } from '@/components/ui/interactive-elements';
import { AnimatedCounter } from '@/components/ui/interactive-elements';

const stats = [
  { label: 'Active Users', value: 10000, suffix: '+' },
  { label: 'Countries', value: 50, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
  { label: 'Support Team', value: 24, suffix: '/7' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/team/sarah.jpg',
    bio: 'Former tech executive with 15+ years of experience in enterprise software.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/team/michael.jpg',
    bio: 'Ex-Google engineer specializing in scalable architecture and AI.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: '/team/emily.jpg',
    bio: 'Product leader with a track record of successful SaaS launches.',
  },
  {
    name: 'David Kim',
    role: 'Head of Design',
    image: '/team/david.jpg',
    bio: 'Award-winning designer focused on creating intuitive user experiences.',
  },
];

export default function AboutPage() {
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
                text="Our Mission"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              />
              <AnimatedText
                text="We're on a mission to revolutionize how businesses operate by making automation accessible to everyone."
                className="text-lg sm:text-xl text-gray-600 mb-8"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton asChild>
                  <Link href="/login#signup">Join Our Team</Link>
                </ShimmerButton>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <TiltCard>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        className="text-4xl font-bold text-primary-600"
                      />
                      <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedBorder className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 sm:p-12">
                <ScrollReveal>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      Founded in 2023, our company emerged from a simple observation: businesses were struggling with complex,
                      outdated workflows that hindered growth and innovation. We set out to change that by creating a platform
                      that makes automation accessible to everyone.
                    </p>
                    <p className="mt-4">
                      Today, we're proud to serve thousands of businesses worldwide, helping them streamline their operations
                      and focus on what matters most: growth and innovation.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </AnimatedBorder>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <TiltCard>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-primary-600">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedGradient className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <div className="p-8 sm:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Join Our Mission
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Be part of a team that's shaping the future of business automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asChild>
                    <Link href="/careers">View Careers</Link>
                  </ShimmerButton>
                  <Button variant="outline" asChild className="text-white border-white hover:bg-white/10">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </AnimatedGradient>
          </div>
        </section>
      </main>
    </div>
  );
} 