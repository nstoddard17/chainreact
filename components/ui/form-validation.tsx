'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormValidationProps {
  value: string;
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean;
    message?: string;
  }[];
  onChange: (value: string, isValid: boolean) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  label?: string;
  showStrength?: boolean;
  autoComplete?: string;
}

export function FormValidation({
  value,
  rules,
  onChange,
  className,
  placeholder,
  type = 'text',
  name,
  label,
  showStrength = false,
  autoComplete,
}: FormValidationProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (isTouched) {
      validate(value);
    }
  }, [value, isTouched]);

  useEffect(() => {
    if (showStrength && type === 'password') {
      calculatePasswordStrength(value);
    }
  }, [value, showStrength, type]);

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
  };

  const validate = (value: string) => {
    const newErrors: string[] = [];

    rules.forEach((rule) => {
      if (rule.required && !value) {
        newErrors.push(rule.message || 'This field is required');
      }
      if (rule.minLength && value.length < rule.minLength) {
        newErrors.push(
          rule.message || `Minimum length is ${rule.minLength} characters`
        );
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        newErrors.push(
          rule.message || `Maximum length is ${rule.maxLength} characters`
        );
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        newErrors.push(rule.message || 'Invalid format');
      }
      if (rule.custom && !rule.custom(value)) {
        newErrors.push(rule.message || 'Invalid value');
      }
    });

    setErrors(newErrors);
    onChange(value, newErrors.length === 0);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
        return 'bg-green-500';
      case 5:
        return 'bg-green-600';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value, errors.length === 0);
            if (!isTouched) setIsTouched(true);
          }}
          onBlur={() => setIsTouched(true)}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            errors.length > 0 && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            type === 'password' && 'pr-10',
            className
          )}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {showStrength && type === 'password' && value && (
        <div className="space-y-2">
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className={cn('h-full transition-all duration-300', getStrengthColor())}
              style={{ width: `${(strength / 5) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">
            {strength === 0 && 'Very weak'}
            {strength === 1 && 'Weak'}
            {strength === 2 && 'Fair'}
            {strength === 3 && 'Good'}
            {strength === 4 && 'Strong'}
            {strength === 5 && 'Very strong'}
          </p>
        </div>
      )}
      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-1"
          >
            {errors.map((error, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm text-red-600"
              >
                <AlertCircle className="mr-1 h-4 w-4" />
                {error}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {isTouched && !errors.length && value && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center text-sm text-green-600"
        >
          <CheckCircle2 className="mr-1 h-4 w-4" />
          Looks good!
        </motion.p>
      )}
    </div>
  );
} 