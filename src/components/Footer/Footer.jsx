import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Spotlight state to match other sections
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-white py-12 px-[8vw] md:px-[5vw] lg:px-[13vw] font-sans overflow-hidden border-t border-white/5"
      style={{ backgroundColor: "hsl(229, 84%, 5%)" }}
    >
      {/* Interactive Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.1), transparent 80%)`,
        }}
      />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="relative z-40 container mx-auto text-center">
        {/* Name / Logo */}
        <div className="mb-6">
          <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Dilip<span className="text-[#8245ec]">.</span>Ragolu
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8245ec] to-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8 mb-10">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" }, // Changed id to "work" to match your Projects section
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-[#8245ec] text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          {[
            { icon: <FaGithub />, link: "https://github.com/Dilip-22r" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dilip-ragolu-626a1831b/" },
            { icon: <FaTwitter />, link: "https://twitter.com/your-username" },
            { icon: <FaInstagram />, link: "https://instagram.com/your-username" },
            { icon: <FaEnvelope />, link: "mailto:your-email@example.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 uppercase tracking-[0.3em] font-medium">
          © {new Date().getFullYear()} Dilip Ragolu. Designed & Built with 💜
        </p>
      </div>
    </footer>
  );
};

export default Footer;