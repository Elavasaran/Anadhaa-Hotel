import exteriorImg from '../assets/exterior.jpg';
import entranceImg from '../assets/entrance.jpg';
import interiorImg from '../assets/interior.jpg';
import mealsImg from '../assets/meals.png';
import dosaSpecialImg from '../assets/dosa_special.jpg';
import dosaImg from '../assets/dosa.png';
import parottaImg from '../assets/parotta.png';
import pongalImg from '../assets/pongal.png';
import coffeeImg from '../assets/coffee.png';
import evCharging2 from '../assets/ev_charging_2.jpg';
import evCharging1 from '../assets/ev_charging_1.jpg';
import roomKingDeluxe from '../assets/room_king_deluxe.webp';
import roomFamily4Bed from '../assets/room_family_4bed.webp';
import roomTwinBed from '../assets/room_twin_bed.webp';
import roomMultiBed from '../assets/room_multi_bed.webp';
import bathroomImg from '../assets/bathroom_clean.webp';
import receptionWood from '../assets/reception_wood.webp';

export const galleryCategories = [
  { id: "all", name: "All", nameTa: "அனைத்தும்" },
  { id: "restaurant", name: "Restaurant", nameTa: "உணவகம்" },
  { id: "food", name: "Food", nameTa: "உணவு வகைகள்" },
  { id: "facilities", name: "Facilities", nameTa: "வசதிகள்" },
  { id: "rooms", name: "Rooms", nameTa: "தங்கும் அறைகள்" }
];

