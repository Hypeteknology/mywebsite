"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const logosRow1 = [
  "/images/ABD.png",
  "/images/american.png",
  "/images/BEYOU.png",
  "/images/dcorvohypp.png",
  "/images/Fragrancehub.png",
  "/images/frameTown.png",
];

const logosRow2 = [
  "/images/ghosia.png",
  "/images/vouge.png",
  "/images/levelup.png",
  "/images/sheshoe.png",
  "/images/hada.png",
  
  "/images/zayn_enter.png",
  "/images/american.png",
];



const slides = [
  "/images/hhero.jpg",
  "/images/hhero.jpg",
  "/images/hhero.jpg",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const pathname = usePathname();
  const isContact = pathname === "/contact";



  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // -----------------------------
  // HERO SECTION PAGES (5 cards)
  // -----------------------------
  const heroPages = [
    {
      id: 1,
      image: "/images/ourstory33.jpg",
      title: "Our Story",
      subtitle: "The journey that started it all.",
      link: "/hero/mystory",
    },
    {
      id: 2,
      image: "/images/challenge.jpg",
        title: "Challenges",
      subtitle: "Facing obstacles",
      link: "/hero/challenge",
    },
    {
      id: 3,
      image:
        "/images/overcome.jpg",
      title: "Overcoming challenges",
      subtitle: "Rising stronger every time.",
      link: "/hero/overcome",
    },
    {
      id: 4,
      image:
        "/images/achievement.jpg",
      title: "Achievements",
      subtitle: "Moments that define success.",
      link: "/hero/achievement",
    },
    {
      id: 5,
      image:
       "/images/cta.jpg",
      title: "Call to Action",
      subtitle: "What’s next on the journey?",
      link: "/hero/cta",
    },
  ];

  // -----------------------------
  // WORK SECTION PAGES (5 cards)
  // -----------------------------
  const workPages = [
    {
      id: 6,
      image:
        "/images/leather.jpg",
      title: "Case Study",
      subtitle: "Dcorvo",
      link: "/work/dcorvo",
    },
    {
      id: 7,
      image:
        "/images/framee.jpg",
      title: "Case Study",
      subtitle: "Frames Town",
      link: "/work/frames-town",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1624613533305-28d421d70875?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Success Story",
      subtitle: "Beyou Store",
      link: "/work/art-exhibition",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1567585902972-53bd0b897bf3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Success Story",
      subtitle: "Abd Store",
      link: "/work/creative-direction",
    },
    {
      id: 10,
      image:
        "/images/ad.jpg",
      title: "Case Study",
      subtitle: "American Dream",
      link: "/work/american-dream",
    },
  ];

  return (
    <>
     {/* ================= HERO SECTION (VIDEO) ================= */}
<section className="relative bg-white flex items-center h-[30vh] md:h-screen overflow-hidden">

  {/* Background Video */}
<video
  src="https://res.cloudinary.com/dx2nzmgn6/video/upload/v12345678/heero_ync1si.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
></video>




 
</section>
{/* ================= HERO CONTENT SECTION ================= */}
<section className="  bg-white font-['goudy-old-style',Georgia,serif,sans-serif] py-8 px-6 md:px-20">
  <motion.div
    className="w-full space-y-6 text-black max-w-5xl"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className="text-xl md:text-3xl">BRANDING YOUR IDEAS</h1>

    <div className="flex justify-left md:justify-start text-sm gap-4">
      <Link
        href="/work"
        className="inline-block bg-black text-white md:px-5 md:py-3 px-4 py-2 font-medium hover:bg-gray-700 transition duration-300"
      >
        See our work
      </Link>

      <Link
        href="/hero/mystory"
        scroll={true}
        className="inline-block border border-black md:px-5 md:py-3 px-4 py-2 font-medium hover:bg-black hover:text-white transition-all duration-300"
      >
        Our Story
      </Link>
    </div>
  </motion.div>
</section>



      {/* ================= AKQA-STYLE PAGE CARDS ================= */}
      <section className="bg-white pt-4 pb-20 px-6 md:px-12 font-['goudy-old-style',Georgia,serif,sans-serif]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-xl font-light text-neutral-800 mb-6 md:px-6 leading-tight">
            Discover the journey behind each chapter.
          </h2>

          <div className="space-y-10 px-0 md:px-6">

            {/* -------------------------------- */}
            {/* ROW 1 — 3 CARDS FROM HERO       */}
            {/* -------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Big Left */}
              <CardBig page={heroPages[0]} delay={0} span="md:col-span-6" />

              {/* Small Middle */}
              <CardSmall page={heroPages[1]} delay={0.1} span="md:col-span-3" />

              {/* Small Right */}
              <CardSmall page={heroPages[2]} delay={0.2} span="md:col-span-3" />
            </div>

            {/* -------------------------------- */}
            {/* ROW 2 — 2 CARDS FROM HERO       */}
            {/* -------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CardBig page={heroPages[3]} delay={0} />
              <CardBig page={heroPages[4]} delay={0.1} />
            </div>

            {/* -------------------------------- */}
            {/* ROW 3 — 3 CARDS FROM WORK       */}
            {/* -------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <CardSmall page={workPages[0]} delay={0} span="md:col-span-3" />
              <CardSmall page={workPages[1]} delay={0.1} span="md:col-span-3" />
              <CardBig page={workPages[2]} delay={0.2} span="md:col-span-6" />
            </div>

            {/* -------------------------------- */}
            {/* ROW 4 — LAST 2 WORK CARDS       */}
            {/* -------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CardBig page={workPages[3]} delay={0} />
              <CardBig page={workPages[4]} delay={0.1} />
            </div>

          </div>
        </div>
      </section>


<section className="bg-white text-neutal-900 md:py-12 py-0 mb-12 md:mb-1 overflow-hidden">
      <div className="text-left md:text-center px-7 md:mb-12 mb-12">
        <h2 className="text-xl md:text-2xl font-[georgia]">
          Proud to work with{" "}
          <span className="italic text-gray-500">incredible</span> partners
        </h2>
      </div>

      {/* Row 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden mb-10">
        <motion.div
          className="flex  space-x-4 md:space-x-16"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-28 md:w-40 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={200}
                height={100}
                className="object-contain w-[64] h-[62]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 (Right to Left) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-4 md:space-x-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-28 md:w-40 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={200}
                height={100}
                className="object-contain w-[64] h-[62]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    </>
  );
}

/* -----------------------------
   CARD COMPONENTS (unchanged design)
----------------------------- */

function CardBig({ page, delay = 0, span = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className={`group cursor-pointer flex flex-col ${span}`}
    >
      <Link href={page.link} className="flex flex-col h-full">
        <div className="relative w-full h-[200px] md:h-[340px] overflow-hidden shadow-lg">
          <Image
            src={page.image}
            alt={page.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          <h3 className="md:text-md text-xs text-gray-500 group-hover:underline">
            {page.title}
          </h3>
          <p className="text-neutral-800 text-lg">{page.subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}

function CardSmall({ page, delay = 0, span = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className={`group cursor-pointer flex flex-col ${span}`}
    >
      <Link href={page.link} className="flex flex-col h-full">
        <div className="relative w-full h-[200px] md:h-[340px] overflow-hidden shadow-lg">
          <Image
            src={page.image}
            alt={page.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          <h3 className="md:text-md text-xs text-gray-500 group-hover:underline">
            {page.title}
          </h3>
          <p className="text-neutral-800 text-lg">{page.subtitle}</p>
        </div>
      </Link>

      
    </motion.div>



  );
}
