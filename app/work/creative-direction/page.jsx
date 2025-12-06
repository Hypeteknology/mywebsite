"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function CreativediextionPage() {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-hide controls after 2 sec
  useEffect(() => {
    if (showControls && isPlaying) {
      const timer = setTimeout(() => setShowControls(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showControls, isPlaying]);

  // Update seek bar
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setProgress((v.currentTime / v.duration) * 100 || 0);
  };

  // Seek manually
  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const newTime = (e.target.value / 100) * v.duration;
    v.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Play / Pause
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }

    setShowControls(true);
  };

  // Mute / Unmute
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = !v.muted;
    setIsMuted(v.muted);
    setShowControls(true);
  };




  return (
    <main className="min-h-screen bg-white text-gray-900 font-['goudy-old-style',Georgia,serif,sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">

        {/* ====== HERO / BANNER ====== */}
        <header className=" relative w-full  h-auto  md:h-[90vh] overflow-hidden  mb-12 group "
      onClick={() => setShowControls(true)}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dx2nzmgn6/video/upload/abcd_ozpgqa.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className=" w-full  h-auto  aspect-video  md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
      ></video>

      {/* Center play/pause */}
      {showControls && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-70 w-16 h-16 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md mb-4"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Mute Button */}
      {showControls && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 bg-white bg-opacity-60 w-8 h-8 rounded-full flex items-center justify-center shadow-md backdrop-blur-md z-30"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3z" />
              <path d="M16.5 12a4.5 4.5 0 01-4.5 4.5v-9a4.5 4.5 0 014.5 4.5z" />
            </svg>
          )}
        </button>
      )}

      {/* SEEK BAR — hidden while playing, shown on hover or controls */}
      {(showControls || !isPlaying) && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-white"
          />
        </div>
      )}
   





          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/10" />
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="max-w-3xl p-6 md:p-12">
              <motion.h1
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight text-left"
              >
                Success Story
              </motion.h1>
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.6 }}
                className="hidden md:block text-sm md:text-base text-white/90 mt-4 max-w-2xl text-left"
              >
                How ABD Smart Store built a scalable online retail ecosystem in Pakistan, combining strategy, design, and growth marketing.
              </motion.p>
            </div>
          </div>
        </header>

        {/* ====== HERO AFTER SECTION ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">
            ABD Smart Store Overview
          </h2>
          <p className="text-left text-gray-800 leading-relaxed mb-6">
            ABD Smart Store entered the Pakistani e-commerce market with a vision to offer curated smart products for tech-savvy customers. From branding to operational workflows, the challenge was to create a full-stack business model with measurable impact on revenue and customer experience.
          </p>

          {/* Desktop two-column images */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 px-10">
            <Link
              href="https://abdsmartstore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.figure
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden shadow-md h-[360px] group cursor-pointer"
              >
                <Image
                  src="/images/abdff.jpg"
                  alt="Brand Identity"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">Visit ABD Store</span>
                </div>
                <figcaption className="absolute bottom-4 left-4 text-left text-white">
                  <h3 className="text-lg font-medium">Brand Identity</h3>
                  <p className="text-sm text-white/90 max-w-sm mt-1">
                    Clean, modern branding that communicates trust and reliability.
                  </p>
                </figcaption>
              </motion.figure>
            </Link>

            <Link
              href="https://abdsmartstore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.figure
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6 }}
                className="relative overflow-hidden shadow-md h-[360px] group cursor-pointer"
              >
                <Image
                  src="/images/abd2.jpg"
                  alt="E-commerce UX Architecture"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">Visit ABD Store</span>
                </div>
                <figcaption className="absolute bottom-4 left-4 text-left text-white">
                  <h3 className="text-lg font-medium">E-commerce UX Architecture</h3>
                  <p className="text-sm text-white/90 max-w-sm mt-1">
                    Optimized user experience to maximize conversion and retention.
                  </p>
                </figcaption>
              </motion.figure>
            </Link>
          </div>

          {/* Mobile swipe version */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6 flex gap-4">
            {[
              {
                src: "/images/abdff.jpg",
                title: "Brand Identity",
                desc: "Clean, modern branding that communicates trust and reliability.",
                link: "https://abdsmartstore.com/",
                domain: "ABD Smart Store",
              },
              {
                src: "/images/abd2.jpg",
                title: "E-commerce UX Architecture",
                desc: "Optimized user experience to maximize conversion and retention.",
                link: "https://abdsmartstore.com/",
                domain: "ABD Smart Store",
              },
            ].map((it, i) => (
              <Link
                key={i}
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center min-w-[85%] sm:min-w-[70%] overflow-hidden shadow-md group cursor-pointer"
              >
                <article>
                  <div className="relative h-72">
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-base font-medium">
                        Visit {it.domain} →
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="text-lg font-medium text-left">{it.title}</h4>
                    <p className="text-sm text-gray-700 mt-2 text-left">{it.desc}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* ====== Section 2: Marketing & Social Strategy ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">
            Marketing & Social Strategy
          </h2>
          <p className="text-gray-700 text-left mb-8 max-w-2xl">
            We executed a targeted social media and content strategy to drive awareness, engagement, and sales. Each platform was customized for intent and culture to maximize ROI.
          </p>

          {/* Desktop */}
          <div className="hidden md:flex justify-center gap-10 flex-wrap">
            {[
              {
                id: "ig",
                title: "Instagram",
                desc: "High-impact visuals and feed-first commerce to build desire.",
                href: "https://www.instagram.com/abd_smart_stores",
                img: "/images/abdinsta.jpg",
              },
              {
                id: "tt",
                title: "TikTok",
                desc: "Trend-led creative to grow viral engagement.",
                href: "https://www.tiktok.com/@abdsmartstoreofficial",
                img: "/images/abdtok.jpg",
              },
            ].map((it) => (
              <motion.a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative w-72 h-[520px] rounded-[3rem] bg-gradient-to-b from-neutral-900 to-black shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-neutral-800 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-10px)] object-cover rounded-[2.3rem]"
                />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl rounded-t-2xl shadow-inner border border-neutral-700"></div>
                <div className="absolute bottom-0 w-full p-4 bg-black/85 text-center text-white backdrop-blur-sm">
                  <h4 className="text-lg font-medium">{it.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{it.desc}</p>
                  <p className="text-xs text-blue-400 mt-2">View campaign →</p>
                </div>
                <div className="absolute right-0 top-0 w-[6px] h-full bg-gradient-to-b from-white/10 to-transparent opacity-40 rounded-l-full"></div>
              </motion.a>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 scrollbar-hide">
            {[
              {
                id: "ig",
                title: "Instagram",
                desc: "High-impact visuals and feed-first commerce to build desire.",
                href: "https://www.instagram.com/abd_smart_stores",
                img: "/images/abdinsta.jpg",
              },
              {
                id: "tt",
                title: "TikTok",
                desc: "Trend-led creative to grow viral engagement.",
                href: "https://www.tiktok.com/@abdsmartstoreofficial",
                img: "/images/abdtok.jpg",
              },
            ].map((it) => (
              <a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="snap-center flex-shrink-0 w-[70%] sm:w-[70%] aspect-[9/16] bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-[3rem]  border border-neutral-800 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20"></div>
                <img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] object-cover rounded-[2.4rem]"
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-900 rounded-b-xl rounded-t-xl shadow-inner border border-neutral-700"></div>
                <div className="absolute bottom-0 w-full p-4 bg-black/80 text-center text-white backdrop-blur-sm rounded-b-[2.4rem]">
                  <h4 className="text-base font-medium">{it.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{it.desc}</p>
                  <p className="text-xs text-blue-400 mt-2">View campaign →</p>
                </div>
                <div className="absolute right-0 top-0 w-[5px] h-full bg-gradient-to-b from-white/10 to-transparent opacity-40 rounded-l-full"></div>
              </a>
            ))}
          </div>
        </section>

        {/* ====== Section 3: Operations & Dashboards ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">Operations </h2>
          <p className="text-gray-700 text-left mb-6 max-w-7xl">
         ABD Store partnered with Hypetek Advertising Agency to increase sales and visibility for their perfume collection, and the results were impressive. By analyzing Shopify sales data, Hypetek developed targeted campaigns that focused on the most popular fragrances and high-potential customer segments, ensuring ad spend was optimized for maximum impact. These campaigns led to a significant rise in both orders and revenue, as reflected in the Shopify dashboard, showing a steady upward trend in sales. In addition to boosting immediate sales, Hypetek’s strategies enhanced ABD Store’s brand presence, attracted new customers, and strengthened overall online engagement. This collaboration highlights how a focused, data-driven advertising approach can drive growth, elevate brand awareness, and create lasting value for a niche e-commerce business like ABD Store.
  </p>

          {/* Desktop two cards */}
          <div className="hidden md:flex gap-6 px-10">
            <motion.div whileHover={{ scale: 1.03 }} className="flex-1 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-[63vh] overflow-hidden">
                <Image src="/images/abd22.jpg" alt="Dashboard Visual" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="flex-1 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-[63vh] overflow-hidden">
                <Image src="/images/abd33.jpg" alt="Operations Visual" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Mobile swipeable */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
            {[{ id: 1, img: "/images/abd22.jpg" }, { id: 2, img: "/images/abd33.jpg" }].map((c) => (
              <article key={c.id} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm">
                <div className="relative w-full h-[20vh] overflow-hidden">
                  <Image src={c.img} alt="Visual" fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ====== Full width image + paragraph ====== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] overflow-hidden mb-6">
            <Image src="/images/abd3.jpg" alt="Launch Visual" fill className="object-cover" />
          </div>
          <div className="max-w-4xl">
            <p className="text-left text-gray-800 leading-relaxed">
              The phased go-to-market plan built anticipation and converted interest into a massive launch. By combining thoughtful brand design, high-conversion site experience, and disciplined marketing, we created a repeatable growth engine.
            </p>
          </div>
        </section>

        {/* ====== Final CTA ====== */}
        <section className="text-left mb-24">
          <div className="max-w-3xl">
            <Link
              href="/contact#contact-form"
              className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
