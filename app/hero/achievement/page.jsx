"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AchievementsPage() {
  return (
    <main className="font-['goudy-old-style',Georgia,serif,sans-serif] bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light leading-tight tracking-wide"
        >
          Achievements
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Half a Million Parcels Monthly – Transforming Local Businesses into Nationwide Powerhouses. Dispatched across Pakistan, creating hundreds of jobs, businesses, and full economic change. Through the Hypetek Foundation, youth awareness programs, internships, and hands-on training, we've rewritten the story of our community.
        </motion.p>
      </section>

      {/* ================= ACHIEVEMENTS SLIDES ================= */}
      <section className="max-w-4xl mx-auto pt-4 pb-18 px-6 md:px-0 space-y-10">
        {/* Achievement 1 */}
        <div
        >
          <h3 className="text-lg md:text-xl font-light mb-1">Half a Million Parcels Monthly</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Dispatched to every corner of Pakistan, fueling a nationwide e-commerce boom from our region alone.
          </p>
        </div>

        {/* Achievement 2 */}
        <div
        >
          <h3 className="text-lg md:text-xl font-light mb-1">Hundreds of Jobs and Businesses Created</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Empowering locals with employment, turning ideas into thriving online ventures, and sparking full economic change.
          </p>
        </div>

        {/* Achievement 3 */}
        <div
     
        >
          <h3 className="text-lg md:text-xl font-light mb-1">Hypetek Foundation for Youth Awareness</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our nonprofit arm dedicated to educating and inspiring the next generation through workshops and community programs.
          </p>
        </div>

        {/* Achievement 4 */}
        <div
       
        >
          <h3 className="text-lg md:text-xl font-light mb-1">Internships and Training Programs</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Creating opportunities for thousands to learn digital skills, from ad creation to e-commerce management, building a skilled workforce for the future.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
            These aren't just numbers—they're lives changed, families uplifted, and a region reborn. We've proven that with vision and heart, even the toughest challenges can lead to extraordinary success.
          </p>
        </motion.div>
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
          Contact Us
        </Link>

        <Link
          href="/hero/cta"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
          Read Next
        </Link>
      </motion.div>
    </main>
  );
}
