import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import interiorImg from '../assets/interior.jpg';
import { PureVegSymbol } from './PureVegBadge';
import { Heart, Sparkles, Home, Coffee } from 'lucide-react';

export const RestaurantExperience = () => {
  const { t } = useLanguage();

  const expCards = [
    {
      icon: <PureVegSymbol size="md" />,
      title: t.experience.cards[0].title,
      desc: t.experience.cards[0].desc
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#C89D4B]" />,
      title: t.experience.cards[1].title,
      desc: t.experience.cards[1].desc
    },
    {
      icon: <Home className="w-5 h-5 text-[#C89D4B]" />,
      title: t.experience.cards[2].title,
      desc: t.experience.cards[2].desc
    },
    {
      icon: <Heart className="w-5 h-5 text-[#C89D4B]" />,
      title: t.experience.cards[3].title,
      desc: t.experience.cards[3].desc
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#2A1710] text-white relative overflow-hidden">
      {/* Background Ambience image with heavy dark gradient */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={interiorImg}
          alt="Hotel Anandhaas dining hall ambience"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DFBE7A]/15 text-[#DFBE7A] text-xs font-bold tracking-widest uppercase mb-3 border border-[#DFBE7A]/30">
            <Sparkles className="w-3 h-3 text-[#DFBE7A]" />
            <span>{t.experience.badge}</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            {t.experience.heading}
          </h2>

          <p className="text-stone-200 text-base sm:text-lg font-normal leading-relaxed">
            {t.experience.subheading}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#3D2318]/70 border border-[#DFBE7A]/25 backdrop-blur-md hover:border-[#DFBE7A]/60 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2A1710] border border-[#DFBE7A]/40 flex items-center justify-center mb-5 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#DFBE7A] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-stone-200 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-[#DFBE7A] uppercase tracking-widest font-bold">
                Anandhaas Quality
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
