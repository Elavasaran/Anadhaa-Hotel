import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PureVegSymbol } from './PureVegBadge';
import { Utensils, Navigation, Car, Sparkles } from 'lucide-react';

export const InfoStrip = () => {
  const { t } = useLanguage();

  const infoCards = [
    {
      id: "veg",
      badge: <PureVegSymbol size="md" />,
      title: t.infoStrip.pureVeg,
      desc: t.infoStrip.pureVegDesc,
      color: "border-emerald-700/20 bg-emerald-50/60"
    },
    {
      id: "cuisine",
      badge: <div className="w-6 h-6 rounded-full bg-[#DFBE7A]/20 flex items-center justify-center text-[#C89D4B]"><Utensils className="w-3.5 h-3.5" /></div>,
      title: t.infoStrip.cuisine,
      desc: t.infoStrip.cuisineDesc,
      color: "border-[#C89D4B]/30 bg-[#FDFBF7]"
    },
    {
      id: "highway",
      badge: <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-700"><Navigation className="w-3.5 h-3.5" /></div>,
      title: t.infoStrip.highway,
      desc: t.infoStrip.highwayDesc,
      color: "border-stone-200 bg-[#FDFBF7]"
    },
    {
      id: "parking",
      badge: <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-800"><Car className="w-3.5 h-3.5" /></div>,
      title: t.infoStrip.parking,
      desc: t.infoStrip.parkingDesc,
      color: "border-stone-200 bg-[#FDFBF7]"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF7F0] rounded-2xl shadow-xl border border-[#C89D4B]/30 p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {infoCards.map((card, idx) => (
            <div 
              key={card.id} 
              className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="shrink-0 p-2.5 rounded-xl bg-white shadow-xs border border-stone-200/80 flex items-center justify-center">
                {card.badge}
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#2A1710] tracking-tight truncate">
                  {card.title}
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
