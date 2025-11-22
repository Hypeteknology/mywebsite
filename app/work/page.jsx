"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  const [search, setSearch] = useState("");

  const workData = [
     {
      img: "/images/byby.jpg",
      tag: "Success Story",
      brand: "Beyou Store",
      title: "Empowering individuality through e-commerce.",
      path: "art-exhibition",
      hoverDesc:
        "A fashion-forward online experience for a lifestyle brand built on self-expression.",
    },
    {
      img: "/images/abdpf.jpg",
      tag: "Success Story",
      brand: "ABD smart store",
      title: "Bringing scent and storytelling together.",
      path: "creative-direction",
      hoverDesc:
        "We redefined the brand presence of a luxury perfume house, fusing elegance and digital artistry.",
    },
   
    {
      img: "/images/framee.jpg",
      tag: "Case Study",
      brand: "Frames Town",
      title: "A lifestyle brand’s reawakening.",
      path: "frames-town",
      hoverDesc:
        "Rebranding and reimagining identity for a global audience through culture and creativity.",
    },
     {
      img: "/images/leather.jpg",
      tag: "Case Study",
      brand: "Dcorvo",
      title: "A lifestyle brand’s reawakening.",
      path: "dcorvo",
      hoverDesc:
        "Rebranding and reimagining identity for a global audience through culture and creativity.",
    },
    {
      img: "/images/ad.jpg",
      tag: "Case Study",
      brand: "American Dream",
      title: "A lifestyle brand’s reawakening.",
      path: "american-dream",
      hoverDesc:
        "Rebranding and reimagining identity for a global audience through culture and creativity.",
    },
    {
      img: "/images/lupsn.jpg",
      tag: "Case Study",
      brand: "Level Up Sneaker",
      title: "Where streetwear meets storytelling.",
      path: "levelup-sneaker",
      hoverDesc:
        "A dynamic brand launch showcasing attitude, authenticity, and motion.",
    },
    {
      img: "/images/voge0.jpg",
      tag: "Case Study",
      brand: "Vouge Decor",
      title: "Transforming interiors into visual poetry.",
      path: "vouge-decor",
      hoverDesc:
        "Luxury interior design presented through immersive and elegant digital visuals.",
    },
     {
      img: "/images/zaynper.jpg",
      tag: "Case Study",
      brand: "Zayn  enterprise",
      title: "Where streetwear meets storytelling.",
      path: "zayn-ep",
      hoverDesc:
        "A dynamic brand launch showcasing attitude, authenticity, and motion.",
    },
    {
      img: "/images/shesh.jpg",
      tag: "Case Study",
      brand: "She Shoe",
      title: "Crafting bilingual sweetness online.",
      path: "she-shoe",
      hoverDesc:
        "We built a multilingual brand experience that bridges cultures and taste.",
    },
    {
      img: "/images/perfumee.avif",
      tag: "Case Study",
      brand: "Fragnance Hub",
      title: "Crafting bilingual sweetness online.",
      path: "fragnance-hub",
      hoverDesc:
        "We built a multilingual brand experience that bridges cultures and taste.",
    },
    {
      img: "/images/choc.jpg",
      tag: "Case Study",
      brand: "Hada’s Chocolate",
      title: "Crafting bilingual sweetness online.",
      path: "hadas-choclate",
      hoverDesc:
        "We built a multilingual brand experience that bridges cultures and taste.",
    },
  ];

  const filteredWorks = workData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen font-[georgia] bg-white text-neutral-700 px-6 md:px-16 py-16">
      {/* Header */}
      <motion.div
        className="text-left max-w-3xl mx-auto mb-12 px-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl text-neutral-700 mb-8">
          Where imagination meets craftsmanship.
        </h1>
      

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start"
        >
          <input
            type="text"
            placeholder="Search works..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-lg outline-none focus:ring-1 focus:ring-neutral-600 placeholder-gray-500"
          />
        </motion.div>
      </motion.div>

      {/* 🔹 First Row (2 Success Stories) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        {filteredWorks.slice(0, 2).map((item, index) => (
          <Link href={`/work/${item.path}`} key={index}>
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-[280px] md:h-[340px] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center px-6 text-center">
                  <p className="text-white text-sm max-w-sm">{item.hoverDesc}</p>
                </div>
              </div>

              {/* Text Section */}
              <div className="mt-2 space-y-0">
                <p className="text-sm text-gray-500">{item.brand}</p>
                <h2 className="text-lg mb-4 md:text-lg text-neutral-900 leading-snug font-medium">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* 🔹 Remaining Rows (Case Studies) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredWorks.slice(2).map((item, index) => (
          <Link href={`/work/${item.path}`} key={index}>
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-[280px] md:h-[340px] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center px-6 text-center">
                  <p className="text-white text-sm max-w-sm">{item.hoverDesc}</p>
                </div>
              </div>

              {/* Text Section */}
              <div className="mt-5 space-y-0">
                <p className="text-sm text-gray-500">{item.brand}</p>
                <h2 className="text-lg md:text-lg text-neutral-900 leading-snug font-medium">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
