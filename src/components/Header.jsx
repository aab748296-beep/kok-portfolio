import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/mock";
import { Menu, X, Send } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "الخدمات", href: "#services" },
    { label: "عني", href: "#about" },
    { label: "تواصل", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1c1b]/90 backdrop-blur-xl border-b border-[#d9fb06]/20 shadow-lg shadow-[#d9fb06]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo with 3D effect */}
          <a
            href="#home"
            className="text-[#d9fb06] font-black text-3xl tracking-tight relative group"
          >
            <span className="relative z-10 group-hover:text-[#1a1c1b] transition-colors duration-300">
              {siteConfig.name}
            </span>
            <span className="absolute inset-0 bg-[#d9fb06] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right rounded-lg" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#d9fb06]/80 hover:text-[#d9fb06] transition-all duration-300 font-medium text-sm px-4 py-2 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d9fb06] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button with 3D effect */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06] rounded-full px-6 font-bold relative overflow-hidden group transform hover:scale-105 hover:shadow-lg hover:shadow-[#d9fb06]/30 transition-all duration-300"
            >
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center">
                  <Send className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  تواصل معي
                </span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#d9fb06] p-2 hover:bg-[#d9fb06]/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-[#3f4816]/50">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`text-[#d9fb06] hover:text-[#1a1c1b] hover:bg-[#d9fb06] transition-all duration-300 font-medium text-lg py-3 px-4 rounded-lg ${
                    isMenuOpen ? "animate-slide-in" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
