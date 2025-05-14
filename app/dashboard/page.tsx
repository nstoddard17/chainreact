'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  LayoutDashboard,
  Workflow,
  Bot,
  BarChart3,
  Settings,
  Plus,
  Search,
  Bell,
  User,
} from 'lucide-react';

const sidebarItems = [
  { name: 'Automations', icon: Workflow, active: true },
  { name: 'Assistant', icon: Bot },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Integrations', icon: LayoutDashboard },
  { name: 'Settings', icon: Settings },
];

const triggerOptions = [
  {
    name: 'Form Submission',
    description: 'Trigger when a form is submitted',
    icon: '📝',
  },
  {
    name: 'Stripe Payment',
    description: 'Trigger when a payment is received',
    icon: '💳',
  },
  {
    name: 'Google Sheet',
    description: 'Trigger when a new row is added',
    icon: '📊',
  },
  {
    name: 'Discord Command',
    description: 'Trigger when a command is used',
    icon: '🤖',
  },
  {
    name: 'Time-Based',
    description: 'Trigger at scheduled intervals',
    icon: '⏰',
  },
];

export default function DashboardPage() {
  const [showTriggerModal, setShowTriggerModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">ChainReact</h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-md ${
                  item.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Topbar */}
        <div className="sticky top-0 z-10 flex items-center h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center flex-1">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search automations..."
                className="w-full h-10 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Automations</h2>
            <Button
              onClick={() => setShowTriggerModal(true)}
              className="flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Flow
            </Button>
          </div>

          {/* Canvas Area */}
          <div className="grid grid-cols-3 gap-6">
            {/* Recent Flows */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Flows
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        Form to Slack Notification
                      </h4>
                      <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Last triggered 2 hours ago
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Flow Stats */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Flow Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Flows</span>
                  <span className="text-sm font-medium text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Active Flows</span>
                  <span className="text-sm font-medium text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Runs This Week</span>
                  <span className="text-sm font-medium text-gray-900">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Success Rate</span>
                  <span className="text-sm font-medium text-green-600">98%</span>
                </div>
              </div>
            </Card>

            {/* Integrations */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connected Integrations
              </h3>
              <div className="space-y-4">
                {['Slack', 'Google Sheets', 'Stripe', 'Discord'].map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {name}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                      Connected
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Trigger Modal */}
      {showTriggerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose a Trigger
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {triggerOptions.map((trigger) => (
                <button
                  key={trigger.name}
                  className="flex flex-col items-start p-4 text-left bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100"
                >
                  <span className="text-2xl mb-2">{trigger.icon}</span>
                  <span className="font-medium text-gray-900">
                    {trigger.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {trigger.description}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                onClick={() => setShowTriggerModal(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button>Continue</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 