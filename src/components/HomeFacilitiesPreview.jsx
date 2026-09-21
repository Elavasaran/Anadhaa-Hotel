import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PureVegSymbol } from './PureVegBadge';
import mealsImg from '../assets/meals.png';
import roomMainImg from '../assets/room_main.webp';
import exteriorImg from '../assets/exterior.jpg';
import evCharging1 from '../assets/ev_charging_1.jpg';
import { 
  Building2, 
  BedDouble, 
  Car, 
  Zap, 
  Navigation, 
  ArrowRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const HomeFacilitiesPreview = () => {
  const { language, t } = useLanguage();

  const previewCards = [
    {
      id: "dining",
      title: language === 'ta' ? "தூய சைவ உணவகம்" : "Pure Vegetarian Dining",
      desc: language === 'ta' ? "பாரம்பரிய தென்னிந்திய வாழை இலை சாப்பாடு, தோசை மற்றும் காபி." : "Authentic South Indian vegetarian food, crispy dosas, and filter coffee.",
      image: mealsImg,
      icon: <PureVegSymbol size="sm" />,
      tag: "Pure Veg Kitchen",
      tagTa: "தூய சைவம்"
    },
    {
      id: "rooms",
      title: language === 'ta' ? "வசதியான தங்கும் அறைகள்" : "Comfortable Rooms",
      desc: language === 'ta' ? "ஜிஆர் ரெசிடென்சியில் அமைதியான மற்றும் சுத்தமான ஏசி அறைகள்." : "Clean and pleasant stay at GR Residency for travellers and families.",
      image: roomMainImg,
      icon: <BedDouble className="w-4 h-4 text-[#DFBE7A]" />,
      tag: "GR Residency Stay",
      tagTa: "தங்கும் வசதி"
    },
    {
      id: "parking",
      title: language === 'ta' ? "பார்க்கிங் வசதி" : "Parking Facility",
      desc: language === 'ta' ? "கார்கள் மற்றும் சுற்றுலா வாகனங்களுக்கு வசதியான இடம்." : "Convenient and safe on-premise parking for personal cars and vehicles.",
      image: exteriorImg,
      icon: <Car className="w-4 h-4 text-emerald-400" />,
      tag: "Spacious Front Lot",
      tagTa: "பார்க்கிங்"
    },
    {
      id: "ev",
      title: language === 'ta' ? "மின்னூர்தி (EV) சார்ஜிங்" : "EV Charging Facility",
      desc: language === 'ta' ? "Jio-bp Pulse அதிவேக சார்ஜிங் நிலையம்." : "Jio-bp Pulse fast EV charging station available on-site.",
      image: evCharging1,
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      tag: "Jio-bp Pulse",
      tagTa: "Jio-bp பல்ஸ்"
    },
    {
      id: "location",
      title: language === 'ta' ? "நெடுஞ்சாலை அருகில்" : "Near NH Main Road",
      desc: language === 'ta' ? "வாணியம்பாடி தேசிய நெடுஞ்சாலையில் எளிதாக வந்தடையும் இடம்." : "Prime direct highway access at Chengilikuppam, Vaniyambadi.",
      image: exteriorImg,
      icon: <Navigation className="w-4 h-4 text-blue-400" />,
      tag: "NH Highway Access",
      tagTa: "நெடுஞ்சாலை"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE6] border-y border-[#C89D4B]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2A1710] text-[#DFBE7A] text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>{t.homeFacilities.badge}</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.homeFacilities.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.homeFacilities.subheading}
          </p>
        </div>

        {/* 5 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {previewCards.map((card, idx) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-left"
            >
              {/* Card Image */}
              <div className="relative h-40 overflow-hidden bg-stone-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#2A1710]/85 text-[#DFBE7A] text-[10px] font-bold border border-[#DFBE7A]/40 backdrop-blur-xs flex items-center gap-1">
                  {card.icon}
                  <span>{language === 'ta' ? card.tagTa : card.tag}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2A1710] group-hover:text-[#8C5E1E] transition-colors mb-1.5 line-clamp-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>Available on-site</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Facilities CTA */}
        <div className="text-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2A1710] hover:bg-[#3D2318] text-[#DFBE7A] hover:text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
          >
            <span>{t.homeFacilities.exploreAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
