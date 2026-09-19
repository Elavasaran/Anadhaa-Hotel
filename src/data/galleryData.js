import exteriorImg from '../assets/exterior.jpg';
import entranceImg from '../assets/entrance.jpg';
import mealsImg from '../assets/meals.png';
import dosaImg from '../assets/dosa.png';
import parottaImg from '../assets/parotta.png';
import pongalImg from '../assets/pongal.png';
import coffeeImg from '../assets/coffee.png';

export const galleryCategories = [
  { id: "all", name: "All Photos", nameTa: "அனைத்தும்" },
  { id: "restaurant", name: "Restaurant & Exterior", nameTa: "வெளித்தோற்றம்" },
  { id: "entrance", name: "Entrance & Ambience", nameTa: "உணவக நுழைவு" },
  { id: "food", name: "Food Specialties", nameTa: "உணவு வகைகள்" },
  { id: "parking", name: "Spacious Parking", nameTa: "பார்க்கிங்" }
];

export const galleryItems = [
  {
    id: "gal-1",
    title: "Hotel Anandhaas Pure Veg Restaurant & GR Residency Building",
    titleTa: "ஹோட்டல் ஆனந்தாஸ் முகப்பு தோற்றம் & ஜிஆர் ரெசிடென்சி",
    category: "restaurant",
    image: exteriorImg,
    alt: "Hotel Anandhaas Pure Veg A/C restaurant building and wide car parking lot along the National Highway at Minnur",
    featured: true
  },
  {
    id: "gal-2",
    title: "Hotel Anandhaas Elegant Entrance & Glass Corridor",
    titleTa: "ஆனந்தாஸ் தூய சைவ உணவக முகப்பு நுழைவுக்கூடம்",
    category: "entrance",
    image: entranceImg,
    alt: "Hotel Anandhaas Pure Veg A/C grand glass entrance corridor with warm ambient lighting and greenery",
    featured: true
  },
  {
    id: "gal-3",
    title: "Traditional South Indian Banana Leaf Meals",
    titleTa: "வாழை இலை சாப்பாடு",
    category: "food",
    image: mealsImg,
    alt: "Full South Indian vegetarian thali served on fresh banana leaf with sambar, rasam, kootu, poriyal, vadai, sweet",
    featured: true
  },
  {
    id: "gal-4",
    title: "Crispy Golden Dosa with Chutneys & Sambar",
    titleTa: "மொறுமொறுப்பான நெய் ரோஸ்ட் தோசை",
    category: "food",
    image: dosaImg,
    alt: "Crispy rolled South Indian dosa with coconut chutney, tomato chutney, coriander chutney and sambar",
    featured: true
  },
  {
    id: "gal-5",
    title: "Authentic Filter Coffee in Traditional Dabara",
    titleTa: "கும்பகோணம் டிகிரி ஃபில்டர் காபி",
    category: "food",
    image: coffeeImg,
    alt: "Frothy authentic South Indian filter coffee in a traditional brass dabara set",
    featured: false
  },
  {
    id: "gal-6",
    title: "Flaky Layered Parotta with Spicy Salna",
    titleTa: "அடுக்கு பரோட்டா மற்றும் குருமா",
    category: "food",
    image: parottaImg,
    alt: "Freshly made layered golden parotta with vegetable salna",
    featured: false
  },
  {
    id: "gal-7",
    title: "Steaming Ghee Pongal with Cashews",
    titleTa: "நெய் மற்றும் முந்திரி பொங்கல்",
    category: "food",
    image: pongalImg,
    alt: "Hot South Indian ghee pongal garnished with roasted cashews and curry leaves on banana leaf",
    featured: false
  },
  {
    id: "gal-8",
    title: "Wide Parking Area for Cars & Highway Travellers",
    titleTa: "விசாலமான கார் பார்க்கிங்",
    category: "parking",
    image: exteriorImg,
    alt: "Spacious paved parking facility in front of Hotel Anandhaas Minnur for highway travelers and families",
    featured: false
  }
];
