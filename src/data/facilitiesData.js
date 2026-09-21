import mealsImg from '../assets/meals.png';
import dosaSpecialImg from '../assets/dosa_special.jpg';
import roomMainImg from '../assets/room_main.webp';
import bathroomImg from '../assets/bathroom_clean.webp';
import evCharging1 from '../assets/ev_charging_1.jpg';
import evCharging2 from '../assets/ev_charging_2.jpg';
import exteriorImg from '../assets/exterior.jpg';
import entranceImg from '../assets/entrance.jpg';

export const facilitiesHighlights = [
  {
    id: "veg-dining",
    title: "Pure Vegetarian Dining",
    titleTa: "தூய சைவ உணவகம்",
    category: "dining",
    image: mealsImg,
    secondaryImage: dosaSpecialImg,
    icon: "Leaf",
    description: "Enjoy delicious South Indian vegetarian food in a comfortable dining environment.",
    descriptionTa: "தூய்மையான மற்றும் சுகமான சூழலில் சுவையான தென்னிந்திய சைவ உணவுகளை ருசித்து மகிழுங்கள்.",
    ctaText: "Explore Menu →",
    ctaTextTa: "உணவு பட்டியல் பார்க்க →",
    ctaLink: "/menu",
    isExternal: false,
    badge: "100% Pure Veg",
    badgeTa: "100% தூய சைவம்"
  },
  {
    id: "comfortable-rooms",
    title: "Comfortable Rooms",
    titleTa: "வசதியான தங்கும் அறைகள்",
    category: "stay",
    image: roomMainImg,
    icon: "BedDouble",
    description: "Comfortable accommodation is available for guests and travellers looking for a convenient stay.",
    descriptionTa: "பயணிகளுக்கும் விருந்தினர்களுக்கும் சௌகரியமான தங்கும் அறை வசதிகள் உள்ளன.",
    ctaText: "View Rooms →",
    ctaTextTa: "அறைகளை பார்க்க →",
    ctaLink: "#rooms-gallery",
    isExternal: false,
    badge: "GR Residency",
    badgeTa: "ஜிஆர் ரெசிடென்சி"
  },
  {
    id: "parking-facility",
    title: "Parking Facility",
    titleTa: "விசாலமான பார்க்கிங் வசதி",
    category: "travel",
    image: exteriorImg,
    icon: "Car",
    description: "Convenient parking is available for guests visiting Hotel Anandhaas.",
    descriptionTa: "ஹோட்டல் ஆனந்தாஸுக்கு வரும் விருந்தினர்களுக்கு வசதியான வாகன நிறுத்துமிடம் உள்ளது.",
    ctaText: "Get Directions →",
    ctaTextTa: "வழித்தடம் பார்க்க →",
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Minnur+Vaniyambadi+Tamil+Nadu",
    isExternal: true,
    badge: "Spacious Parking",
    badgeTa: "பார்க்கிங் வசதி"
  },
  {
    id: "ev-charging",
    title: "EV Charging Facility",
    titleTa: "மின்னூர்தி (EV) சார்ஜிங் வசதி",
    category: "travel",
    image: evCharging2,
    secondaryImage: evCharging1,
    icon: "Zap",
    description: "Jio-bp Pulse EV charging facility is available for travellers and guests.",
    descriptionTa: "பயணிகளுக்கு வசதியாக Jio-bp Pulse மின்னூர்தி சார்ஜிங் நிலையம் இங்கு உள்ளது.",
    ctaText: "View Location →",
    ctaTextTa: "இடத்தை பார்க்க →",
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Minnur+Vaniyambadi+Tamil+Nadu",
    isExternal: true,
    badge: "Jio-bp Pulse",
    badgeTa: "Jio-bp பல்ஸ்"
  },
  {
    id: "clean-modern-stay",
    title: "Clean & Modern Stay",
    titleTa: "தூய்மையான நவீன வசதிகள்",
    category: "stay",
    image: bathroomImg,
    secondaryImage: roomMainImg,
    icon: "Sparkles",
    description: "Enjoy a clean and comfortable stay with modern room interiors.",
    descriptionTa: "நவீன மற்றும் சுகாதாரமான அறைகளுடன் அமைதியான தங்கும் அனுபவம்.",
    ctaText: "Explore Stay →",
    ctaTextTa: "விவரம் பார்க்க →",
    ctaLink: "#rooms-gallery",
    isExternal: false,
    badge: "Hygienic & Clean",
    badgeTa: "தூய்மை & சுகாதாரம்"
  },
  {
    id: "nh-location",
    title: "Convenient NH Location",
    titleTa: "நெடுஞ்சாலை எளிதான அணுகல்",
    category: "travel",
    image: exteriorImg,
    icon: "Navigation",
    description: "Located near the NH main road at Chengilikuppam, Vaniyambadi, making it convenient for local guests and travellers.",
    descriptionTa: "வாணியம்பாடி, செங்கிலிக்குப்பம் தேசிய நெடுஞ்சாலை அருகில் அமைந்துள்ளதால் எளிதாக வந்தடையலாம்.",
    ctaText: "Get Directions →",
    ctaTextTa: "வழித்தடம் பார்க்க →",
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Minnur+Vaniyambadi+Tamil+Nadu",
    isExternal: true,
    badge: "Near NH Highway",
    badgeTa: "நெடுஞ்சாலை அருகில்"
  }
];

