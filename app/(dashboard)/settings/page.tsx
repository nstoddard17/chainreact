'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { ButtonVariants } from '@/components/ui/button-variants';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  Building2, 
  Bell, 
  Shield,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const settings = [
    {
      title: 'User Management',
      description: 'Manage users and permissions',
      icon: Users,
      href: '/settings/users',
      color: 'bg-blue-500'
    },
    {
      title: 'Organization',
      description: 'Update organization details',
      icon: Building2,
      href: '/settings/organization',
      color: 'bg-purple-500'
    },
    {
      title: 'Notifications',
      description: 'Configure notification preferences',
      icon: Bell,
      href: '/settings/notifications',
      color: 'bg-green-500'
    },
    {
      title: 'Security',
      description: 'Manage security settings',
      icon: Shield,
      href: '/settings/security',
      color: 'bg-orange-500'
    }
  ];

  const handleUpdateOrganization = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/organization', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          website: formData.get('website'),
          industry: formData.get('industry'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update organization');
      }

      toast.success('Organization updated successfully');
    } catch (error) {
      toast.error('Failed to update organization');
      console.error('Error updating organization:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Settings
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your organization settings and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {settings.map((setting, index) => (
            <motion.div
              key={setting.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${setting.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <setting.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {setting.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {setting.description}
              </p>
              <ButtonVariants
                variant="ghost"
                className="w-full justify-between group"
                onClick={() => router.push(setting.href)}
              >
                <span>Configure</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ButtonVariants>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Organization Details
          </h2>
          <form onSubmit={handleUpdateOrganization} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={session?.user?.organization?.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                name="website"
                id="website"
                defaultValue={session?.user?.organization?.website}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                defaultValue={session?.user?.organization?.industry}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <ButtonVariants
                type="submit"
                variant="primary"
                isLoading={isLoading}
              >
                Save Changes
              </ButtonVariants>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
} 