import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from '../components/PureVegBadge';
import { RestaurantExperience } from '../components/RestaurantExperience';
import exteriorImg from '../assets/exterior.jpg';
import interiorImg from '../assets/interior.jpg';
import mealsImg from '../assets/meals.png';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  UtensilsCrossed, 
  Navigation,
  Clock
} from 'lucide-react';

export const AboutPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Hero Banner for About */}
      <section className="relative py-20 sm:py-24 bg-[#2A1710] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={interiorImg} alt="Ambience" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
            <PureVegSymbol size="sm" />
            <span>{t.about.badge}</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            {t.about.heading}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t.about.subheading}
          </p>
        </div>
      </section>

      {/* Main Restaurant Story Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase: Dual Real Restaurant Images */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-900 group">
              <img
                src={exteriorImg}
                alt="Hotel Anandhaas Pure Veg at GR Residency building exterior and car parking"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 bg-[#2A1710] text-[#DFBE7A] text-xs font-semibold flex items-center justify-between">
                <span>📍 Restaurant Building & NH Parking</span>
                <span className="text-stone-300 font-normal text-[11px]">Vaniyambadi</span>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-stone-900 group">
              <img
                src={interiorImg}
                alt="Hotel Anandhaas Pure Veg A/C grand entrance and corridor"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 bg-[#2A1710] text-[#DFBE7A] text-xs font-semibold flex items-center justify-between">
                <span>🌿 Anandhaas Pure Veg A/C Entrance</span>
                <span className="text-emerald-400 font-bold text-[11px]">Taste • Quality • Hospitality</span>
              </div>
            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#C89D4B]" />
              <span>Minnur / Vaniyambadi, Tamil Nadu</span>
            </div>

            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#2A1710] tracking-tight leading-snug">
              Authentic Vegetarian Traditions for Highway Travellers & Families
            </h2>

            <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              {t.about.storyP1}
            </p>

            <p className="text-stone-700 text-base font-light leading-relaxed">
              {t.about.storyP2}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <p className="font-serif font-bold text-[#2A1710] text-sm mb-1">📍 Prime Highway Location</p>
                <p className="text-xs text-stone-600">Situated directly near the NH main road in Chengilikuppam, Vaniyambadi.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <p className="font-serif font-bold text-[#2A1710] text-sm mb-1">🌿 100% Pure Vegetarian</p>
                <p className="text-xs text-stone-600">Strict vegetarian culinary standards with uncompromised quality.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Values Section */}
      <section className="py-16 sm:py-20 bg-[#F5EFE6] border-y border-[#C89D4B]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1710] text-[#DFBE7A] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>{t.about.valuesHeading}</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2A1710] tracking-tight mb-3">
              The Anandhaas Commitment
            </h2>
            <p className="text-stone-600 text-base font-light">
              {t.about.valuesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {restaurantInfo.coreValues.map((val) => (
              <div
                key={val.number}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <span className="text-4xl font-serif font-black text-[#C89D4B]/20 absolute top-4 right-4">
                  {val.number}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#2A1710] mb-2">
                  {language === 'ta' ? val.titleTa : val.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Restaurant Experience */}
      <RestaurantExperience />

      {/* Action Strip */}
      <section className="py-12 bg-white text-center border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] text-sm font-semibold shadow-sm transition-all"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Full Menu</span>
          </Link>

          <a
            href={restaurantInfo.contact.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 text-sm font-semibold shadow-sm transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </section>

    </div>
  );
};
