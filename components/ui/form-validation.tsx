'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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
}: FormValidationProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (isTouched) {
      validate(value);
    }
  }, [value, isTouched]);

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

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
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
          className
        )}
        placeholder={placeholder}
      />
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
                className="text-sm text-red-600"
              >
                {error}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 