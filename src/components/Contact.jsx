import React from "react";
import { siteConfig } from "../data/mock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Send, MessageCircle, Clock, CheckCircle, Sparkles } from "lucide-react";

const Contact = () => {
  const benefits = [
    { icon: MessageCircle, text: "رد سريع خلال ساعات" },
    { icon: Clock, text: "متاح 24/7" },
    { icon: CheckCircle, text: "استشارة مجانية" },
  ];

  return (
    <section id="contact" className="bg-[#1a1c1b] py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#d9fb06]/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3f4816]/30 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d9fb06]/50 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#d9fb06]/30 rounded-full animate-float animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#d9fb06]/40 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card with 3D effect */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#d9fb06]/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-[#302f2c] via-[#252422] to-[#1a1c1b] border border-[#3f4816] rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#d9fb06]/20 rounded-tl-[2.5rem]" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#d9fb06]/20 rounded-br-[2.5rem]" />
              
              {/* Content */}
              <Badge className="bg-[#d9fb06]/10 text-[#d9fb06] border-[#d9fb06]/30 hover:bg-[#d9fb06]/20 mb-8 px-5 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                تواصل
              </Badge>
              
              <h2 className="mb-6">
                <span className="block text-[#d9fb06] font-black text-5xl md:text-6xl lg:text-7xl leading-tight">
                  خلينا نبدأ
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#888680] to-[#d9fb06]/60 font-black text-5xl md:text-6xl lg:text-7xl leading-tight">
                  مشروعك
                </span>
              </h2>
              
              <p className="text-[#888680] text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto">
                تواصل معي على تيليجرام وهنتكلم عن مشروعك بالتفصيل.
                الاستشارة مجانية!
              </p>

              {/* Benefits with 3D cards */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#1a1c1b]/50 backdrop-blur-sm border border-[#3f4816]/50 rounded-2xl px-6 py-4 transform hover:scale-105 hover:-translate-y-1 hover:border-[#d9fb06]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#d9fb06]/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-[#d9fb06]" />
                    </div>
                    <span className="text-[#d9fb06]/80 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button with 3D effect */}
              <div className="relative inline-block">
                {/* Button glow */}
                <div className="absolute inset-0 bg-[#d9fb06] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                
                <Button
                  asChild
                  className="relative bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06] rounded-full px-14 py-8 font-bold text-xl transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d9fb06]/50 transition-all duration-300"
                >
                  <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      <Send className="w-6 h-6 ml-3 animate-pulse" />
                      تواصل على تيليجرام
                    </span>
                  </a>
                </Button>
              </div>

              {/* Telegram Username */}
              <p className="text-[#888680] mt-8 text-lg font-mono">
                @KOK0KK
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
