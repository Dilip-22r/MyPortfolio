import React, { useState } from 'react'; 
import { SkillsInfo } from "../../constants.js";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // NEW: State to hide circle by default
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      // NEW: Visibility toggles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-[125px] pb-24 px-[8vw] md:px-[5vw] lg:px-[13vw] font-sans overflow-hidden"
      style={{ backgroundColor: "#030014" }} 
    >
      {/* 3. The Spotlight Glow (reduced size) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          // NEW: Opacity control and reduced 400px size
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.15), transparent 80%)`,
        }}
      />

      {/* 4. Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
         &#123; Tools & <span className="text-[#8245ec]">Skills</span> &#125;
        </h2>
        <div className="w-[100px] h-1.5 bg-gradient-to-r from-[#8245ec] to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto">
          A collection of technologies and tools I use to bring digital ideas to life.
        </p>
      </div>

      {/* Skills Container */}
      <div className="relative z-10 flex flex-wrap gap-10 justify-center">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="w-full lg:w-[46%]">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full transition-transform duration-300"
            >
              <div className="h-full bg-[#0d081f]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:border-[#8245ec]/50 transition-all duration-500 group">
                
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-[#8245ec] to-blue-500 rounded-full inline-block"></span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 hover:bg-[#8245ec]/10 hover:border-[#8245ec]/40 hover:-translate-y-1 transition-all duration-300 group/item"
                    >
                      <img 
                        src={skill.logo} 
                        className="w-6 h-6 object-contain group-hover/item:scale-110 transition-transform duration-300" 
                        alt={skill.name} 
                      />
                      <span className="text-sm font-medium text-slate-300 group-hover/item:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;