export const galleryItems = [
  // ==========================================
  // SECTION 1 — HOTEL ANANDHAAS / RESTAURANT
  // ==========================================
  {
    id: "gal-restaurant-exterior",
    title: "Hotel Anandhaas Main Front View & Highway Building",
    titleTa: "ஹோட்டல் ஆனந்தாஸ் முதன்மை முகப்பு தோற்றம்",
    category: "restaurant",
    image: exteriorImg,
    alt: "Hotel Anandhaas Pure Veg A/C restaurant main front exterior view along NH Highway at Chengilikuppam",
    featured: true
  },
  {
    id: "gal-restaurant-entrance",
    title: "Hotel Anandhaas Grand Entrance Corridor",
    titleTa: "ஆனந்தாஸ் உணவக முகப்பு நுழைவுக்கூடம்",
    category: "restaurant",
    image: entranceImg,
    alt: "Hotel Anandhaas Pure Veg grand glass entrance corridor with warm ambient lighting",
    featured: true
  },
  {
    id: "gal-restaurant-interior",
    title: "Air-Conditioned Dining Hall & Family Ambiance",
    titleTa: "குடும்பத்துடன் உணவருந்தும் குளிரூட்டப்பட்ட அரங்கம்",
    category: "restaurant",
    image: interiorImg,
    alt: "Spacious air-conditioned dining area with comfortable seating and Anandhaas branding",
    featured: true
  },

  // ==========================================
  // SECTION 2 — PURE VEGETARIAN FOOD
  // ==========================================
  {
    id: "gal-food-meals",
    title: "South Indian Vegetarian Meals",
    titleTa: "தென்னிந்திய பாரம்பரிய சைவ சாப்பாடு",
    category: "food",
    image: mealsImg,
    alt: "Traditional South Indian vegetarian full thali with sambar, rasam, kootu, poriyal, appalam",
    featured: true
  },
  {
    id: "gal-food-dosa-special",
    title: "Traditional Banana-Leaf Dosa Platter with Chutneys & Sambar",
    titleTa: "வாழை இலை ஸ்பெஷல் மசாலா தோசை",
    category: "food",
    image: dosaSpecialImg,
    alt: "Crispy South Indian dosa served on banana leaf with freshly ground chutneys and sambar",
    featured: true
  },
  {
    id: "gal-food-dosa",
    title: "Crispy Golden Ghee Roast Dosa",
    titleTa: "மொறுமொறுப்பான நெய் ரோஸ்ட் தோசை",
    category: "food",
    image: dosaImg,
    alt: "Crisp golden rolled dosa served with trio of chutneys and piping hot sambar",
    featured: true
  },
  {
    id: "gal-food-parotta",
    title: "Flaky Layered Parotta with Spicy Salna",
    titleTa: "அடுக்கு பரோட்டா மற்றும் காய்கறி குருமா",
    category: "food",
    image: parottaImg,
    alt: "Freshly tossed flaky layered parotta with aromatic vegetable salna",
    featured: false
  },
  {
    id: "gal-food-pongal",
    title: "Steaming Ghee Pongal with Roasted Cashews",
    titleTa: "நெய் மற்றும் முந்திரி வறுத்த வெண் பொங்கல்",
    category: "food",
    image: pongalImg,
    alt: "Hot traditional ghee pongal garnished with crunchy cashews and fresh curry leaves",
    featured: false
  },
  {
    id: "gal-food-coffee",
    title: "Authentic Kumbakonam Degree Filter Coffee",
    titleTa: "கும்பகோணம் டிகிரி ஃபில்டர் காபி",
    category: "food",
    image: coffeeImg,
    alt: "Frothy authentic South Indian filter coffee in traditional brass dabara set",
    featured: false
  },

  // ==========================================
  // SECTION 3 — FACILITIES / TRAVELLER BENEFITS
  // ==========================================
  {
    id: "gal-facility-parking",
    title: "Spacious Parking Area for Highway Travellers & Cars",
    titleTa: "விசாலமான பாதுகாப்பான கார் பார்க்கிங்",
    category: "facilities",
    image: exteriorImg,
    alt: "Spacious paved parking lot in front of Hotel Anandhaas for cars and tourist vehicles",
    featured: false
  },
  {
    id: "gal-facility-ev-1",
    title: "Jio-bp Pulse Fast EV Charging Station",
    titleTa: "Jio-bp பல்ஸ் அதிவேக மின்சார வாகன சார்ஜிங் நிலையம்",
    category: "facilities",
    image: evCharging2,
    alt: "Jio-bp pulse fast EV charging station with weather-proof canopy at Hotel Anandhaas Minnur",
    featured: true
  },
  {
    id: "gal-facility-ev-2",
    title: "Dual Fast EV Charging Station along NH48 Highway",
    titleTa: "தேசிய நெடுஞ்சாலை மின்சார வாகன சார்ஜிங் மையம்",
    category: "facilities",
    image: evCharging1,
    alt: "Dual gun fast DC electric vehicle charging points on NH48 highway at Hotel Anandhaas",
    featured: false
  },
  {
    id: "gal-room-king",
    title: "Deluxe King AC Bedroom at GR Residency",
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
    id: "gal-room-multi",
    title: "Spacious Multi-Bed AC Room for Group Travellers",
    titleTa: "குழு பயணிகளுக்கான கூடுதல் படுக்கை வசதி கொண்ட ஏசி அறை",
    category: "rooms",
    image: roomMultiBed,
    alt: "Comfortable air conditioned multi-bed accommodation for group stay at GR Residency",
    featured: false
  },
  {
    id: "gal-room-bath",
    title: "Clean Modern Bathroom with Marble Tiles & Shower",
    titleTa: "நவீன மற்றும் தூய்மையான குளியலறை",
    category: "rooms",
    image: bathroomImg,
    alt: "Modern clean bathroom with marble tiles and shower fittings at GR Residency",
    featured: false
  },
  {
    id: "gal-room-reception",
    title: "GR Residency Polished Wooden Reception & Lobby",
    titleTa: "மர வேலைப்பாடுகளுடன் கூடிய வரவேற்பு மற்றும் நடைபாதை",
    category: "rooms",
    image: receptionWood,
    alt: "Polished wooden reception desk and illuminated hallway at GR Residency",
    featured: true
  }
];
