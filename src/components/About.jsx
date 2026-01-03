import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PerspectiveCamera } from "@react-three/drei";
import SectionWrapper from "./SectionWrapper";
import { aboutContent } from "../constants";
import Carousel from "./Carousel";
import { Shield, Zap, Heart, RefreshCcw, CheckCircle2 } from "lucide-react";

const iconMap = [
  <Heart key="heart" />, <Zap key="zap" />, <Shield key="shield" />, <RefreshCcw key="refresh" />, <CheckCircle2 key="check" />
];

function TruckModel() {
  const { scene } = useGLTF("/models/11.glb");
  return <primitive object={scene} position={[10.5, -2.2, 0]} rotation={[0, -1.57, 0]} scale={7.5} />;
}

const About = () => {
  const carouselItems = aboutContent.values.map((val, i) => ({
    id: i, title: val.title, description: val.desc, icon: iconMap[i],
  }));

  return (
    <div className="bg-[#EBE1D1]">
      <SectionWrapper id="about" className="pb-2">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <p className="text-[#E9762B] font-bold uppercase tracking-widest text-xs mb-3 block">Our Identity</p>
            <h2 className="text-4xl font-black mb-6 text-[#0D4715] leading-tight">About CargoPanda</h2>
            <p className="border-l-4 border-[#41644A] pl-6 italic text-[#41644A] text-lg leading-relaxed">
              {aboutContent.brandStory}
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-white/40 p-8 rounded-[2rem] border border-[#41644A]/10 shadow-sm relative overflow-hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E9762B] mb-2 block">Purpose</span>
              <p className="text-[#0D4715] font-bold text-xl leading-snug">"{aboutContent.purpose}"</p>
            </div>
            <div className="bg-[#41644A] p-8 rounded-[2rem] text-white shadow-lg shadow-[#41644A]/20">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E9762B]/80 mb-2 block">Vision</span>
              <p className="font-bold text-xl leading-snug">"{aboutContent.vision}"</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="relative pt-0 pb-4 -mt-20 bg-[#41644A]/5 overflow-hidden">
        {/* Updated Heading and Added Relatable Paragraph */}
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h3 className="text-3xl md:text-6xl font-black text-[#0D4715] mb-4">Our Core Values</h3>
          <p className="max-w-2xl mx-auto text-[#41644A] text-lg font-medium leading-relaxed italic opacity-90">
            Delivering trust, speed, and reliability.
          </p>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto h-[650px] flex justify-center items-center px-4">
          <div className="absolute inset-0 z-0">
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
              <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={18} />
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.8} contactShadow={true} adjustCamera={false}>
                  <TruckModel />
                </Stage>
              </Suspense>
            </Canvas>
          </div>
          <div className="absolute top-[10%] left-[22.5%] w-[82%] h-[60%] z-10 flex items-center justify-center">
            <div style={{ height: "400px", width: "100%", display: "flex", justifyContent: "center" }}>
              <Carousel items={carouselItems} baseWidth={800} autoplay={true} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;