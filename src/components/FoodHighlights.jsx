import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { menuHighlights } from '../data/menuData';
import { PureVegSymbol } from './PureVegBadge';
import { UtensilsCrossed, ArrowRight, Sparkles } from 'lucide-react';

export const FoodHighlights = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#C89D4B]" />
            <span>{t.foodHighlights.badge}</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.foodHighlights.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.foodHighlights.subheading}
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {menuHighlights.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#C89D4B]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Cover & Hover Zoom */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                {/* Top Badge: Tag & Timing */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#2A1710]/85 text-[#DFBE7A] text-[11px] font-semibold tracking-wide backdrop-blur-xs border border-[#C89D4B]/30">
                    {language === 'ta' ? item.tagTa : item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 text-emerald-800 text-[11px] font-bold shadow-xs">
                    <PureVegSymbol size="sm" />
                    <span>Pure Veg</span>
                  </div>
                </div>

                {/* Bottom Timing Notice */}
                <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium drop-shadow">
                  <span>⏱ {item.timing}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-xl text-[#2A1710] group-hover:text-[#8C5E1E] transition-colors">
                      {language === 'ta' ? item.nameTa : item.name}
                    </h3>
                  </div>

                  {language !== 'ta' && (
                    <p className="text-xs font-tamil text-[#78350F] font-medium mb-2.5">
                      {item.nameTa}
                    </p>
                  )}

                  <p className="text-stone-600 text-sm font-normal leading-relaxed line-clamp-3">
                    {language === 'ta' ? item.descriptionTa : item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-emerald-700 flex items-center gap-1">
                    🌿 Freshly Made
                  </span>
                  <span className="text-stone-400">Authentic South Indian</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2A1710] hover:bg-[#3D2318] text-[#DFBE7A] hover:text-white font-bold text-base shadow-lg hover:shadow-xl transition-all group"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#DFBE7A]" />
            <span>{t.foodHighlights.viewFullMenu}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
