"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExpertisePage() {
  const expertiseData = [
    {
      img: "/images/branding.png",
      title: "Branding — Build an Identity That Stands Out",
      link: "/work", // 🔹 updated to related work page
      desc: "Your brand is more than a logo — it’s your story, your voice, your presence. We create authentic, memorable, and market-ready brands that connect with hearts and last in minds",
    },
    {
      img: "/images/webdev.png",
      title: "Web Development — Websites That Convert",
      link: "/work",
      desc: "A website is your digital home — it must be fast, functional, and future-ready. Our development team builds custom websites that perform beautifully on every device and convert visitors into loyal customers.",
    },
    {
      img: "/images/smarket.png",
      title: "Social Media Marketing — Create, Connect, Convert",
      link: "/work",
      desc: "We help you reach, engage, and grow your audience across all platforms. Our creative team blends storytelling with smart strategy to make your brand go viral — organically and through ads.",
    },
    {
      img: "/images/ecommerce.png",
      title: "SEO — Get Found. Stay Ahead.",
      link: "/work",
      desc: "What’s the point of a great website if no one finds it? Our SEO strategies ensure your business ranks where it matters — on top.",
    },
    {
      img: "/images/seo.png",
      title: "E-Commerce Full Solution — From Idea to Income",
      link: "/work",
      desc: "Whether you’re launching your first store or scaling an existing one, we provide complete e-commerce solutions — from setup to sales.",
    },
    {
      img: "/images/tiktok.png",
      title: "Shopify & TikTok Agency Services — Grow Smart, Scale Fast",
      link: "/work",
      desc: "We’re official Shopify and TikTok Ads experts — helping brands across Pakistan reach millions through targeted ad campaigns and creative strategies.",
    },
    {
      img: "/images/whychoose.png",
      title: "Why Businesses Choose Hypetek",
      link: "/work",
      desc: "All-in-One Digital Growth Partner ,7+ Years of Industry Experience ,Dedicated Local Team & Global Expertise, Transparent Reporting & Real Results",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-[georgia]">
      {/* Hero Section */}
      <motion.div
        className="md:text-left text-center  max-w-5xl mx-auto md:py-20 py-6 pt-16 md:pt-16 md:mb-12 mb-0 px-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-thin  max-w-4xl md:max-w-2xl text-neutral-700   mb-6">
          The most powerful force in universe isn't technology. It's imaginations.
        </h1>
        
      </motion.div>

      {/* Expertise Sections */}
      <div className="flex flex-col items-center">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={1920}
              height={1080}
              className="object-cover w-full h-[30vh] md:h-[85vh]"
              priority={index === 0}
            />

            {/* Desktop Overlay */}
            <div className="hidden md:flex absolute inset-0 bg-black/40 flex-col justify-center text-left px-24">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-white text-2xl md:text-3xl mb-4">{item.title}</h2>
                <p className="text-white/85 md:text-sm max-w-xl leading-relaxed mb-4">{item.desc}</p>
                <Link
                  href={item.link}
                  className="text-white/90 underline text-sm hover:text-neutral-800 transition-colors"
                >
                  Check Out Work
                </Link>
              </motion.div>
            </div>

            {/* Mobile Section */}
            <div className="md:hidden bg-white pt-8 pb-20 px-6 shadow-sm text-left">
              <h2 className="text-xl font-[georgia] text-neutral-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.desc}</p>
              <Link
                href={item.link}
                className="text-gray-500 underline text-sm hover:text-gray-700 transition-colors"
              >
                Check Out Work
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="text-left md:py-16 py-4 pb-28 md:pb-20 mx-auto px-6 md:px-32 bg-gray-50">
        <h2 className="text-left text-neutral-800 text-2xl  mb-8">
          Let’s Build Your Digital Success Story
        </h2>
        
        <p className="text-gray-600 mb-4  ">
          Ready to take your business to the next level?
        </p>
        <Link
          href="/contact#contact-form"
          scroll={true}
          className="bg-white outline outline-1 hover:bg-neutral-900 text-gray-900 hover:text-white px-4 py-3 font-medium transition"
        >
          Book an appointment
        </Link>
      </section>
    </main>
  );
}
