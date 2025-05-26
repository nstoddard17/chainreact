'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonVariants } from '@/components/ui/button-variants';
import { FormValidation } from '@/components/ui/form-validation';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Github, Mail } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  // Check for signup parameter
  useEffect(() => {
    const signupParam = searchParams?.get('signup');
    setIsSignup(signupParam === 'true');
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignup) {
        // Handle signup
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, password }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to sign up');
        }
      }

      // Sign in
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: '/dashboard' });
  };

  const toggleAuthMode = () => {
    const newMode = !isSignup;
    setIsSignup(newMode);
    router.push(newMode ? '/login?signup=true' : '/login');
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-card py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {isSignup
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <button
              onClick={toggleAuthMode}
              className="font-medium text-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {isSignup ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </motion.div>

        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-card p-8 rounded-xl shadow-lg w-full"
        >
          <div className="space-y-4">
            {isSignup && (
              <FormValidation
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(value) => setFullName(value)}
                rules={[
                  { required: true, message: 'Full name is required' },
                  { minLength: 2, message: 'Name must be at least 2 characters' }
                ]}
              />
            )}

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

            <FormValidation
              label="Password"
              type="password"
              value={password}
              onChange={(value) => setPassword(value)}
              rules={[
                { required: true, message: 'Password is required' },
                { minLength: 8, message: 'Password must be at least 8 characters' }
              ]}
              showStrength={isSignup}
            />

            {!isSignup && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-foreground"
                  >
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex">
            <ButtonVariants
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
              className="w-full"
            >
              {isSignup ? 'Create Account' : 'Sign in'}
            </ButtonVariants>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <ButtonVariants
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-card text-foreground border border-border hover:bg-muted px-6 py-4 text-base font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              <Mail className="h-5 w-5 mr-2" />
              Google
            </ButtonVariants>
            <ButtonVariants
              type="button"
              onClick={handleGithubSignIn}
              className="w-full bg-card text-foreground border border-border hover:bg-muted px-6 py-4 text-base font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </ButtonVariants>
          </div>

          {isSignup && (
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our{' '}
              <a href="/terms" className="text-primary hover:text-primary-foreground transition-colors duration-200">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-primary hover:text-primary-foreground transition-colors duration-200">
                Privacy Policy
              </a>
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
} 