export const roomsGalleryCategories = [
  { id: "all", name: "All Stay Photos", nameTa: "அனைத்தும்" },
  { id: "rooms", name: "Rooms & Beds", nameTa: "அறைகள்" },
  { id: "bathroom", name: "Bathroom", nameTa: "குளியலறை" },
  { id: "interior", name: "Corridor & Entrance", nameTa: "உணவக முகப்பு" }
];

export const roomsGalleryItems = [
  {
    id: "room-1",
    title: "Comfortable Double Bed AC Room with Modern Wood Decor",
    titleTa: "ஏசி வசதியுடன் கூடிய நவீன படுக்கை அறை",
    category: "rooms",
    image: roomMainImg,
    alt: "Spacious air conditioned double bed room with wooden paneling, TV, closet and desk at GR Residency",
    featured: true
  },
  {
    id: "room-2",
    title: "Clean & Modern Bathroom with Shower & Marble Tiles",
    titleTa: "தூய்மையான நவீன குளியலறை",
    category: "bathroom",
    image: bathroomImg,
    alt: "Modern clean bathroom with black and beige marble tiles and shower fittings at GR Residency",
    featured: true
  },
  {
    id: "room-3",
    title: "Hotel Anandhaas Pure Veg & GR Residency Building",
    titleTa: "ஹோட்டல் ஆனந்தாஸ் & ஜிஆர் ரெசிடென்சி கட்டடம்",
    category: "interior",
    image: exteriorImg,
    alt: "GR Residency and Hotel Anandhaas building facade along NH Highway at Minnur",
    featured: true
  },
  {
    id: "room-4",
    title: "Welcoming Glass Entrance Corridor & Greenery",
    titleTa: "ஆனந்தாஸ் முகப்பு நடைபாதை மற்றும் வரவேற்புக்கூடம்",
    category: "interior",
    image: entranceImg,
    alt: "Hotel Anandhaas Pure Veg A/C grand glass entrance corridor with warm ambient lighting and plants",
    featured: true
  }
];

export const evChargingGallery = [
  {
    id: "ev-1",
    title: "Jio-bp Pulse Fast EV Charging Station with Canopy",
    titleTa: "Jio-bp பல்ஸ் அதிவேக மின்சார வாகன சார்ஜிங் நிலையம்",
    image: evCharging2,
    alt: "Jio-bp pulse EV fast charging station at Hotel Anandhaas Minnur with canopy"
  },
  {
    id: "ev-2",
    title: "EV Vehicle Charging in Progress at Dedicated Bay",
    titleTa: "வாகனம் சார்ஜ் செய்யப்படும் பிரத்யேக இடம்",
    image: evCharging1,
    alt: "Electric car connected to Jio-bp pulse DC fast charging point at Hotel Anandhaas Minnur"
  }
];
