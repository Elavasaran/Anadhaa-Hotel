import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Compass, Car, Utensils, Users, Navigation, MapPin, ShieldCheck } from 'lucide-react';

export const NHTravellerSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Compass,
      title: t.nhSection.cards.easyFind.title,
      desc: t.nhSection.cards.easyFind.desc,
      color: "bg-amber-500/10 text-amber-900 border-amber-500/20"
    },
    {
      icon: Car,
      title: t.nhSection.cards.parking.title,
      desc: t.nhSection.cards.parking.desc,
      color: "bg-emerald-500/10 text-emerald-900 border-emerald-500/20"
    },
    {
      icon: Utensils,
      title: t.nhSection.cards.dineIn.title,
      desc: t.nhSection.cards.dineIn.desc,
      color: "bg-orange-500/10 text-orange-900 border-orange-500/20"
    },
    {
      icon: Users,
      title: t.nhSection.cards.family.title,
      desc: t.nhSection.cards.family.desc,
      color: "bg-blue-500/10 text-blue-900 border-blue-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5EFE6] border-y border-[#C89D4B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2A1710] text-[#DFBE7A] text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#DFBE7A]" />
          <span>{t.nhSection.badge}</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2A1710] tracking-tight mb-4">
          {t.nhSection.heading}
        </h2>

        {/* Description */}
        <p className="text-stone-800 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-12">
          {t.nhSection.description}
        </p>

        {/* 4 Highway Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-left">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FDFBF7] border border-stone-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2A1710] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1 text-xs sm:text-sm text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Highway Traveller Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div>
          <a
            href={restaurantInfo.contact.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>{t.nhSection.cta}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
