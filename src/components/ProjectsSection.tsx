import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import VantaBackground from "@/components/ui/vanta-background";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "Apsara Angan",
    category: "Jewellery E-commerce",
    desc: "SEO-optimized jewellery ecommerce store with a modern storefront, backend services, and Razorpay payment integration. Live with 700+ real customers.",
    tags: ["Next.js", "Express.js", "Razorpay"],
    url: "https://apsaraangan.in/",
  },
  {
    title: "Trashworks",
    category: "Corporate Website",
    desc: "Website for a Goa-based EPR compliance and circular economy company working with 400+ clients across 26 states.",
    tags: ["React.js", "EPR Compliance", "Sustainability"],
    url: "https://trashworks.in",
  },
  {
    title: "Karigar",
    category: "Service Marketplace",
    desc: "Book verified carpenters, plumbers, electricians and more in minutes — no middlemen. 500+ workers on the platform, 1000+ projects done.",
    tags: ["Marketplace", "Local Services", "Workers"],
    url: "https://karigar-two.vercel.app/",
  },
  {
    title: "Yumma",
    category: "Local Directory",
    desc: "A local-insider directory of Bengaluru's best cafes, darshinis and street carts. 138 places across 12 areas, 545+ shortlists. Featured on Product Hunt.",
    tags: ["React.js", "Directory", "Product Hunt"],
    url: "https://yummablr.vercel.app",
  },
  {
    title: "FirstApply",
    category: "Job Automation Tool",
    desc: "Scrapes 6 job sites every 2 minutes and sends matching fresher roles straight to your Telegram. Free and open source.",
    tags: ["Open Source", "Telegram Bot", "Automation"],
    url: "https://firstapply.kaarigar.online",
  },
  {
    title: "Polariq",
    category: "Ecommerce Website",
    desc: "Upload, customize and order polaroid prints online, with a clean product UI and Razorpay payments built in.",
    tags: ["Ecommerce", "Polaroids", "Razorpay"],
    url: "https://polariq.vercel.app/",
  },
  {
    title: "TripSync",
    category: "Travel App",
    desc: "A map-based app for group trips with live location sharing, expense splitting, and trip coordination in one place.",
    tags: ["Maps", "Group Travel", "Expense Splitting"],
    url: "https://tripsyncy.vercel.app",
  },
  {
    title: "Pablo Cafe",
    category: "Restaurant Website",
    desc: "A premium restaurant website with smooth animations, fast load times, and a conversion-focused brand experience.",
    tags: ["Cafe", "Animations", "Landing Page"],
    url: "https://pablo-alpha.vercel.app/",
  },
  {
    title: "Raftaar Fan Site",
    category: "Fan Site",
    desc: "An unofficial fan site built out of pure passion — full discography, artist timeline, and a built-in music player.",
    tags: ["Music", "Fan Site", "React.js"],
    url: "https://raftaarmusic.vercel.app",
  },
  {
    title: "Wrapd",
    category: "Ad-wrap Marketplace",
    desc: "A marketplace where vehicle owners list their bike, car or auto, and brands pick rides that fit their city and audience. The brand pays for the wrap, the owner gets paid.",
    tags: ["Marketplace", "Advertising", "Vehicles"],
    url: "https://wrapdmarketing.vercel.app",
  },
  {
    title: "BeOnWheels",
    category: "3D Brand Activation",
    desc: "One sports car split into zones — hood, roof, doors, spoiler. Brands reserve the exact spot they want, spin the car in 3D and preview their logo on it.",
    tags: ["3D", "Brand Activation", "Advertising"],
    url: "https://beonwheels.vercel.app",
  },
  {
    title: "Huboho",
    category: "Cafe Website",
    desc: "A React-based cafe website built for a Nagpur brand with a clear menu-first experience and strong local presentation.",
    tags: ["React.js", "Cafe", "Nagpur"],
    url: "https://huboho.vercel.app/",
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
