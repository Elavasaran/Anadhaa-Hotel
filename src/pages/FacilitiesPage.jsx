import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  facilitiesHighlights, 
  roomsGalleryCategories, 
  roomsGalleryItems, 
  evChargingGallery 
} from '../data/facilitiesData';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from '../components/PureVegBadge';
import { Lightbox } from '../components/Lightbox';
import exteriorImg from '../assets/exterior.jpg';
import evCharging2 from '../assets/ev_charging_2.jpg';
import evCharging1 from '../assets/ev_charging_1.jpg';
import { 
  Building2, 
  BedDouble, 
  Car, 
  Zap, 
  Sparkles, 
  Navigation, 
  Phone, 
  UtensilsCrossed, 
  Maximize2, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const FacilitiesPage = () => {
  const { language, t } = useLanguage();
  const [selectedRoomCategory, setSelectedRoomCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredRoomItems = useMemo(() => {
    if (selectedRoomCategory === 'all') return roomsGalleryItems;
    return roomsGalleryItems.filter(item => item.category === selectedRoomCategory);
  }, [selectedRoomCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredRoomItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredRoomItems.length) % filteredRoomItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredRoomItems[lightboxIndex] : null;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Leaf': return <PureVegSymbol size="md" />;
      case 'BedDouble': return <BedDouble className="w-5 h-5 text-[#C89D4B]" />;
      case 'Car': return <Car className="w-5 h-5 text-emerald-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-blue-600" />;
      default: return <Building2 className="w-5 h-5 text-[#C89D4B]" />;
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. FACILITIES HERO: Real Hotel Anandhaas Building Background */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-stone-900 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <img
            src={exteriorImg}
            alt="Hotel Anandhaas Minnur and GR Residency Building Facilities along NH"
            className="w-full h-full object-cover object-center brightness-100 contrast-[1.02]"
            loading="eager"
          />
          {/* Subtle Scrim for Clean Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E0A]/90 via-[#1A0E0A]/65 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0A]/85 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-left"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/85 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.facilitiesPage.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-4 drop-shadow-md">
              {t.facilitiesPage.heading}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-6 drop-shadow">
              {t.facilitiesPage.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 font-medium text-[#DFBE7A]">
                <PureVegSymbol size="sm" /> Pure Veg Dining
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-200">
                <BedDouble className="w-3.5 h-3.5 text-[#DFBE7A]" /> GR Residency Rooms
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-amber-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Jio-bp Pulse EV Charging
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 6 KEY FACILITIES GRID (Desktop 2-col, Mobile 1-col) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C89D4B]" />
            <span>{t.facilitiesPage.highlightsHeading}</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2A1710] tracking-tight mb-3">
            Integrated Comfort & Traveller Convenience
          </h2>
          <p className="text-stone-600 text-base font-light">
            {t.facilitiesPage.highlightsSub}
          </p>
        </div>

        {/* 6 High-Fidelity Facility Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilitiesHighlights.map((fac) => (
            <motion.div
              key={fac.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-left"
            >
              {/* Image Container with Real Photo */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A1710]/90 text-[#DFBE7A] text-xs font-bold border border-[#DFBE7A]/40 backdrop-blur-md">
                  {getIcon(fac.icon)}
                  <span>{language === 'ta' ? fac.badgeTa : fac.badge}</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-black text-2xl text-[#2A1710] mb-2 group-hover:text-[#78350F] transition-colors">
                    {language === 'ta' ? fac.titleTa : fac.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {language === 'ta' ? fac.descriptionTa : fac.description}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  {fac.isExternal ? (
                    <a
                      href={fac.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:text-emerald-900 group-hover:underline"
                    >
                      <span>{language === 'ta' ? fac.ctaTextTa : fac.ctaText}</span>
                      <ExternalLink className="w-4 h-4 text-emerald-700" />
                    </a>
                  ) : (
                    fac.ctaLink.startsWith('#') ? (
                      <a
                        href={fac.ctaLink}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#78350F] hover:text-[#2A1710] group-hover:underline"
                      >
                        <span>{language === 'ta' ? fac.ctaTextTa : fac.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        to={fac.ctaLink}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#78350F] hover:text-[#2A1710] group-hover:underline"
                      >
                        <span>{language === 'ta' ? fac.ctaTextTa : fac.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )
                  )}

                  <span className="text-xs text-stone-400 font-medium">Hotel Anandhaas Minnur</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ROOMS GALLERY SECTION: Stay at GR Residency */}
      <section id="rooms-gallery" className="py-16 sm:py-24 bg-[#F5EFE6] border-y border-[#C89D4B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2A1710] text-[#DFBE7A] text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
              <BedDouble className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>{t.facilitiesPage.roomsGalleryTitle}</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2A1710] tracking-tight mb-3">
              {t.facilitiesPage.roomsGallerySub}
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm font-light">
              {t.facilitiesPage.roomsGalleryHint}
            </p>
          </div>

          {/* Room Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {roomsGalleryCategories.map((cat) => {
              const isActive = selectedRoomCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedRoomCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#2A1710] text-[#DFBE7A] shadow-md'
                      : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {language === 'ta' ? cat.nameTa : cat.name}
                </button>
              );
            })}
          </div>

          {/* Rooms Grid (2-col mobile, 2/4-col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredRoomItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 sm:h-80 rounded-3xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                {/* Top View Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Maximize2 className="w-4 h-4 text-[#DFBE7A]" />
                </div>

                {/* Caption Info */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#DFBE7A] transition-colors line-clamp-1 mb-1">
                    {language === 'ta' ? item.titleTa : item.title}
                  </h4>
                  <p className="text-xs text-stone-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clean & Comfortable Stay</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rooms Contact Advisory Card */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-stone-800 mb-1">
              For room enquiries and check-in assistance:
            </p>
            <p className="text-xs text-stone-500 mb-4">
              Please contact the front desk directly for current room availability.
            </p>
            <a
              href={restaurantInfo.contact.telLink}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Front Desk: 093616 66099</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. EV CHARGING SECTION: Jio-bp Pulse Fast Charging */}
      <section className="py-16 sm:py-24 bg-[#1F100A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-400/30">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.facilitiesPage.evSectionBadge}</span>
              </div>

              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {t.facilitiesPage.evSectionTitle}
              </h2>

              <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
                {t.facilitiesPage.evSectionDesc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Jio-bp Pulse Fast EV Charger Station</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dine or take a refreshment break while charging</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Located directly on the NH premises</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={restaurantInfo.contact.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFBE7A] to-[#C89D4B] text-[#1A0E0A] font-bold text-sm shadow-lg hover:brightness-110 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.facilitiesPage.evDirectionsBtn}</span>
                </a>

                <a
                  href={restaurantInfo.contact.telLink}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 border border-white/20 text-sm font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-[#DFBE7A]" />
                  <span>Confirm Status: 093616 66099</span>
                </a>
              </div>

              <p className="text-[11px] text-stone-400 italic pt-1">
                *{t.facilitiesPage.evNotice}
              </p>
            </div>

            {/* Right Images (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-stone-900 group">
                <img
                  src={evCharging2}
                  alt="Jio-bp pulse EV fast charging station with canopy at Hotel Anandhaas Minnur"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-3.5 bg-[#2A1710] text-[#DFBE7A] text-xs font-semibold flex items-center justify-between">
                  <span>⚡ Jio-bp Pulse Charging Point</span>
                  <span className="text-stone-300 font-normal">Hotel Anandhaas NH Minnur</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 bg-stone-900 group">
                <img
                  src={evCharging1}
                  alt="Electric car connected to charging station at Hotel Anandhaas"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-3 bg-[#2A1710] text-[#DFBE7A] text-xs font-semibold flex items-center justify-between">
                  <span>🚗 Dedicated EV Bay</span>
                  <span className="text-emerald-400 font-bold">Fast Charging Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#3D2318] to-[#1F100A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <PureVegSymbol size="sm" />
            <span>Pure Vegetarian & Stay Destination</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            {t.finalCta.heading}
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            {t.finalCta.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFBE7A] via-[#C89D4B] to-[#A47B2E] text-[#1A0E0A] font-bold text-sm sm:text-base shadow-xl hover:brightness-110 transition-all"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>{t.finalCta.viewMenu}</span>
            </Link>

            <a
              href={restaurantInfo.contact.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base border border-emerald-500/50 shadow-xl transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.finalCta.getDirections}</span>
            </a>

            <a
              href={restaurantInfo.contact.telLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#DFBE7A]" />
              <span>{t.finalCta.callNow}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Rooms Gallery */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        image={currentItem ? currentItem.image : null}
        title={currentItem ? (language === 'ta' ? currentItem.titleTa : currentItem.title) : ''}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

    </div>
  );
};
