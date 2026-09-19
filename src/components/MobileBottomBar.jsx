import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileBottomBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#2A1710]/95 backdrop-blur-lg border-t border-[#C89D4B]/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={restaurantInfo.contact.telLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#3D2318] text-[#DFBE7A] active:scale-95 border border-[#DFBE7A]/30 transition-all text-center"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#DFBE7A]" />
          <span className="text-[11px] font-bold tracking-tight">{t.mobileBar.call}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={restaurantInfo.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-800 text-white active:scale-95 border border-emerald-600/40 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-300" />
          <span className="text-[11px] font-bold tracking-tight">{t.mobileBar.whatsapp}</span>
        </a>

        {/* Directions Button */}
        <a
          href={restaurantInfo.contact.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#DFBE7A] to-[#C89D4B] text-[#1A0E0A] active:scale-95 transition-all text-center"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-[#1A0E0A]" />
          <span className="text-[11px] font-extrabold tracking-tight">{t.mobileBar.directions}</span>
        </a>

      </div>
    </div>
  );
};
