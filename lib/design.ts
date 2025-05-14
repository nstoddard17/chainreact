export const colors = {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1', // Primary brand color
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  accent: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981', // Accent color
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  highlight: {
    yellow: '#FFF7ED',
    pink: '#FEE2E2',
    violet: '#F5F3FF',
  },
  background: {
    light: '#FDFDFD',
    tint: '#F0F4FF',
  },
};

export const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  scale: {
    initial: { scale: 0.95 },
    animate: { scale: 1 },
    transition: { duration: 0.2 },
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 },
  },
};

export const typography = {
  fontFamily: {
    heading: 'var(--font-space-grotesk)',
    body: 'var(--font-inter)',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
}; 