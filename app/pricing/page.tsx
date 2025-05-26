'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingPlans = {
  monthly: [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out ChainReact',
      features: [
        '5 active workflows',
        '1 integration',
        'Basic analytics',
        'Community support',
        'Email notifications',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For growing businesses',
      features: [
        'Unlimited workflows',
        'All integrations',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'Team collaboration',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '$99',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Custom onboarding',
        'Training sessions',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out ChainReact',
      features: [
        '5 active workflows',
        '1 integration',
        'Basic analytics',
        'Community support',
        'Email notifications',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$290',
      description: 'For growing businesses',
      features: [
        'Unlimited workflows',
        'All integrations',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'Team collaboration',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '$990',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Custom onboarding',
        'Training sessions',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ],
};

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <main>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for you
          </p>
          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex rounded-full bg-gray-100 p-1">
              <button
                type="button"
                className={`${!isYearly ? 'bg-white shadow-sm' : ''} relative w-32 rounded-full py-2 text-sm font-medium text-gray-900 transition-all`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${isYearly ? 'bg-white shadow-sm' : ''} relative w-32 rounded-full py-2 text-sm font-medium text-gray-900 transition-all`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
                <span className="absolute -top-2 -right-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-blue-600' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <div className="mb-4">
                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== 'Free' && (
                        <span className="ml-1 text-lg text-gray-500">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-600 shrink-0" />
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                question: 'What happens after my trial?',
                answer: 'After your trial ends, you can choose to upgrade to a paid plan or continue with the free tier.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 14-day money-back guarantee for all paid plans.',
              },
              {
                question: 'Can I cancel anytime?',
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              },
            ].map((faq) => (
              <div key={faq.question} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 