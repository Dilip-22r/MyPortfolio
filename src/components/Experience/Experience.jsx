import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative py-24 px-[8vw] font-sans overflow-hidden"
      style={{ backgroundColor: "hsl(229, 84%, 5%)" }} 
    >
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          &#123; Experience <span className="text-cyan-400">&</span> Achievements &#125;
        </h2>
        <div className="w-60 h-[5px] bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-2 mb-6 rounded-lg"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
          A journey of technical growth, leadership, and hands-on learning.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="absolute left-[100px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-start group">
              {/* Year Column */}
              <div className="w-[80px] pt-1 text-right pr-6 shrink-0">
                <span className="text-lg font-black text-slate-500 group-hover:text-white transition-all duration-500 tabular-nums">
                  {exp.date}
                </span>
              </div>
              <div className="relative z-10 flex items-center justify-center pt-2">
                <div className="absolute left-0 w-10 h-[1px] bg-white/20 group-hover:bg-cyan-400 transition-colors" />
                <div className="absolute w-8 h-8 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-md transition-all duration-500" />
                <div className="w-4 h-4 rounded-full bg-[hsl(229,84%,5%)] border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300 relative z-20" />
              </div>

              {/*Card */}
              <div className="ml-10 flex-1">
                <div className="relative p-[1px] rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-500" />
                  <div className="relative bg-[#070b1d] p-8 rounded-2xl h-full transition-all duration-500 group-hover:bg-[#090e25]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                           <span className="text-2xl group-hover:scale-110 inline-block transition-transform">🏆</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-slate-400 font-medium text-sm tracking-wide">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md bg-cyan-500/5 text-cyan-400/70 border border-cyan-500/10 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;