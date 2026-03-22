"use client";

import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Spline scene={scene} />
    </div>
  );
}
