import React from 'react';
import { Target, Eye, Heart, Users, Github, Facebook, Instagram, Code2 } from "lucide-react";
import pic from "../assets/Images/pic1.jpg";

const About = () => {
  return (
    <div className="bg-[#fbfbfb] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-orange-600 font-[1000] uppercase tracking-[0.4em] text-[10px] mb-4 block">
            The GAMMAX Story
          </span>
          <h1 className="text-4xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-gray-900 mb-8">
            About <span className="text-orange-600">GAMMAX</span>
          </h1>
          <p className="text-gray-500 font-bold leading-relaxed text-lg">
            GAMMAX is Cambodia's premier destination for high-performance gaming gear and professional computer hardware. 
            We bridge the gap between pro-level performance and bold, futuristic design.
          </p>
        </div>

        {/* --- Mission, Vision, Values Grid --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-32">
          {[
            { 
              title: "Our Mission", 
              desc: "To empower Cambodian gamers with top-tier hardware that enhances their performance and experience.",
              icon: <Target className="text-orange-600" size={32} /> 
            },
            { 
              title: "Our Vision", 
              desc: "To become the #1 trusted brand for computer enthusiasts and pro-gamers in the Kingdom of Cambodia.",
              icon: <Eye className="text-orange-600" size={32} /> 
            },
            { 
              title: "Core Values", 
              desc: "Innovation, Quality, and Community. We don't just sell hardware; we build gaming culture.",
              icon: <Heart className="text-orange-600" size={32} /> 
            },
            { 
              title: "Our Community", 
              desc: "A growing ecosystem of thousands of gamers, streamers, and tech enthusiasts across the country.",
              icon: <Users className="text-orange-600" size={32} /> 
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-orange-500/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 bg-orange-50 w-fit p-4 rounded-2xl">{item.icon}</div>
              <h3 className="text-lg font-[1000] uppercase italic tracking-tighter text-gray-900 mb-4">{item.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed font-bold uppercase tracking-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* --- Admin & Developer Section (Sam Channa) --- */}
        <div className="bg-[#111] rounded-[3.5rem] p-10 md:p-24 overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
            {/* Developer Image */}
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] shrink-0 relative">
              <div className="absolute inset-0 bg-orange-600 rounded-[3.5rem] rotate-6"></div>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[3.5rem] -rotate-3 border border-white/10"></div>
              <img 
                src={pic} 
                alt="Sam Channa"
                className="absolute inset-0 w-full h-full object-cover rounded-[3.5rem] border-2 border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-700"
              />
            </div>

            {/* Developer Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full mb-8">
                <Code2 size={18} className="text-orange-500" />
                <span className="text-[11px] font-[1000] uppercase tracking-[0.3em] text-orange-500">Admin & Lead Developer</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-white mb-4">
                Sam <span className="text-orange-500">Channa</span>
              </h2>
              
              <p className="text-gray-400 text-xl leading-relaxed mb-10 font-bold italic opacity-80">
                "As the lead developer of GAMMAX, my goal was to create a digital experience that matches the raw power of the hardware we provide. This platform is built for speed, reliability, and the Cambodian gaming community."
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-5">
                <SocialLink icon={<Facebook size={22} />} href="https://facebook.com/yourprofile" />
                <SocialLink icon={<Github size={22} />} href="https://github.com/yourusername" />
                <SocialLink icon={<Instagram size={22} />} href="https://instagram.com/yourprofile" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Sub-component សម្រាប់ Social Link ដើម្បីឱ្យ Code ខ្លីងាយស្រួលមើល
const SocialLink = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-white/5 text-white rounded-2xl border border-white/10 hover:bg-orange-600 hover:border-orange-600 hover:-translate-y-1.5 transition-all duration-500">
    {icon}
  </a>
);

export default About;