import React from "react";

/**
 * AnimatedButton
 * Props:
 * - children: button label
 * - href: if provided, renders an <a> otherwise a <button>
 * - onClick: click handler
 * - variant: 'dark' | 'light' (controls base background/text)
 * - className: additional classes
 */
export default function AnimatedButton({ children, href, onClick, variant = "dark", className = "", ...props }) {
  const base = "fancy-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-widest transition-all active:scale-95";
  const themeClasses =
    variant === "light"
      ? "bg-white/40 border border-[#0D4715]/20 hover:bg-[#0D4715] hover:text-white"
      : "bg-[#0D4715] text-white border border-transparent hover:border-[#0D4715]";

  const styleVars = {
    "--animation-color": "#41644A",
    "--text-stroke-color": variant === "light" ? "rgba(13,71,21,0.9)" : "rgba(255,255,255,0.95)",
    "--base-color": variant === "light" ? "#33523F" : "#FFFFFF",
  };

  const content = (
    <>
      <span className="actual-text">{children}</span>
      <span className="hover-text" aria-hidden="true">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        role="button"
        data-variant={variant}
        className={`${base} ${themeClasses} ${className}`}
        style={styleVars}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      data-variant={variant}
      className={`${base} ${themeClasses} ${className}`}
      style={styleVars}
      {...props}
    >
      {content}
    </button>
  );
}
