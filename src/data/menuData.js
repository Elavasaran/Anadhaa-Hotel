import dosaImg from '../assets/dosa.png';
import coffeeImg from '../assets/coffee.png';
import pongalImg from '../assets/pongal.png';
import parottaImg from '../assets/parotta.png';
import mealsImg from '../assets/meals.png';

export const menuCategories = [
  { id: "all", name: "All Items", nameTa: "அனைத்தும்" },
  { id: "breakfast", name: "Breakfast", nameTa: "காலை உணவு" },
  { id: "dosa", name: "Dosa Varieties", nameTa: "தோசை வகைகள்" },
  { id: "tiffin", name: "Tiffin Specials", nameTa: "டிபன் வகைகள்" },
  { id: "meals", name: "Meals & Lunch", nameTa: "மதிய சாப்பாடு" },
  { id: "rice", name: "Rice Varieties", nameTa: "சாத வகைகள்" },
  { id: "parotta", name: "Parotta & Roti", nameTa: "பரோட்டா & ரொட்டி" },
  { id: "snacks", name: "Snacks", nameTa: "சிற்றுண்டி" },
  { id: "beverages", name: "Beverages & Coffee", nameTa: "பானங்கள் & காபி" }
];

export const menuHighlights = [
  {
    id: "south-indian-meals",
    name: "South Indian Meals",
    nameTa: "தென்னிந்திய வாழை இலை சாப்பாடு",
    category: "meals",
    image: mealsImg,
    description: "Traditional vegetarian meals served with aromatic sambar, rasam, kootu, poriyal, curd, crispy appalam and sweet on banana leaf.",
    descriptionTa: "சாம்பார், ரசம், கூட்டு, பொரியல், தயிர், அப்பளம் மற்றும் பாயாசத்துடன் வாழை இலை சாப்பாடு.",
    tag: "Signature Special",
    tagTa: "முக்கிய உணவு",
    timing: "Lunch & Dinner"
  },
  {
    id: "crispy-dosa",
    name: "Crispy Dosa & Roasts",
    nameTa: "மொறுமொறுப்பான தோசை வகைகள்",
    category: "dosa",
    image: dosaImg,
    description: "Crispy and freshly prepared South Indian favourite served with traditional coconut chutney, tomato chutney, mint chutney, and steaming sambar.",
    descriptionTa: "மூன்று வகை சட்னி மற்றும் சுடச்சுட சாம்பாருடன் மொறுமொறுப்பான சுவையான தோசை.",
    tag: "All-Day Favourite",
    tagTa: "எப்போதும் விருப்பம்",
    timing: "Morning & Evening"
  },
  {
    id: "flaky-parotta",
    name: "Flaky Parotta",
    nameTa: "சூடான பரோட்டா & குருமா",
    category: "parotta",
    image: parottaImg,
    description: "Flaky, layered and freshly prepared golden parotta served with aromatic vegetable salna / kurma.",
    descriptionTa: "அடுக்கு பரோட்டா மற்றும் நறுமணமிக்க காய்கறி சால்னா / குருமாவுடன்.",
    tag: "Traveller Choice",
    tagTa: "பயணிகள் விருப்பம்",
    timing: "Lunch & Dinner"
  },
  {
    id: "ghee-pongal",
    name: "Ghee Pongal",
    nameTa: "நெய் பொங்கல்",
    category: "breakfast",
    image: pongalImg,
    description: "Comforting traditional South Indian tiffin made with rice, lentils, freshly crushed black pepper, cumin, and roasted cashews in pure ghee.",
    descriptionTa: "நெய், மிளகு, சீரகம் மற்றும் முந்திரியுடன் பக்குவமாக சமைத்த பாரம்பரிய பொங்கல்.",
    tag: "Breakfast Classic",
    tagTa: "காலை சிறப்பு",
    timing: "Breakfast & Tiffin"
  },
  {
    id: "filter-coffee",
    name: "South Indian Filter Coffee",
    nameTa: "கும்பகோணம் டிகிரி ஃபில்டர் காபி",
    category: "beverages",
    image: coffeeImg,
    description: "Rich, aromatic and authentic freshly brewed South Indian chicory-blend filter coffee served frothy in a traditional brass dabara.",
    descriptionTa: "பாரம்பரிய முறையில் காய்ச்சிய சுவையான மற்றும் புத்துணர்ச்சியூட்டும் ஃபில்டர் காபி.",
    tag: "Must Try",
    tagTa: "கட்டாயம் சுவைக்க வேண்டியது",
    timing: "All Day"
  },
  {
    id: "traditional-tiffin",
    name: "Traditional Tiffin Platter",
    nameTa: "பாரம்பரிய டிபன் காம்போ",
    category: "tiffin",
    image: dosaImg,
    description: "Steaming hot idlis, crispy medu vada, mini masala dosa, and sweet served with trio of chutneys and drumstick sambar.",
    descriptionTa: "இட்லி, மெதுவடை, மினி தோசை மற்றும் சட்னி, சாம்பார் அடங்கிய சுவையான டிபன்.",
    tag: "Popular Combo",
    tagTa: "பிரபலமானது",
    timing: "Morning & Evening"
  }
];

