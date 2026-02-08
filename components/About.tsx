
import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              A Moment of <span className="text-[#D4AF37]">Refinement</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37]"></div>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              고커피(GO COFFEE) 인천점은 단순히 커피를 마시는 공간을 넘어, 
              당신의 일상에 특별한 감성을 더해드리는 프리미엄 휴식 공간입니다. 
              인천 미추홀구의 중심에서 가장 세련된 분위기를 경험해 보세요.
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              따뜻한 조명 아래 펼쳐지는 감각적인 인테리어와 정성껏 내린 커피 한 잔. 
              고커피의 모든 공간은 당신의 인스타그램 피드를 채울 완벽한 포토존입니다. 
              혼자만의 여유부터 소중한 사람과의 대화까지, 고커피가 함께합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-2xl h-64">
                <img src={IMAGES.aboutMain} alt="Cafe Interior" className="w-full h-full object-cover insta-filter" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl h-48">
                <img src={IMAGES.interiorDetail} alt="Wall Decor" className="w-full h-full object-cover insta-filter" />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-lg overflow-hidden shadow-2xl h-96">
                <img src={IMAGES.aboutSub} alt="Cafe Seating" className="w-full h-full object-cover insta-filter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
