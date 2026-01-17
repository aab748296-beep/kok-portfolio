import React from "react";
import { skills, siteConfig } from "../data/mock";
import { Badge } from "./ui/badge";
import { Code2, Zap, Shield, Headphones, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "كود نظيف",
      description: "أكتب كود منظم وقابل للصيانة والتطوير",
      color: "#d9fb06",
    },
    {
      icon: Zap,
      title: "سرعة التنفيذ",
      description: "التزام بمواعيد التسليم المتفق عليها",
      color: "#f8d47a",
    },
    {
      icon: Shield,
      title: "جودة عالية",
      description: "أحرص على أعلى معايير الجودة في كل مشروع",
      color: "#d9fb06",
    },
    {
      icon: Headphones,
      title: "دعم مستمر",
      description: "دعم فني بعد التسليم لضمان رضاك",
      color: "#f8d47a",
    },
  ];

  return (
    <section id="about" className="bg-[#0f0f10] py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d9fb06]/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3f4816]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-[#d9fb06]/10 text-[#d9fb06] border-[#d9fb06]/30 hover:bg-[#d9fb06]/20 mb-6 px-5 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 ml-2" />
              عني
            </Badge>
            
            <h2 className="mb-8">
              <span className="block text-[#d9fb06] font-black text-5xl md:text-6xl leading-tight">
                مطور ويب
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-[#888680] to-[#d9fb06]/60 font-black text-5xl md:text-6xl leading-tight">
                بخبرة وشغف
              </span>
            </h2>
            
            <p className="text-[#888680] text-xl leading-relaxed mb-10">
              أنا مطور ويب متخصص في بناء مواقع وتطبيقات ويب احترافية. أستخدم أحدث
              التقنيات لتحويل أفكارك لواقع رقمي مميز. هدفي إن كل مشروع يكون ناجح
              ويحقق أهداف عميلي.
            </p>

            {/* Skills with 3D effect */}
            <div className="mb-10">
              <h3 className="text-[#d9fb06] font-bold text-lg mb-5">التقنيات</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="group relative bg-[#1a1c1b] border border-[#3f4816] text-[#d9fb06] rounded-xl px-5 py-3 font-medium text-sm transform hover:scale-110 hover:-translate-y-1 hover:border-[#d9fb06]/50 hover:shadow-lg hover:shadow-[#d9fb06]/20 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <span className="absolute inset-0 bg-[#d9fb06]/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid with 3D Cards */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#d9fb06]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-[#1a1c1b] border border-[#3f4816]/50 rounded-2xl p-7 transform hover:-translate-y-2 hover:border-[#d9fb06]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#d9fb06]/10 h-full">
                  {/* Icon with 3D effect */}
                  <div className="relative w-14 h-14 mb-5">
                    <div
                      className="absolute inset-0 rounded-xl blur-lg opacity-50"
                      style={{ backgroundColor: feature.color }}
                    />
                    <div
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon
                        className="w-7 h-7"
                        style={{ color: feature.color }}
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-[#d9fb06] font-bold text-lg mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-[#888680] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
