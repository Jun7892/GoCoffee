
import React from 'react';
import { CAFE_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">Connect With Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map & Location */}
          <div className="space-y-12">
            <div className="h-[400px] bg-white/5 rounded-lg overflow-hidden border border-white/10 relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto opacity-50" />
                  <p className="text-white/40 italic">Google Maps Integration Placeholder</p>
                  <p className="text-white/60 text-sm">{CAFE_INFO.location}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>

            {/* Increased gap and used flex-row to ensure one-line layout on medium screens up */}
            <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
              <div className="flex items-start space-x-5 min-w-0">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-white font-medium mb-1 tracking-wider">Location</h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed md:whitespace-nowrap">
                    {CAFE_INFO.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5 shrink-0">
                <Clock className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1 tracking-wider">Hours</h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed whitespace-nowrap">{CAFE_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details & Rental */}
          <div className="bg-white/5 p-10 rounded-lg border border-white/10 space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Contact & Inquiry</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#D4AF37]/30">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-white/40 tracking-widest mb-0.5">Call Us</span>
                    <p className="text-white font-medium">{CAFE_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#D4AF37]/30">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-white/40 tracking-widest mb-0.5">Email Us</span>
                    <p className="text-white font-medium">{CAFE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            <div>
              <div className="flex items-center space-x-4 mb-5">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-2xl font-serif text-[#D4AF37]">Rental & Ads</h3>
              </div>
              {/* md:whitespace-nowrap and slightly adjusted padding/gap for cleaner look */}
              <p className="text-white/60 font-light leading-relaxed mb-8 md:whitespace-nowrap">
                {CAFE_INFO.rentalInfo}
              </p>
              <button className="w-full py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
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
