import React, { useState } from "react";
import { services, siteConfig } from "../data/mock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Check, Send, Zap, Star } from "lucide-react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="bg-[#1a1c1b] py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d9fb06]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3f4816]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="bg-[#d9fb06]/10 text-[#d9fb06] border-[#d9fb06]/30 hover:bg-[#d9fb06]/20 mb-6 px-5 py-2 text-sm font-semibold">
            <Zap className="w-4 h-4 ml-2" />
            الخدمات
          </Badge>
          <h2 className="text-[#d9fb06] font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            خدماتي
          </h2>
          <p className="text-[#888680] text-xl max-w-2xl mx-auto leading-relaxed">
            أقدم مجموعة متكاملة من خدمات تطوير الويب بأسعار تنافسية وجودة عالية
          </p>
        </div>

        {/* Services Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute inset-0 bg-[#d9fb06]/20 rounded-3xl blur-xl transition-opacity duration-500 ${
                  hoveredCard === service.id ? "opacity-100" : "opacity-0"
                }`}
              />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#302f2c] to-[#252422] border border-[#3f4816]/50 rounded-3xl p-7 transform hover:-translate-y-3 hover:border-[#d9fb06]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d9fb06]/10 h-full flex flex-col">
                {/* Popular Badge */}
                {service.id === 3 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d9fb06] text-[#1a1c1b] rounded-full px-4 py-1 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    الأكثر طلباً
                  </div>
                )}

                {/* Price & Delivery Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="relative">
                    <span className="text-[#d9fb06] font-black text-4xl">
                      {service.currency}{service.price}
                    </span>
                    <span className="absolute -top-1 -right-2 text-[#d9fb06]/30 font-black text-4xl blur-sm">
                      {service.currency}{service.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1a1c1b]/50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-[#d9fb06]" />
                    <span className="text-[#888680] text-sm font-medium">{service.delivery}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#d9fb06] font-bold text-xl mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#888680] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm group/item"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="w-6 h-6 bg-[#d9fb06]/10 rounded-lg flex items-center justify-center group-hover/item:bg-[#d9fb06]/20 group-hover/item:scale-110 transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-[#d9fb06]" />
                      </span>
                      <span className="text-[#888680] group-hover/item:text-[#d9fb06]/80 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-transparent border-2 border-[#d9fb06]/50 text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] hover:border-[#d9fb06] rounded-2xl font-bold py-6 transition-all duration-300 group/btn overflow-hidden relative"
                >
                  <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 bg-[#d9fb06] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center">
                      <Send className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      اطلب الآن
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service CTA */}
        <div className="mt-20">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#d9fb06]/10 rounded-3xl blur-2xl group-hover:bg-[#d9fb06]/20 transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-[#302f2c] to-[#1a1c1b] border border-[#3f4816] rounded-3xl p-10 md:p-14 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#d9fb06]/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#3f4816]/30 rounded-full blur-2xl" />
              
              <div className="relative">
                <h3 className="text-[#d9fb06] font-black text-3xl md:text-4xl mb-4">
                  محتاج خدمة مخصصة؟
                </h3>
                <p className="text-[#888680] text-lg mb-8 max-w-xl mx-auto">
                  تواصل معي وهنتكلم عن مشروعك بالتفصيل وهعملك عرض سعر مخصص
                </p>
                <Button
                  asChild
                  className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06] rounded-full px-12 py-7 font-bold text-lg transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d9fb06]/40 transition-all duration-300"
                >
                  <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5 ml-2" />
                    تواصل معي
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
