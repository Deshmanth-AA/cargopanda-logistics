import React from "react";

export function FlippingCard({
  className = "",
  frontContent,
  backContent,
  height = 450,
  width = "100%",
}) {
  return (
    <div
      className={`group/flipping-card [perspective:2000px] ${className}`}
      style={{
        "--height": `${height}px`,
        "--width": typeof width === "number" ? `${width}px` : width,
      }}
    >
      <div className="relative rounded-[2.5rem] transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] h-[var(--height)] w-[var(--width)]">
        
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden shadow-2xl">
          {/* This wrapper provides the 3D Depth */}
          <div className="[transform:translateZ(80px)] h-full w-full flex items-center justify-center">
            {frontContent}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white border border-slate-100 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
          {/* translateZ(100px) makes the text "pop" out toward the user */}
          <div className="[transform:translateZ(100px)] h-full w-full flex items-center justify-center">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}