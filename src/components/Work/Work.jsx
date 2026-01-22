import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants";

const Work = () => {
  // State for mouse position to create the spotlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove} 
      className="relative py-24 pb-32 px-[8vw] md:px-[5vw] lg:px-[13vw] font-sans overflow-hidden"
      style={{ backgroundColor: "hsl(229, 84%, 5%)" }}
    >
      {/*  cursor*/}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.15), transparent 80%)`,
        }}
      />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Section Title */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
          &#123; My <span className="text-[#8245ec]">Projects</span> &#125;
        </h2>
        <div className="w-[100px] h-1.5 bg-gradient-to-r from-[#8245ec] to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl font-medium">
          A collection of my academic and personal projects showcasing my technical growth and hands-on learning.
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative z-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((pro) => (
          <div
            key={pro.id}
            className="group border border-white/10 bg-[#0d081f]/80 backdrop-blur-xl rounded-[2rem] overflow-hidden cursor-default transition-all duration-500 hover:border-[#8245ec]/50 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(130,69,236,0.3)]"
          >
            <div className="p-5">
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  src={pro.image}
                  alt={pro.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d081f] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-2 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8245ec] transition-colors duration-300">
                {pro.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {pro.description}
              </p>

              <div className="flex flex-wrap mb-8 gap-2">
                {pro.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#8245ec]/10 text-[10px] font-bold tracking-widest text-[#8245ec] border border-[#8245ec]/20 rounded-lg px-3 py-1.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={pro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#8245ec]/30 rounded-xl py-3 text-white text-xs font-black tracking-widest hover:bg-[#8245ec] hover:border-[#8245ec] transition-all duration-300 active:scale-95"
                >
                  <FaGithub className="text-base" />
                  <span>SOURCE</span>
                </a>

                <a
                  href={pro.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#8245ec]/30 rounded-xl py-3 text-white text-xs font-black tracking-widest hover:bg-[#8245ec] hover:border-[#8245ec] transition-all duration-300 active:scale-95"
                >
                  <span>LIVE DEMO</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;