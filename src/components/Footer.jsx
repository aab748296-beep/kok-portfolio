import React from "react";
import { siteConfig } from "../data/mock";
import { Send, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "الرئيسية", href: "#home" },
    { label: "الخدمات", href: "#services" },
    { label: "عني", href: "#about" },
    { label: "تواصل", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0f10] border-t border-[#3f4816]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d9fb06]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-10 items-center">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="inline-block group">
              <span className="text-[#d9fb06] font-black text-3xl tracking-tight group-hover:text-[#d9fb06]/80 transition-colors">
                {siteConfig.name}
              </span>
            </a>
            <p className="text-[#888680] text-sm mt-3 leading-relaxed">
              {siteConfig.title}
              <br />
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#888680] hover:text-[#d9fb06] transition-all duration-300 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d9fb06] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Social / Contact */}
          <div className="flex justify-end items-center gap-4">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#d9fb06]/10 hover:bg-[#d9fb06] text-[#d9fb06] hover:text-[#1a1c1b] px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span className="font-semibold">Telegram</span>
            </a>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#302f2c] hover:bg-[#d9fb06] text-[#d9fb06] hover:text-[#1a1c1b] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-[#3f4816] hover:border-[#d9fb06]"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#3f4816]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888680] text-sm">
            © {currentYear} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-[#888680] text-sm flex items-center gap-2">
            صنع بـ
            <Heart className="w-4 h-4 text-[#d9fb06] fill-[#d9fb06] animate-pulse" />
            وكود
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
