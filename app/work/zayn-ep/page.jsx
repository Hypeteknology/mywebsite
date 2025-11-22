"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.6 },
});

const frameImages = [
  {
    src: "/images/zayn2.jpg",
    title: "Clarity-first Visual Identity",
    desc: "Clean, benefit-driven creative that removes confusion and builds credibility. We designed a cohesive visual identity that communicates Zayn Enterprises’ premium positioning across all touchpoints.",
    link: "https://zaynenterprises.com/",
  },
  {
    src: "/images/zayn3.jpg",
    title: "Educational Content Architecture",
    desc: "Messaging that educates customers and answers objections before they arise. Structured content helped highlight key product benefits, streamline browsing, and enhance the overall e-commerce experience.",
    link: "https://zaynenterprises.com/",
  },
];

export default function Zayn() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        {/* ===== HERO ===== */}
        <header className="relative w-full h-[56vh] md:h-[90vh] overflow-hidden mb-12">
          <Image
            src="/images/zayn1.jpg"
            alt="Hero"
            fill
            className="object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/10" />
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="max-w-3xl p-6 md:p-12">
              <motion.h1 {...fadeIn()} className="text-2xl md:text-3xl text-white font-light">
                Case Study
              </motion.h1>
              <motion.p
                {...fadeIn(0.1)}
                className="text-sm md:text-base text-white/90 mt-4 max-w-2xl"
              >
                A trust-first strategy that turned market skepticism into a scalable lead engine
                for Zayn Enterprises.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ===== SECTION 1 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Zayn Enterprises</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Zayn Enterprises is an online destination delivering premium perfumes, electronics, and lifestyle gadgets. Recognised for their “Beautifully functional, consciously crafted” promise, they aim to merge design and utility seamlessly. We partnered with them to refine their digital footprint, elevate customer experience, and support scalable growth in a competitive e‑commerce market.
          </p>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 px-10">
            {frameImages.map((it, i) => (
              <Link key={i} href={it.link} target="_blank">
                <motion.figure
                  {...fadeIn(i * 0.1)}
                  className="relative overflow-hidden shadow-md h-[360px] group cursor-pointer"
                >
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-medium">Visit Zayn Enterprise →</span>
                  </div>
                  <figcaption className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-medium">{it.title}</h3>
                    <p className="text-sm text-white/90 mt-1">{it.desc}</p>
                  </figcaption>
                </motion.figure>
              </Link>
            ))}
          </div>

          {/* Mobile Swipe */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 -mx-6 px-6">
            {frameImages.map((it, i) => (
              <Link
                key={i}
                href={it.link}
                target="_blank"
                className="snap-center min-w-[85%] sm:min-w-[70%] overflow-hidden shadow-md group"
              >
                <article>
                  <div className="relative h-72">
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-base font-medium">Visit Zayn Enterprise →</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="text-lg font-medium">{it.title}</h4>
                    <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== SECTION 2 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Content, Commerce & Operational Metrics</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            A large product catalog can slow growth—so we focused on standardising content templates, resolving navigation friction, and implementing analytics dashboards to monitor performance. From high‑intent category pages to product bundles and free‑shipping incentives, we structured Zayn’s commerce ecosystem to reduce drop‑offs, track promotions, and empower the team with insights.
          </p>
        </section>

        {/* ===== SECTION 3 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Visual & Experience Design</h2>
          <p className="text-gray-700 mb-6 max-w-7xl">
           Zayn Enterprise partnered with Hypetek Advertising Agency to take their perfume business to the next level, achieving remarkable growth in both sales and online presence. Hypetek designed strategic, data-driven advertising campaigns that highlighted the store’s signature fragrances and targeted the most relevant customer segments, ensuring every ad reached potential buyers with maximum impact. The results were impressive: the Shopify dashboard shows a clear increase in orders and revenue, reflecting higher customer engagement and conversion rates. Beyond immediate sales, the campaigns strengthened Zayn Enterprise’s brand visibility, attracted new loyal customers, and positioned the store for sustainable long-term growth. This collaboration showcases how expert advertising, backed by analytics, can transform a niche e-commerce brand into a recognized and thriving online business.
   </p>

          {/* Desktop - 2 images */}
          <div className="hidden md:flex gap-6 px-10">
            {["/images/ZAYNdashboard.png", "/images/ZAYNdashboard.png"].map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex-1 border border-gray-200 shadow-sm rounded-xl">
                <div className="relative w-full h-[63vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile - 2 different images */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
            {["/images/ZAYNdashboard.png", "/images/ZAYNdashboard.png"].map((src, i) => (
              <article key={i} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                <div className="relative w-full h-[30vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== SECTION 4 ===== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] mb-6 overflow-hidden">
            <Image src="/images/perfumee.avif" alt="Launch visual" fill className="object-cover" />
          </div>
          <p className="text-gray-800 leading-relaxed max-w-4xl">
            The phased go-to-market plan built anticipation and converted interest into a massive launch. Zayn Enterprises now enjoys stronger engagement, higher conversion rates, and a cohesive brand identity across all digital platforms.
          </p>
        </section>

        {/* ===== CTA ===== */}
        <section className="mb-24">
          <Link
            href="/contact#contact-form"
            className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </main>
  );
}
