
import React from 'react';
import { Instagram, Share2 } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'GO COFFEE',
          text: '인천 미추홀구 감성 카페 고커피를 확인해보세요!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다.');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-2xl font-serif font-bold tracking-widest text-white mb-8">
          GO <span className="text-[#D4AF37]">COFFEE</span>
        </div>
        
        <div className="flex justify-center space-x-10 mb-10">
          <a 
            href={CAFE_INFO.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <button 
            onClick={handleShare}
            className="text-white/40 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
            aria-label="Share Website"
          >
            <Share2 className="w-7 h-7" />
          </button>
        </div>
        
        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
          &copy; 2024 gocoffee. All Rights Reserved. Designed for Premium Experiences.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
