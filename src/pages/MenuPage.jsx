import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { menuCategories, fullMenuItems } from '../data/menuData';
import { restaurantInfo } from '../data/restaurantInfo';
import { PureVegSymbol } from '../components/PureVegBadge';
import { 
  Utensils, 
  Search, 
  Sparkles, 
  Phone, 
  Navigation, 
  AlertCircle,
  Clock
} from 'lucide-react';
import { FoodDetailModal } from '../components/FoodDetailModal';

export const MenuPage = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFoodClick = (item) => {
    setSelectedFood(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFood(null), 200); // clear after animation
  };

  const filteredItems = useMemo(() => {
    return fullMenuItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameTa.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <PureVegSymbol size="sm" />
            <span>{t.menuPage.pureVegBadge}</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#2A1710] tracking-tight mb-4">
            {t.menuPage.heading}
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            {t.menuPage.subheading}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-5">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menuPage.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs focus:outline-none focus:border-[#C89D4B] focus:ring-2 focus:ring-[#C89D4B]/20 text-sm text-stone-800 transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 bg-stone-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
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
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 max-w-xl mx-auto">
            <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-700 font-semibold mb-2">{t.menuPage.noResults}</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs text-[#78350F] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleFoodClick(item)}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Food Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 text-emerald-800 text-xs font-bold shadow-xs">
                    <PureVegSymbol size="sm" />
                    <span>Pure Veg</span>
                  </div>

                  {item.isSignature && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2A1710]/90 text-[#DFBE7A] text-[11px] font-bold border border-[#DFBE7A]/40">
                      <Sparkles className="w-3 h-3 text-[#DFBE7A]" />
                      <span>Signature</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2A1710] mb-1">
                      {language === 'ta' ? item.nameTa : item.name}
                    </h3>
                    
                    {language !== 'ta' && (
                      <p className="text-xs font-tamil text-[#78350F] font-semibold mb-2">
                        {item.nameTa}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                      {language === 'ta' && item.descriptionTa ? item.descriptionTa : item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      🌿 100% Vegetarian
                    </span>
                    <span className="text-stone-400">Fresh Preparation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer & Confirmation Notice */}
        <div className="mt-12 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 max-w-3xl mx-auto text-left text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">{t.menuPage.priceDisclaimer}</p>
            <p className="text-stone-600 mt-1">
              For catering enquiries, bulk travel stops, or special dietary questions, call us directly at{' '}
              <a href={restaurantInfo.contact.telLink} className="font-bold underline text-emerald-800">
                093616 66099
              </a>.
            </p>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={restaurantInfo.contact.telLink}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1710] text-[#DFBE7A] hover:bg-[#3D2318] text-sm font-semibold shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Restaurant: 093616 66099</span>
          </a>
          <a
            href={restaurantInfo.contact.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 text-sm font-semibold shadow-md transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions on Google Maps</span>
          </a>
        </div>

      </div>

      <FoodDetailModal 
        item={selectedFood}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
