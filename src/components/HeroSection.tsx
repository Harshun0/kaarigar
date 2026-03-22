import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/demo";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip overflow-y-hidden pt-24 md:pt-0"
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Top radial glow */}
      <div
        className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 opacity-[0.06] sm:h-[420px] sm:w-[520px] lg:h-[500px] lg:w-[800px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 0% 100%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto flex w-full flex-1 items-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <SplineSceneBasic />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-6 sm:pb-8"
      >
        <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Scroll down">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
