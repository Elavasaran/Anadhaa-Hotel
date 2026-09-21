import React from 'react';
import { X, Heart, Leaf, ShieldCheck, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PureVegSymbol } from './PureVegBadge';

export const getHealthBenefitsForCategory = (category) => {
  const benefits = {
    meals: [
      "Balanced Nutrition: Complete sadhya provides carbohydrates, proteins, and essential fats.",
      "Digestive Health: Traditional spices like cumin, ginger, and turmeric aid easy digestion.",
      "Rich in Fiber: High vegetable content promotes good gut health."
    ],
    dosa: [
      "Fermented Goodness: Enhances gut flora and makes nutrients more bioavailable.",
      "Energy Boost: Excellent source of easy-to-digest carbohydrates for instant energy.",
      "Protein Source: Urad dal batter offers plant-based protein."
    ],
    breakfast: [
      "Light and Energizing: Perfect start to the day without feeling heavy.",
      "Easily Digestible: Steamed items like Idli are gentle on the stomach.",
      "Rich in Amino Acids: Rice-lentil combinations provide complete protein profiles."
    ],
    tiffin: [
      "Wholesome Meal: Keeps you full and satisfied with a mix of grains and lentils.",
      "Micronutrient Rich: Accompanied chutneys and sambar provide vitamins and minerals.",
      "Versatile Energy: Good for both sustained energy and quick boosts."
    ],
    parotta: [
      "Comforting & Satiating: Rich carbohydrate source ideal for physical recovery.",
      "Mental Satisfaction: Hearty meal that triggers satisfaction signals.",
      "Nutrient-dense Kurma: Vegetable gravies provide essential vitamins."
    ],
    rice: [
      "Cooling Effect: Curd and tamarind rice help cool the body heat.",
      "Sustained Energy: Complex carbohydrates for long-lasting stamina.",
      "Spice Benefits: Tempered spices boost metabolism and immunity."
    ],
    snacks: [
      "Quick Energy: Fried snacks give a rapid caloric boost.",
      "Mood Elevation: Crispy textures and spices stimulate pleasure senses.",
      "Protein Boost: Lentil-based snacks like Vada provide high energy."
    ],
    beverages: [
      "Mental Clarity: South Indian filter coffee boosts alertness and focus.",
      "Antioxidant Rich: Tea and coffee contain powerful antioxidants.",
      "Digestive Aid: Buttermilk and spiced teas soothe the digestive tract."
    ]
  };
  return benefits[category] || [
    "Fresh & Wholesome: Prepared with pure ingredients for health.",
    "Balanced Diet: Part of a highly nutritious vegetarian lifestyle.",
    "Easy Digestion: Light on the stomach and good for daily consumption."
  ];
};

export const FoodDetailModal = ({ item, isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen || !item) return null;

  const healthBenefits = getHealthBenefitsForCategory(item.category);
  const name = language === 'ta' && item.nameTa ? item.nameTa : item.name;
  const description = language === 'ta' && item.descriptionTa ? item.descriptionTa : item.description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-stone-900">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/90 text-white text-xs font-bold mb-3 shadow-lg">
                <PureVegSymbol size="sm" />
                <span>100% Pure Veg</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 leading-tight">
                {name}
              </h2>
              {language !== 'ta' && item.nameTa && (
                <p className="font-tamil text-stone-300 text-sm">{item.nameTa}</p>
              )}
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Description Section */}
            <div className="text-stone-700 leading-relaxed text-sm sm:text-base bg-stone-50 p-4 rounded-xl border border-stone-100">
              {description}
            </div>

            {/* Health Benefits Section */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#2A1710] mb-4 font-serif">
                <Heart className="w-5 h-5 text-[#C89D4B]" fill="currentColor" />
                Health Benefits of {name}
              </h3>
              <ul className="space-y-3">
                {healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-600 text-sm">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-stone-200" />

            {/* Why Pure Veg Section */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-900 mb-4 font-serif">
                <Leaf className="w-5 h-5 text-emerald-600" fill="currentColor" />
                The Power of Pure Vegetarian
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm">
                  <h4 className="font-bold text-emerald-800 text-sm mb-1 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-emerald-500" /> Sattvic Nutrition
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Vegetarian food promotes physical lightness, mental clarity, and spiritual well-being according to ancient Ayurvedic principles.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-100/50 shadow-sm">
                  <h4 className="font-bold text-emerald-800 text-sm mb-1 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-500" /> Heart & Gut Health
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Naturally cholesterol-free and rich in dietary fiber, reducing the risk of heart disease and promoting excellent digestion.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
