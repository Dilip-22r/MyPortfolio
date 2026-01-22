import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeadset, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import "./Contact.css";

// import codechefImg from '../../assets/coding_logo/codechef.jpeg'
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // Spotlight state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7cw40g9",
        "template_vxi1kf3", 
        form.current,
        "QtMv806C1iBiPkNbt" 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-[125px] pb-24 px-[5vw] lg:px-[10vw] font-sans overflow-hidden"
      style={{ backgroundColor: "hsl(229, 84%, 5%)" }}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.15), transparent 80%)`,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="flex justify-center items-center gap-3">
          <FaHeadset className="text-purple-500 text-3xl animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            GET IN TOUCH
          </h1>
        </div>
        <div className="w-[120px] h-1.5 bg-gradient-to-r from-[#8245ec] to-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center justify-center">
        
        {/* Coding Profiles Section */}
    <div className="w-full lg:w-1/3 flex flex-col gap-6">
  <h2 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">
    My Coding Profiles
  </h2>

  {[
    {
      icon: <SiCodeforces className="text-white" />,
      label: "Codeforces",
      score: "1089",
      link: "https://codeforces.com/profile/dilip_22r",
    },
    {
      icon: <SiCodechef className="text-white" />,
      label: "CodeChef",
      score: "1421",
      link: "https://www.codechef.com/users/dilip_22r",
    },
    {
      icon: <SiLeetcode className="text-[#FFA116]" />,
      label: "LeetCode",
      score: "1500",
      link: "https://leetcode.com/u/Dilip_22/",
    },
  ].map((profile, index) => (
    <a
      key={index}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group cursor-pointer">
        <div className="flex items-center gap-4">
          <span className="text-3xl group-hover:scale-110 transition-transform">
            {profile.icon}
          </span>
          <span className="text-gray-300 font-medium">
            {profile.label}
          </span>
        </div>
        <span className="text-white font-bold text-lg">
          {profile.score}
        </span>
      </div>
    </a>
  ))}
</div>


        {/* Contact Form Card */}
        <div className="relative w-full max-w-lg bg-[#0d081f]/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10">
          {isSent ? (
            <div className="text-center py-10 flex flex-col items-center gap-6">
              <div className="bg-green-500/10 p-6 rounded-full border border-green-500/20">
                <FaCheckCircle className="text-green-500 text-7xl" />
              </div>
              <h2 className="text-white text-3xl font-bold">Message Sent!</h2>
              <button
                onClick={() => setIsSent(false)}
                className="mt-4 px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-[#8245ec] transition"
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-white text-2xl font-bold flex items-center gap-3">
                  Let's Connect <FaPaperPlane className="text-purple-500 text-xl" />
                </h2>
                <p className="text-gray-400 mt-2 text-sm">Fill out the form below to reach out.</p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="text-purple-400 text-[10px] font-black uppercase tracking-widest ml-1">Name</label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full mt-1.5 p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-purple-400 text-[10px] font-black uppercase tracking-widest ml-1">Email</label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full mt-1.5 p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-purple-400 text-[10px] font-black uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="How can I help you?"
                    className="w-full mt-1.5 p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-[#8245ec] py-4 text-white font-bold uppercase rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;