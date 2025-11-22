"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    let timeout;

    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);

      clearTimeout(timeout);
      timeout = setTimeout(() => setShowNavbar(true), 1000);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed w-full z-40 bg-white backdrop-blur-sm font-[sans] transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-6xl mx-auto px-2 py-2 md:mt-2 -mt-2 flex flex-col md:flex-row items-center md:items-center md:justify-between">

          {/* Logo */}
          <div className="relative w-28 h-12 flex items-center md:justify-start z-30">
            <Link href="/" className="font-bold text-gray-900 text-2xl flex items-center">
              <Image
                src="/images/hypetektop.png"
                alt="Hypetek"
                width={120}
                height={20}
                className="block object-contain w-24 h-auto md:w-28 transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-7 text-gray-600 text-sm items-center md:mt-0 mt-1">
            <Link
              href="/work"
              className={`transition ${isActive("/work") ? "text-neutral-700 font-semibold" : "hover:text-gray-900"}`}
            >
              Work
            </Link>

            <Link
              href="/expertise"
              className={`transition ${isActive("/expertise") ? "text-neutral-700 font-semibold" : "hover:text-gray-900"}`}
            >
              Expertise
            </Link>

            <Link
              href="/career"
              className={`transition ${isActive("/career") ? "text-neutral-700 font-semibold" : "hover:text-gray-900"}`}
            >
              Career
            </Link>

            <Link
              href="/contact"
              className={`px-5 py-2 border text-sm font-medium transition-all duration-300 ${isActive("/contact") ? "bg-neutral-800 text-white border-neutral-800" : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"}`}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
