'use client';

import { motion } from 'framer-motion';
import { Search, Book, Video, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const categories = [
  {
    name: 'Getting Started',
    description: 'Learn the basics of ChainReact and set up your first workflow.',
    icon: Book,
    articles: [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running with ChainReact in minutes.',
        link: '/docs/quick-start',
      },
      {
        title: 'Creating Your First Workflow',
        description: 'Step-by-step guide to building your first automation.',
        link: '/docs/first-workflow',
      },
      {
        title: 'Understanding Triggers',
        description: 'Learn about different types of triggers and when to use them.',
        link: '/docs/triggers',
      },
    ],
  },
  {
    name: 'Video Tutorials',
    description: 'Watch our video guides to master ChainReact features.',
    icon: Video,
    articles: [
      {
        title: 'Workflow Builder Tutorial',
        description: 'Learn how to use our visual workflow builder.',
        link: '/tutorials/workflow-builder',
      },
      {
        title: 'Integration Setup',
        description: 'How to set up and configure integrations.',
        link: '/tutorials/integrations',
      },
      {
        title: 'Advanced Workflows',
        description: 'Create complex workflows with multiple steps.',
        link: '/tutorials/advanced-workflows',
      },
    ],
  },
  {
    name: 'Common Issues',
    description: 'Solutions to frequently encountered problems.',
    icon: MessageCircle,
    articles: [
      {
        title: 'Troubleshooting Guide',
        description: 'Common issues and their solutions.',
        link: '/docs/troubleshooting',
      },
      {
        title: 'Integration Errors',
        description: 'How to fix common integration problems.',
        link: '/docs/integration-errors',
      },
      {
        title: 'Performance Optimization',
        description: 'Tips for optimizing your workflows.',
        link: '/docs/optimization',
      },
    ],
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background pt-32 pb-12 px-4">
      {/* Hero Section */}
      <section className="bg-card rounded-xl shadow-lg p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            How can we help?
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to your questions in our documentation, video tutorials, and guides.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-xl border-0 py-4 pl-10 pr-3 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="bg-card rounded-xl shadow-lg p-8 mt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Help Categories
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-x-4">
                <category.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold leading-7 text-foreground">
                  {category.name}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {category.description}
              </p>
              <ul className="mt-8 space-y-4">
                {category.articles.map((article) => (
                  <li key={article.title}>
                    <a
                      href={article.link}
                      className="group flex items-center gap-x-3 rounded-lg p-3 text-sm leading-6 text-muted-foreground hover:bg-muted"
                    >
                      <span className="font-semibold text-foreground">
                        {article.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <p className="ml-6 mt-1 text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-card rounded-xl shadow-lg p-8 mt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Still need help?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our support team is here to help you get the most out of ChainReact.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-xl border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-xl border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-xl border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-background"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 