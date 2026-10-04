export interface NavItem {
  label: string;
  href: string;
}

export interface CategoryItem {
  icon: string;
  title: string;
  price: string;
  text: string;
}

export interface MenuItem {
  order: number;
  title: string;
  price: string;
  tag: string;
  tagClass?: string;
  image: string;
  imageAlt: string;
  description: string;
  metaLeft: string;
  metaRight: string;
}

export interface WhyPillar {
  icon: string;
  title: string;
  text: string;
}

export interface Review {
  rating: string;
  text: string;
  author: string;
  role: string;
}

export interface Outlet {
  name: string;
  label: string;
  tagClass: string;
  address: string;
  morning: string;
  evening?: string;
  note: string;
  maps: string;
}

// Nav Items
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#about' },
  { label: 'Why JSM', href: '#why-jsm' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

// Categories (5)
export const categories: CategoryItem[] = [
  { icon: '🌾', title: 'Ragi Specials', price: 'Starts ₹30', text: 'Crispy dosas, soft idlis, and fluffy steamed ragi tiffins packed with calcium.' },
  { icon: '🥣', title: 'Millet Specials', price: 'Starts ₹40', text: 'Foxtail, Kodo, and Little millet pongal, upma, and seasonal tiffins.' },
  { icon: '🥞', title: 'Traditional Tiffins', price: 'Starts ₹50', text: 'Cast-iron grilled multigrain utappam, pesarattu, and savory roasted crêpes.' },
  { icon: '🧆', title: 'Garelu', price: 'Starts ₹50', text: 'Hot crunchy sprouted green gram garelu and spiced shallow-fried punugulu.' },
  { icon: '🍲', title: 'Ragi-Sangati', price: 'Starts ₹120', text: 'Wholesome Rayalaseema Ragi Muddha served with spicy natukodi or dal pulusu & cooling java.' },
];

// Menu Items (11 dishes sorted by order)
export const menuItems: MenuItem[] = [
  {
    order: 1,
    title: 'Ragi Java',
    price: '₹20',
    tag: 'Naturally Fermented',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/ragi-ambali.jpeg',
    imageAlt: 'Cool traditional ragi ambali garnished with herbs and green chili',
    description: 'A refreshing traditional ragi drink, naturally fermented and served Hot .',
    metaLeft: 'Served Chilled',
    metaRight: '100% Ragi',
  },
  {
    order: 2,
    title: 'Ragi Crispy Plain Dosa',
    price: '₹30',
    tag: "Chef's Favorite",
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/ragi-pesara-dosa.png',
    imageAlt: 'Crispy plain ragi dosa served with traditional chutneys',
    description: 'Thin, crispy ragi dosa served with traditional chutney and podi.',
    metaLeft: 'Gluten Conscious',
    metaRight: '100% Ragi Base',
  },
  {
    order: 3,
    title: 'Soft Ragi Idly',
    price: '₹40',
    tag: 'Freshly Steamed',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/soft-millet-ragi-idli.png',
    imageAlt: 'Soft millet idlies served on a banana leaf with chutneys',
    description: 'Soft and fluffy finger millet idlies, freshly steamed to perfection, served with traditional groundnut chutney, spicy red chili podi and flavorful sambar.',
    metaLeft: 'Traditional Breakfast',
    metaRight: '100% Ragi',
  },
  {
    order: 4,
    title: 'Foxtail Pongal',
    price: '₹40',
    tag: 'Comfort Food',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/foxtail-millet-pongal.jpeg',
    imageAlt: 'Foxtail millet pongal with cashews served on a banana leaf',
    description: 'Melt-in-mouth foxtail millets cooked softly with yellow moong lentil, black peppercorns, roasted cashews, ginger slices, and generous desi ghee.',
    metaLeft: 'Diabetic Friendly',
    metaRight: 'Slow Release Energy',
  },
  {
    order: 5,
    title: 'Crispy Millet Ponganalu',
    price: '₹40',
    tag: 'Traditional Cast-Iron',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/crispy-millet-ponganalu.jpeg',
    imageAlt: 'Crispy millet ponganalu served on a banana leaf with chutneys and podi',
    description: 'Steamed and crispy spherical dumplings tossed in cold pressed oil with coriander, onions, and crushed mustard seeds. Crisp outside, fluffy inside.',
    metaLeft: '8 Pieces Serving',
    metaRight: 'Low Oil',
  },
  {
    order: 6,
    title: 'Crispy Sprouts Garelu',
    price: '₹50',
    tag: 'Protein Powerhouse',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/mung-sprout-garelu.jpeg',
    imageAlt: 'Crispy mung sprout garelu served on a banana leaf with chutney',
    description: 'Crunchy deep fried vadalu prepared from freshly sprouted whole green moong, crushed ginger, and whole spices. Served with ginger allam chutney.',
    metaLeft: 'Made Daily Fresh',
    metaRight: 'High Protein',
  },
  {
    order: 7,
    title: 'Pesara Dosa',
    price: '₹50',
    tag: 'Crispy & Fresh',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/ragi-pesara-dosa.png',
    imageAlt: 'Crispy ragi pasara dosa served with traditional chutneys on a banana leaf',
    description: 'Thin and crispy dosa made with wholesome finger millet batter, freshly prepared and roasted to perfection, served with traditional chutney and spicy podi.',
    metaLeft: 'Freshly Prepared',
    metaRight: '100% Ragi',
  },
  {
    order: 8,
    title: 'Onion Ragi Uttappam',
    price: '₹60',
    tag: 'Best Seller',
    tagClass: 'bg-stone-900/80 text-white',
    image: '/images/menu/onion-ragi-utappam.jpeg',
    imageAlt: 'Onion Ragi Utappam with podi',
    description: 'Thick, soft-centered ragi pancake embedded with sweet red shallots, chopped green chillies, curry leaves, and seasoned roasted cumin.',
    metaLeft: 'Cast Iron Roasted',
    metaRight: 'High Fiber',
  },
  {
    order: 9,
    title: 'Millet Set Dosa',
    price: '₹70',
    tag: 'Soft & Fluffy',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/millet-set-dosa.jpeg',
    imageAlt: 'Millet set dosa served with traditional chutneys',
    description: 'Soft millet set dosa served with traditional accompaniments.',
    metaLeft: 'Made Fresh',
    metaRight: 'Millet Based',
  },
  {
    order: 10,
    title: 'Ragi Mudda Chicken',
    price: '₹120',
    tag: 'Rayalaseema Iconic Meal',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/ragi-mudda-chicken.png',
    imageAlt: 'Ragi mudda served with chicken curry on a banana leaf',
    description: 'Traditional ragi mudda served with chicken curry. Photo shown is a representative ragi mudda meal.',
    metaLeft: 'Satiating & Wholesome',
    metaRight: 'Traditional Stamina Food',
  },
  {
    order: 11,
    title: 'Ragi Mudda Thalakaya',
    price: '₹150',
    tag: 'Traditional Meal',
    tagClass: 'bg-[#0F3D2E]/90 text-white',
    image: '/images/menu/ragi-mudda-pulusu.jpeg',
    imageAlt: 'Ragi mudda served with curry; representative meal photo',
    description: 'Ragi mudda served with thalakaya curry. Photo shown is a representative ragi mudda meal.',
    metaLeft: 'Traditional Meal',
    metaRight: 'Ragi Based',
  },
].sort((a, b) => a.order - b.order);

// Why Pillars (5)
export const whyPillars: WhyPillar[] = [
  { icon: '🌾', title: '100% Unpolished Millets', text: 'We source pure, unpolished millets rich in dietary fiber, essential minerals, and complex carbohydrates.' },
  { icon: '🌿', title: 'Zero Maida & Zero Palm Oil', text: '100% free from refined flour (maida), palm oil, artificial food colorings, or chemical preservatives.' },
  { icon: '🪨', title: 'Stone-Ground Chutneys', text: 'Chutneys and batters prepared fresh daily in small batches using traditional stone-grinding techniques.' },
  { icon: '🍌', title: 'Banana Leaf Service', text: 'Served hot on eco-friendly fresh banana leaves placed on traditional steel plates for natural aroma and hygiene.' },
  { icon: '💰', title: 'Affordable Cost', text: 'Honest food, quality ingredients, and affordable prices—made with care, tradition, and your trust in mind.' },
];

// Reviews (3)
export const reviews: Review[] = [
  {
    rating: '★★★★★',
    text: '"Finally a genuine millet tiffin center in Hyderabad! The crispy Ragi Dosa served on fresh banana leaf tastes pure and doesn’t feel heavy at all. The peanut chutney is top-notch."',
    author: 'Dr. Ananya Reddy',
    role: 'Regular Customer, Miyapur',
  },
  {
    rating: '★★★★★',
    text: '"Their Sprouts Garelu and Ragi Mudda remind me of home in Kurnool. Clean setup, quick service, and the use of desi ghee makes all the difference."',
    author: 'Karthik Naidu',
    role: 'Tech Professional, Hitec City',
  },
  {
    rating: '★★★★★',
    text: '"Very pocket-friendly for the unmatched food quality. Most restaurants charge ₹150+ for basic millet items, but JSM gives supreme authenticity at honest street prices."',
    author: 'Sireesha Verma',
    role: 'Fitness Coach, Kukatpally',
  },
];

// Outlets (3)
export const outlets: Outlet[] = [
  {
    name: 'JPN Nagar,Miyapur Branch',
    label: 'Main Branch',
    tagClass: 'bg-emerald-100 text-emerald-800',
    address: '📍 Opposite Viswanadha Garden, JPN Nagar, Miyapur, Hyderabad - 500049',
    morning: '6:30 AM – 12:00 PM',
    evening: '5:00 PM – 11:30 PM',
    note: 'Open 6 days a week. Every Sunday is a holiday.',
    maps: 'https://www.google.com/maps/search/Opposite+Viswanadha+Garden+JPN+Nagar+Miyapur+Hyderabad+500049',
  },
  {
    name: 'Mayuri Nagar, Miyapur Branch',
    label: 'Miyapur',
    tagClass: 'bg-amber-100 text-amber-800',
    address: '📍 Near RDB Coconut Grove Apartments, Opposite HDFC Bank Line, Mayuri Nagar, Miyapur, Hyderabad, Telangana - 500049',
    morning: '6:30 AM – 12:00 PM',
    note: 'Open 6 days a week. Every Sunday is a holiday.',
    maps: 'https://www.google.com/maps/search/Near+RDB+Coconut+Grove+Apartments+Opposite+HDFC+Bank+Line+Mayuri+Nagar+Miyapur+Hyderabad+500049',
  },
  {
    name: 'Nagarjuna Enclave,Miyapur Branch',
    label: 'Miyapur',
    tagClass: 'bg-amber-100 text-amber-800',
    address: '📍 Opposite HP Petrol Bunk, Nagarjuna Enclave, Miyapur Road, Hyderabad, Telangana - 500049',
    morning: '6:30 AM – 12:00 PM',
    note: 'Open 6 days a week. Every Sunday is a holiday.',
    maps: 'https://www.google.com/maps/search/Opposite+HP+Petrol+Bunk+Nagarjuna+Enclave+Miyapur+Road+Hyderabad+Telangana+500049',
  },
];
