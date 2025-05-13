'use client';

import * as React from 'react';

const TabsContext = React.createContext<{
  value: string;
  setValue: (value: string) => void;
} | null>(null);

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex space-x-2 mb-4 ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, value }: { children: React.ReactNode; value: string }) {
  const context = React.useContext(TabsContext);
  if (!context) return null;

  const isActive = context.value === value;

  return (
    <button
      className={`px-3 py-1 text-sm rounded border ${isActive ? 'bg-blue-600 text-white' : 'bg-white'}`}
      onClick={() => context.setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value }: { children: React.ReactNode; value: string }) {
  const context = React.useContext(TabsContext);
  if (!context || context.value !== value) return null;
  return <div className="mt-2">{children}</div>;
}