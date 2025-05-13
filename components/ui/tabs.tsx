
import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div data-tabs-value={value}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, setValue })
          : child
      )}
    </div>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

export function TabsTrigger({ children, value, setValue }: any) {
  return (
    <button
      className="px-3 py-1 text-sm rounded border bg-white shadow-sm"
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }: any) {
  return <div className="mt-2">{children}</div>;
}
