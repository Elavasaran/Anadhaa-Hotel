import exteriorImg from '../assets/exterior.jpg';
import entranceImg from '../assets/entrance.jpg';
import mealsImg from '../assets/meals.png';
import dosaImg from '../assets/dosa.png';
import parottaImg from '../assets/parotta.png';
import pongalImg from '../assets/pongal.png';
import coffeeImg from '../assets/coffee.png';
import roomKingDeluxe from '../assets/room_king_deluxe.webp';
import roomFamily4Bed from '../assets/room_family_4bed.webp';
import roomTwinBed from '../assets/room_twin_bed.webp';
import receptionWood from '../assets/reception_wood.webp';
import bathroomImg from '../assets/bathroom_clean.webp';
import evCharging2 from '../assets/ev_charging_2.jpg';

export const galleryCategories = [
  { id: "all", name: "All Photos", nameTa: "அனைத்தும்" },
  { id: "rooms", name: "GR Residency Rooms", nameTa: "தங்கும் அறைகள்" },
  { id: "food", name: "Food Specialties", nameTa: "உணவு வகைகள்" },
  { id: "restaurant", name: "Restaurant & Exterior", nameTa: "வெளித்தோற்றம்" },
  { id: "entrance", name: "Entrance & Reception", nameTa: "வரவேற்பு" },
  { id: "facilities", name: "EV & Parking", nameTa: "சார்ஜிங் & பார்க்கிங்" }
];

export const galleryItems = [
  {
    id: "gal-room-king",
    title: "Deluxe King AC Room at GR Residency",
    titleTa: "டீலக்ஸ் கிங் ஏசி படுக்கை அறை",
    category: "rooms",
    image: roomKingDeluxe,
    alt: "Deluxe king size AC bedroom with wooden headboard and modern decor at GR Residency",
    featured: true
  },
  {
    id: "gal-room-fam",
    title: "Family Quad Suite with 4 AC Beds",
    titleTa: "குடும்பத்திற்கான 4 படுக்கை வசதி கொண்ட ஏசி அறை",
    category: "rooms",
    image: roomFamily4Bed,
    alt: "Spacious four bed family suite with dual ceiling fans and AC at GR Residency Minnur",
    featured: true
  },
  {
    id: "gal-room-twin",
    title: "Spacious Twin Bed AC Bedroom",
    titleTa: "இரட்டை படுக்கை கொண்ட விசாலமான ஏசி அறை",
    category: "rooms",
    image: roomTwinBed,
    alt: "Twin bed modern AC room with clean white bedding at GR Residency",
    featured: false
  },
  {
    id: "gal-reception",
    title: "GR Residency Polished Wooden Reception & Lobby",
    titleTa: "மர வேலைப்பாடுகளுடன் கூடிய வரவேற்பு மற்றும் நடைபாதை",
    category: "entrance",
    image: receptionWood,
    alt: "Polished wooden reception desk and illuminated hallway at GR Residency",
    featured: true
  },
  {
    id: "gal-bath",
    title: "Clean Modern Bathroom with Marble Tiles & Shower",
    titleTa: "நவீன மற்றும் தூய்மையான குளியலறை",
    category: "rooms",
    image: bathroomImg,
    alt: "Modern clean bathroom with marble tiles and shower fittings at GR Residency",
    featured: false
  },
  {
    id: "gal-1",
    title: "Hotel Anandhaas Pure Veg & GR Residency Building",
    titleTa: "ஹோட்டல் ஆனந்தாஸ் முகப்பு தோற்றம் & ஜிஆர் ரெசிடென்சி",
    category: "restaurant",
    image: exteriorImg,
    alt: "Hotel Anandhaas Pure Veg A/C restaurant building and wide car parking lot along the National Highway at Chengilikuppam",
    featured: true
  },
  {
    id: "gal-2",
    title: "Hotel Anandhaas Elegant Glass Entrance Corridor",
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
    id: "gal-ev",
    title: "Jio-bp Pulse Fast EV Charging Station",
    titleTa: "Jio-bp பல்ஸ் அதிவேக மின்சார வாகன சார்ஜிங் நிலையம்",
    category: "facilities",
    image: evCharging2,
    alt: "Jio-bp pulse fast EV charging station with canopy at Hotel Anandhaas Minnur",
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
    category: "facilities",
    image: exteriorImg,
    alt: "Spacious paved parking facility in front of Hotel Anandhaas Chengilikuppam for highway travelers and families",
    featured: false
  }
];
