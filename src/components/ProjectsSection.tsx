import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import VantaBackground from "@/components/ui/vanta-background";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "Apsara Angan",
    category: "Jewellery Store Website",
    desc: "An ecommerce website for a Nagpur jewellery store with a modern storefront, backend services, and Razorpay payment integration.",
    tags: ["Next.js", "Express.js", "Razorpay"],
    url: "https://apsaraangan.in/",
  },
  {
    title: "Huboho",
    category: "Cafe Website",
    desc: "A React-based cafe website built for a Nagpur brand with a clear menu-first experience and strong local presentation.",
    tags: ["React.js", "Cafe", "Nagpur"],
    url: "https://huboho.vercel.app/",
  },
  {
    title: "Voyage Cafe Vibes",
    category: "Cafe Website",
    desc: "A React cafe website for a Pune business, focused on a visual brand experience and smooth browsing across devices.",
    tags: ["React.js", "Cafe", "Pune"],
    url: "https://voyage-cafe-vibes.lovable.app/",
  },
  {
    title: "Pablo",
    category: "Cafe Website",
    desc: "A cafe website created for a Nagpur business with a clean brand presence and conversion-focused landing flow.",
    tags: ["Cafe", "Nagpur", "Landing Page"],
    url: "https://pablo-alpha.vercel.app/",
  },
  {
    title: "Polariq",
    category: "Ecommerce Website",
    desc: "A product-focused ecommerce website for selling polaroids, designed to highlight the catalog and simplify purchases.",
    tags: ["Ecommerce", "Polaroids", "Product UI"],
    url: "https://polariq.vercel.app/",
  },
  {
    title: "Karigar",
    category: "Service Marketplace",
    desc: "A platform that connects local labourers with people who need trusted workers, making discovery and outreach more direct.",
    tags: ["Marketplace", "Local Services", "Workers"],
    url: "https://karigar-two.vercel.app/",
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

export default function ProjectsSection() {
  const isMobile = useIsMobile();
  const [showAllMobileProjects, setShowAllMobileProjects] = useState(false);
  const visibleProjects = isMobile && !showAllMobileProjects ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="relative py-28 md:py-36 border-t border-border/50" aria-label="Projects">
      <VantaBackground color={0x60606} waveSpeed={1.0} zoom={1.0} />
      <div className="absolute inset-0 bg-background/84" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center max-w-lg mx-auto"
        >
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] uppercase text-muted-foreground">
            Our Work
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Projects we've shipped
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A selection of recent builds across industries.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="sm:hidden">
            <div className="grid gap-4">
              {visibleProjects.map((p, i) => (
                <motion.a
                  key={p.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={cardV}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-xl bg-card subtle-border p-6 card-hover"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                      {p.category}
                    </span>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground"
                    />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold">{p.title}</h3>
                  <p className="flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </motion.a>
              ))}
            </div>

            {projects.length > 2 ? (
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllMobileProjects((current) => !current)}
                  className="rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {showAllMobileProjects ? "Show less" : "Show more"}
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardV}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-xl bg-card subtle-border p-7 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                    {p.category}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors duration-200"
                  />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground flex-1">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
