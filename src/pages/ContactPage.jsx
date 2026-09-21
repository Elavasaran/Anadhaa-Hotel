import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { OpeningHours } from '../components/OpeningHours';
import { PureVegSymbol } from '../components/PureVegBadge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Compass, 
  Car, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';

export const ContactPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
            <PureVegSymbol size="sm" />
            <span>Pure Vegetarian Restaurant</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.location.heading}
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.location.subheading}
          </p>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Contacts & Directions Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
              
              <div>
                <h2 className="font-serif font-black text-2xl text-[#2A1710] mb-1">
                  {language === 'ta' ? restaurantInfo.nameTa : restaurantInfo.name}
                </h2>
                <p className="text-xs text-stone-500 font-medium">
                  {restaurantInfo.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={restaurantInfo.contact.telLink}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2A1710] text-[#DFBE7A] font-semibold text-xs sm:text-sm hover:bg-[#3D2318] shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#DFBE7A]" />
                  <span>Call 093616 66099</span>
                </a>

                <a
                  href={restaurantInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-900 shadow-xs transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={restaurantInfo.contact.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#DFBE7A] to-[#C89D4B] text-[#1A0E0A] font-bold text-xs sm:text-sm hover:brightness-105 shadow-xs transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Detailed Contact List */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-[#78350F] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#2A1710] uppercase tracking-wider mb-1">
                      Full Address
                    </h3>
                    <p className="text-sm text-stone-700 leading-snug">
                      {language === 'ta' ? restaurantInfo.contact.address.fullTa : restaurantInfo.contact.address.full}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">
                      Landmark: Located near the National Highway main stretch at Chengilikuppam, Vaniyambadi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#2A1710] uppercase tracking-wider mb-1">
                      Telephone
                    </h3>
                    <p className="text-base font-bold text-emerald-900">
                      093616 66099 / +91 93616 66099
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Customer desk available during dining hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-800 shrink-0 mt-0.5">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#2A1710] uppercase tracking-wider mb-1">
                      Parking & Highway Accessibility
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700">
                      Spacious roadside and front parking for personal cars, SUVs, and tourist buses.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-md h-80 relative bg-stone-100">
              <iframe
                title="Hotel Anandhaas Chengilikuppam Google Map"
                src="https://maps.google.com/maps?q=12.6953,78.6019&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Opening Hours & Schedule (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <OpeningHours />

            {/* Highway Quick Info Box */}
            <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#C89D4B]/30 text-left">
              <h3 className="font-serif font-bold text-lg text-[#2A1710] mb-2 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C89D4B]" />
                <span>Driving Directions & Stopover</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4 font-light">
                If you are travelling along the highway near Vaniyambadi, look out for the Hotel Anandhaas Pure Vegetarian signboard at Chengilikuppam / Chengilikuppam. Direct entrance with dedicated parking right in front.
              </p>
              <a
                href={restaurantInfo.contact.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
