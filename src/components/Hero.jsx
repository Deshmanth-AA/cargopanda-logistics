"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroContent } from "../constants";
import AnimatedButton from "./AnimatedButton";
import InfiniteMarquee from "./InfiniteMarquee";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(13, 71, 21, ${0.05 + i * 0.01})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-[#0D4715]" viewBox="0 0 696 316" fill="none">
        <title>Logistics Flow Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const Hero = () => {
  const companyName = "CargoPanda Logistics";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#EBE1D1] px-6 lg:px-20">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        {/* Left Side: Branding & Headline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative text-center lg:text-left"
          >
            {/* BRAND HIGHLIGHT: Subtle glow behind company name */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute -top-10 -left-10 w-64 h-32 bg-[#E9762B]/10 blur-[60px] rounded-full pointer-events-none"
            />

            {/* STYLISH COMPANY NAME ANIMATION WITH LOGO ICON */}
            <div className="flex flex-wrap overflow-hidden mb-6 relative z-10 justify-center lg:justify-start items-center">
              
              {/* LOGO ICON ADDED HERE */}
              <motion.img 
                //src="/images/2.png" // Ensure the red icon file is saved as 2.png in your public folder
                //alt="CargoPanda Logo"
                //initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                //animate={{ opacity: 1, scale: 1, rotate: 0 }}
                //transition={{ duration: 0.8, ease: "easeOut" }}
                //lassName="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-4 object-contain"
              />

              {companyName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "110%", rotateX: -90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.6,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`text-3xl md:text-5xl font-black uppercase tracking-tighter 
                    ${char === " " ? "mr-4" : ""} 
                    ${index < 10 ? "text-[#0D4715]" : "text-[#E9762B]"}`}
                >
                  {char}
                </motion.span>
              ))}
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-1.5 w-full bg-gradient-to-r from-[#0D4715] via-[#E9762B] to-transparent mt-1 rounded-full opacity-60"
              />
            </div>

            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#0D4715]/5 text-[#0D4715] font-black tracking-widest uppercase text-[9px] mb-8 border border-[#0D4715]/10 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9762B] animate-pulse" />
              {heroContent.tagline}
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-[#0D4715] leading-[1.1] tracking-tighter uppercase max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Your trusted partner in <span className="text-[#E9762B] italic">Logistics Solutions.</span>
            </h1>
          </motion.div>
        </div>

        {/* Right Side: Description & CTA */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-start gap-8"
          >
            <p className="text-lg md:text-xl lg:text-xl text-[#274d2a] leading-relaxed font-semibold border-l-4 border-[#E9762B] pl-6 max-w-lg">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-10">
              <AnimatedButton
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.hash = "#services";
                }}
                variant="dark"
              >
                Explore Services
              </AnimatedButton>

              <AnimatedButton
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.hash = "#contact";
                }}
                variant="light"
              >
                Contact Us
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* INFINITE MARQUEE COMPONENT */}
      <div className="absolute bottom-10 left-0 w-full opacity-20 pointer-events-none border-y border-[#0D4715]/10 py-4 bg-[#0D4715]/5 backdrop-blur-sm">
        <div className="flex whitespace-nowrap overflow-hidden text-[#0D4715] font-black text-6xl md:text-8xl uppercase tracking-tighter">
          <InfiniteMarquee
            items={["Efficiency", "Reliability", "Global Reach", "Speed"]}
            duration={30}
            className=""
            textClass="text-6xl md:text-8xl font-black text-[#0D4715] uppercase tracking-tighter"
            gap="gap-12"
          />
        </div>
      </div>

      {/* Right Side Decorative Line */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block">
        <div className="h-64 w-[1px] bg-gradient-to-b from-transparent via-[#E9762B]/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;