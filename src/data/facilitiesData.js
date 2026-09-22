import mealsImg from '../assets/meals.png';
import dosaSpecialImg from '../assets/dosa_special.jpg';
import roomMainImg from '../assets/room_main.webp';
import roomKingDeluxe from '../assets/room_king_deluxe.webp';
import roomFamily4Bed from '../assets/room_family_4bed.webp';
import roomMultiBed from '../assets/room_multi_bed.webp';
import roomTwinBed from '../assets/room_twin_bed.webp';
import receptionWood from '../assets/reception_wood.webp';
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
    image: roomKingDeluxe,
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
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Chengilikuppam+Vaniyambadi+Tamil+Nadu",
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
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Chengilikuppam+Vaniyambadi+Tamil+Nadu",
    isExternal: true,
    badge: "Jio-bp Pulse",
    badgeTa: "Jio-bp பல்ஸ்"
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
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=Hotel+Anandhaas+Chengilikuppam+Vaniyambadi+Tamil+Nadu",
    isExternal: true,
    badge: "Near NH Highway",
    badgeTa: "நெடுஞ்சாலை அருகில்"
  }
];

export const roomsGalleryCategories = [
  { id: "all", name: "All Stay Photos", nameTa: "அனைத்தும்" },
  { id: "rooms", name: "Rooms & Beds", nameTa: "அறைகள்" },
  { id: "reception", name: "Reception & Lobby", nameTa: "வரவேற்பு அறை" },
  { id: "bathroom", name: "Bathroom", nameTa: "குளியலறை" }
];

export const roomsGalleryItems = [
  {
    id: "room-king",
    title: "Deluxe King AC Bedroom with Wooden Headboard & Lamps",
    titleTa: "டீலக்ஸ் கிங் ஏசி படுக்கை அறை",
    category: "rooms",
    image: roomKingDeluxe,
    alt: "Deluxe air conditioned king double bed room with wooden paneling, bedside tables and swan towel decor at GR Residency",
    featured: true
  },
  {
    id: "room-family-4",
    title: "Family Quad Suite with 4 AC Beds & Ambient Lighting",
    titleTa: "குடும்பத்திற்கான 4 படுக்கை வசதி கொண்ட ஏசி அறை",
    category: "rooms",
    image: roomFamily4Bed,
    alt: "Spacious family quad room with four comfortable beds, dual ceiling fans, AC and tea kettle at GR Residency",
    featured: true
  },
  {
    id: "room-twin",
    title: "Spacious Twin Bed AC Room with Modern Wood Decor",
    titleTa: "இரட்டை படுக்கை கொண்ட விசாலமான ஏசி அறை",
    category: "rooms",
    image: roomTwinBed,
    alt: "Twin double bed room with wooden headboard, AC and seating area at GR Residency Minnur",
    featured: true
  },
  {
    id: "room-multi",
    title: "Multi-Bed Group Room with TV Unit & Wardrobe",
    titleTa: "டிவி மற்றும் அலமாரி வசதியுடன் கூடிய அறை",
    category: "rooms",
    image: roomMultiBed,
    alt: "Multi bed room showing wall-mounted TV console, air conditioner, wardrobe and seating at GR Residency",
    featured: true
  },
  {
    id: "room-desk",
    title: "Double Room with TV Unit, Wardrobe & Coffee Table",
    titleTa: "டிவி மற்றும் அமரும் வசதி கொண்ட இரட்டை படுக்கை அறை",
    category: "rooms",
    image: roomMainImg,
    alt: "Air conditioned double bed room with TV console, wooden wardrobe, desk and seating at GR Residency",
    featured: false
  },
  {
    id: "reception-desk",
    title: "GR Residency Wooden Reception Counter & Hallway",
    titleTa: "மர வேலைப்பாடுகளுடன் கூடிய வரவேற்பு மற்றும் நடைபாதை",
    category: "reception",
    image: receptionWood,
    alt: "Polished wooden reception desk and lighted hallway corridor at GR Residency Hotel Anandhaas",
    featured: true
  },
  {
    id: "bathroom-modern",
    title: "Clean & Modern Bathroom with Black & Cream Marble Tiles",
    titleTa: "கருப்பு மற்றும் கிரீம் பளிங்கு டைல்ஸ் கொண்ட நவீன குளியலறை",
    category: "bathroom",
    image: bathroomImg,
    alt: "Modern clean bathroom with black and beige marble wall tiles, shower fittings and sanitary ware at GR Residency",
    featured: true
  },
  {
    id: "entrance-lobby",
    title: "Hotel Anandhaas Pure Veg A/C Grand Glass Corridor",
    titleTa: "ஆனந்தாஸ் தூய சைவ உணவக முகப்பு நுழைவுக்கூடம்",
    category: "reception",
    image: entranceImg,
    alt: "Hotel Anandhaas Pure Veg A/C grand glass entrance corridor with warm lighting and plants",
    featured: false
  }
];

export const evChargingGallery = [
  {
    id: "ev-1",
    title: "Jio-bp Pulse Fast EV Charging Station with Canopy",
    titleTa: "Jio-bp பல்ஸ் அதிவேக மின்சார வாகன சார்ஜிங் நிலையம்",
    image: evCharging2,
    alt: "Jio-bp pulse EV fast charging station at Hotel Anandhaas Chengilikuppam with canopy"
  },
  {
    id: "ev-2",
    title: "EV Vehicle Charging in Progress at Dedicated Bay",
    titleTa: "வாகனம் சார்ஜ் செய்யப்படும் பிரத்யேக இடம்",
    image: evCharging1,
    alt: "Electric car connected to Jio-bp pulse DC fast charging point at Hotel Anandhaas Chengilikuppam"
  }
];
