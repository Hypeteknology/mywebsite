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
    src: "/images/frametown2.jpg",
    title: "Clarity-Driven Brand Positioning",
    desc: "We refined their messaging into a simple, trust-first narrative that explained who they help, what they do, and why clients choose them.",
    link: "https://www.framestown.com/",
  },
  {
    src: "/images/frametown3.jpg",
    title: "Conversion-Ready Content Architecture",
    desc: "We restructured their pages into a storytelling flow — problem, proof, benefits, and outcomes — turning visitors into informed leads.",
    link: "https://www.framestown.com/",
  },
];

const socials = [
  {
    id: "ig",
    title: "Instagram",
    desc: "High-quality visuals and storytelling posts that showcase projects and build strong brand presence.",
    href: "https://www.instagram.com/framestown/",
    img: "/images/ftinsta.jpg",
  },
  {
    id: "fb",
    title: "Facebook",
    desc: "Audience-specific messaging paired with precise targeting to nurture conversations and warm leads.",
    href: "https://www.facebook.com/framestown",
    img: "/images/ftfb.jpg",
  },
  {
    id: "tt",
    title: "TikTok",
    desc: "Short-form creative that captures attention and grows Framestown’s visibility with trend-aligned content.",
    href: "https://www.tiktok.com/@framestown",
    img: "/images/fttok.jpg",
  },
];

export default function FramesTownPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        {/* ===== HERO ===== */}
        <header className="relative w-full h-[56vh] md:h-[90vh] overflow-hidden mb-12">
          <Image
            src="/images/frametown.jpg"
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
               How Hypetek transformed Framestown’s digital presence—building a high-converting website,
tight brand narrative, and a content engine that drives qualified leads at scale.

              </motion.p>
            </div>
          </div>
        </header>

        {/* ===== SECTION 1 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  mb-4">Framestown — From Creative Studio to Scalable Brand
</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
          Framestown approached Hypetek with a clear challenge: their creative work was strong, but their website
and messaging weren’t communicating the value of their services. They needed a brand system that built trust,
a website that converted, and a content structure that could support long-term growth.

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
                    <span className="text-white text-lg font-medium">Visit Frames Town →</span>
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
                      <span className="text-white text-base font-medium">Visit Frames Town →</span>
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
          <h2 className="text-2xl md:text-3xl  mb-4">Cross-Platform Growth System</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
           To amplify the new identity, Hypetek helped Framestown establish a consistent content strategy across Instagram,
Facebook, and TikTok — each tailored for reach, trust, and conversion.
   </p>

          {/* Desktop */}
          <div className="hidden md:flex justify-center gap-10 flex-wrap">
            {socials.map((it) => (
              <motion.a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative w-72 h-[520px] rounded-[3rem] bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-10px)] object-cover rounded-[2.3rem]"
                />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-2xl border border-neutral-700 shadow-inner" />
                <div className="absolute bottom-0 w-full p-4 bg-black/85 text-center text-white backdrop-blur-sm">
                  <h4 className="text-lg font-medium">{it.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{it.desc}</p>
                  <p className="text-xs text-blue-400 mt-2">View campaign →</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6">
            {socials.map((it) => (
              <a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="snap-center flex-shrink-0 w-[70%] aspect-[9/16] bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-[3rem] border border-neutral-800 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20" />
                <img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] object-cover rounded-[2.4rem]"
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-900 rounded-xl border border-neutral-700 shadow-inner" />
                <div className="absolute bottom-0 w-full p-4 bg-black/80 text-center text-white backdrop-blur-sm rounded-b-[2.4rem]">
                  <h4 className="text-base font-medium">{it.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{it.desc}</p>
                  <p className="text-xs text-blue-400 mt-2">View campaign →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

       {/* ===== SECTION 3 ===== */}
<section className="mb-16">
  <h2 className="text-2xl md:text-3xl  mb-4">Operational Systems That Enable Scale
</h2>
  <p className="text-gray-700 mb-6 max-w-7xl">
  Frames Town partnered with Hypetek Advertising Agency to elevate their sales and online presence for their premium frame collection. By analyzing Shopify sales data, Hypetek crafted targeted advertising campaigns highlighting popular and high-demand frames while reaching the most relevant customer segments. This strategic approach resulted in a noticeable increase in orders and revenue, clearly visible on the Shopify dashboard through consistent upward trends. Beyond boosting immediate sales, the campaigns enhanced brand awareness, attracted new customers, and strengthened Frames Town’s digital footprint. This collaboration demonstrates how focused, data-driven advertising can effectively drive growth, improve customer engagement, and create long-term value for a specialized e-commerce business.

  </p>

  {/* Desktop - 2 images */}
  <div className="hidden md:flex gap-6 px-10">
    {["/images/ftowndashboard.png", "/images/ftowndashboard.png"].map((src, i) => (
      <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex-1 border border-gray-200 shadow-sm rounded-xl">
        <div className="relative w-full h-[63vh] overflow-hidden">
          <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
        </div>
      </motion.div>
    ))}
  </div>

  {/* Mobile - 2 different images */}
  <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
    {["/images/ftowndashboard.png", "/images/ftowndashboard.png"].map((src, i) => (
      <article key={i} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="relative w-full h-[30vh] overflow-hidden">
          <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
        </div>
      </article>
    ))}
  </div>

  <p className="text-gray-700 mt-5 max-w-5xl">
   With clear reporting and operational structure, Framestown can now track performance, understand customer behavior,
and optimize campaigns with precision.
  </p>
</section>

        {/* ===== SECTION 4 ===== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] mb-6 overflow-hidden">
            <Image src="/images/ft5.jpg" alt="Launch visual" fill className="object-cover" />
          </div>
          <p className="text-gray-800 leading-relaxed max-w-4xl">
          The combined strategy — strong brand identity, a conversion-ready website, and consistent cross-platform content —
gave Framestown a clear competitive edge. Their launch generated higher engagement, stronger trust signals,
and a measurable increase in qualified inquiries.
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
