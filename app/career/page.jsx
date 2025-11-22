"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

// ✅ Mobile slider component
function MobileTeamSlider({ members }) {
  const [current, setCurrent] = useState(0);

  const handleScroll = (e) => {
    const scrollX = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollX / width);
    setCurrent(index);
  };

  return (
    <>
     <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        onScroll={handleScroll}
      >
        {members.map((member, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full text-center p-4"
          >
            <div className="bg-gray-50 rounded-xl shadow-md p-4 mx-4">
              <Image
                src={member.img}
                alt={member.name}
                width={250}
                height={250}
                className="w-56 h-56 object-cover rounded-full mx-auto mb-3 grayscale hover:grayscale-0 transition"
              />
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              {/* Quote + LinkedIn icon */}
              <div className="flex items-center justify-between text-xs italic text-gray-600 mt-2 px-3">
                <p className="text-left">“{member.quote}”</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-blue-800 ml-2"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Dots below slider */}
      <div className="flex justify-center mt-4 space-x-2">
        {members.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-neutral-800 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </>
  );
}


// ✅ Main page component
export default function CareerPage() {
  const teamRef = useRef(null);
  const applyRef = useRef(null);
  const [formType, setFormType] = useState("Work Application");

  const scrollToSection = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const teamMembers = [
    {
      img: "/images/saaad.jpg",
      name: "Saad Ali",
      role: "Founder & CEO",
      quote: "Dream big, execute bigger.",
      linkedin: "https://www.linkedin.com/in/saaddorani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/azhar.jpg",
      name: "Azhar Gillani",
      role: "Finance and Managing director",
      quote: "Design is the voice of emotion.",
      linkedin: "https://www.linkedin.com/in/azhar-gillani-social-media-marketer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/azaaz.jpg",
      name: "Aizazullah Saeed",
      role: "Project Manager",
      quote: "Design is the voice of emotion.",
      linkedin: "https://www.linkedin.com/in/aizazullah-saeed-yousafzai-4a2919369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/Mohsin.jpg",
      name: "Mohsin Zaman",
      role: "Senior Digital Marketer",
      quote: "Creativity fuels connection.",
      linkedin: "https://linkedin.com",
    },
    {
      img: "/images/Fahad.jpg",
      name: "Fahad Hassan Kazmi",
      role: "Senior Digital Marketer",
      quote: "Precision drives performance.",
      linkedin: "https://www.linkedin.com/in/fahad-hassan-a32877237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
     {
      img: "/images/Abbass.jpg",
      name: "Abbas Jadoon",
      role: "Senior Graphic designer",
      quote: "Precision drives performance.",
      linkedin: "https://www.linkedin.com/in/abbas-jadoon-080056122?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/arslan.jpg",
      name: "Arslan Shah",
      role: "Influencer Manager",
      quote: "Creativity fuels connection.",
      linkedin: "https://www.linkedin.com/in/arslan-shah-270158247",
    },
     {
      img: "/images/camera.jpg",
      name: "Faisal Haider Aziz",
      role: "Senior Videographer",
      quote: "Design is the voice of emotion.",
      linkedin: "https://www.linkedin.com/in/faisal-haider-aziz-a45025246/",
    },
      {
      img: "/images/Jawad.jpg",
      name: "Jawad Ali",
      role: "Junior Video Editor",
      quote: "Code is poetry in motion.",
      linkedin: "https://www.linkedin.com/in/jawadali54534?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
     
    {
      img: "/images/AA.jpg",
      name: "Afzaal Ahmad",
      role: "Junior Digital marketer",
      quote: "Code is poetry in motion.",
      linkedin: "https://linkedin.com",
    },
     {
      img: "/images/Khadija.jpg",
      name: "Khadija Kazmi",
      role: "Junior Digital marketer",
      quote: "Precision drives performance.",
      linkedin: "https://www.linkedin.com/in/khadija-kazmi-027995389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/Mehtab.jpg",
      name: "Mehtab Hussain",
      role: "Sales Manager",
      quote: "Precision drives performance.",
      linkedin: "https://www.linkedin.com/in/mehtab-hussain-5a53a738b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "/images/Sh.jpg",
      name: "Shameer Ismail",
      role: "Sales Manager",
      quote: "Design is the voice of emotion.",
      linkedin: "https://www.linkedin.com/in/shahmeer-shameer-khan-469426380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
      {
      img: "/images/HS.jpg",
      name: "Hassan Shah",
      role: "Lead Manager",
      quote: "Creativity fuels connection.",
      linkedin: "https://www.linkedin.com/in/hassan-shah-130074395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
     {
      img: "/images/MS.jpg",
      name: "Syed Muqaddas Shah",
      role: "Business Analyst",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
     {
      img: "/images/Toseer.jpg",
      name: "Syed Toseer Shah",
      role: "Customer Care",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
     {
      img: "/images/ayesha.jpg",
      name: "Ayesha Abdulsalam",
      role: "Senior Digital Marketer",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
{
      img: "/images/mughees.jpg",
      name: "Mughees",
      role: "Legal Accounts Advisor",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
   
    {
      img: "/images/Ab.jpg",
      name: "Abdullah",
      role: "Junior Video Editor",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
   {
      img: "/images/aliraza.jpg",
      name: "Ali Raza",
      role: "Voice Artist",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
    {
      img: "/images/maleeha.webp",
      name: "Maleeha",
      role: "Voice Artist",
      quote: "Precision drives performance.",
      linkedin: "https://linkedin.com",
    },
  
   
   
   
    {
      img: "/images/Zainab.jpg",
      name: "Zanib Zubair",
      role: "Web Developer Intern",
      quote: "Code is poetry in motion.",
      linkedin: "https://linkedin.com",
    },
    
  ];

  return (
    <main className="min-h-screen font-[georgia] md:px-8 px-0 bg-white text-gray-900 scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative flex md:pt-12 md:pb-10 pt-20 pb-7   px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl text-left text-neutral-800"
        >
          <h1 className="text-3xl md:text-5xl  text-neutral-700 md:pl-10 pl-0 text-center md:text-left mb-4">
            Join our mission — build the future with{" "}
            <span>Hypetek Advertising Agency</span>
          </h1>  {/* TEAM SECTION 
          <p className="text-neutral-700 text-md md:text-md max-w-5xl leading-relaxed">
            We don’t just hire people — we build dreamers, creators, and leaders.
            At Hypetek, we believe the best companies are built by passionate
            people who believe in growth — not just for the brand, but for
            themselves too.
          </p>*/}
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section ref={teamRef} id="team" className="overflow-hidden py-10 px-6 md:px-20 bg-white">
        <h2 className="md:text-3xl text-neutral-800 text-2xl font-light mb-6 text-left">
          Meet Our Team — The Heart of Hypetek
        </h2>
        <p className="text-gray-700 text-md max-w-3xl mb-10 leading-relaxed">
          Our team is a family of designers, developers, marketers, and
          innovators — working together with one goal: to empower businesses and
          inspire youth across world.
        </p>
        <p className="text-gray-500 italic mb-10">
          Every face here tells a story of growth, effort, and belief.
        </p>

        {/* ✅ Desktop Infinite Scroll */}
        <motion.div
  className="hidden md:flex gap-6 whitespace-nowrap"
  initial={{ x: 0 }}
  animate={{ x: ["0%", `-${100 * (teamMembers.length / 2)}%`] }}
  transition={{
    repeat: Infinity,
    duration: teamMembers.length * 10, // adjust speed (5 sec per member roughly)
    ease: "linear",
  }}
>
  {[...Array(2)].flatMap((_, outerIdx) =>
    teamMembers.map((member, idx) => (
      <div
        key={`${outerIdx}-${idx}-${member.name}`}
        className="w-64 shrink-0 text-left bg-gray-50 rounded-xl shadow-sm p-4 hover:shadow-md transition"
      >
        {/* Image */}
        <Image
          src={member.img}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover mb-3 grayscale hover:grayscale-0 transition"
        />

        {/* Name & Role */}
        <h3 className="font-semibold text-gray-900">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.role}</p>

        {/* Quote + LinkedIn */}
        <div className="flex items-center justify-between text-xs italic text-gray-600 mt-2">
          <p className="flex-1 text-left line-clamp-2">“{member.quote}”</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-blue-500 ml-2"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    ))
  )}
</motion.div>


        {/* ✅ Mobile Slider */}
        <div className="md:hidden text-neutral-800 relative w-full overflow-hidden">
          <MobileTeamSlider members={teamMembers} />
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="px-6 md:px-20 py-10 bg-neutral-50">
        <h2 className="text-3xl font-light mb-8">Why Work With Us</h2>
        <p className="text-gray-700 text-md mb-10 leading-relaxed max-w-3xl">
          We don’t offer <strong>“just a job.”</strong> We offer a journey of
          learning, opportunity, and purpose. At Hypetek, you’ll experience:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Skill-Based Growth", desc: "Work on real-world projects that build your expertise." },
            { title: "Career Opportunities", desc: "From internships to leadership roles — grow with us." },
            { title: "Continuous Learning", desc: "Training sessions, mentorship, and certifications." },
            { title: "Empowering Culture", desc: "A friendly, humble, and purpose-driven team." },
            { title: "Impactful Work", desc: "Every project changes lives — and economies." },
            { title: "Collaborative Spirit", desc: "We grow faster when we grow together." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg  text-neutral-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* UNIFIED FORM SECTION */}
<section
  ref={applyRef}
  id="apply"
  className="py-10 bg-white mt-4 flex flex-col items-center px-6"
>
  <h2 className="text-3xl font-light text-neutral-800 mb-6 text-center">
    Join the Hype — Apply Now
  </h2>
  <p className="text-gray-700 text-md max-w-2xl text-center mb-8 leading-relaxed">
   Whether you’re applying for an internship or a full-time position, we want to hear from you! Start by selecting your area of interest, then share your personal and professional details, upload your resume, and tell us more about your skills, experiences, and career aspirations. Highlight your achievements, projects, and any challenges you’ve overcome that demonstrate your abilities. Share what motivates you, the impact you hope to make, and the kind of environment in which you thrive. Let us know how your unique perspective and talents can contribute to our mission and goals. This is your chance to showcase not just what you’ve done, but who you are, what excites you, and how you envision shaping the future with us. Together, we can explore opportunities, support your growth, and create meaningful impact.
  </p>

  {/* Button to open Gmail */}
<a
  href="https://mail.google.com/mail/?extsrc=mailto&url=mailto:hypeteknology@gmail.com?subject=APPLICATION FOR WORK/INTERNSHIP&body=I%20want%20to%20contact%20you"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-neutral-800 text-white px-8 py-3 font-medium hover:bg-black transition"
>
  Apply Now
</a>





</section>


      {/* FUTURE SECTION */}
      <section className="mb-24 py-10 px-6 md:px-20 text-left">
        <h2 className="text-3xl mb-4">A Future Built Together</h2>
        <p className="text-gray-700 text-md max-w-3xl mb-16">
          At Hypetek, success isn’t measured by profits — it’s measured by how
          many lives we change. If you’re ready to learn, grow, and make an
          impact — we’re ready to welcome you.
        </p>

        <div className="flex flex-wrap justify-left gap-4">
          <motion.button
            onClick={() => scrollToSection(teamRef)}
            whileHover={{ scale: 1.05 }}
            className="border bg-neutral-800 text-white border-gray-400 hover:bg-white hover:text-neutral-800 font-medium py-3 px-6 transition"
          >
            Meet the Team
          </motion.button>
          <motion.button
            onClick={() => scrollToSection(applyRef)}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 text-gray-700 hover:bg-neutral-800 hover:text-white font-medium py-3 px-6 transition"
          >
            Apply for Work/Internship
          </motion.button>
        </div>
      </section>
    </main>
  );
}