export const fullMenuItems = [
  // Meals & Lunch
  {
    id: "full-meals",
    name: "South Indian Special Meals",
    nameTa: "தென்னிந்திய ஸ்பெஷல் சாப்பாடு",
    category: "meals",
    image: mealsImg,
    description: "Steamed Ponni rice, traditional sambar, rasam, kara kuzhambu, kootu, poriyal, vadai, appalam, curd & dessert served on clean banana leaf.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "mini-meals",
    name: "Executive Mini Meals",
    nameTa: "மினி சாப்பாடு",
    category: "meals",
    image: mealsImg,
    description: "Compact vegetarian lunch featuring rice, sambar, rasam, one dry poriyal, curd & appalam for a quick wholesome meal.",
    isSignature: false,
    pureVeg: true
  },

  // Dosa Varieties
  {
    id: "plain-roast",
    name: "Crispy Plain Ghee Roast Dosa",
    nameTa: "நெய் ரோஸ்ட் தோசை",
    category: "dosa",
    image: dosaImg,
    description: "Paper-thin golden crepe cooked with pure desi ghee, served with 3 signature chutneys and sambar.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "masala-dosa",
    name: "Special Masala Dosa",
    nameTa: "ஸ்பெஷல் மசாலா தோசை",
    category: "dosa",
    image: dosaImg,
    description: "Golden crispy dosa stuffed with mildly spiced potato and onion masala, accompanied by coconut chutneys & sambar.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "onion-roast",
    name: "Onion Uthappam / Roast",
    nameTa: "வெங்காய ஊத்தப்பம் / ரோஸ்ட்",
    category: "dosa",
    image: dosaImg,
    description: "Thick soft uthappam or crispy roast generously topped with caramelized shallots and green chillies.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "podi-dosa",
    name: "Ghee Podi Dosa",
    nameTa: "நெய் பொடி தோசை",
    category: "dosa",
    image: dosaImg,
    description: "Spiced aromatic idli podi dusted generously with melting ghee over a crisp dosa.",
    isSignature: false,
    pureVeg: true
  },

  // Breakfast & Tiffin
  {
    id: "steamed-idli",
    name: "Steamed Idli (2 Pcs) & Vada",
    nameTa: "மல்லிகைப் பூ இட்லி & மெதுவடை",
    category: "breakfast",
    image: pongalImg,
    description: "Soft, fluffy steamed rice cakes paired with golden crispy urad dal medu vada and hot sambar.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "hot-pongal",
    name: "Traditional Ghee Pongal",
    nameTa: "பாரம்பரிய நெய் பொங்கல்",
    category: "breakfast",
    image: pongalImg,
    description: "Tempered with crushed cumin, whole black peppercorns, ginger, curry leaves, and crunchy cashews.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "poori-masala",
    name: "Poori Masala (3 Pcs)",
    nameTa: "பூரி மசால்",
    category: "tiffin",
    image: dosaImg,
    description: "Puffed golden wheat pooris served with comforting potato bhaji / sagu.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "rava-kichadi",
    name: "Rava Kichadi / Upma",
    nameTa: "ரவா கிச்சடி",
    category: "tiffin",
    image: pongalImg,
    description: "Semolina cooked with fresh diced vegetables, mustard tempering, and fresh ghee.",
    isSignature: false,
    pureVeg: true
  },

  // Parotta & Roti
  {
    id: "layered-parotta",
    name: "Flaky Layered Parotta (2 Pcs)",
    nameTa: "சூடான புரோட்டா (2 எண்ணிக்கை)",
    category: "parotta",
    image: parottaImg,
    description: "Soft and flaky multi-layered parottas served with rich spicy vegetable salna.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "chilli-parotta",
    name: "Veg Chilli Parotta",
    nameTa: "வெஜ் சில்லி புரோட்டா",
    category: "parotta",
    image: parottaImg,
    description: "Shredded parotta wok-tossed with capsicum, onions, curry leaves, and South Indian spices.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "chapati-kurma",
    name: "Soft Wheat Chapati (2 Pcs)",
    nameTa: "சப்பாத்தி & வெஜ் குருமா",
    category: "parotta",
    image: parottaImg,
    description: "Hand-rolled whole wheat rotis served with fresh mixed vegetable coconut kurma.",
    isSignature: false,
    pureVeg: true
  },

  // Rice Varieties
  {
    id: "curd-rice",
    name: "Tempered Curd Rice (Bagala Bath)",
    nameTa: "தயிர் சாதம்",
    category: "rice",
    image: mealsImg,
    description: "Creamy fresh curd mixed with rice, tempered with mustard, green chillies, ginger, and served with pickle and mor milagai.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "sambar-rice",
    name: "Bisibelebath / Sambar Sadham",
    nameTa: "சாம்பார் சாதம் & அப்பளம்",
    category: "rice",
    image: mealsImg,
    description: "Aromatic rice cooked in spiced lentil stew with shallots, drumsticks, carrots, and a generous spoon of pure ghee.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "lemon-rice",
    name: "Variety Rice of the Day",
    nameTa: "தினசரி வெரைட்டி ரைஸ்",
    category: "rice",
    image: mealsImg,
    description: "Freshly tempered Lemon Rice / Tamarind Rice / Tomato Rice served with crispy chips or vadam.",
    isSignature: false,
    pureVeg: true
  },

  // Snacks & Savouries
  {
    id: "medu-vada",
    name: "Crispy Medu Vada (2 Pcs)",
    nameTa: "மொறுமொறு மெதுவடை",
    category: "snacks",
    image: mealsImg,
    description: "Crisp on the outside and fluffy inside, served with hot sambar and fresh coconut chutney.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "samosa-bajji",
    name: "Evening Hot Bajjis / Bondas",
    nameTa: "சூடான பஜ்ஜி & போண்டா",
    category: "snacks",
    image: dosaImg,
    description: "Crispy evening savouries prepared fresh upon order with spicy chutney.",
    isSignature: false,
    pureVeg: true
  },

  // Beverages & Coffee
  {
    id: "filter-coffee-item",
    name: "Traditional South Indian Filter Coffee",
    nameTa: "ஸ்பெஷல் ஃபில்டர் காபி",
    category: "beverages",
    image: coffeeImg,
    description: "Freshly decocted coffee with boiling thick milk and frothy crown in a brass dabara set.",
    isSignature: true,
    pureVeg: true
  },
  {
    id: "masala-tea",
    name: "Ginger Elaichi Masala Tea",
    nameTa: "இஞ்சி ஏலக்காய் டீ",
    category: "beverages",
    image: coffeeImg,
    description: "Strong invigorating tea infused with fresh crushed ginger and aromatic cardamom pods.",
    isSignature: false,
    pureVeg: true
  },
  {
    id: "fresh-butter-milk",
    name: "Spiced Moru / Butter Milk",
    nameTa: "தாளித்த மோர்",
    category: "beverages",
    image: coffeeImg,
    description: "Cooling churned buttermilk seasoned with ginger, green chillies, curry leaves, and coriander.",
    isSignature: false,
    pureVeg: true
  }
];
