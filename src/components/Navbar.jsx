import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Section IDs matching your project structure
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    //{ label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  // Spring animations for smooth width transitions
  const pillWidth = useSpring(180, { stiffness: 220, damping: 25, mass: 1 });
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 });

  // --- 1. Automatic Scroll Detection (Intersection Observer) ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when section is centered in viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const found = navItems.find((item) => item.id === sectionId);
          if (found) setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // --- 2. Hover Expansion Logic ---
  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      pillWidth.set(680); // Width when open
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        pillWidth.set(180); // Width when collapsed (slightly wider for Logo + Text)
      }, 600);
    }
    return () => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); };
  }, [hovering, pillWidth]);

  // --- 3. Click-to-Scroll Logic ---
  const handleSectionClick = (sectionId) => {
    setIsTransitioning(true);
    setActiveSection(sectionId);
    
    // Immediate visual feedback
    setHovering(false);
    setExpanded(false);
    pillWidth.set(180);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setTimeout(() => { setIsTransitioning(false); }, 400);
  };

  const activeItem = navItems.find((item) => item.id === activeSection);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex justify-center w-full">
      <motion.nav
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative rounded-full cursor-pointer flex items-center"
        style={{
          width: pillWidth,
          height: '58px',
          background: `linear-gradient(135deg, #fcfcfd 0%, #dee0e3 100%)`,
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12), 
            inset 0 2px 1px rgba(255, 255, 255, 0.7),
            inset 0 -2px 4px rgba(0, 0, 0, 0.05)
          `,
          x: pillShift,
          overflow: 'hidden',
          transition: 'box-shadow 0.3s ease-out',
        }}
      >
        {/* Premium 3D Lighting Accents */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/90 rounded-t-full pointer-events-none" />
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.25)] opacity-50" />

        <div ref={containerRef} className="relative z-10 h-full flex items-center justify-center px-6 w-full">
          
          {/* COLLAPSED STATE: Logo + Current Section Name */}
          {!expanded && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                {/* Logo from public/images/logo.png */}
                <img 
                  src="/images/2.png" 
                  alt="CargoPanda" 
                  className="w-8 h-8 object-contain drop-shadow-sm" 
                />
                
                {/* Vertical Divider */}
                <div className="h-4 w-[1.5px] bg-slate-400/40" />

                <span className="text-[13px] font-black text-slate-900 uppercase tracking-[0.15em] whitespace-nowrap">
                  {activeItem?.label || 'Home'}
                </span>
              </motion.div>
            </AnimatePresence>
          )}

          {/* EXPANDED STATE: Full Navigation Menu */}
          {expanded && (
            <div className="flex items-center justify-between w-full px-2">
              {/* Optional small logo lead-in */}
              <img src="/images/2.png" alt="CP" className="w-12 h-12 object-contain mr-4 opacity-70" />
              
              <div className="flex items-center gap-2 w-full justify-evenly">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => handleSectionClick(item.id)}
                    className={`text-[12px] px-4 py-2 rounded-full transition-all uppercase tracking-widest font-bold ${
                      activeSection === item.id 
                        ? 'text-primary scale-110 shadow-sm bg-white/40' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;