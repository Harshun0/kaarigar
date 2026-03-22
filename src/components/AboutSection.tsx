import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { IconCloudDemo } from "@/components/ui/demo";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="relative border-t border-border/50 py-20 md:py-36" aria-label="About">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <p className="mb-3 text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground">
              About Us
            </p>
            <h2
              className="mb-5 text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl md:mb-6"
              style={{ textWrap: "balance" } as CSSProperties}
            >
              A Nagpur web and app team focused on real business outcomes
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:space-y-4 md:text-[15px]">
              <p style={{ textWrap: "pretty" } as CSSProperties}>
                {isMobile
                  ? `"Kaarigar" means craftsman, and that mindset shapes everything we build: websites, apps, and digital products tailored for businesses in Nagpur and beyond.`
                  : `"Kaarigar" means craftsman, and that philosophy drives everything we build. We are a focused team of developers, designers, and AI engineers building fast, intuitive digital products for businesses in Nagpur and beyond.`}
              </p>
              {!isMobile ? (
                <p style={{ textWrap: "pretty" } as CSSProperties}>
                  From a local cafe wanting a stronger online presence to a growing company needing custom software, we build search-friendly websites, mobile apps, and automation systems with clean code, thoughtful design, and measurable performance.
                </p>
              ) : null}

              <div className="pt-2 md:pt-3">
                <LogoCarouselDemo />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm md:max-w-none">
              <IconCloudDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
