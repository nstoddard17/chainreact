'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About ChainReact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're building the future of workflow automation, making it accessible to everyone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At ChainReact, we believe that automation should be accessible to everyone. Our mission is to empower businesses and individuals to automate their workflows without the need for complex coding or technical expertise.
          </p>
        </div>
      </div>

      {/* Founder Story */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Founder's Story
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
                <p className="mt-2 text-sm text-gray-600">Founder & CEO</p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  After years of working with complex automation systems, I realized there had to be a better way. ChainReact was born from the vision of making powerful automation tools accessible to everyone, regardless of their technical background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Simplicity</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We believe in making complex things simple. Our platform is designed to be intuitive and easy to use, without sacrificing power or flexibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We're constantly pushing the boundaries of what's possible in workflow automation, always looking for new ways to help our users achieve more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We understand that your workflows are critical to your business. That's why we prioritize reliability and stability in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of businesses that are already automating their workflows with ChainReact.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-500"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 