"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinTheHypePage() {
  return (
    <main className="font-['goudy-old-style',Georgia,serif,sans-serif]  bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light leading-tight tracking-wide"
        >
          Join the Hype: Your Business Next
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Expert TikTok, Facebook Meta & Shopify Ads for Global Growth. Now it's your turn to change your life with us.
        </motion.p>
      </section>

      {/* ================= STORY / PITCH ================= */}
      <section className="max-w-4xl mx-auto pt-4 pb-18 px-6 md:px-0 space-y-10">
        <div
          
          className="space-y-6"
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We've walked the path of struggle and emerged stronger—now, let us help you do the same. Whether you're a service provider, food business, or e-commerce entrepreneur anywhere in the world, Hypeteknology's expert TikTok, Facebook, and Shopify ad services can ignite your growth.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Join our global family, scale your business, and create your own success story. Together, we'll turn challenges into triumphs. We provide hands-on guidance, creative campaigns, and proven strategies to help your business thrive in the digital marketplace.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
            The opportunity is here—let's make it happen. Your business growth is just a step away.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center md:justify-start gap-6 pb-16 max-w-4xl mx-auto pt-4 px-6 md:px-0"
      >
        <Link
          href="/contact#contact-form"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
          Get Your Free Ad Audit Today
        </Link>

        <Link
          href="/work"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
          See Our work
        </Link>
      </motion.div>

    </main>
  );
}
