
import React, { useState } from 'react';
import { MENU_ITEMS, IMAGES } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'dessert' | 'special'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Coffee', value: 'coffee' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Special', value: 'special' },
  ];

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Menu</h2>
          <div className="flex justify-center space-x-6 md:space-x-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`text-xs md:text-sm uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                  activeCategory === cat.value 
                  ? 'text-[#D4AF37] border-[#D4AF37]' 
                  : 'text-white/30 border-transparent hover:text-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Menu List Column */}
          <div className="space-y-10">
            <div className="grid gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group border-b border-white/5 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[#D4AF37] font-serif font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-white/40 font-light italic">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Visual Highlight */}
            <div className="rounded-lg overflow-hidden border border-white/10 group">
              <img 
                src={IMAGES.foodShot} 
                alt="Representative Food" 
                className="w-full h-64 object-cover insta-filter transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Menu Board / Photo Column */}
          <div className="sticky top-28 space-y-8">
            <div className="relative group rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.menuBoard} 
                alt="Menu Board" 
                className="w-full h-auto insta-filter transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.menuGroup} alt="Menu Group" className="rounded-lg h-40 w-full object-cover insta-filter" />
              <img src={IMAGES.displayCase} alt="Display" className="rounded-lg h-40 w-full object-cover insta-filter" />
            </div>
          </div>
        </div>

        {/* Photogenic Quote Section */}
        <div className="mt-32 relative h-[300px] overflow-hidden rounded-xl">
          <img 
            src={IMAGES.hero} 
            alt="Instagram Spot" 
            className="w-full h-full object-cover insta-filter opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-4">Share Your #gocoffee Moment</h3>
            <p className="text-white/80 max-w-lg mx-auto font-light">
              인천 미추홀구의 감성이 머무는 곳, 고커피.<br/>
              오늘의 가장 아름다운 순간을 해시태그와 함께 기록하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
