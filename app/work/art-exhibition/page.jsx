"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function BeyouStorePage() {
  
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // auto hide controls after 2 sec
  useEffect(() => {
    if (showControls && isPlaying) {
      const timer = setTimeout(() => setShowControls(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showControls, isPlaying]);

  // update seek bar
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    setProgress((v.currentTime / v.duration) * 100);
  };

  // seeking
  const handleSeek = (e) => {
    const v = videoRef.current;
    const newTime = (e.target.value / 100) * v.duration;
    v.currentTime = newTime;
    setProgress(e.target.value);
  };

  // play/pause
  const togglePlay = () => {
    const v = videoRef.current;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }

    setShowControls(true);
  };

  // mute/unmute
  const toggleMute = () => {
    const v = videoRef.current;
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
        src="https://res.cloudinary.com/dx2nzmgn6/video/upload/bu_chdgfk.mp4"
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
   



          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/10" />

          {/* Text content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="max-w-3xl p-6 md:p-12">
              <motion.h1
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-2xl lg:text-3xl font-light text-white leading-tight text-left"
              >
                Beyou Store
              </motion.h1>
             <motion.p
  initial={{ y: 12, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.12, duration: 0.6 }}
  className="hidden md:block text-sm md:text-base text-white/90 mt-4 max-w-2xl text-left"
>
  Transforming the fashion e-commerce experience in Pakistan with a trust-first
  approach, innovative marketing, and a strong brand identity.
</motion.p>
            </div>
          </div>
        </header>

        {/* ====== Section 1: Introduction & Visuals ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">
            Building a Business, Not Just a Store
          </h2>
          <p className="text-left text-gray-800 leading-relaxed mb-6">
            Beyou Store's founder envisioned a modern Pakistani fashion e-commerce brand. Beyond branding and ads, it required building a complete ecosystem: strong brand identity, scalable operations, and customer acquisition engine to achieve rapid growth.
          </p>

          {/* Desktop two-column images */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 px-10">
            {/* Image 1 */}
            <Link href="https://beyoustore.pk/" target="_blank" rel="noopener noreferrer">
              <motion.figure
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden shadow-md h-[360px] group cursor-pointer"
              >
                <Image
                  src="/images/beyoustore23.jpg"
                  alt="Clarity-first Visual Identity"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">Visit Beyou Store →</span>
                </div>
                <figcaption className="absolute bottom-4 left-4 text-left text-white">
                  <h3 className="text-lg font-medium">Clarity-first Visual Identity</h3>
                  <p className="text-sm text-white/90 max-w-sm mt-1">
                    Clean, benefit-driven creative that removes confusion and builds credibility.
                  </p>
                </figcaption>
              </motion.figure>
            </Link>

            {/* Image 2 */}
            <Link href="https://beyoustore.pk/" target="_blank" rel="noopener noreferrer">
              <motion.figure
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6 }}
                className="relative overflow-hidden shadow-md h-[360px] group cursor-pointer"
              >
                <Image
                  src="/images/beyoustore24.jpg"
                  alt="Educational Content Architecture"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">Visit Beyou Store →</span>
                </div>
                <figcaption className="absolute bottom-4 left-4 text-left text-white">
                  <h3 className="text-lg font-medium">Educational Content Architecture</h3>
                  <p className="text-sm text-white/90 max-w-sm mt-1">
                    Messaging that educates customers and answers objections before they arise.
                  </p>
                </figcaption>
              </motion.figure>
            </Link>
          </div>

          {/* Mobile swipe version */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6 flex gap-4">
            {[
              {
                src: "/images/beyoustore23.jpg",
                title: "Clarity-first Visual Identity",
                desc: "Clean, benefit-driven creative that removes confusion and builds credibility.",
                link: "https://beyoustore.pk/",
              },
              {
                src: "/images/beyoustore24.jpg",
                title: "Educational Content Architecture",
                desc: "Messaging that educates customers and answers objections before they arise.",
                link: "https://beyoustore.pk/",
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
                      <span className="text-white text-base font-medium">Visit Beyou Store →</span>
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

        {/* ====== Section 2: Social Campaign Cards ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">
            Cross-Platform Marketing
          </h2>
          <p className="text-gray-700 text-left mb-8 max-w-2xl">
            Targeted campaigns across Instagram, Facebook, and TikTok drove awareness, engagement, and conversions.
          </p>

          {/* Desktop */}
          <div className="hidden md:flex justify-center gap-10 flex-wrap">
            {[
              {
                id: "ig",
                title: "Instagram — Visual Storytelling",
                desc: "High-impact creatives and feed-first commerce to build desire.",
                href: "https://www.instagram.com/Beyoustoreofficial",
                img: "/images/insta.jpg",
              },
              {
                id: "fb",
                title: "Facebook — Reach & Precision",
                desc: "Layered targeting to find and nurture high-value segments.",
                href: "https://www.facebook.com/share/17cvGtjTwU/",
                img: "/images/bfb.jpg",
              },
              {
                id: "tt",
                title: "TikTok — Community & Viral Growth",
                desc: "Trend-led creative to build momentum and cultural relevance.",
                href: "https://www.tiktok.com/@Beyoustoreofficial",
                img: "/images/tik.jpg",
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
                title: "Instagram — Visual Storytelling",
                desc: "High-impact creatives and feed-first commerce to build desire.",
                href: "https://www.instagram.com/Beyoustoreofficial",
                img: "/images/insta.jpg",
              },
              {
                id: "fb",
                title: "Facebook — Reach & Precision",
                desc: "Layered targeting to find and nurture high-value segments.",
                href: "https://www.facebook.com/beyoustoreofficial1",
                img: "/images/fb.jpg",
              },
              {
                id: "tt",
                title: "TikTok — Community & Viral Growth",
                desc: "Trend-led creative to build momentum and cultural relevance.",
                href: "https://www.tiktok.com/@Beyoustoreofficial",
                img: "/images/tik.jpg",
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

        {/* ====== Section 3: Dashboard / Operations Cards ====== */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl  text-left mb-4">Operations & Measurement</h2>
          <p className="text-gray-700 text-left mb-6 max-w-7xl">
        BeYou Store partnered with Hypetek Advertising Agency to boost their online sales, and the impact was significant. By leveraging Shopify sales data, Hypetek designed targeted advertising campaigns that focused on high-converting products and the right customer segments, optimizing ad spend for maximum returns. Their data-driven approach led to a noticeable increase in both orders and revenue, with the Shopify dashboard showing a clear upward trend in sales. Beyond immediate results, the campaigns enhanced brand visibility, attracted new customers, and strengthened the store’s online presence. This collaboration demonstrates how strategic advertising can effectively drive sales growth, improve customer engagement, and create lasting value for an e-commerce business.
    </p>

          {/* Desktop two cards */}
          <div className="hidden md:flex gap-6 px-10">
            <motion.div whileHover={{ scale: 1.03 }} className="flex-1 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-[63vh] overflow-hidden">
                <Image src="/images/dbyou1.png" alt="Dashboard Analytics" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="flex-1 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-[63vh] overflow-hidden">
                <Image src="/images/dbyou2.jpg" alt="Operations Flow" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Mobile swipeable */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4">
            {[{ id: 1, img: "/images/dbyou1.png" }, { id: 2, img: "/images/dbyou2.jpg" }].map((c) => (
              <article key={c.id} className="snap-center min-w-[85%] sm:min-w-[70%] border border-gray-200 shadow-sm">
                <div className="relative w-full h-[20vh] overflow-hidden">
                  <Image src={c.img} alt="Visual" fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ====== Section 4: Full Width Image & Paragraph ====== */}
        <section className="mb-16">
          <div className="relative w-full md:h-[90vh] h-[26vh] overflow-hidden mb-6">
            <Image src="/images/blast.jpg" alt="Launch visual" fill className="object-cover" />
          </div>
          <div className="max-w-4xl">
            <p className="text-left text-gray-800 leading-relaxed">
              The phased go-to-market plan built anticipation and converted interest into a massive launch. Combining brand design, high-conversion site experience, and a disciplined paid strategy created a repeatable growth engine.
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
