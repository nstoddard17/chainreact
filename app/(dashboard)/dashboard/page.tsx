'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { ButtonVariants } from '@/components/ui/button-variants';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  Settings, 
  Activity, 
  BarChart3,
  ArrowRight,
  PlayCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  FileText,
  Zap,
  DollarSign,
  Timer,
  MessageSquare,
  FileCheck,
  UserPlus,
  Mail,
  CreditCard,
  Receipt,
  Star,
  TrendingUp,
  Calendar,
  MessageCircle,
  FileSpreadsheet,
  ShoppingCart,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const quickActions = [
    {
      title: 'Customer Onboarding',
      description: 'Create new customer onboarding workflow',
      icon: UserPlus,
      href: '/workflows/new?type=onboarding',
      color: 'bg-blue-500'
    },
    {
      title: 'Document Processing',
      description: 'Set up document automation',
      icon: FileCheck,
      href: '/workflows/new?type=document',
      color: 'bg-purple-500'
    },
    {
      title: 'Task Management',
      description: 'Create task automation workflow',
      icon: Clock,
      href: '/workflows/new?type=task',
      color: 'bg-green-500'
    },
    {
      title: 'View Reports',
      description: 'Access detailed analytics and reports',
      icon: BarChart3,
      href: '/analytics',
      color: 'bg-orange-500'
    }
  ];

  const workflowStats = [
    {
      title: 'Active Workflows',
      value: '12',
      change: '+2',
      icon: PlayCircle,
      color: 'text-blue-500'
    },
    {
      title: 'Time Saved',
      value: '24h',
      change: '+5h',
      icon: Timer,
      color: 'text-green-500'
    },
    {
      title: 'Success Rate',
      value: '98%',
      change: '+2%',
      icon: CheckCircle2,
      color: 'text-green-500'
    },
    {
      title: 'Revenue Impact',
      value: '$2.4k',
      change: '+$500',
      icon: DollarSign,
      color: 'text-purple-500'
    }
  ];

  const customerMetrics = [
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      icon: Star,
      color: 'text-yellow-500',
      details: {
        positive: '92%',
        neutral: '6%',
        negative: '2%'
      }
    },
    {
      title: 'Response Time',
      value: '2h',
      change: '-30m',
      icon: Clock,
      color: 'text-blue-500',
      details: {
        average: '2h',
        fastest: '15m',
        slowest: '4h'
      }
    },
    {
      title: 'Engagement Rate',
      value: '85%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-green-500',
      details: {
        active: '75%',
        returning: '15%',
        new: '10%'
      }
    },
    {
      title: 'Support Tickets',
      value: '3',
      change: '-2',
      icon: HelpCircle,
      color: 'text-red-500',
      details: {
        open: '3',
        resolved: '12',
        avgResolution: '4h'
      }
    }
  ];

  const workflowTemplates = [
    {
      title: 'Customer Onboarding',
      description: 'Automated welcome emails, document collection, and account setup',
      icon: UserPlus,
      category: 'onboarding',
      steps: ['Welcome Email', 'Document Collection', 'Account Setup', 'Training Session']
    },
    {
      title: 'Invoice Processing',
      description: 'Automated invoice creation, approval, and payment tracking',
      icon: Receipt,
      category: 'document',
      steps: ['Invoice Creation', 'Approval Flow', 'Payment Processing', 'Receipt Generation']
    },
    {
      title: 'Customer Support',
      description: 'Automated ticket routing and response templates',
      icon: HelpCircle,
      category: 'support',
      steps: ['Ticket Creation', 'Priority Assignment', 'Response Template', 'Resolution Tracking']
    },
    {
      title: 'Sales Pipeline',
      description: 'Lead tracking and follow-up automation',
      icon: ShoppingCart,
      category: 'sales',
      steps: ['Lead Capture', 'Qualification', 'Follow-up', 'Conversion']
    },
    {
      title: 'Document Review',
      description: 'Automated document review and approval process',
      icon: FileCheck,
      category: 'document',
      steps: ['Document Upload', 'Review Assignment', 'Approval Flow', 'Archive']
    },
    {
      title: 'Customer Feedback',
      description: 'Automated feedback collection and analysis',
      icon: MessageCircle,
      category: 'feedback',
      steps: ['Survey Creation', 'Distribution', 'Response Collection', 'Analysis']
    }
  ];

  const integrations = [
    {
      name: 'Email',
      icon: Mail,
      status: 'connected',
      color: 'bg-blue-100',
      metrics: {
        processed: '245',
        success: '98%',
        details: {
          sent: '180',
          received: '65',
          failed: '5'
        }
      }
    },
    {
      name: 'QuickBooks',
      icon: Receipt,
      status: 'connected',
      color: 'bg-green-100',
      metrics: {
        synced: '156',
        success: '100%',
        details: {
          invoices: '45',
          payments: '78',
          expenses: '33'
        }
      }
    },
    {
      name: 'Slack',
      icon: MessageSquare,
      status: 'connected',
      color: 'bg-purple-100',
      metrics: {
        notifications: '89',
        success: '99%',
        details: {
          channels: '5',
          messages: '89',
          mentions: '12'
        }
      }
    },
    {
      name: 'CRM',
      icon: CreditCard,
      status: 'not_connected',
      color: 'bg-gray-100',
      metrics: null
    },
    {
      name: 'Google Drive',
      icon: FileSpreadsheet,
      status: 'connected',
      color: 'bg-blue-100',
      metrics: {
        synced: '234',
        success: '100%',
        details: {
          documents: '156',
          spreadsheets: '45',
          presentations: '33'
        }
      }
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'onboarding',
      title: 'New Customer Onboarded',
      description: 'John Smith completed onboarding process',
      time: '5 minutes ago',
      status: 'success',
      details: {
        steps: ['Welcome Email', 'Document Collection', 'Account Setup'],
        duration: '45m'
      }
    },
    {
      id: 2,
      type: 'document',
      title: 'Invoice Processed',
      description: 'Invoice #12345 processed automatically',
      time: '1 hour ago',
      status: 'success',
      details: {
        amount: '$1,234.56',
        customer: 'Acme Corp',
        method: 'Automated'
      }
    },
    {
      id: 3,
      type: 'task',
      title: 'Task Automation',
      description: 'Daily report generation completed',
      time: '2 hours ago',
      status: 'success',
      details: {
        report: 'Daily Sales Summary',
        recipients: '5',
        size: '2.4MB'
      }
    },
    {
      id: 4,
      type: 'feedback',
      title: 'Customer Feedback',
      description: 'Sarah received positive feedback on support',
      time: '3 hours ago',
      status: 'success',
      details: {
        rating: '5/5',
        category: 'Technical Support',
        response: 'Excellent service!'
      }
    },
    {
      id: 5,
      type: 'integration',
      title: 'QuickBooks Sync',
      description: 'Monthly financial data synchronized',
      time: '4 hours ago',
      status: 'success',
      details: {
        records: '156',
        type: 'Monthly Sync',
        duration: '2m'
      }
    },
    {
      id: 6,
      type: 'document',
      title: 'Contract Review',
      description: 'New service agreement reviewed and approved',
      time: '5 hours ago',
      status: 'success',
      details: {
        document: 'Service Agreement',
        reviewers: '3',
        duration: '1h'
      }
    },
    {
      id: 7,
      type: 'support',
      title: 'Support Ticket Resolved',
      description: 'Technical issue resolved for customer',
      time: '6 hours ago',
      status: 'success',
      details: {
        ticket: '#45678',
        category: 'Technical',
        resolution: 'Fixed'
      }
    }
  ];

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
            Welcome back, {session?.user?.name || 'User'}!
          </h1>
          <p className="mt-2 text-gray-600">
            Here's what's happening with your organization today.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {action.description}
              </p>
              <ButtonVariants
                variant="ghost"
                className="w-full justify-between group"
                onClick={() => router.push(action.href)}
              >
                <span>Create</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ButtonVariants>
            </motion.div>
          ))}
        </div>

        {/* Workflow Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {workflowStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last week
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {customerMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className={`${metric.color} p-3 rounded-full`}>
                  <metric.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change} from last week
                </span>
              </div>
              {metric.details && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(metric.details).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="ml-1 font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
              <ButtonVariants
                variant="ghost"
                onClick={() => router.push('/activity')}
              >
                View All
              </ButtonVariants>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-100' :
                    activity.status === 'warning' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {activity.type === 'onboarding' ? (
                      <UserPlus className="w-5 h-5 text-green-600" />
                    ) : activity.type === 'document' ? (
                      <FileCheck className="w-5 h-5 text-blue-600" />
                    ) : activity.type === 'feedback' ? (
                      <ThumbsUp className="w-5 h-5 text-green-600" />
                    ) : activity.type === 'integration' ? (
                      <FileSpreadsheet className="w-5 h-5 text-purple-600" />
                    ) : activity.type === 'support' ? (
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.description}
                    </p>
                    {activity.details && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {Object.entries(activity.details).map(([key, value]) => (
                          <span
                            key={key}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Workflow Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Workflow Templates
              </h2>
              <div className="space-y-4">
                {workflowTemplates.map((template) => (
                  <div
                    key={template.title}
                    className="p-4 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors cursor-pointer"
                    onClick={() => router.push(`/workflows/new?template=${template.category}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gray-100">
                        <template.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {template.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {template.description}
                        </p>
                      </div>
                    </div>
                    {template.steps && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {template.steps.map((step) => (
                          <span
                            key={step}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <ButtonVariants
                  variant="outline"
                  className="w-full justify-center mt-4"
                  onClick={() => router.push('/templates')}
                >
                  View All Templates
                </ButtonVariants>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Connected Services
              </h2>
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`${integration.color} p-2 rounded-full`}>
                          <integration.icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {integration.name}
                        </span>
                      </div>
                      <span className={`text-xs font-medium ${
                        integration.status === 'connected' ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {integration.status === 'connected' ? 'Connected' : 'Not Connected'}
                      </span>
                    </div>
                    {integration.metrics && (
                      <>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Processed:</span>
                            <span className="ml-1 font-medium text-gray-900">
                              {integration.metrics.processed || integration.metrics.synced || integration.metrics.notifications}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Success:</span>
                            <span className="ml-1 font-medium text-gray-900">
                              {integration.metrics.success}
                            </span>
                          </div>
                        </div>
                        {integration.metrics.details && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="grid grid-cols-3 gap-2 text-sm">
                              {Object.entries(integration.metrics.details).map(([key, value]) => (
                                <div key={key}>
                                  <span className="text-gray-500 capitalize">{key}:</span>
                                  <span className="ml-1 font-medium text-gray-900">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
                <ButtonVariants
                  variant="outline"
                  className="w-full justify-center mt-4"
                  onClick={() => router.push('/settings/integrations')}
                >
                  Manage Integrations
                </ButtonVariants>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 