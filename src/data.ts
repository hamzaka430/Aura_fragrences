// ─── Product & Content Data ─────────────────────────────────────────
export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string[];
  gender: string;
  image: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  volumes: { size: string; price: number }[];
  badge?: string;
  collection?: string;
}

export const products: Product[] = [
  {
    id: 1, name: "Royal Oud", slug: "royal-oud", price: 320, originalPrice: 380,
    rating: 4.9, reviews: 247, category: ["oud", "woody", "luxury-collection"], gender: "unisex",
    image: "https://images.unsplash.com/photo-1594035910387-fea081de045b?w=600&q=80",
    description: "A majestic blend of rare Cambodian oud with smoky incense and precious woods. Royal Oud commands attention with its deep, complex character — a fragrance for those who lead.",
    topNotes: ["Saffron", "Pink Pepper", "Bergamot"],
    heartNotes: ["Cambodian Oud", "Rose Absolute", "Incense"],
    baseNotes: ["Sandalwood", "Amber", "Musk"],
    volumes: [{ size: "50ml", price: 320 }, { size: "100ml", price: 480 }],
    badge: "Bestseller", collection: "Signature Collection"
  },
  {
    id: 2, name: "Velvet Noir", slug: "velvet-noir", price: 275,
    rating: 4.8, reviews: 189, category: ["woody", "luxury-collection"], gender: "women",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    description: "Dark, seductive, and unapologetically bold. Velvet Noir wraps you in a cloak of black orchid, dark chocolate, and smoldering patchouli — evening elegance distilled.",
    topNotes: ["Black Currant", "Italian Bergamot", "Rum"],
    heartNotes: ["Black Orchid", "Jasmine", "Dark Chocolate"],
    baseNotes: ["Patchouli", "Vanilla", "Benzoin"],
    volumes: [{ size: "50ml", price: 275 }, { size: "100ml", price: 420 }],
    badge: "New", collection: "Signature Collection"
  },
  {
    id: 3, name: "Citrus Elysium", slug: "citrus-elysium", price: 195,
    rating: 4.7, reviews: 312, category: ["fresh", "floral"], gender: "men",
    image: "https://images.unsplash.com/photo-1595425964272-fc617fa15e80?w=600&q=80",
    description: "A burst of Mediterranean sunshine. Citrus Elysium opens with effervescent lemon and grapefruit, mellowing into aromatic herbs and a clean, white musk dry-down.",
    topNotes: ["Sicilian Lemon", "Grapefruit", "Mandarin"],
    heartNotes: ["Neroli", "Rosemary", "Lavender"],
    baseNotes: ["White Musk", "Cedarwood", "Vetiver"],
    volumes: [{ size: "50ml", price: 195 }, { size: "100ml", price: 295 }],
    collection: "Signature Collection"
  },
  {
    id: 4, name: "Amber Mystique", slug: "amber-mystique", price: 350,
    rating: 4.9, reviews: 156, category: ["oud", "woody", "luxury-collection"], gender: "unisex",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80",
    description: "Liquid gold in a bottle. Amber Mystique layers rare Baltic amber with Ethiopian myrrh, creating a warm, resinous embrace that lingers for hours on skin.",
    topNotes: ["Cardamom", "Cinnamon", "Orange Blossom"],
    heartNotes: ["Amber", "Myrrh", "Labdanum"],
    baseNotes: ["Tonka Bean", "Vanilla Absolute", "Oud Wood"],
    volumes: [{ size: "50ml", price: 350 }, { size: "100ml", price: 520 }],
    badge: "Limited", collection: "Oud Collection"
  },
  {
    id: 5, name: "Rose Imperiale", slug: "rose-imperiale", price: 285,
    rating: 4.8, reviews: 203, category: ["floral", "luxury-collection"], gender: "women",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
    description: "A tribute to the queen of flowers. Rose Imperiale blends the finest Damascene and Turkish rose varieties with dewy aldehydes and a base of precious woods.",
    topNotes: ["Rose de Mai", "Aldehydes", "Litchi"],
    heartNotes: ["Turkish Rose", "Peony", "Iris"],
    baseNotes: ["Sandalwood", "White Musk", "Cashmeran"],
    volumes: [{ size: "50ml", price: 285 }, { size: "100ml", price: 430 }],
    collection: "Signature Collection"
  },
  {
    id: 6, name: "Noir Absolu", slug: "noir-absolu", price: 410,
    rating: 5.0, reviews: 98, category: ["oud", "woody", "luxury-collection"], gender: "men",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80",
    description: "The darkest expression in our collection. Noir Absolu is a study in contrast — fiery spices meet the deepest, most primal oud, anchored by a velvet bed of leather and smoke.",
    topNotes: ["Black Pepper", "Saffron", "Elemi"],
    heartNotes: ["Laotian Oud", "Leather", "Cypriol"],
    baseNotes: ["Castoreum", "Smoky Vetiver", "Ambergris"],
    volumes: [{ size: "50ml", price: 410 }, { size: "100ml", price: 620 }],
    badge: "Exclusive", collection: "Exclusive Collection"
  },
  {
    id: 7, name: "Ocean Breeze", slug: "ocean-breeze", price: 175,
    rating: 4.6, reviews: 421, category: ["fresh"], gender: "men",
    image: "https://images.unsplash.com/photo-1594913503441-4bc81e01a720?w=600&q=80",
    description: "Effortless freshness inspired by the Amalfi Coast. Sea salt, aquatic notes, and driftwood create a scent that feels like a warm breeze off the Mediterranean.",
    topNotes: ["Sea Salt", "Bergamot", "Lemon Zest"],
    heartNotes: ["Marine Accord", "Lily of the Valley", "White Tea"],
    baseNotes: ["Driftwood", "Musk", "Ambrette Seed"],
    volumes: [{ size: "50ml", price: 175 }, { size: "100ml", price: 260 }],
    collection: "Signature Collection"
  },
  {
    id: 8, name: "Jasmine Nights", slug: "jasmine-nights", price: 245,
    rating: 4.7, reviews: 178, category: ["floral", "woody"], gender: "women",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    description: "Intoxicating Sambac jasmine captured at midnight bloom. This sensual fragrance unfolds with creamy tuberose and a warm base of vanilla and precious woods.",
    topNotes: ["Sambac Jasmine", "Ylang Ylang", "Pear"],
    heartNotes: ["Tuberose", "Gardenia", "Orange Blossom"],
    baseNotes: ["Vanilla", "Sandalwood", "Benzoin"],
    volumes: [{ size: "50ml", price: 245 }, { size: "100ml", price: 370 }],
    collection: "Signature Collection"
  },
  {
    id: 9, name: "Sultan's Gold", slug: "sultans-gold", price: 495,
    rating: 5.0, reviews: 67, category: ["oud", "luxury-collection"], gender: "unisex",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
    description: "Our most precious creation. Sultan's Gold layers 24-karat gold-infused oil with the rarest Indian oud, aged saffron, and imperial rose — a fragrance of absolute royalty.",
    topNotes: ["Royal Saffron", "Bergamot", "Cardamom"],
    heartNotes: ["Indian Oud", "Imperial Rose", "Gold Accord"],
    baseNotes: ["Aged Sandalwood", "Ambergris", "Musk"],
    volumes: [{ size: "50ml", price: 495 }, { size: "100ml", price: 750 }],
    badge: "Limited Edition", collection: "Limited Edition"
  },
  {
    id: 10, name: "White Orchid", slug: "white-orchid", price: 225,
    rating: 4.6, reviews: 289, category: ["floral", "fresh"], gender: "women",
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&q=80",
    description: "Pure elegance in every note. White Orchid captures the delicate beauty of rare orchid species, floating on a bed of soft musks and powdery iris.",
    topNotes: ["White Orchid", "Pink Pepper", "Pear"],
    heartNotes: ["Freesia", "Iris", "Magnolia"],
    baseNotes: ["White Musk", "Cashmeran", "Blonde Wood"],
    volumes: [{ size: "50ml", price: 225 }, { size: "100ml", price: 340 }],
    collection: "Signature Collection"
  },
  {
    id: 11, name: "Midnight Leather", slug: "midnight-leather", price: 365,
    rating: 4.8, reviews: 134, category: ["woody", "luxury-collection"], gender: "men",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80",
    description: "Raw sophistication. Midnight Leather fuses buttery Italian leather with smoky birch tar and a whisper of dark rum — for the man who plays by his own rules.",
    topNotes: ["Whiskey", "Black Pepper", "Cardamom"],
    heartNotes: ["Leather", "Suede", "Tobacco"],
    baseNotes: ["Birch Tar", "Oud", "Dark Amber"],
    volumes: [{ size: "50ml", price: 365 }, { size: "100ml", price: 545 }],
    badge: "Bestseller", collection: "Exclusive Collection"
  },
  {
    id: 12, name: "Sakura Dream", slug: "sakura-dream", price: 210,
    rating: 4.5, reviews: 256, category: ["floral", "fresh"], gender: "women",
    image: "https://images.unsplash.com/photo-1616949755610-a3a13e564e41?w=600&q=80",
    description: "A poetic ode to Japanese cherry blossoms. Sakura Dream is airy and luminous — sheer petals, green tea, and silky woods create a fragrance of quiet beauty.",
    topNotes: ["Cherry Blossom", "Green Tea", "Yuzu"],
    heartNotes: ["Peony", "Wisteria", "Bamboo"],
    baseNotes: ["White Cedar", "Rice Powder Accord", "Musk"],
    volumes: [{ size: "50ml", price: 210 }, { size: "100ml", price: 315 }],
    collection: "Signature Collection"
  }
];

