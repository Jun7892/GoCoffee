
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CAFE_INFO, IMAGES } from '../constants.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => [
    IMAGES.eveningView,  // b
    IMAGES.hero,         // a
    IMAGES.eveningView2  // c
  ], []);

  const taglines = useMemo(() => CAFE_INFO.taglines, []);

  // Typing Animation Logic
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

  // Carousel Navigation Logic
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 6000);
    return () => clearInterval(slideTimer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 md:left-10 z-20 p-2 text-white/30 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all duration-300 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 transform group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-6 md:right-10 z-20 p-2 text-white/30 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all duration-300 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-[0.25em] mb-10 animate-[fadeIn_1.2s_ease-out_forwards] drop-shadow-2xl">
          GO GOFFEE
        </h1>
        
        <div className="h-10 flex items-center justify-center text-xl md:text-2xl text-white/90 font-light tracking-wide">
          <span className="drop-shadow-lg">{displayText}</span>
          <span className="ml-1 w-[2px] h-7 bg-[#D4AF37] animate-pulse"></span>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-[#D4AF37]' : 'w-6 bg-white/20'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37]"></div>
      </div>
    </section>
  );
};

export default Hero;
