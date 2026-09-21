import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ReviewsPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#C89D4B]" />
            <span>{t.reviews.badge}</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.reviews.heading}
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.reviews.subheading}
          </p>

          {/* Rating Summary Card */}
          <div className="mt-8 p-8 rounded-3xl bg-white border border-stone-200 shadow-md max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-serif font-black text-4xl sm:text-5xl text-[#2A1710]">
                    {restaurantInfo.ratings.score}
                  </span>
                  <span className="text-stone-400 text-xl font-serif">/ 5</span>
                </div>
                <div className="flex items-center text-amber-500 my-2">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-500" />
                  ))}
                  <Star className="w-6 h-6 fill-amber-400/50 text-amber-500" />
                  <Star className="w-6 h-6 text-stone-300" />
                </div>
                <p className="text-xs text-stone-500 font-medium">
                  {t.reviews.basedOnText}
                </p>
              </div>

              <div className="h-16 w-px bg-stone-200 hidden sm:block"></div>

              <div className="text-center sm:text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Verified Google Business Listing</span>
                </div>
                <p className="text-xs text-stone-600">
                  Customer feedback submitted by guests visiting Hotel Anandhaas Chengilikuppam.
                </p>
                <a
                  href={restaurantInfo.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#78350F] hover:underline pt-1"
                >
                  <span>{t.reviews.readMoreGoogle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 text-left">
          {restaurantInfo.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                    {[...Array(5 - rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-200" />
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-stone-400">
                    Google Review
                  </span>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{language === 'ta' && rev.tamilText ? rev.tamilText : rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2A1710]">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {rev.date}
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <a
            href={restaurantInfo.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] text-sm font-semibold shadow-md transition-all"
          >
            <span>{t.reviews.readMoreGoogle}</span>
            <ExternalLink className="w-4 h-4 text-[#DFBE7A]" />
          </a>
        </div>

      </div>
    </div>
  );
};
