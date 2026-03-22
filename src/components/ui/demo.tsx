"use client";

import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex min-h-[18rem] w-full max-w-xl items-center justify-center overflow-hidden rounded-3xl border border-border/60 bg-background/80 px-4 pb-4 pt-2 shadow-[0_24px_80px_-32px_hsl(var(--foreground)/0.35)] backdrop-blur-sm sm:min-h-[20rem] sm:px-8 sm:pb-8 lg:min-h-[24rem]">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export function SplineSceneBasic() {
  return (
    <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-border/50 bg-transparent md:h-screen md:overflow-visible md:rounded-lg md:border-0">
      <Spotlight className="-left-16 -top-12 sm:-top-16 md:left-60 md:-top-20" size={300} />

      <div className="relative grid min-h-[34rem] items-end overflow-hidden sm:min-h-[38rem] md:absolute md:inset-0 md:flex md:items-center md:overflow-visible">
        <div className="relative z-10 max-w-md px-5 pt-8 sm:px-8 sm:pt-10 md:absolute md:left-0 md:top-1/2 md:max-w-lg md:-translate-y-1/2 md:p-8">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            <span className="block">Get Your</span>
            <span className="block text-yellow-300 drop-shadow-[0_0_18px_rgba(253,224,71,0.45)]">
              Dream Website
            </span>
            <span className="block">In Just Rs 999</span>
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-300 sm:mt-4 sm:text-base">
            A limited-time launch offer for businesses that want a strong online presence without waiting or overspending.
          </p>
          <p className="mt-2 max-w-sm text-sm font-semibold tracking-wide text-amber-300 sm:text-base">
            Limited-time offer for the first 10 clients.
          </p>
        </div>

        <div className="relative h-[22rem] w-full sm:h-[26rem] md:h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full scale-[1.18] sm:scale-100 md:translate-x-0"
          />
        </div>
      </div>
    </div>
  );
}
