import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ text, textClass = "text-5xl md:text-7xl" }) => (
  <div className="flex items-center py-0 flex-shrink-0" style={{ width: "max-content" }}>
    <span className={`${textClass} font-black uppercase`} style={{ WebkitTextStroke: "1px #41644A" }}>
      {text}
    </span>
    <span className="w-3 h-3 rounded-full bg-[#E9762B] ring-1 ring-[#E9762B]/25 ml-4 shadow-sm" />
  </div>
);

const InfiniteMarquee = ({
  items = ["Reliability", "Speed", "Tech-Driven", "Safety", "Pan-India", "Innovation"],
  duration = 30,
  className = "",
  textClass = "text-5xl md:text-7xl",
  gap = "gap-8",
}) => {
  const singleRef = useRef(null);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (singleRef.current) {
        // round up to avoid subpixel rounding artifacts when looping
        const w = Math.ceil(singleRef.current.getBoundingClientRect().width);
        setSingleWidth(w);
      }
    };

    measure();

    let ro;
    if (typeof ResizeObserver !== "undefined" && singleRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(singleRef.current);
    } else {
      window.addEventListener("resize", measure);
    }

    return () => {
      if (ro && ro.disconnect) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, [items, gap, textClass]);

  // animate by exact pixel width when available; fall back to percent while measuring
  const animateConfig = singleWidth ? { x: [0, -singleWidth] } : { x: ["0%", "-50%"] };
  const style = { willChange: "transform", width: singleWidth ? `${singleWidth * 2}px` : undefined };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex w-full">
        <motion.div animate={animateConfig} transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }} className={`flex`} style={style}>
          {/* First copy (measured) - internal gap ensures consistent spacing at the join */}
          <div ref={singleRef} className={`flex items-center ${gap} flex-nowrap`}>
            {items.map((item, idx) => (
              <MarqueeItem key={`a-${idx}`} text={item} textClass={textClass} />
            ))}
          </div>

          {/* Second copy */}
          <div className={`flex items-center ${gap} flex-nowrap`}>
            {items.map((item, idx) => (
              <MarqueeItem key={`b-${idx}`} text={item} textClass={textClass} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;