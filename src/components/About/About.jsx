import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import '../About/About.css'
const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col justify-center min-h-screen py-16 px-[7vw] md:px-[10vw] lg:px-[20vw] font-inter overflow-hidden cursor-default"
      style={{ backgroundColor: "hsl(229, 84%, 5%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.12), transparent 80%)`,
        }}
      />

      {/* Grid  */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="font-space text-slate-500 uppercase tracking-[0.4em] text-xs md:text-sm mb-4">
          Welcome to my portfolio
        </span>

        <h1 className="font-space text-3xl md:text-4xl font-light text-slate-300 mb-2 leading-tight">
          Hola, I am
        </h1>

        <h2 className="font-space text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase">
          Dilip Ragolu
        </h2>

        <div className="h-[40px] flex items-center">
          <h3 className="font-space text-xl sm:text-2xl md:text-3xl font-medium text-purple-400 tracking-wide">
            <Typewriter
              words={["Fullstack Developer", "Problem Solver", "Enthusiastic Learner", "Coder"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
        </div>

        <p className="font-inter max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mt-8 mb-12 font-light">
          I am a <span className="text-white font-normal">Full-stack Developer</span> focused on 
          building scalable web applications. I specialize in the <span className="text-white font-normal">MERN stack</span>.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1KrucF5aXUf2iaU1zo-1CdSZWZTXk3pP0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-purple-500/30 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] z-40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 -z-10" />
          <FaDownload className="group-hover:animate-bounce text-purple-400 group-hover:text-white transition-colors" />
          <span className="font-space tracking-widest text-sm">DOWNLOAD RESUME</span>
        </a>
      </div>
    </section>
  );
};

export default About;