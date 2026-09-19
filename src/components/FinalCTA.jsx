import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from './PureVegBadge';
import { UtensilsCrossed, Navigation, Phone, HeartHandshake } from 'lucide-react';

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#3D2318] to-[#1F100A] text-white relative overflow-hidden text-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern-kolam pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pure Veg Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          <PureVegSymbol size="sm" />
          <span>Pure Vegetarian Dining</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-tight">
          {t.finalCta.heading}
        </h2>

        {/* Subtext */}
        <p className="text-stone-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {t.finalCta.subheading}
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFBE7A] via-[#C89D4B] to-[#A47B2E] text-[#1A0E0A] font-bold text-base shadow-xl hover:shadow-2xl hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>{t.finalCta.viewMenu}</span>
          </Link>

          <a
            href={restaurantInfo.contact.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base border border-emerald-500/50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <Navigation className="w-5 h-5" />
            <span>{t.finalCta.getDirections}</span>
          </a>

          <a
            href={restaurantInfo.contact.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all"
          >
            <Phone className="w-4 h-4 text-[#DFBE7A]" />
            <span>{t.finalCta.callNow}</span>
          </a>
        </div>

        {/* Address and Timings reminder */}
        <div className="mt-12 text-xs text-stone-400">
          <p>📍 Near NH, Vaniyambadi, Chengilikuppam, Tamil Nadu 635807 • Open Daily: 10:30 AM – 11:30 PM</p>
        </div>

      </div>
    </section>
  );
};
