
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses = variant === "secondary"
      ? "bg-gray-100 text-gray-900"
      : "bg-blue-600 text-white";
    return (
      <button ref={ref} className={cn("rounded-md px-4 py-2 text-sm font-medium", variantClasses, className)} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };
