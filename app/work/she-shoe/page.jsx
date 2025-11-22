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
    src: "/images/she1.jpg",
    title: "Clarity-first Visual Identity",
    desc: "We created a visual identity for Sheshoe that highlights its bold, fashion-forward aesthetic while making product discovery intuitive. Clean, benefit-driven creative removes confusion and builds credibility.",
    link: "https://sheshoeofficial.com/",
  },
  {
    src: "/images/she2.jpg",
    title: "Educational Content Architecture",
    desc: "Content strategy designed to educate customers and answer objections before they arise, improving conversion and building trust across the Sheshoe online experience.",
    link: "https://sheshoeofficial.com/",
  },
];

const socials = [
  {
    id: "ig",
    title: "Instagram",
    desc: "High-impact creatives and feed-first commerce to build desire and social engagement for Sheshoe products.",
    href: "https://www.instagram.com/sheshoe_official?igsh=MWk2MjNwbGY0MzByeA%3D%3D",
    img: "/images/shein.jpg",
  },
  {
    id: "tt",
    title: "TikTok",
    desc: "Trend-led creative campaigns to build momentum and cultural relevance while boosting online sales.",
    href: "https://www.tiktok.com/@sheshoe.official?_t=ZS-8zc5KtjrFCR&_r=1",
    img: "/images/shet.jpg",
  },
];

export default function Shoe() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        {/* ===== HERO ===== */}
        <header className="relative w-full h-[56vh] md:h-[90vh] overflow-hidden mb-12">
          <Image
            src="/images/sheshoe.jpg"
            alt="Sheshoe Hero"
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
                Sheshoe’s journey to expand online presence with bold creative, trend-led campaigns, and a frictionless shopping experience.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ===== SECTION 1: Brand Overview ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Sheshoe Official</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Sheshoe is a contemporary footwear and lifestyle brand known for its bold, modern designs and trend-conscious products. Entering the Pakistani fashion e-commerce market, Sheshoe required a strong online identity and cohesive content strategy to compete and capture audience attention.
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
                    <span className="text-white text-lg font-medium">Visit Sheshoe →</span>
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
                      <span className="text-white text-base font-medium">Visit Sheshoe →</span>
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

        {/* ===== SECTION 2: Social & Campaign Strategy ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Social Media Campaigns</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Sheshoe leveraged Instagram and TikTok to reach its target audience, driving awareness, engagement, and e-commerce conversions through high-impact creatives, trend-led campaigns, and cultural relevance.
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

        {/* ===== SECTION 3: Visual & Experience Design ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4">Visual & Experience Design</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            We designed visually engaging product pages, interactive layouts, and content templates that enhanced browsing and conversion. Our goal was a seamless digital experience that reflected Sheshoe’s vibrant, fashion-forward brand.
          </p>

          {/* Desktop - 2 images */}
          <div className="hidden md:flex gap-6 px-10">
            {["/images/she3.jpg", "/images/she44.jpg"].map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex-1 border border-gray-200 shadow-sm rounded-xl">
                <div className="relative w-full h-[63vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile - 2 images */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
            {["/images/she3.jpg", "/images/she44.jpg"].map((src, i) => (
              <article key={i} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                <div className="relative w-full h-[30vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>

          <p className="text-gray-700 mt-5 max-w-5xl">
            From layout design to content optimization, we integrated operational insights to make each lead and customer interaction more efficient, measurable, and impactful.
          </p>
        </section>

        {/* ===== SECTION 4: Launch Visual ===== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] mb-6 overflow-hidden">
            <Image src="/images/shef.jpg" alt="Launch visual" fill className="object-cover" />
          </div>
          <p className="text-gray-800 leading-relaxed max-w-4xl">
            The launch plan amplified brand visibility, drove traffic to the e-commerce store, and translated social media engagement into measurable sales. Sheshoe achieved a cohesive online identity and elevated brand perception.
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
