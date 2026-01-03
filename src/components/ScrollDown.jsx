import React from "react";
import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-80 hover:opacity-100 transition-opacity">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        Scroll
      </span>
      <div className="w-[26px] h-[44px] rounded-full border-2 border-gray-400 flex justify-center p-1.5 bg-white/30 backdrop-blur-sm">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      </div>
    </div>
  );
};

export default ScrollDown;