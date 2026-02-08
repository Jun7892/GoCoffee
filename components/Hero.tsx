
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CAFE_INFO, IMAGES } from '../constants.tsx';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const taglines = useMemo(() => CAFE_INFO.taglines, []);

  const handleTyping = useCallback(() => {
    const currentTagline = taglines[taglineIndex];
    
    if (isDeleting) {
      setDisplayText(prev => prev.substring(0, prev.length - 1));
      setTypingSpeed(30); 
    } else {
      setDisplayText(prev => currentTagline.substring(0, prev.length + 1));
      setTypingSpeed(50); 
    }

    if (!isDeleting && displayText === currentTagline) {
      setTimeout(() => setIsDeleting(true), 2000); 
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }
  }, [displayText, isDeleting, taglineIndex, taglines]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-[0.25em] mb-10 animate-[fadeIn_1.2s_ease-out_forwards]">
          GO GOFFEE
        </h1>
        
        <div className="h-10 flex items-center justify-center text-xl md:text-2xl text-white/90 font-light tracking-wide">
          <span className="drop-shadow-lg">{displayText}</span>
          <span className="ml-1 w-[2px] h-7 bg-[#D4AF37] animate-pulse"></span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37] opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
