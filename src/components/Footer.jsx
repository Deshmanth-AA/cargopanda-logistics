"use client";
import React from "react";
import { Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { contactConfig, companyDetails } from "../constants";

export default function Footer() {
  const brandName = "CARGOPANDA LOGISTICS";
  const navLinks = [ { label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Our Services", href: "#services" }, { label: "Contact", href: "#contact" } ];
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${contactConfig.servicesEmail}`, label: "Email" },
  ];

  return (
    <section className="relative w-full mt-0 overflow-hidden bg-[#EBE1D1]">
      {/* Background set to #0D4715 with mt-0 */}
      <footer className="border-t border-[#41644A]/20 bg-[#0D4715] mt-0 relative min-h-[38rem] flex flex-col">
        
        {/* Main Content: Changed py-16 to pt-4 pb-0 to remove gaps */}
        <div className="max-w-7xl flex flex-col items-center mx-auto relative p-20 pt-4 pb-0 z-30">
          <div className="flex flex-col mb-12 w-full text-center items-center">
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">{brandName}</h2>
            <p className="text-slate-300 font-bold max-w-lg leading-relaxed px-4">
              Reliable, tech-driven logistics solutions for a connected world. 
              <span className="text-[#E9762B] block mt-1 uppercase tracking-[0.3em] text-[10px] font-black">Moving Forward!!!</span>
            </p>
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mt-6 pt-4 border-t border-white/10">
               <span>CIN: {companyDetails.cin}</span>
               <span>Est: {companyDetails.incDate}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-300">
            {navLinks.map((link, index) => (
              <a key={index} className="hover:text-[#E9762B] duration-300 flex items-center gap-1 group transition-colors" href={link.href}>
                {link.label}
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* 3D Large Text */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-32 md:bottom-28 font-black tracking-tighter pointer-events-none select-none text-center z-0"
          style={{
            fontSize: 'clamp(3rem, 16vw, 12rem)',
            width: '100%',
            whiteSpace: 'nowrap',
            color: '#EBE1D1',
            opacity: 0.2
          }}>
          {brandName}
        </div>

        {/* Floating Logo Card */}
        <div className="absolute hover:border-[#E9762B] duration-500 drop-shadow-2xl bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-white/10 left-1/2 border-2 border-white/20 flex items-center justify-center p-4 -translate-x-1/2 z-30 transition-all hover:-translate-y-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#41644A] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group">
            <img src="/images/logo.jpeg" alt="Logo" className="w-full h-full object-cover p-3 transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>

        {/* Bottom Copyright: Removed pb-8 to eliminate ending space */}
        <div className="mt-auto w-full text-center pb-2 z-40">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">©{new Date().getFullYear()} {companyDetails.legalName}. All rights reserved.</p>
        </div>

        <div className="absolute bottom-36 md:bottom-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full left-1/2 -translate-x-1/2 z-10"></div>
        <div className="bg-gradient-to-t from-[#0D4715] via-[#0D4715]/80 to-transparent absolute bottom-0 w-full h-48 pointer-events-none z-10"></div>
      </footer>
    </section>
  );
}