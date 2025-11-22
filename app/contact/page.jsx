"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Star } from "lucide-react"; // ⭐ Lucide icons

export default function Contact() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "As a small business owner, I’ve tried a lot of platforms — but Untitled blew me away. Selling my digital products is now effortless, and the built-in integrations save me hours each month.",
      author: "Atif Rehmani",
      role: "Product Manager, PixaClicks",
      rating: 5,
    },
    {
      text: "The customer support team is incredible — responsive, friendly, and actually helpful. They go the extra mile every time.",
      author: "Babar Sherazi",
      role: "Founder, Beyou",
      rating: 5,
    },
    {
      text: "Using this platform has simplified our workflows and improved collaboration across departments.",
      author: "Yenpham",
      role: "CEO, Mega Digital",
      rating: 4,
    },
    {
      text: "I love how intuitive and elegant the design is — it makes running my business enjoyable again.",
      author: "Amna Tariq",
      role: "Tech Director, Bloom & Co.",
      rating: 5,
    },
    {
      text: "Everything just works seamlessly. Our productivity has improved drastically since switching.",
      author: "Waseem Akram",
      role: "CEO, Dezign Aura",
      rating: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <main className="min-h-screen font-[georgia] bg-white text-neutral-800 overflow-hidden scroll-smooth">
      {/* HERO SECTION */}
      <section className="text-left max-w-5xl mx-auto py-20 mb-12 px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl  max-w-3xl  text-neutral-700 leading-snug tracking-tight mb-6"
        >
          Contact Hypetek – Let's build your brand's future
        </motion.h1>
        <p className="text-md md:text-md text-gray-700 max-w-4xl ">
          Ready to transform your brand's potential into record-breaking results?
          Whether you're launching a new product, scaling your e-commerce store,
          or building a brand from scratch, our team is here to guide you every
          step of the way. Get in touch with us using the details below.
        </p>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="max-w-6xl mx-auto px-6 md:px-12 mb-24 scroll-mt-24">
        <h2 className="text-left text-2xl mb-1">Get in Touch</h2>
        <p className="text-left mb-8">
          We're here to answer your questions and discuss how we can drive growth
          for your business.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Formspree Form */}
          <form
            action="https://formspree.io/f/xvgdlyjk"
            method="POST"
            className="bg-neutral-50 p-8 rounded-2xl shadow-md space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-neutral-600 outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-neutral-600 outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-neutral-600 outline-none"
              required
            />
            <input
              type="text"
              name="Number"
              placeholder="Phone Number"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-neutral-600 outline-none"
            />

           

            <textarea
              name="message"
              placeholder="Message"
              className="border border-gray-300 px-4 py-2 rounded-md w-full h-24 focus:ring-1 focus:ring-neutral-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-white outline outline-1 hover:bg-neutral-900 text-neutral-950 hover:text-white px-2 py-2  w-1/2 md:w-1/3 font-medium transition"
            >
              Send message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 pt-4 text-neutral-800">
            <div>
              <h3 className="text-lg  mb-2">Email Us</h3>
              <p className="text-sm">contact@hypetekadvertisingagency.com</p>
              <p className="text-sm">hypeteknology@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg  mb-2">
                Main Helpline & General Inquiries:
              </h3>
              <p className="text-sm">0310 5555728</p>
              <p className="text-xs text-gray-700">
                Ideal for general questions and existing client support.
              </p>
            </div>
            <div>
              <h3 className="text-lg  mb-2">
                Sales & New Project Proposals:
              </h3>
              <p className="text-sm">0308 8394235</p>
              <p className="text-xs text-gray-700">
                Speak directly with our sales team to start a new partnership.
              </p>
            </div>
            <div>
              <h3 className="text-lg  mb-2">Visit Us</h3>
              <p className="text-sm">
                Office #A6, Arslan Market, Main Oghi Road, Bherkund, Mansehra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-18">
        <h2 className="text-left text-2xl  mb-8">
          Visit Our Office
        </h2>

        <div className="bg-gray-50 rounded-2xl shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.025017447049!2d72.9491226!3d34.4767761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3001b8b928c7%3A0x2899f9c5b9b2ffdf!2sHypeteknology%20Pvt%20Ltd.%2C%20Office%23A6%2C%20Arslan%20Market%2C%20Main%20Oghi%20Road%2C%20Bherkund%2C%20Mansehra!5e0!3m2!1sen!2s!4v1730047000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] rounded-xl"
          ></iframe>

          <div className="p-6 text-center text-gray-700">
            <h3 className="text-lg  mb-2">
              Hypeteknology Pvt Ltd.
            </h3>
            <p>Office #A6, Arslan Market, Main Oghi Road, Bherkund, Mansehra</p>
            <a
              href="https://maps.app.goo.gl/6896Apdp1ebjmAtg7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-green-700 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-white pt-14 pb-6 text-center mx-auto px-6 md:px-12 relative">
        <h2 className="text-left md:pl-12 text-2xl mb-8">
          Reviews
        </h2>
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            {[...Array(reviews[currentReview].rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-nuetral-600 fill-neutral-700"
              />
            ))}
          </div>
          <p className="md:text-md text-sm text-gray-700 mb-6 italic">
            “{reviews[currentReview].text}”
          </p>
          <div className="text-gray-900 font-semibold">
            — {reviews[currentReview].author}
          </div>
          <p className="text-sm text-gray-500">{reviews[currentReview].role}</p>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentReview
                  ? "bg-neutral-700"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-left py-16  px-6 md:px-16 bg-gray-50">
        <h2 className="text-left  text-2xl  mb-8">
          Book a Free Strategy Session
        </h2>
        <p className="text-gray-600 mb-8 ">
          Your growth journey starts with a single conversation. Click the
          button below to book a complimentary consultation with our strategy
          team. We'll analyze your current standing and outline a roadmap to
          achieve your goals.
        </p>
        <Link
          href="#contact-form"
          scroll={true}
          className="bg-white outline outline-1 hover:bg-neutral-900 text-gray-900 hover:text-white px-6 py-3  font-medium transition"
        >
          Book an appointment
        </Link>
      </section>
    </main>
  );
}
