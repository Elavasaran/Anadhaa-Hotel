import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from './PureVegBadge';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Navigation, 
  Languages, 
  ChevronRight,
  Clock
} from 'lucide-react';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/menu', label: t.nav.menu },
    { path: '/facilities', label: t.nav.facilities },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/reviews', label: t.nav.reviews },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top Banner with Location and Pure Veg note */}
      <div className="bg-[#2A1710] text-[#E5D7C5] text-xs py-1.5 px-4 hidden md:block border-b border-[#C89D4B]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#DFBE7A]">
              <PureVegSymbol size="sm" />
              <span>{language === 'ta' ? restaurantInfo.pureVegNoticeTa : restaurantInfo.pureVegNotice}</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C89D4B]" />
              <span>Near NH, Chengilikuppam, Vaniyambadi</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-200">
              <Clock className="w-3.5 h-3.5 text-[#C89D4B]" />
              <span>{restaurantInfo.timings.displayTime}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={restaurantInfo.contact.telLink} 
              className="flex items-center gap-1.5 text-[#DFBE7A] hover:text-white transition-colors font-medium text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89D4B]" />
              <span>{restaurantInfo.contact.displayPhone}</span>
            </a>
            <span className="text-stone-600">|</span>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-[#3D2318] hover:bg-[#5C3D2E] text-[#DFBE7A] transition-all border border-[#C89D4B]/30 cursor-pointer active:scale-95 font-medium"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#C89D4B]/25' 
            : 'bg-[#FDFBF7] py-3.5 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding with Subtle Hover Animation */}
          <Link to="/" className="flex items-center gap-3 group text-left">
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#3D2318] to-[#2A1710] border-2 border-[#C89D4B] flex items-center justify-center text-[#DFBE7A] shadow-md shrink-0"
            >
              <span className="font-serif font-black text-xl tracking-tighter">HA</span>
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-[#2A1710] group-hover:text-[#78350F] transition-colors">
                  HOTEL ANANDHAAS
                </span>
                <PureVegSymbol size="sm" className="hidden sm:inline-flex" />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#78350F] uppercase">
                <span>CHENGILIKUPPAM</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                <span className="text-emerald-800 font-bold">PURE VEGETARIAN</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with Animated Pill Underline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors"
                >
                  <span className={`relative z-10 ${isActive ? 'text-[#2A1710] font-bold' : 'text-stone-800 hover:text-[#2A1710]'}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#C89D4B]/20 border border-[#C89D4B]/40 rounded-full z-0 shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs & Language Switcher (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-stone-300 hover:border-[#C89D4B] text-stone-700 hover:text-[#2A1710] transition-colors cursor-pointer bg-white"
              title="Change Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#C89D4B]" />
              <span>{language === 'en' ? 'தமிழ்' : 'EN'}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={restaurantInfo.contact.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#15803D] to-[#0D5426] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t.nav.getDirections}</span>
            </motion.a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-bold rounded border border-stone-300 text-[#2A1710]"
            >
              {language === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-800 hover:bg-stone-100 transition-colors"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay & Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm ml-auto bg-[#FDFBF7] h-full shadow-2xl flex flex-col z-10 border-l border-stone-200 overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="p-4 flex items-center justify-between border-b border-stone-200 bg-[#F5EFE6]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#2A1710] text-[#DFBE7A] flex items-center justify-center font-serif font-bold text-sm">
                    HA
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-[#2A1710] block leading-tight">
                      HOTEL ANANDHAAS
                    </span>
                    <span className="text-[10px] text-emerald-800 font-bold tracking-wider">
                      🌿 PURE VEGETARIAN
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="p-4 space-y-1 flex-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive 
                          ? 'bg-[#C89D4B]/20 text-[#2A1710] font-semibold border-l-4 border-[#C89D4B]' 
                          : 'text-stone-700 hover:bg-stone-100'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Location & Call Action Box */}
              <div className="p-4 bg-[#2A1710] text-stone-200 space-y-3">
                <div className="text-xs text-stone-300 space-y-1">
                  <p className="font-semibold text-[#DFBE7A] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Chennai - Bangalore Highway (TANSI)
                  </p>
                  <p className="text-stone-400 pl-5">Chengilikuppam - 635 751, Ambur Taluk</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={restaurantInfo.contact.telLink}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#3D2318] text-[#DFBE7A] border border-[#C89D4B]/40 text-xs font-semibold hover:bg-[#5C3D2E]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={restaurantInfo.contact.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
