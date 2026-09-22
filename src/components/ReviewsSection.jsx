import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle } from 'lucide-react';

export const ReviewsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#C89D4B]" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.reviews.heading}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg font-normal leading-relaxed">
            {t.reviews.subheading}
          </p>

          {/* Google Rating Overview Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-2xl sm:text-3xl text-[#2A1710]">3.5</span>
              <div className="flex items-center text-amber-500">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                ))}
                <Star className="w-5 h-5 fill-amber-400/50 text-amber-500" />
                <Star className="w-5 h-5 text-stone-300" />
              </div>
            </div>

            <div className="h-6 w-px bg-stone-200 hidden sm:block"></div>

            <div className="text-left text-xs sm:text-sm">
              <p className="font-bold text-stone-900 flex items-center gap-1">
                <span>Google Maps Rating</span>
                <span className="text-emerald-700 font-semibold">● Verified</span>
              </p>
              <p className="text-stone-600 font-medium">257+ Customer Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {restaurantInfo.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Google Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                    {[...Array(5 - rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-200" />
                    ))}
                  </div>

                  {/* Google Icon Badge */}
                  <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                    <span className="font-bold text-blue-600">G</span>oogle
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{language === 'ta' && rev.tamilText ? rev.tamilText : rev.text}"
                </p>
              </div>

              {/* Reviewer Name and Source */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#2A1710]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium">
                    {rev.date}
                  </p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Read More on Google Maps */}
        <div className="text-center">
          <a
            href={restaurantInfo.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-sm shadow-xs hover:shadow-sm transition-all"
          >
            <span>{t.reviews.readMoreGoogle}</span>
            <ExternalLink className="w-4 h-4 text-stone-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
