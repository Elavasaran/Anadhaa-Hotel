import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from './PureVegBadge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Heart, 
  Utensils, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/menu', label: t.nav.menu },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/reviews', label: t.nav.reviews },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#1F100A] text-stone-300 border-t border-[#C89D4B]/30 pt-16 pb-24 md:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Pure Veg Pillar (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#3D2318] border-2 border-[#DFBE7A] flex items-center justify-center text-[#DFBE7A] font-serif font-black text-xl">
                HA
              </div>
              <div>
                <span className="font-serif font-black text-xl sm:text-2xl text-white tracking-tight block">
                  HOTEL ANANDHAAS
                </span>
                <span className="text-xs font-bold tracking-widest text-[#DFBE7A] uppercase block">
                  MINNUR • PURE VEGETARIAN
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <PureVegSymbol size="sm" />
                <span>100% Pure Veg Kitchen</span>
              </div>
              <span className="text-xs text-stone-400">⭐ 3.5 (257+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide uppercase border-b border-stone-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-400 hover:text-[#DFBE7A] transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide uppercase border-b border-stone-800 pb-2">
              {t.footer.contactUs}
            </h4>
            
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFBE7A] shrink-0 mt-1" />
                <span>
                  {language === 'ta' ? restaurantInfo.contact.address.fullTa : restaurantInfo.contact.address.full}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFBE7A] shrink-0" />
                <a href={restaurantInfo.contact.telLink} className="text-white hover:text-[#DFBE7A] font-bold">
                  {restaurantInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#DFBE7A] shrink-0" />
                <span>Daily: 10:30 AM – 11:30 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={restaurantInfo.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFBE7A] hover:text-white underline underline-offset-4"
                >
                  <span>{t.footer.findOnGoogle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p>
            © 2026 Hotel Anandhaas Minnur. {t.footer.rightsReserved}
          </p>

          <p className="text-stone-400">
            {t.footer.disclaimerNote}
          </p>
        </div>

      </div>
    </footer>
  );
};