export const testimonials = [
  { name: "Victoria Ashworth", text: "Royal Oud is simply magnificent. I receive compliments everywhere I go. The sillage is extraordinary.", rating: 5, location: "London, UK" },
  { name: "James Chen", text: "Noir Absolu is the most captivating fragrance I've ever worn. It's dark, mysterious, and utterly addictive.", rating: 5, location: "New York, USA" },
  { name: "Sophia Laurent", text: "Rose Imperiale is pure poetry. It's romantic without being cloying — exactly what I've been searching for.", rating: 5, location: "Paris, France" },
  { name: "Ahmed Al-Rashid", text: "Sultan's Gold is worth every penny. The oud quality is unmatched. This is what luxury truly smells like.", rating: 5, location: "Dubai, UAE" },
  { name: "Isabella Romano", text: "The packaging alone tells you this is something special. Velvet Noir has become my signature scent.", rating: 5, location: "Milan, Italy" },
  { name: "David Blackwood", text: "Midnight Leather — the name says it all. Bold, masculine, unforgettable. My wife can't stop complimenting me.", rating: 5, location: "Sydney, Australia" }
];

export const blogPosts = [
  { id: 1, slug: "art-of-layering", title: "The Art of Fragrance Layering", excerpt: "Master the sophisticated technique of combining scents to create your own unique olfactory signature.", date: "2026-06-10", category: "Fragrance Guide", readTime: "8 min", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80" },
  { id: 2, slug: "history-of-oud", title: "The History of Oud: Liquid Gold", excerpt: "Explore the ancient origins and modern resurgence of the world's most precious fragrance ingredient.", date: "2026-06-05", category: "Perfume Tips", readTime: "12 min", image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=600&q=80" },
  { id: 3, slug: "choosing-signature-scent", title: "Choosing Your Signature Scent", excerpt: "A comprehensive guide to finding the fragrance that truly represents who you are.", date: "2026-05-28", category: "Fragrance Guide", readTime: "10 min", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" },
  { id: 4, slug: "luxury-lifestyle-fragrance", title: "Fragrance & The Luxury Lifestyle", excerpt: "How the world's most discerning individuals integrate fragrance into their daily ritual.", date: "2026-05-20", category: "Luxury Lifestyle", readTime: "6 min", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
  { id: 5, slug: "seasonal-fragrance-guide", title: "Seasonal Fragrance Guide 2026", excerpt: "The definitive guide to choosing the perfect fragrance for every season of the year.", date: "2026-05-15", category: "Fragrance Guide", readTime: "9 min", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=600&q=80" },
  { id: 6, slug: "fragrance-longevity-tips", title: "Maximize Your Fragrance Longevity", excerpt: "Expert tips and techniques to make your premium fragrance last all day and night.", date: "2026-05-08", category: "Perfume Tips", readTime: "7 min", image: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?w=600&q=80" }
];

export const faqs = [
  { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) and overnight options are available. All orders over $200 qualify for complimentary express shipping worldwide." },
  { q: "What is your return policy?", a: "We offer a 30-day satisfaction guarantee. If you're not completely delighted with your purchase, return it in its original condition for a full refund. Opened items may be exchanged for a different fragrance." },
  { q: "Are your fragrances authentic?", a: "Absolutely. Every Aurum Fragrance is crafted in our own ateliers using the finest raw materials sourced directly from premier growers. Each bottle carries a unique batch number and certificate of authenticity." },
  { q: "How should I store my fragrances?", a: "Store your fragrances in a cool, dark place away from direct sunlight and temperature fluctuations. Avoid storing them in bathrooms where humidity can degrade the composition. Properly stored, our fragrances maintain their character for 3-5 years." },
  { q: "Do you offer gift wrapping?", a: "Yes, every order can be presented in our signature black and gold gift box with satin ribbon. Add a personalized message card at checkout. We also offer bespoke gifting services for corporate and special occasions." },
  { q: "Can I get samples before purchasing?", a: "We offer a Discovery Set of 6 curated 2ml samples for $45, fully redeemable against your first full-size purchase. Individual 2ml samples are available for $12 each." },
  { q: "Do you ship internationally?", a: "Yes, we ship to over 60 countries worldwide. Duties and taxes are calculated at checkout for a seamless delivery experience. Average international delivery is 7-14 business days." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. Installment payments via Klarna are available on orders over $150." }
];

export const collections = [
  { name: "Signature Collection", slug: "signature", description: "Our foundational line — eight distinctive fragrances that define the Aurum aesthetic. From fresh citruses to deep orientals, each scent is crafted to become your personal signature.", count: 8, image: "https://images.unsplash.com/photo-1594035910387-fea081de045b?w=600&q=80" },
  { name: "Oud Collection", slug: "oud", description: "The finest oud from Cambodia, Laos, and India, transformed into extraordinary compositions. Each fragrance in this collection showcases a different facet of this precious ingredient.", count: 4, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80" },
  { name: "Exclusive Collection", slug: "exclusive", description: "Available only through our boutiques and select partners. These rare creations push the boundaries of perfumery with unconventional ingredients and bold compositions.", count: 3, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80" },
  { name: "Limited Edition", slug: "limited-edition", description: "Once they're gone, they're gone forever. Our limited editions are small-batch creations inspired by fleeting moments, rare ingredients, and artistic collaborations.", count: 1, image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80" }
];
