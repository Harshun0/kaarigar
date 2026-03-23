import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const keywords = [
  "website development company in Nagpur",
  "website design company in Nagpur",
  "best website making company in Nagpur",
  "website make company",
  "freelancing company near me",
  "web development company near me",
  "mobile app development company in Nagpur",
  "AI chatbot development company in Nagpur",
  "custom software company in Nagpur",
  "ecommerce website development Nagpur",
  "restaurant website development Nagpur",
  "cafe website design Nagpur",
  "SEO friendly website company in Nagpur",
  "website developer in Nagpur",
].join(", ");

export default function SEOHead({
  title = "Kaarigar | Website Development Company in Nagpur for Websites, Apps & AI Chatbots",
  description = "Kaarigar is a website development company in Nagpur building SEO-friendly websites, mobile apps, ecommerce stores, and AI chatbots for local businesses looking for the best website making company near them.",
  canonical = "https://www.kaarigar.online/",
  ogImage = "https://www.kaarigar.online/karigar.png",
}: SEOProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kaarigar",
    url: canonical,
    image: ogImage,
    description,
    areaServed: [
      {
        "@type": "City",
        name: "Nagpur",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    serviceType: [
      "Website development",
      "Website design",
      "Mobile app development",
      "AI chatbot development",
      "Custom software development",
      "SEO-friendly website development",
    ],
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 5,
      itemListElement: [
        { "@type": "Offer", name: "Website Development", description: "Custom websites and web applications for Nagpur businesses" },
        { "@type": "Offer", name: "Ecommerce Websites", description: "Online stores with conversion-focused design and payment integration" },
        { "@type": "Offer", name: "Mobile Apps", description: "Android and iOS mobile app development" },
        { "@type": "Offer", name: "AI Chatbots", description: "AI assistants for support, lead capture, and customer engagement" },
        { "@type": "Offer", name: "Custom Software", description: "Automation, dashboards, and internal tools for growing teams" },
      ],
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kaarigar" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
