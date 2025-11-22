"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MyStoryPage() {
  return (
    <main className="font-['goudy-old-style',Georgia,serif,sans-serif] bg-white  text-gray-900 overflow-hidden">
      
      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light leading-tight tracking-wide"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Which started 7 years ago in the rugged hills of Mansehra, Khyber Pakhtunkhwa, Pakistan, where dreams often clash with harsh realities, our journey began seven years ago. As passionate visionaries at Hypetek, we saw untapped potential in our community — a region rich in talent but isolated from the digital world. What began as a small spark of hope has grown into a blazing fire of transformation, helping everyday people turn their ideas into thriving online ventures. This isn't just our story; it's a testament to resilience, community, and the power of digital innovation.
        </motion.p>
      </section>

      {/* ================= TURNING POINTS ================= */}
      <section className="max-w-4xl mx-auto pt-4 pb-18 px-6 md:px-0">
        <div
          
          className="space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-light mb-2">
            Turning Points
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            There were moments that tested our patience, creativity, and determination. Every challenge carried hidden opportunities — the chance to evolve. These turning points became the chapters that strengthened our purpose.
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
          Contact Us
        </Link>

        <Link
          href="/hero/challenge"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
          Read Next
        </Link>
      </motion.div>

    </main>
  );
}
