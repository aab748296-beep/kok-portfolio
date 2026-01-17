import React, { useEffect, useRef } from "react";
import { siteConfig, stats } from "../data/mock";
import { Button } from "./ui/button";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      const cards = containerRef.current.querySelectorAll(".parallax-element");
      cards.forEach((card, index) => {
        const speed = (index + 1) * 0.5;
        card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen bg-[#1a1c1b] flex items-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="parallax-element absolute top-20 right-20 w-96 h-96 bg-[#d9fb06]/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="parallax-element absolute bottom-20 left-20 w-80 h-80 bg-[#3f4816]/40 rounded-full blur-[80px] animate-pulse-slow animation-delay-2000" />
        <div className="parallax-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d9fb06]/5 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xek0wIDBoMXYxSDB6TTYwIDBoLTF2MWgxek0wIDYwaDEtMXYtMUgwek02MCA2MGgtMXYtMWgxeiIgZmlsbD0iIzNmNDgxNiIgZmlsbC1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge with glow */}
            <div className="inline-flex items-center gap-2 bg-[#d9fb06]/10 border border-[#d9fb06]/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-[#d9fb06] animate-pulse" />
              <span className="text-[#d9fb06] text-sm font-semibold">متاح للعمل الآن</span>
              <span className="w-2 h-2 bg-[#d9fb06] rounded-full animate-ping" />
            </div>

            {/* Main Heading with 3D text effect */}
            <h1 className="mb-8 animate-fade-in-up animation-delay-200">
              <span className="block text-[#d9fb06] font-black text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight">
                أحول
              </span>
              <span className="block text-[#d9fb06] font-black text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight mt-2">
                أفكارك
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#888680] to-[#d9fb06]/50 font-black text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight mt-2">
                لواقع
              </span>
            </h1>

            <p className="text-[#888680] text-xl md:text-2xl leading-relaxed mb-10 max-w-lg animate-fade-in-up animation-delay-400">
              {siteConfig.description}
            </p>

            {/* CTA Buttons with 3D hover */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up animation-delay-600">
              <Button
                asChild
                className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06] rounded-full px-10 py-7 font-bold text-lg relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d9fb06]/40 transition-all duration-300"
              >
                <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center">
                    <Send className="w-5 h-5 ml-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                    ابدأ مشروعك
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#d9fb06]/50 text-[#d9fb06] hover:border-[#d9fb06] hover:bg-[#d9fb06]/10 rounded-full px-10 py-7 font-bold text-lg bg-transparent backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <a href="#services">
                  شوف الخدمات
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Stats with 3D cards */}
            <div className="flex gap-6 md:gap-10 animate-fade-in-up animation-delay-800">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-[#302f2c]/50 backdrop-blur-sm border border-[#3f4816]/50 rounded-2xl p-4 md:p-5 transform hover:scale-105 hover:-translate-y-2 hover:border-[#d9fb06]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d9fb06]/10"
                >
                  <div className="text-[#d9fb06] font-black text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[#888680] text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-400">
            <div className="relative perspective-1000">
              {/* Main 3D Card */}
              <div className="w-80 h-80 md:w-[420px] md:h-[420px] relative transform-style-3d animate-float">
                {/* Back layer */}
                <div className="absolute inset-4 bg-[#3f4816]/30 rounded-3xl transform translate-z-[-40px] blur-sm" />
                
                {/* Middle layer */}
                <div className="absolute inset-2 bg-[#302f2c]/80 rounded-3xl border border-[#3f4816]/50 transform translate-z-[-20px]" />
                
                {/* Front layer - Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#302f2c] to-[#1a1c1b] rounded-3xl border border-[#3f4816] overflow-hidden group hover:border-[#d9fb06]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d9fb06]/20">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d9fb06]/5 to-transparent" />
                  
                  {/* Animated lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9fb06]/50 to-transparent animate-scan" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8">
                    {/* Code symbol with glow */}
                    <div className="relative mb-4">
                      <div className="text-[#d9fb06] font-black text-8xl md:text-9xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {"</>"}    
                      </div>
                      <div className="absolute inset-0 text-[#d9fb06]/30 font-black text-8xl md:text-9xl blur-xl" >
                        {"</>"}  
                      </div>
                    </div>
                    <div className="text-[#888680] text-lg font-medium">Web Developer</div>
                    
                    {/* Decorative dots */}
                    <div className="absolute bottom-6 flex gap-2">
                      <span className="w-2 h-2 bg-[#d9fb06] rounded-full animate-pulse" />
                      <span className="w-2 h-2 bg-[#d9fb06]/50 rounded-full animate-pulse animation-delay-200" />
                      <span className="w-2 h-2 bg-[#d9fb06]/30 rounded-full animate-pulse animation-delay-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 bg-[#d9fb06] text-[#1a1c1b] rounded-2xl px-5 py-3 font-bold text-sm shadow-lg shadow-[#d9fb06]/30 transform hover:scale-110 hover:rotate-6 transition-all duration-300 animate-float animation-delay-1000">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#302f2c] text-[#d9fb06] rounded-2xl px-5 py-3 font-bold text-sm border-2 border-[#d9fb06] shadow-lg transform hover:scale-110 hover:-rotate-6 transition-all duration-300 animate-float animation-delay-2000">
                Node.js
              </div>
              <div className="absolute top-1/2 -left-8 bg-[#3f4816] text-[#d9fb06] rounded-2xl px-4 py-2 font-bold text-xs border border-[#d9fb06]/50 transform hover:scale-110 transition-all duration-300 animate-float animation-delay-3000">
                MongoDB
              </div>
              <div className="absolute top-1/4 -right-10 bg-[#1a1c1b] text-[#d9fb06] rounded-2xl px-4 py-2 font-bold text-xs border border-[#d9fb06]/30 transform hover:scale-110 transition-all duration-300 animate-float animation-delay-500">
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#888680] text-xs">اسحب للأسفل</span>
        <div className="w-6 h-10 border-2 border-[#3f4816] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#d9fb06] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
