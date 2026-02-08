
import React, { useState } from 'react';
import { MENU_ITEMS, IMAGES } from '../constants.tsx';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'dessert' | 'special'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { label: '전체', value: 'all' },
    { label: '커피', value: 'coffee' },
    { label: '논커피 & 티', value: 'special' },
    { label: '디저트', value: 'dessert' },
  ];

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">Our Selection</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-6 py-2 text-xs md:text-sm uppercase tracking-widest rounded-full border transition-all duration-300 ${
                  activeCategory === cat.value 
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' 
                  : 'text-white/40 border-white/10 hover:border-white/30 hover:text-white/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Menu List Column */}
          <div className="space-y-12">
            <div className="grid gap-x-8 gap-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group border-b border-white/5 pb-4">
                  <div className="flex justify-between items-end mb-1">
                    <h4 className="text-lg font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[#D4AF37] font-serif font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-[13px] text-white/30 font-light italic leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Visual Highlight - Updated to avoid duplication with hero */}
            <div className="rounded-xl overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src={IMAGES.foodShot} 
                alt="Representative Food" 
                className="w-full h-72 object-cover insta-filter transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Menu Board / Photo Column */}
          <div className="sticky top-28 space-y-8 hidden lg:block">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={IMAGES.menuBoard} 
                alt="Menu Board" 
                className="w-full h-auto insta-filter transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-44 shadow-lg border border-white/10">
                <img src={IMAGES.menuGroup} alt="Menu Group" className="w-full h-full object-cover insta-filter hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden h-44 shadow-lg border border-white/10">
                <img src={IMAGES.displayCase} alt="Display" className="w-full h-full object-cover insta-filter hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Photogenic Quote Section */}
        <div className="mt-32 relative h-[350px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img 
            src="https://gocoffeeimg.netlify.app/indoor_nightview.jpg" 
            alt="Instagram Spot" 
            className="w-full h-full object-cover object-[center_20%] insta-filter opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-t from-black via-transparent to-black/20">
            <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-6">Create Your Story</h3>
            <p className="text-white/80 max-w-xl mx-auto font-light leading-relaxed text-lg">
              한 잔의 커피에 담긴 고커피만의 특별한 감성.<br/>
              당신의 일상에 스며드는 따뜻한 순간을 기록해보세요.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="text-[#D4AF37] font-serif">#GOCOFFEE</span>
              <span className="text-[#D4AF37] font-serif">#인천카페</span>
              <span className="text-[#D4AF37] font-serif">#감성카페</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
