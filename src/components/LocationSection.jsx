import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { OpeningHours } from './OpeningHours';
import { MapPin, Phone, Navigation, Compass, ExternalLink, Sparkles } from 'lucide-react';

export const LocationSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE6] relative" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C89D4B]" />
            <span>{t.location.badge}</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.location.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.location.subheading}
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map + Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phone & Map Embed (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Quick Contacts Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#2A1710]">
                    {language === 'ta' ? restaurantInfo.nameTa : restaurantInfo.name}
                  </h3>
                  <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider mt-0.5">
                    🌿 Pure Vegetarian Restaurant
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={restaurantInfo.contact.telLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] text-xs font-semibold shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={restaurantInfo.contact.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 text-xs font-semibold shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* Address details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-[#78350F] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                      {t.location.addressTitle}
                    </h4>
                    <p className="text-sm font-semibold text-[#2A1710] leading-snug">
                      {language === 'ta' ? restaurantInfo.contact.address.fullTa : restaurantInfo.contact.address.full}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">
                      Landmark: Near National Highway, Chengilikuppam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                      {t.location.phoneTitle}
                    </h4>
                    <a
                      href={restaurantInfo.contact.telLink}
                      className="text-base font-bold text-emerald-800 hover:underline block"
                    >
                      {restaurantInfo.contact.phone}
                    </a>
                    <p className="text-xs text-stone-500 mt-1">
                      Direct Restaurant Enquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Frame */}
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100 relative h-72 sm:h-80">
              <iframe
                title="Hotel Anandhaas Chengilikuppam Location Map"
                src="https://maps.google.com/maps?q=12.6953,78.6019&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Float Map Directions Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={restaurantInfo.contact.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 text-stone-900 text-xs font-bold shadow-lg hover:bg-white border border-stone-200 backdrop-blur-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Opening Hours Card (5 cols) */}
          <div className="lg:col-span-5">
            <OpeningHours />
          </div>

        </div>

      </div>
    </section>
  );
};
