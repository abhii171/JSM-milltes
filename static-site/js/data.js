/**
 * JSM Ragi & Millet Tiffins - Static Site Data Module
 * Source of Truth: app/page.tsx (lines 5-63)
 */

// Navigation Items (Source: app/page.tsx:5-12)
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#about' },
  { label: 'Why JSM', href: '#why-jsm' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

// Menu Cards Array (Source: app/page.tsx:14-26)
const menuCards = [
  { title: 'Ragi Java', price: '₹20', tag: 'Naturally Fermented', description: 'A refreshing traditional ragi drink, served cool.', accent: 'green', image: 'images/menu/ragi-ambali.jpeg', imageAlt: 'Traditional ragi java served chilled' },
  { title: 'Ragi Crispy Plain Dosa', price: '₹30', tag: 'Crispy & Fresh', description: 'Thin, crispy ragi dosa served with traditional chutney and podi.', accent: 'gold', image: 'images/menu/ragi-pesara-dosa.png', imageAlt: 'Crispy plain ragi dosa served with chutneys' },
  { title: 'Soft Ragi Idly', price: '₹40', tag: 'Freshly Steamed', description: 'Soft, fluffy ragi idlies served with traditional chutney and podi.', accent: 'green', image: 'images/menu/soft-millet-ragi-idli.png', imageAlt: 'Soft ragi idlies served with chutneys' },
  { title: 'Foxtail Pongal', price: '₹40', tag: 'Comfort Food', description: 'Warm foxtail millet pongal cooked with lentils and traditional spices.', accent: 'green', image: 'images/menu/foxtail-millet-pongal.jpeg', imageAlt: 'Foxtail millet pongal served warm' },
  { title: 'Crispy Millet Ponganalu', price: '₹40', tag: 'Traditional Cast-Iron', description: 'Crispy millet ponganalu with a soft center and savory seasoning.', accent: 'gold', image: 'images/menu/crispy-millet-ponganalu.jpeg', imageAlt: 'Crispy millet ponganalu served with chutneys' },
  { title: 'Crispy Sprouts Garelu', price: '₹50', tag: 'Protein Power', description: 'Crispy sprouted moong garelu served with ginger chutney.', accent: 'gold', image: 'images/menu/mung-sprout-garelu.jpeg', imageAlt: 'Crispy sprouts garelu served with chutney' },
  { title: 'Pesara Dosa', price: '₹50', tag: 'Crispy & Fresh', description: 'A crisp pesara dosa served with traditional chutney and podi.', accent: 'green', image: 'images/menu/ragi-pesara-dosa.jpeg', imageAlt: 'Pesara dosa served with chutneys' },
  { title: 'Onion Ragi Uttappam', price: '₹60', tag: 'Best Seller', description: 'A soft-centered ragi uttappam topped with onion and traditional spices.', accent: 'gold', image: 'images/menu/onion-ragi-utappam.jpeg', imageAlt: 'Onion ragi uttappam served with podi' },
  { title: 'Millet Set Dosa', price: '₹70', tag: 'Soft & Fluffy', description: 'Soft millet set dosa served with traditional accompaniments.', accent: 'green', image: 'images/menu/crispy-ghee-ragi-dosa.jpeg', imageAlt: 'Millet dosa served on a banana leaf with chutneys' },
  { title: 'Ragi Mudda Chicken', price: '₹120', tag: 'Traditional Meal', description: 'Ragi mudda served with chicken curry.', accent: 'gold', image: 'images/menu/ragi-mudda-pulusu.jpeg', imageAlt: 'Ragi mudda served with curry' },
  { title: 'Ragi Mudda Thalakaya', price: '₹150', tag: 'Traditional Meal', description: 'Ragi mudda served with thalakaya curry.', accent: 'green', image: 'images/menu/ragi-mudda-pulusu.jpeg', imageAlt: 'Ragi mudda served with curry' },
];

// Why JSM Commitment List (Source: app/page.tsx:28-34)
const whyList = [
  { icon: '🌱', title: '100% Millets & Ragi', text: 'With healthy and quality ingredients. No maida, palm oil, or added food colours.' },
  { icon: '☀️', title: 'Fresh Daily Prep', text: 'Batters and stone-ground chutneys ground fresh every single dawn. No overnight preservatives.' },
  { icon: '🧈', title: 'Pure Desi Ghee', text: 'Authentic food prepared with pure desi ghee, pure sunflower oil, and homemade chutneys.' },
  { icon: '📍', title: 'Multiple Outlets', text: 'Serving the Miyapur community from JPN Nagar and Mayuri Nagar.' },
  { icon: '🌾', title: 'Heritage Recipes', text: 'Rustic Andhra and Rayalaseema flavours preserved in every hot plate served.' },
];

// Store Locations (Source: app/page.tsx:36-55)
const locations = [
  {
    name: 'Miyapur Branch',
    label: 'Main Branch',
    tagClass: 'tag-emerald',
    address: 'Opposite Viswanadha Garden, JPN Nagar, Miyapur, Hyderabad - 500049',
    morning: '6:30 AM – 12:00 PM',
    evening: '5:00 PM – 10:30 PM',
    maps: 'https://www.google.com/maps/search/Opposite+Viswanadha+Garden+JPN+Nagar+Miyapur+Hyderabad+500049',
  },
  {
    name: 'Mayuri Nagar, Miyapur Branch',
    label: 'Miyapur',
    tagClass: 'tag-gold',
    address: 'Near RDB Coconut Grove Apartments, Opposite HDFC Bank Line, Mayuri Nagar, Miyapur, Hyderabad, Telangana - 500049',
    morning: '7:00 AM – 12:30 PM',
    evening: '4:30 PM – 10:00 PM',
    maps: 'https://www.google.com/maps/search/Near+RDB+Coconut+Grove+Apartments+Opposite+HDFC+Bank+Line+Mayuri+Nagar+Miyapur+Hyderabad+500049',
  },
];

// Culinary Categories (Source: app/page.tsx:57-63)
const categories = [
  { icon: '🌾', title: 'Ragi Specials', price: 'Starts ₹30', text: 'Crispy dosas, soft idlis, and fluffy steamed ragi tiffins packed with calcium.' },
  { icon: '🥣', title: 'Millet Specials', price: 'Starts ₹45', text: 'Foxtail, Kodo, and Little millet pongal, upma, and seasonal tiffins.' },
  { icon: '🥞', title: 'Traditional Tiffins', price: 'Starts ₹50', text: 'Cast-iron grilled multigrain utappam, pesarattu, and savory roasted crêpes.' },
  { icon: '🧆', title: 'Garelu & Snacks', price: 'Starts ₹40', text: 'Hot crunchy sprouted green gram garelu and spiced shallow-fried punugulu.' },
  { icon: '🍲', title: 'Sangati & Java', price: 'Starts ₹40', text: 'Wholesome Rayalaseema Ragi Muddha served with spicy natukodi or dal pulusu & cooling java.' },
];
