import * as React from "react";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div data-tabs-value={value}>
      {children}
    </div>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

export function TabsTrigger({ children, value }: { children: React.ReactNode; value: string }) {
  const handleClick = () => {
    const tabContainer = document.querySelector('[data-tabs-value]');
    if (tabContainer) {
      tabContainer.setAttribute('data-tabs-value', value);
    }
  };

  return (
    <button
      className="px-3 py-1 text-sm rounded border bg-white shadow-sm"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}