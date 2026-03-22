import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Globe, Palette, Smartphone, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "SEO-friendly business websites, landing pages, and ecommerce platforms built for brands in Nagpur that want more leads, calls, and conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps for iOS and Android with clean product thinking, stable performance, and practical user journeys.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "AI chatbots that handle support, lead qualification, booking flows, and customer engagement around the clock.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored internal tools, dashboards, and automation systems built exactly for your workflow.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven interfaces that look stunning and feel intuitive — designed to delight your users.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Streamline operations with automated workflows, integrations, and data pipelines that save hours daily.",
  },
];

const cardV = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicesSection() {
  const isMobile = useIsMobile();
  const [showAllMobileCards, setShowAllMobileCards] = useState(false);
  const visibleServices = isMobile && !showAllMobileCards ? services.slice(0, 2) : services;

  return (
    <section id="services" className="relative py-28 md:py-36" aria-label="Services">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center max-w-lg mx-auto"
        >
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground">
            Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ textWrap: "balance" } as CSSProperties}
          >
            Website, app, and AI services for growing businesses
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            If you are searching for a website development company near you or the best website making company in Nagpur, this is the work we do every day.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((s, i) => (
            <motion.article
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardV}
              className="group relative overflow-hidden rounded-xl bg-card subtle-border p-7 card-hover"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100 scale-x-0 origin-left" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent opacity-0 transition-all duration-300 delay-75 group-hover:opacity-100" />
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                <s.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">{s.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {isMobile && services.length > 2 ? (
          <div className="mt-5 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobileCards((current) => !current)}
              className="rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {showAllMobileCards ? "Show less" : "Show more"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
