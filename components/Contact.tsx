
import React from 'react';
import { CAFE_INFO, IMAGES } from '../constants';
import { MapPin, Phone, Mail, Clock, Calendar, Clapperboard, Map, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">Connect With Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map & Location */}
          <div className="space-y-12">
            <div className="h-[400px] rounded-lg overflow-hidden border border-white/10 relative bg-[#0a0a0a] flex flex-col items-center justify-center">
              {/* Subtle Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"></div>
              
              {/* Simplified Content Layout (No inner floating box) */}
              <div className="relative z-10 w-full max-w-sm px-6 text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-[#D4AF37]/5 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#D4AF37]/10">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-white text-2xl font-serif tracking-wide">Location</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {CAFE_INFO.location}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={CAFE_INFO.naverMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/[0.03] border border-[#03C75A]/20 text-[#03C75A]/80 rounded-lg font-medium text-sm hover:bg-[#03C75A]/5 transition-all active:scale-[0.98]"
                  >
                    <Navigation className="w-4 h-4" />
                    네이버 지도에서 보기
                  </a>
                  <a 
                    href={CAFE_INFO.googleMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/[0.03] border border-white/5 text-white/50 rounded-lg font-medium text-sm hover:bg-white/5 transition-all active:scale-[0.98]"
                  >
                    <Map className="w-4 h-4 text-[#4285F4]/70" />
                    Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
              <div className="flex items-start space-x-5 min-w-0">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-white font-medium mb-1 tracking-wider uppercase text-xs opacity-40">Full Address</h4>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    {CAFE_INFO.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 shrink-0">
                <Clock className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1 tracking-wider uppercase text-xs opacity-40">Open Hours</h4>
                  <p className="text-white/70 text-sm font-light leading-relaxed whitespace-nowrap">{CAFE_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details & Rental */}
          <div className="bg-white/[0.02] p-10 rounded-lg border border-white/5 space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Contact & Inquiry</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-5 group">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-white/30 tracking-widest mb-0.5">Call Us</span>
                    <p className="text-white font-medium group-hover:text-[#D4AF37] transition-colors">{CAFE_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-5 group">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-white/30 tracking-widest mb-0.5">Email Us</span>
                    <p className="text-white font-medium group-hover:text-[#D4AF37] transition-colors">{CAFE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Rental Section with Evening Mood Gallery */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-2xl font-serif text-[#D4AF37]">Rental & Ads</h3>
                </div>
                <div className="flex items-center space-x-2 text-[10px] text-[#D4AF37]/60 tracking-widest uppercase border border-[#D4AF37]/20 px-2 py-1 rounded">
                  <Clapperboard className="w-3 h-3" />
                  <span>Cinematic Mood</span>
                </div>
              </div>

              {/* Mood Gallery Integration */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg overflow-hidden h-32 border border-white/5 group relative">
                  <img 
                    src={IMAGES.eveningView} 
                    alt="Evening Mood 1" 
                    className="w-full h-full object-cover insta-filter transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="rounded-lg overflow-hidden h-32 border border-white/5 group relative">
                  <img 
                    src={IMAGES.eveningView2} 
                    alt="Evening Mood 2" 
                    className="w-full h-full object-cover insta-filter transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                {CAFE_INFO.rentalInfo}
              </p>
              
              <button className="w-full py-4 bg-transparent border border-[#D4AF37]/30 text-[#D4AF37]/80 uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-500 font-bold">
                Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
