import React from "react";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard"; //
import { FlippingCard } from "./FlippingCard";
import { services } from "../constants";
import { CheckCircle2, Truck, Factory, ShieldCheck, Zap, BarChart3, Leaf } from "lucide-react";

const ServiceContent = ({ service }) => (
  <div className="flex flex-col h-full p-12 text-center items-center justify-center">
    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl mb-8 ${service.id === 'b2c' ? 'bg-[#E9762B]' : 'bg-[#41644A]'}`}>
      {service.id === "b2c" ? <Truck size={40} /> : <Factory size={40} />}
    </div>
    <h3 className="text-3xl font-black mb-4 text-[#0D4715] tracking-tighter uppercase leading-none">{service.title}</h3>
    <p className="text-[#41644A] mb-8 text-base leading-relaxed font-semibold">{service.desc}</p>
    <ul className="space-y-4">
      {service.points.map((p, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm font-black text-[#0D4715] uppercase tracking-widest">
          <CheckCircle2 className="text-[#41644A] w-5 h-5 shrink-0" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-[#EBE1D1]">
      <div className="text-center mb-20">
        <span className="text-[#41644A] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Moving Forward!!!</span>
        <h2 className="text-5xl lg:text-7xl font-black text-[#0D4715] mb-6 tracking-tighter uppercase">Our Services</h2>
        <p className="text-[#41644A] text-xl max-w-2xl mx-auto leading-relaxed font-bold">
          Predictable performance and seamless customer experience through tech-first logistics solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        {services.map((service, i) => {
          if (i < 2) {
            return (
              <FlippingCard
                key={i} height={550}
                frontContent={
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden group">
                    <img src={`/images/${service.id}.png`} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D4715]/90 via-transparent to-transparent flex flex-col justify-end p-12">
                       <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{service.title}</h3>
                       <p className="text-[#E9762B] font-black uppercase tracking-[0.2em] text-[10px] mt-4 opacity-80">Hover to Discover</p>
                    </div>
                  </div>
                }
                backContent={<ServiceContent service={service} />}
              />
            );
          }
          return (
            <SpotlightCard key={i} className="rounded-[2.5rem] h-full bg-white/50 border border-[#41644A]/10">
              <ServiceContent service={service} />
            </SpotlightCard>
          );
        })}
      </div>

      <div className="bg-[#0D4715] rounded-[3.5rem] p-10 lg:p-20 text-white overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#41644A,_transparent)]"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter uppercase">Why Choose CargoPanda?</h3>
            <p className="text-[#EBE1D1]/70 text-lg mb-12 font-medium leading-relaxed">
              Built as a tech-first logistics partner, CargoPanda combines software, data, and on-ground operations to deliver performance you can measure and trust.
            </p>
            <div className="grid gap-8">
              {[ 
                { icon: Zap, t: "AI-powered tracking & dispatch", d: "for intelligent routing and proactive exception handling." }, 
                { icon: BarChart3, t: "Scalable from startups to enterprises", d: "with modular services and flexible pricing." }, 
                { icon: ShieldCheck, t: "Dedicated support teams", d: "for operations, technology, and customer success." }, 
                { icon: Leaf, t: "Eco-friendly logistics", d: "through optimized routes and responsible fleet practices." } 
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#41644A]/40 flex items-center justify-center text-[#E9762B] shrink-0"><item.icon size={28}/></div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.t}</h4>
                    <p className="text-slate-400 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact, centered SpotlightCard for Dashboard */}
          <div className="flex justify-center">
            <SpotlightCard className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl w-full max-w-[480px]">
              <div className="p-8 min-h-[260px]">
                <div className="flex items-center gap-5 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#E9762B] animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Live Control Tower</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-black text-white mb-2">Single dashboard for your logistics.</h4>
                    <p className="text-slate-400 leading-snug font-semibold text-base">Track shipments, monitor SLAs, and access analytics on one unified platform.</p>
                  </div>
                  <div className="bg-[#41644A]/20 border border-white/10 p-5 rounded-lg">
                    <div>
                      <div className="text-lg md:text-xl font-black text-white mb-1 tracking-tight">Actionable insights.</div>
                      <div className="text-base font-medium text-slate-400 leading-snug">Identify delays, optimize routes, and improve performance with data-driven recommendations.</div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;