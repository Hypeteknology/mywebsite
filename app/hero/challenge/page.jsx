"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ChallengesPage() {
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
          Challenges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Our path was anything but easy. In a region where tradition meets modernity, we faced formidable barriers that tested our resolve every day.
        </motion.p>
      </section>

      {/* ================= CHALLENGE POINTS ================= */}
      <section className="max-w-4xl mx-auto pt-4 pb-18 px-6 md:px-0 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-lg md:text-xl font-light mb-2">
            Major Challenges
          </h3>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            - <strong>Lack of Knowledge and Awareness</strong>: Many locals had never heard of e-commerce. Convincing shop owners and families to embrace online selling felt like planting seeds in rocky soil—hopeful, but uncertain.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            - <strong>Slow Internet and Tech Barriers</strong>: Unreliable connections and limited access to devices made training sessions frustrating, often turning hours of effort into mere minutes of progress.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            - <strong>Logistics Issues</strong>: With poor roads and no established delivery networks, shipping even a single parcel was a logistical nightmare, let alone scaling to thousands.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            - <strong>Illiterate and Underserved Communities</strong>: Working with people who couldn't read or write meant starting from scratch, building trust amid skepticism and fear of the unknown.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
            These weren't just obstacles; they were heart-wrenching reminders of inequality. We saw families struggling to survive, businesses on the brink of closure, and youth with dreams but no path forward. Yet, in these struggles, we found our purpose—to not just survive, but to uplift and inspire.
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
          href="/hero/overcome"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
          Read next
        </Link>
      </motion.div>

    </main>
  );
}
