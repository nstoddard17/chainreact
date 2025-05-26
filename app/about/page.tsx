'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonVariants } from '@/components/ui/button-variants';
import { ScrollReveal } from '@/components/ui/micro-interactions';
import { AnimatedText } from '@/components/ui/micro-interactions';
import { FloatingElement } from '@/components/ui/micro-interactions';
import { ShimmerButton } from '@/components/ui/micro-interactions';
import { TiltCard } from '@/components/ui/interactive-elements';
import { AnimatedCounter } from '@/components/ui/interactive-elements';
import { animations } from '@/lib/design';

const stats = [
  { label: 'Active Users', value: 100000, suffix: '+' },
  { label: 'Countries', value: 50, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
  { label: 'Support Team', value: 24, suffix: '/7' }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/team/sarah.jpg',
    bio: 'Former tech executive with 15+ years of experience in software development and team leadership.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/team/michael.jpg',
    bio: 'Expert in cloud architecture and distributed systems with a passion for scalable solutions.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/team/emily.jpg',
    bio: 'Award-winning designer with a focus on creating intuitive and beautiful user experiences.'
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    image: '/team/david.jpg',
    bio: 'Product strategist with a track record of launching successful products in the enterprise space.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full bg-card py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-foreground drop-shadow-lg mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Our Mission</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">Empowering businesses to automate workflows, save time, and drive growth with seamless integrations and intelligent automation.</p>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by developers worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Our platform has helped thousands of teams build and scale their applications.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <ScrollReveal key={stat.label}>
                  <div className="flex flex-col bg-card p-8">
                    <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Founded in 2020, we set out to revolutionize how teams build and deploy applications.
              What started as a small team of passionate developers has grown into a global platform
              trusted by thousands of teams worldwide.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex flex-col gap-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our journey began when we noticed a gap in the market for a truly developer-friendly
                  platform that combined powerful features with an intuitive interface. We spent months
                  talking to developers, understanding their pain points, and designing solutions that
                  would make their lives easier.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Today, we're proud to offer a platform that not only meets but exceeds the needs of
                  modern development teams. From startups to enterprises, our tools help teams build
                  better software, faster.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col gap-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our commitment to innovation and user experience has earned us recognition in the
                  industry, but our greatest achievement is the success of our users. We're constantly
                  evolving our platform based on user feedback and emerging technologies.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As we look to the future, we remain focused on our mission: to empower developers
                  and teams to build better software. We're excited to continue this journey with
                  our growing community of users.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're a diverse team of passionate individuals working together to build the future of
              software development.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((person) => (
              <ScrollReveal key={person.name}>
                <TiltCard>
                  <li className="relative">
                    <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-foreground">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-primary">
                      {person.role}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{person.bio}</p>
                  </li>
                </TiltCard>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-800 opacity-95" />
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
            Ready to join our mission?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Start building better software today with our powerful platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonVariants
              variant="primary"
              className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              asChild
            >
              <Link href="/login?signup=true" className="flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </ButtonVariants>
            <ButtonVariants
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Sales
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ButtonVariants>
          </div>
        </div>
      </section>
    </div>
  );
} 