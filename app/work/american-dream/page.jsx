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
    src: "/images/ad2.jpg",
    title: "Trust-First Brand Identity",
    desc: "A visual and verbal identity that builds confidence and communicates reliability.",
    link: "https://americandreamautoprotect.com/",
  },
  {
    src: "/images/ad3.jpg",
    title: "Customer-Centric Content Strategy",
    desc: "Clear messaging that educates customers on coverage, benefits, and peace of mind.",
    link: "https://americandreamautoprotect.com/",
  },
];

const socials = [
  {
    id: "ig",
    title: "Instagram Campaigns",
    desc: "High-impact creatives that showcase insurance benefits and customer success stories.",
    href: "https://www.instagram.com/americandreamautoprotect?igsh=MW9paDNhZ2NlNHJxdw%3D",
    img: "/images/adin.jpg",
  },
  {
    id: "fb",
    title: "Facebook Targeting",
    desc: "Layered targeting to reach high-value prospects and drive qualified leads.",
    href: "https://web.facebook.com/americandreamautoprotect?mibextid=wwXIfr&rdid=JNMYLzzvR1q33KKp&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1B5kERcz6P%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#",
    img: "/images/adfb.jpg",
  },
  {
    id: "li",
    title: "LinkedIn Strategy",
    desc: "Professional content highlighting trust, transparency, and industry expertise.",
    href: "https://www.linkedin.com/company/americandreamautoprotect/",
    img: "/images/adlink.jpg",
  },
];

export default function AmericanDream() {
  return (
    <main className="min-h-screen bg-white text-gray-900 text-base font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        {/* ===== HERO ===== */}
        <header className="relative w-full h-[56vh] md:h-[90vh] overflow-hidden mb-12">
          <Image
            src="/images/ad6.jpg"
            alt="Hero"
            fill
            className="object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/10" />
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="max-w-3xl p-6 md:p-12">
              <motion.h1 {...fadeIn()} className="text-2xl md:text-3xl text-white font-light">
                Case Study - 
              </motion.h1>
              <motion.p
                {...fadeIn(0.1)}
                className="text-sm md:text-base text-white/90 mt-4 max-w-2xl"
              >
                How a trust-first digital strategy turned skepticism into scalable leads
                for American Dream Auto Protect.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ===== SECTION 1 ===== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  mb-4">American Dream</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            American Dream Auto Protect provides reliable vehicle protection plans, designed to
            give customers peace of mind. We helped define a strong brand identity and crafted
            digital experiences that convert visitors into loyal clients.
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
                    <span className="text-white text-lg font-medium">Visit American Dream →</span>
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
                      <span className="text-white text-base font-medium">Visit American Dream →</span>
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
          <h2 className="text-2xl md:text-3xl  mb-4">Digital Marketing Strategy</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            We executed a multi-platform strategy combining social media campaigns, targeted
            content, and lead nurturing to maximize customer acquisition and engagement.
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
          <h2 className="text-2xl md:text-3xl  mb-4">Operations & Insights</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Measurement and operational dashboards were implemented to optimize campaigns and
            convert every lead into a qualified opportunity.
          </p>

          {/* Desktop - 2 images */}
          <div className="hidden md:flex gap-6 px-10">
            {["/images/ad4.jpg", "/images/ad5.jpg"].map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex-1 border border-gray-200 shadow-sm rounded-xl">
                <div className="relative w-full h-[63vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile - 2 different images */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
            {["/images/ad4.jpg", "/images/ad5.jpg"].map((src, i) => (
              <article key={i} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                <div className="relative w-full h-[30vh] overflow-hidden">
                  <Image src={src} alt={`Dashboard ${i + 1}`} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>

          <p className="text-gray-700 mt-5 max-w-5xl">
            Real-time monitoring of campaigns ensured consistent performance and maximized ROI.
          </p>
        </section>

        {/* ===== SECTION 4 ===== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] mb-6 overflow-hidden">
            <Image src="/images/adf.jpg" alt="Launch visual" fill className="object-cover" />
          </div>
          <p className="text-gray-800 leading-relaxed max-w-4xl">
            The phased go-to-market plan generated excitement, drove qualified leads, and
            converted them into long-term customers.
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
