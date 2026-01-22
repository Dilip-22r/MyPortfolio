import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);
    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-[5vw] md:px-[7vw] lg:px-[13vw] font-inter ${
        isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold font-space cursor-pointer text-white">
          <span className="text-[#8245ec] font-light">&lt;</span>
          <span>Dilip</span>
          <span className="text-[#8245ec]">/</span>
          <span>Ragolu</span>
          <span className="text-[#8245ec] font-light">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`transition-colors duration-300 hover:text-[#8245ec]  ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="https://github.com/Dilip-22r" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/dilip-ragolu-626a1831b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl text-[#8245ec] focus:outline-none relative z-[110]"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* 1. Backdrop overlay to close menu when clicking outside */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 2. Fixed Dropdown Card */}
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#0d081f] border border-white/10 shadow-2xl rounded-3xl z-[100] md:hidden overflow-hidden transition-all duration-300">
            <ul className="flex flex-col items-center space-y-6 py-10 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#8245ec]" : "hover:text-white"
                  }`}
                >
                  <button onClick={() => handleMenuClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              
              <div className="flex space-x-8 pt-6 border-t border-white/10 w-full justify-center">
                <a href="https://github.com/Dilip-22r" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub size={26} />
                </a>
                <a href="https://www.linkedin.com/in/dilip-ragolu-626a1831b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={26} />
                </a>
              </div>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;