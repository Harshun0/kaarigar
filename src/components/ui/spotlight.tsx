"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = HTMLAttributes<HTMLDivElement> & {
  size?: number;
};

export function Spotlight({
  className,
  size = 320,
  style,
  ...props
}: SpotlightProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-70 blur-3xl",
        className,
      )}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.28) 0%, hsl(var(--primary) / 0.14) 32%, transparent 72%)",
        ...style,
      }}
      {...props}
    />
  );
}
