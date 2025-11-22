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
    src: "/images/fr1.jpg",
    title: "Clarity‑first Visual Identity",
    desc: "We crafted a refined visual identity for Fragrancehub that reflects its premium positioning in niche Arabian perfumes. By using minimalist yet expressive aesthetics and rich product imagery, we elevated the brand’s online presence and conveyed authenticity at first glance.",
    link: "https://www.fragrancehub.online/",
  },
  {
    src: "/images/fr2.jpg",
    title: "Educational Content Architecture",
    desc: "Our content strategy was designed to educate the customer: we structured messaging to highlight scent story, provenance, authenticity guarantee, and product benefits—ensuring visitors feel confident in every purchase decision.",
    link: "https://www.fragrancehub.online/",
  },
];

export default function FHub() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        {/* ===== HERO ===== */}
        <header className="relative w-full h-[56vh] md:h-[90vh] overflow-hidden mb-12">
          <Image
            src="/images/fra.jpg"
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
                How Fragrancehub transformed its digital presence to become a trusted destination for authentic niche Arabian perfumes.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ===== SECTION 1 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  mb-4">Fragrancehub</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Fragrancehub is a premium e‑commerce platform specialising in niche Arabian fragrances, offering genuine products and an authenticity guarantee. The brand’s goal was to build trust in a market flooded with imitators and to deliver a luxury experience online that matched the quality of its perfumes.
          </p>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 px‑10">
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
                    <span className="text-white text-lg font-medium">Visit Fragrancehub →</span>
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
                      <span className="text-white text-base font-medium">Visit Fragrancehub →</span>
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
          <h2 className="text-2xl md:text-3xl  mb-4">Brand Promise & Authenticity</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Fragrancehub places authenticity at the core of its brand promise—every product is sourced from authorised distributors or licensed suppliers, boxed in its original packaging with a thorough inspection process guaranteeing quality. This transparency of sourcing coupled with high‑end product presentation strengthened consumer trust and differentiated Fragrancehub in a crowded market. { /* you can cite authenticity guarantee content here */ }
          </p>
        </section>

        {/* ===== SECTION 3 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  mb-4">Customer Experience & Digital Strategy</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            We implemented a user‑centric journey for Fragrancehub—from intuitive navigation and category filters to rich storytelling of each scent’s origin. Our content strategy also supported mobile browsing, ensuring high performance and conversion rates across devices. Interactive elements, campaign tracking, and a streamlined checkout further enhanced the digital experience for luxury perfume shoppers.
          </p>
        </section>

        {/* ===== SECTION 4 ===== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] mb-6 overflow-hidden">
            <Image src="/images/frr.jpg" alt="Launch visual" fill className="object-cover" />
          </div>
          <p className="text-gray-800 leading-relaxed max-w-4xl">
            A phased go‑to‑market strategy was executed to launch Fragrancehub’s new collection and build online momentum. This included drip‑marketing to loyal customers, influencer partnerships, limited‑edition drops, and remarketing activation—driving traffic, enhancing brand perception, and increasing average order value.
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
