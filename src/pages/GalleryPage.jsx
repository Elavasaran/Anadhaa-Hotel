import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';
import { PureVegSymbol } from '../components/PureVegBadge';
import { Image, Maximize2, Sparkles, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export const GalleryPage = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2318]/10 text-[#78350F] text-xs font-bold tracking-widest uppercase mb-3">
            <Image className="w-3.5 h-3.5 text-[#C89D4B]" />
            <span>{t.gallery.badge}</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.gallery.heading}
          </h1>

          <p className="text-stone-700 text-base sm:text-lg font-normal leading-relaxed">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#2A1710] text-[#DFBE7A] shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                {language === 'ta' ? cat.nameTa : cat.name}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid (2-cols mobile, 3/4-cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

              {/* Top View Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                <Maximize2 className="w-4 h-4 text-[#DFBE7A]" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#DFBE7A] transition-colors line-clamp-1 mb-1">
                  {language === 'ta' ? item.titleTa : item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-1 font-medium">
                  {t.gallery.viewImage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          image={currentItem ? currentItem.image : null}
          title={currentItem ? (language === 'ta' ? currentItem.titleTa : currentItem.title) : ''}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />

        {/* Bottom Highway Visit Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F5EFE6] border border-[#C89D4B]/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2A1710] mb-1">
              Visit Hotel Anandhaas Chengilikuppam in Person
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">
              Convenient highway access, warm hospitality, and pure vegetarian South Indian meals.
            </p>
          </div>

          <a
            href={restaurantInfo.contact.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 text-xs sm:text-sm font-semibold shadow-sm shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </div>
  );
};
