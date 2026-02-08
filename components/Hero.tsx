
import React, { useState, useEffect, useCallback } from 'react';
import { CAFE_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const taglines = CAFE_INFO.taglines;

  const handleTyping = useCallback(() => {
    const currentTagline = taglines[taglineIndex];
    
    if (isDeleting) {
      setDisplayText(prev => prev.substring(0, prev.length - 1));
      setTypingSpeed(30); // 지우는 속도 아주 빠르게
    } else {
      setDisplayText(prev => currentTagline.substring(0, prev.length + 1));
      setTypingSpeed(50); // 치는 속도 아주 빠르게
    }

    if (!isDeleting && displayText === currentTagline) {
      // 문구가 다 써진 후 머무는 시간 3초
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }
  }, [displayText, isDeleting, taglineIndex, taglines]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, handleTyping, typingSpeed]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-[0.2em] mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          GO GOFFEE
        </h1>
        
        <div className="h-8 flex items-center justify-center text-xl md:text-2xl text-white/90 font-light">
          <span>{displayText}</span>
          <span className="ml-1 w-[2px] h-6 bg-white animate-pulse"></span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
