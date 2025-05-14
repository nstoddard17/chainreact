'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonVariants } from './ui/button-variants';
import { FormValidation } from './ui/form-validation';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string | null;
  role: 'ADMIN' | 'USER';
}

interface Invitation {
  id: string;
  email: string;
  role: 'ADMIN' | 'USER';
  createdAt: string;
  expiresAt: string;
}

export function UserManagement() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'ADMIN' | 'USER'>('USER');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  const handleInvite = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/invitations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send invitation');
      }

      setInvitations([...invitations, data.invitation]);
      setEmail('');
      toast.success('Invitation sent successfully');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send invitation');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      if (response.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      toast.error('Failed to fetch users');
    }
  };

  const fetchInvitations = async () => {
    try {
      const response = await fetch('/api/invitations');
      const data = await response.json();
      if (response.ok) {
        setInvitations(data.invitations);
      }
    } catch (error) {
      toast.error('Failed to fetch invitations');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Invite New User</h2>
        <div className="space-y-4">
          <FormValidation
            label="Email Address"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
            rules={[
              { required: true, message: 'Email is required' },
              { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
            ]}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'ADMIN' | 'USER')}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <ButtonVariants
            onClick={handleInvite}
            isLoading={isLoading}
            disabled={!email || isLoading}
            className="w-full"
          >
            Send Invitation
          </ButtonVariants>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Pending Invitations</h2>
        <div className="space-y-4">
          <AnimatePresence>
            {invitations.map((invitation) => (
              <motion.div
                key={invitation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{invitation.email}</p>
                  <p className="text-sm text-gray-500">
                    Role: {invitation.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    Expires: {new Date(invitation.expiresAt).toLocaleDateString()}
                  </p>
                </div>
                <ButtonVariants
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // TODO: Implement resend invitation
                    toast.info('Resend functionality coming soon');
                  }}
                >
                  Resend
                </ButtonVariants>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Current Users</h2>
        <div className="space-y-4">
          <AnimatePresence>
            {users.map((user) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{user.name || user.email}</p>
                  <p className="text-sm text-gray-500">
                    Role: {user.role}
                  </p>
                </div>
                <ButtonVariants
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // TODO: Implement user management actions
                    toast.info('User management coming soon');
                  }}
                >
                  Manage
                </ButtonVariants>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 