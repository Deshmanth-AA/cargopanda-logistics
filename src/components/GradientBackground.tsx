"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        // Dark Navy base for a professional logistics feel
        colorBack="hsl(222, 47%, 11%)" 
        softness={0.8}
        intensity={0.4}
        noise={0.04} 
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.1}
        rotation={35} 
        speed={0.4}   // Smooth, slow movement for a premium feel
        colors={[
          "hsl(199, 89%, 48%)", // Cargo Blue
          "hsl(217, 91%, 60%)", // Tech Blue
          "hsl(180, 100%, 45%)"  // Cyan Accent
        ]}
      />
      {/* Optional: Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  )
}