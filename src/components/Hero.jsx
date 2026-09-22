import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from './PureVegBadge';
import exteriorImg from '../assets/exterior.jpg';
import { MapPin, UtensilsCrossed, Navigation, Phone, Clock, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-start bg-stone-900 overflow-hidden">
      {/* Hero Background Image: Clearly visible and bright with clear Anandhaas signage */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          src={exteriorImg}
          alt="Hotel Anandhaas Chengilikuppam Minnur Pure Vegetarian Restaurant Building along NH Highway"
          className="w-full h-full object-cover object-[58%_38%] sm:object-[55%_40%] lg:object-[58%_42%] brightness-[1.02] contrast-[1.05]"
          loading="eager"
        />
        
        {/* Directional Scrim: Dark on the left under text, crystal clear in center & right where 'Anandhaas' signage shines */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140A07]/95 via-[#140A07]/75 sm:via-[#140A07]/50 sm:via-40% md:via-45% to-transparent pointer-events-none"></div>
        {/* Subtle Top Navbar and Bottom Section blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-20% to-[#140A07]/60 pointer-events-none"></div>
      </div>

      {/* Content Container - Strictly Left-Aligned to keep right-side building & signage in full view */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 flex justify-start items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl lg:max-w-[580px] xl:max-w-2xl text-left flex flex-col items-start justify-start p-2 sm:p-0"
        >
          {/* Pure Veg & Highway Badges */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-start gap-2.5 mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/85 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
              <PureVegSymbol size="sm" />
              <span>{t.hero.pureVegBadge}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3D2318]/90 border border-[#DFBE7A]/50 text-[#DFBE7A] text-xs font-medium tracking-wide shadow-lg backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>{t.hero.locationBadge}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-stone-600 text-stone-200 text-xs sm:text-sm font-medium backdrop-blur-md hidden sm:inline-flex">
              <Clock className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>{restaurantInfo.timings.displayTime}</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.18] mb-5 drop-shadow-md text-left"
          >
            {t.hero.mainHeading}
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-stone-100 font-normal leading-relaxed mb-8 drop-shadow-md text-left max-w-xl"
          >
            {t.hero.subtext}
          </motion.p>

          {/* Action Buttons - Left Aligned */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-wrap items-center justify-start gap-3.5 w-full sm:w-auto"
          >
            {/* Primary CTA: Explore Menu */}
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#DFBE7A] via-[#C89D4B] to-[#A47B2E] text-[#1A0E0A] font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>{t.hero.exploreMenu}</span>
            </Link>

            {/* Secondary CTA: Get Directions */}
            <a
              href={restaurantInfo.contact.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base border border-emerald-500/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.hero.getDirections}</span>
            </a>

            {/* Small CTA: Call Now */}
            <a
              href={restaurantInfo.contact.telLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-black/60 hover:bg-black/80 text-stone-100 border border-stone-400/50 font-medium text-sm sm:text-base backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#DFBE7A]" />
              <span>{t.hero.callNow}</span>
            </a>
          </motion.div>

          {/* Subtle Bottom Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-10 pt-5 border-t border-white/20 flex flex-wrap items-center justify-start gap-5 text-xs text-stone-200"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-300 font-bold drop-shadow">🌿 100% Pure Veg</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#DFBE7A] font-medium drop-shadow">⭐ 3.5/5 (257+ Google Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-200 drop-shadow">🚗 Highway Parking Available</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
