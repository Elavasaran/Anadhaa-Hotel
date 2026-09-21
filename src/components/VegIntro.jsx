import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PureVegSymbol } from './PureVegBadge';
import mealsImg from '../assets/meals.png';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const VegIntro = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.vegIntro.pillars.pureVeg.title,
      desc: t.vegIntro.pillars.pureVeg.desc
    },
    {
      title: t.vegIntro.pillars.traditional.title,
      desc: t.vegIntro.pillars.traditional.desc
    },
    {
      title: t.vegIntro.pillars.quality.title,
      desc: t.vegIntro.pillars.quality.desc
    },
    {
      title: t.vegIntro.pillars.comfort.title,
      desc: t.vegIntro.pillars.comfort.desc
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Food Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C89D4B]/30 via-transparent to-emerald-700/20 transform -rotate-1"></div>
              
              {/* Image wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
                <img
                  src={mealsImg}
                  alt="Authentic South Indian Pure Vegetarian Meals served on banana leaf at Hotel Anandhaas Chengilikuppam"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#2A1710]/90 backdrop-blur-md border border-[#DFBE7A]/40 text-white flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <PureVegSymbol size="md" />
                    <div>
                      <p className="text-xs font-bold tracking-wider text-[#DFBE7A] uppercase">100% Pure Vegetarian</p>
                      <p className="text-[11px] text-stone-300">Served with Fresh Banana Leaf Tradition</p>
                    </div>
                  </div>
                  <span className="text-xs font-serif text-[#DFBE7A] italic">Since Day 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Superhead */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-[#C89D4B]" />
              <span>{t.vegIntro.badge}</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#2A1710] tracking-tight leading-tight">
              {t.vegIntro.heading}
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-stone-700 font-light leading-relaxed">
              {t.vegIntro.description}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:border-[#C89D4B]/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#2A1710] mb-0.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] hover:text-white text-sm font-semibold shadow-md transition-all group"
              >
                <span>{t.vegIntro.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
