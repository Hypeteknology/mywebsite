"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope, FaFacebookF, FaTiktok} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-neutral-800 text-white pt-16 pb-10 "
    >
      <div className="max-w-7xl font-serif mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Column 1 - Brand */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <img
    src="/images/hypenav.png"
    alt="Hypetek Logo"
    className="w-24 h-auto md:w-28 mb-3 transition-transform bg-transparent duration-300 hover:scale-105"
  />
  <p className="text-xs text-neutral-300 max-w-xs leading-relaxed">
    We craft impactful digital experiences with creativity, precision, and passion.
  </p>
</div>


        {/* Column 2 - Company */}
        <div>
          <h3 className="text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="/work" className="hover:text-white transition">Work</a></li>
            <li><a href="/expertise" className="hover:text-white transition">Expertise</a></li>
            <li><a href="/career" className="hover:text-white transition">Career</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="/career" className="hover:text-white transition">Meet our team</a></li>
            <li><a href="/work" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="/work/art-exhibition" className="hover:text-white transition">Success Story (beyou) </a></li>
            <li><a href="/work/creative-direction" className="hover:text-white transition">Success Story (abd)</a></li>
          </ul>
        </div>

        {/* Column 4 - Connect */}
        <div>
          <h3 className="text-lg mb-3">Connect</h3>
           {/* 
          <p className="text-sm text-neutral-400 mb-4">hypeteknology@gmail.com</p>*/}
          <div className="flex justify-center md:justify-start gap-5">
            <a href="mailto:hypeteknology@gmail.com" className="hover:text-gray-500 transition">
              <FaEnvelope size={18} />
            </a>
            <a href="https://www.linkedin.com/company/hypeteknology/" target="_blank" className="hover:text-blue-600 transition">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.instagram.com/hypeteknology?igsh=MXJicXEzZ28yMzFrcw==" target="_blank" className="hover:text-pink-800 transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/17e4c5oSiq/" target="_blank" className="hover:text-blue-500 transition">
              <FaFacebookF size={18} />
            </a>
             <a href="https://www.tiktok.com/@hypeteknology?_r=1&_t=ZS-9128bNmvSrq" target="_blank" className="hover:text-gray-500 transition">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-12 pt-4 text-center text-xs text-orange-100">
        © {new Date().getFullYear()} <span className="font-semibold">Hypetek</span>. All rights reserved.
      </div>
    </motion.footer>
  );
}
