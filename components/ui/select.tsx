import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-2xl border border-border bg-white px-4 text-sm shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
