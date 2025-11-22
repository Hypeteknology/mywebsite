"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OvercomingChallengesPage() {
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
          How We Overcame Challenges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm md:text-base text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Hundreds of Jobs Created – Empowering Communities, One Opportunity at a Time. Training Students, Making Teams, Guiding Business Owners, Taking a Start Without Any Advantage, Etc.—Giving Time and Focus. We didn't have investors, fancy tools, or advantages—just determination and a belief in people.
        </motion.p>
      </section>

      {/* ================= STRATEGIES / SLIDES ================= */}
      <section className="max-w-4xl mx-auto pt-4 pb-18 px-6 md:px-0 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-lg md:text-xl font-light mb-1">Training Students and Building a Team</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We started small, gathering eager students and turning them into a dedicated team through hands-on workshops. No experience? No problem—we taught coding, digital marketing, and ad strategies from the ground up.
          </p>

          <h3 className="text-lg md:text-xl font-light mb-1">Guiding Business Owners Step by Step</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We held free sessions to demystify e-commerce, showing illiterate entrepreneurs how to list products on platforms like Shopify with simple, visual guides. Patience became our superpower.
          </p>

          <h3 className="text-lg md:text-xl font-light mb-1">Starting Without Any Advantage</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            With zero funding, we bootstrapped everything—using slow internet to our advantage by focusing on creative, low-bandwidth ad campaigns on TikTok and Facebook that delivered real results.
          </p>

          <h3 className="text-lg md:text-xl font-light mb-1">Giving Time and Laser Focus</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Nights turned into days as we mentored, troubleshooted logistics partnerships, and iterated relentlessly. Our focus wasn't on quick wins but on sustainable change, one business at a time.
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
            Through tears, setbacks, and small victories, we built bridges of knowledge and hope. What kept us going? The smiles of a shopkeeper making their first online sale, or a young person landing their first job. We overcame not by force, but by fostering a community that lifted each other up.
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
          href="/hero/achievement"
          className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm text-center"
        >
         Read Next
        </Link>
      </motion.div>

    </main>
  );
}
