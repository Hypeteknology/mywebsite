"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923105555728"; // 🇵🇰 Replace with your WhatsApp number (without +)
  const message = "Hi! I’d like to know more about your work.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-10 z-50 bg-neutral-900 hover:bg-green-600 text-white p-4 rounded-full shadow-lg 
                 transition-all duration-300 ease-in-out flex items-center justify-center
                 animate-float"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
}
