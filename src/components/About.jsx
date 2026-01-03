import React from "react";
import SectionWrapper from "./SectionWrapper";
import { aboutContent } from "../constants";

// Icon gradient backgrounds for glassmorphism cards
const iconGradients = [
  "bg-gradient-to-br from-[#E9762B] to-[#FF6B35]", // Orange
  "bg-gradient-to-br from-[#0D4715] to-[#059669]", // Green
  "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]", // Blue to Purple
  "bg-gradient-to-br from-[#EC4899] to-[#F59E0B]", // Pink to Orange
  "bg-gradient-to-br from-[#10B981] to-[#06B6D4]", // Emerald to Cyan
];

const About = () => {
  return (
    <div className="bg-[#EBE1D1]">
      <SectionWrapper id="about" className="pb-2">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="max-w-xl px-4 md:px-0">
            <p className="text-[#E9762B] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 block">Our Identity</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-[#0D4715] leading-tight">About CargoPanda</h2>
            <p className="border-l-4 border-[#41644A] pl-4 md:pl-6 italic text-[#41644A] text-sm md:text-base lg:text-lg leading-relaxed">
              {aboutContent.brandStory}
            </p>
          </div>
          <div className="grid gap-4 px-4 md:px-0">
            <div className="bg-white/40 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#41644A]/10 shadow-sm relative overflow-hidden">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#E9762B] mb-2 block">Purpose</span>
              <p className="text-[#0D4715] font-bold text-base md:text-lg lg:text-xl leading-snug">"{aboutContent.purpose}"</p>
            </div>
            <div className="bg-[#41644A] p-6 md:p-8 rounded-2xl md:rounded-[2rem] text-white shadow-lg shadow-[#41644A]/20">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#E9762B]/80 mb-2 block">Vision</span>
              <p className="font-bold text-base md:text-lg lg:text-xl leading-snug">"{aboutContent.vision}"</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values Section with Modern Glassmorphism */}
      <div className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#41644A]/20 via-[#EBE1D1] to-[#E9762B]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0D4715] mb-3 md:mb-4">
              Our Core Values
            </h3>
            <p className="max-w-2xl mx-auto text-[#41644A] text-sm md:text-base lg:text-lg font-medium leading-relaxed italic opacity-90">
              Delivering trust, speed, and reliability.
            </p>
          </div>

          {/* Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {aboutContent.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/30 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 
                    border border-white/40 shadow-lg hover:shadow-2xl
                    transform transition-all duration-500 hover:scale-105 hover:bg-white/40
                    hover:-translate-y-2 cursor-pointer overflow-hidden`}
                  data-testid={`core-value-card-${index}`}
                >
                  {/* Animated Background Overlay */}
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 
                    group-hover:from-white/10 group-hover:to-white/10 transition-all duration-500"></div>
                  
                  {/* Decorative blur circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E9762B]/10 rounded-full blur-3xl 
                    group-hover:bg-[#E9762B]/20 transition-all duration-700"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#41644A]/10 rounded-full blur-3xl 
                    group-hover:bg-[#41644A]/20 transition-all duration-700"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon with gradient background */}
                    <div className={`mb-4 md:mb-6 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 
                      rounded-full ${iconGradients[index]} shadow-lg
                      group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 shrink-0`}>
                      <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="font-black text-lg sm:text-xl md:text-2xl text-[#0D4715] mb-3 md:mb-4 
                      leading-tight uppercase tracking-tight group-hover:tracking-wide transition-all duration-300">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-[#41644A] leading-relaxed font-medium 
                      group-hover:text-[#0D4715] transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>

                  {/* Glass shine effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl md:rounded-t-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;