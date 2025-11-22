import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Inter, Playfair_Display } from "next/font/google";

// Modern + Elegant Font Pair
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Hypetek",
  description: "Professional Website",
   icons: {
    icon: "/images/favicon.png", // path relative to public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
         <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
