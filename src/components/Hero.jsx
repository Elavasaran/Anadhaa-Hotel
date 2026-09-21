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
      {/* Hero Background Image: Clearly visible and bright */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={exteriorImg}
          alt="Hotel Anandhaas Chengilikuppam Pure Vegetarian Restaurant Building along NH Highway"
          className="w-full h-full object-cover object-center brightness-100 contrast-[1.03]"
          loading="eager"
        />
        
        {/* Soft Left-to-Right Scrim Gradient for Text Legibility (Keeps the right side building and sky crystal clear) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E0A]/90 via-[#1A0E0A]/55 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0A]/80 via-transparent to-black/20"></div>
      </div>

      {/* Content Container - Strictly Left-Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex justify-start items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl text-left flex flex-col items-start justify-start backdrop-blur-[2px] bg-black/20 sm:bg-transparent p-4 sm:p-0 rounded-3xl"
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

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-stone-600 text-stone-200 text-xs font-normal backdrop-blur-md hidden sm:inline-flex">
              <Clock className="w-3 h-3 text-[#DFBE7A]" />
              <span>7:30 AM – 11:30 PM</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-5 drop-shadow-lg text-left"
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
