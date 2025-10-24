import {
  Apple,
  BadgeCheck,
  Beef,
  Beer,
  Briefcase,
  Building,
  Building2,
  Cake,
  Castle,
  Church,
  CircleQuestionMarkIcon,
  CodeIcon,
  Coffee,
  Dog,
  Factory,
  FerrisWheel,
  Fish,
  Gift,
  Globe2Icon,
  GlobeIcon,
  GraduationCapIcon,
  HammerIcon,
  Handshake,
  Home,
  Hospital,
  House,
  HouseIcon,
  IceCream2,
  Info,
  Landmark,
  LandmarkIcon,
  LandPlot,
  LaptopIcon,
  LifeBuoy,
  ListIcon,
  MapPin,
  MapPinIcon,
  Martini,
  Mic2Icon,
  Monitor,
  Mountain,
  Newspaper,
  PaletteIcon,
  PhoneIcon,
  Pizza,
  Radio,
  Salad,
  Sandwich,
  ShieldCheck,
  ShieldIcon,
  ShoppingBagIcon,
  Soup,
  StethoscopeIcon,
  StoreIcon,
  Sun,
  TentTree,
  Theater,
  TicketsIcon,
  Train,
  Trees,
  Trophy,
  TruckIcon,
  Umbrella,
  UserSquare2,
  Users,
  UsersRoundIcon,
  Utensils,
  WalletIcon,
  Waves,
  WrenchIcon,
} from "lucide-react";
import type {
  TCategory,
  TEvent,
  THouse,
  Tjob,
  TnavItem,
  TPlace,
  TRestaurant,
} from "@/types";

export const services = [
  {
    name: "Gvt services",
    href: "/gvt-services",
    icon: Landmark, // govt building / services
    isComingSoon: true,
  },
  {
    name: "Restaurants",
    href: "/restaurants",
    icon: Utensils, // food & dining
    isComingSoon: false,
  },
  {
    name: "Housing",
    href: "/housing",
    icon: Home, // houses/apartments
    isComingSoon: false,
  },
  {
    name: "Tourism",
    href: "/tourism",
    icon: Building2, // landmarks / attractions
    isComingSoon: false,
  },
  {
    name: "Health care",
    href: "/health-care",
    icon: Hospital, // medical
    isComingSoon: true,
  },
  {
    name: "Rwanda media",
    href: "/media",
    icon: Radio, // media / broadcast
    isComingSoon: true,
  },
  {
    name: "Shopping",
    href: "/shop",
    icon: StoreIcon, // shopping / malls
    isComingSoon: true,
  },
  {
    name: "Tickets",
    href: "/tickets",
    icon: TicketsIcon, // tickets / transport
    isComingSoon: false,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: Briefcase, // work/jobs
    isComingSoon: false,
  },
];

export const discover = [
  {
    name: "Places",
    href: "/places",
    icon: MapPin, // locations
  },
  {
    name: "Partners",
    href: "/partners",
    icon: Users, // people / groups
  },
  {
    name: "Support",
    href: "/support",
    icon: LifeBuoy, // help/support
  },
];

export const company = [
  {
    name: "About Us",
    href: "/company/about",
    icon: Info, // info/about
  },
  {
    name: "Careers",
    href: "/company/careers",
    icon: BadgeCheck, // verified roles / jobs
  },
  {
    name: "Blogs",
    href: "/company/blogs",
    icon: Newspaper, // news
  },
  {
    name: "Partners",
    href: "/company/partnerships",
    icon: Handshake, // collaboration
  },
  {
    name: "Press",
    href: "/company/press",
    icon: Mic2Icon, // news
  },
  {
    name: "Privacy Policy",
    href: "/company/privacy",
    icon: ShieldCheck, // protection/security
  },
  {
    name: "Waiting List",
    href: "/waiting-list",
    icon: ListIcon, // protection/security
  },
  {
    name: "Contact Us",
    href: "/company/contact",
    icon: PhoneIcon, // protection/security
  },
];

export const menuSections = [
  { label: "Services", items: services },
  { label: "Discover", items: discover },
  { label: "Company", items: company },
];

export const navItems = [
  {
    label: "Middle East Africa",
    icon: GlobeIcon,
    title: "Choose Your Country",
    description: "Explore different regions across Middle East & Africa.",
  },
  {
    label: "Where to visit",
    icon: MapPinIcon,
    title: "Destinations",
    description: "Find top places to visit, including cities and landmarks.",
  },
  {
    label: "Become partner",
    icon: UsersRoundIcon,
    title: "Partnerships",
    description: "Join us as a partner and grow your business with us.",
  },
  {
    label: "Get help",
    icon: CircleQuestionMarkIcon,
    title: "Help & Support",
    description: "Access our help center, FAQs, and customer support.",
  },
];
export const adminNavItems: TnavItem[] = [
  {
    label: "Explore",
    link: "/",
  },

  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Company",
    link: "/company",
    // comingSoon: true,
  },
  {
    label: "Map",
    link: "/map",
  },
];
export const footerLinks = [
  {
    title: "Newsroom",
    links: [
      { name: "Latest News", href: "/", external: false },
      { name: "Top Stories", href: "/", external: false },
      { name: "Editor's Picks", href: "/", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/", external: false },
      { name: "Careers", href: "/", external: false },
      { name: "Blogs", href: "/", external: false },
      { name: "Press", href: "/", external: false },
      { name: "Contact Us", href: "/", external: false },
    ],
  },
  {
    title: "For Business",
    links: [
      { name: "Create business page", href: "/", external: false },
      { name: "Advertise with Us", href: "/", external: false },
      { name: "Media Kit", href: "/", external: false },
      { name: "Partner with Us", href: "/", external: false },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Newsletter", href: "/", external: false },
      { name: "Mobile App", href: "/", external: false },
      { name: "RSS Feeds", href: "/", external: false },
      { name: "Help Center", href: "/", external: false },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { name: "Terms of Use", href: "/", external: false },
      { name: "Privacy Policy", href: "/", external: false },
      { name: "Cookie Policy", href: "/", external: false },
      { name: "Editorial Policy", href: "/", external: false },
    ],
  },
  {
    title: "Safety",
    links: [
      { name: "Fact-Checking", href: "/", external: false },
      { name: "Corrections", href: "/", external: false },
      { name: "Trust & Transparency", href: "/", external: false },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "/", external: true },
      { name: "Twitter", href: "/", external: true },
      { name: "Instagram", href: "/", external: true },
      { name: "YouTube", href: "/", external: true },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Government Services", href: "/", external: false },
      { name: "Restaurant", href: "/", external: false },
      { name: "Housing", href: "/", external: false },
      { name: "Tourism", href: "/", external: false },
      { name: "Health care", href: "/", external: false },
      { name: "Rwanda Media", href: "/", external: false },
      { name: "Shopping", href: "/", external: false },
      { name: "Tickets", href: "/", external: false },
      { name: "Jobs", href: "/", external: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Media Resources", href: "/", external: false },
      { name: "Author Guidelines", href: "/", external: false },
      { name: "News Archive", href: "/", external: false },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Events", href: "/", external: false },
      { name: "Reader Stories", href: "/", external: false },
      { name: "Submit News", href: "/", external: false },
    ],
  },
];
export const houses: THouse[] = [
  {
    src: "/houses/image-1.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Nyarugenge", "Kigali"],
    title: "Short and Sweet Japanese Carpentry",
    slug: "short-and-sweet-japanese-carpentry",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship. Discover the FB001 Tsugi Shelf - now available in a shorter size.",
  },
  {
    src: "/houses/image-2.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship. Discover the FB001 Tsugi Shelf - now available in a shorter size.",
  },
  {
    src: "/houses/image-3.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-4.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-5.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-6.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-7.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-8.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-9.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
  {
    src: "/houses/image-10.avif",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: ["Musanze", "Rwanda"],
    title: "From Foyers to Hallways",
    slug: "from-foyers-to-hallways",
    href: "/",
    description:
      "A fusion of ingenious Japanese simplicity with traditional Danish craftsmanship.",
  },
];

export const places: TPlace[] = [
  {
    id: 1,
    src: "/places/volcanoes.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Musanze – Northern",
    title: "Volcanoes National Park",
    slug: "volcanoes-national-park",
    description:
      "Home to the majestic mountain gorillas, Volcanoes National Park offers breathtaking hikes through misty forests, volcanic peaks, and unforgettable encounters with Rwanda’s most iconic wildlife.",
  },
  {
    id: 2,
    src: "/places/park.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Nyamagabe – Southern",
    title: "Nyungwe Forest National Park",
    slug: "nyungwe-forest-national-park",
    description:
      "Step into one of Africa’s oldest rainforests, rich with biodiversity, stunning waterfalls, and the world-famous canopy walk, where adventure meets tranquility above the treetops.",
  },
  {
    id: 3,
    src: "/places/kivu.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Rubavu – Western",
    title: "Lake Kivu",
    slug: "lake-kivu",
    description:
      "Relax on the sandy shores of Lake Kivu, a scenic paradise with crystal-clear waters, stunning sunsets, and endless opportunities for boat rides, swimming, and lakeside dining.",
  },
  {
    id: 4,
    src: "/places/nyungwe.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Kayonza – Eastern",
    title: "Akagera National Park",
    slug: "akagera-national-park",
    description:
      "Discover Rwanda’s safari gem, where rolling savannas host the Big Five — lions, elephants, buffalo, rhinos, and leopards — alongside hippos and countless bird species in a true African wilderness.",
  },
  {
    id: 5,
    src: "/places/nyanza.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Nyanza",
    title: "Nyanza",
    slug: "nyanza",
    description:
      "Home to the King's Palace — a reconstruction of the traditional royal residence, a beautifully crafted thatched dwelling shaped like a beehive.",
  },
  {
    id: 6,
    src: "/places/rubavu.jpg",
    otherImages: ["/houses/a.avif", "/houses/b.avif"],
    place: "Kivu",
    title: "Rubavu",
    slug: "rubavu",
    description:
      "A waterfront town on the shores of Lake Kivu, with red sandy beaches, warm clean water, and an easygoing tropical character.",
  },
];

export const faqItems = [
  {
    id: "item-1",
    question: "Do I need a visa to enter Rwanda?",
    answer:
      "Yes, most visitors require a visa to enter Rwanda. However, citizens of all countries can now obtain a visa on arrival at Kigali International Airport and all land borders. An e-visa option is also available online before travel.",
  },
  {
    id: "item-2",
    question: "What is the local currency and can I use foreign cards?",
    answer:
      "The local currency is the Rwandan Franc (RWF). US dollars are also widely accepted for major payments like hotels and tours. Most restaurants, hotels, and supermarkets accept Visa and Mastercard, while mobile money is popular for local transactions.",
  },
  {
    id: "item-3",
    question: "How can I get around the country?",
    answer:
      "Transport options include taxis, buses, and ride-hailing apps like Yego Moto and Move. For intercity travel, express buses and private car hires are reliable. Domestic flights are also available to popular destinations like Kamembe (near Lake Kivu).",
  },
  {
    id: "item-4",
    question: "Are restaurants and food services foreigner-friendly?",
    answer:
      "Yes, Kigali and other major towns have a wide variety of restaurants offering local dishes like brochettes and ugali, as well as international cuisines. Many restaurants cater to dietary needs and English is widely spoken in service establishments.",
  },
  {
    id: "item-5",
    question: "What government services are accessible for foreigners?",
    answer:
      "Foreigners can access services like visa applications, work permits, and business registrations online through the Irembo platform (irembo.gov.rw). Immigration services are also available at Kigali’s Directorate General of Immigration offices.",
  },

  {
    id: "item-6",
    question: "Is Rwanda safe for tourists?",
    answer:
      "Yes, Rwanda is considered one of the safest countries in Africa. The capital Kigali is clean and secure, with friendly locals. Travelers are advised to follow standard safety precautions and respect local customs.",
  },

  {
    id: "item-7",
    question: "Can I use my phone and internet easily in Rwanda?",
    answer:
      "Yes, Rwanda has excellent 4G internet coverage. You can purchase a local SIM card from MTN or Airtel at the airport or in town. Many hotels, cafes, and restaurants also offer free Wi-Fi.",
  },
];

export const blogs = [
  {
    id: 1,
    src: "/blog/image-1.jpeg",
    category: "Travel",
    title: "Top 10 Must-Visit Destinations in Rwanda",
    href: "/blogs/top-destinations-rwanda",
    description:
      "From gorilla trekking in Volcanoes National Park to relaxing on the shores of Lake Kivu, discover the most breathtaking places every traveler should experience in Rwanda.",
  },
  {
    id: 2,
    src: "/blog/image-2.avif",
    category: "Culture",
    title: "Exploring Rwanda’s Rich Cultural Heritage",
    href: "/blogs/rwanda-cultural-heritage",
    description:
      "Dive into Rwanda’s traditions, vibrant dance performances, and local crafts that showcase the resilience and creativity of its people.",
  },
  {
    id: 3,
    src: "/blog/image-3.avif",
    category: "Food",
    title: "A Taste of Rwanda: Traditional Foods You Should Try",
    href: "/blogs/rwanda-traditional-foods",
    description:
      "From brochettes to isombe and fresh fruits, Rwandan cuisine is a delicious blend of flavors that every visitor should experience.",
  },
  {
    id: 4,
    src: "/blog/image-4.avif",
    category: "Adventure",
    title: "Hiking the Land of a Thousand Hills",
    href: "/blogs/rwanda-hiking-trails",
    description:
      "Discover Rwanda’s scenic hiking trails across rolling hills, volcanoes, and forests, perfect for adventure lovers and nature enthusiasts.",
  },
  {
    id: 5,
    src: "/blog/image-5.avif",
    category: "Wildlife",
    title: "Why Rwanda is Africa’s Top Gorilla Trekking Destination",
    href: "/blogs/rwanda-gorilla-trekking",
    description:
      "Learn why Rwanda’s Volcanoes National Park is the ultimate destination for an unforgettable encounter with mountain gorillas.",
  },
  {
    id: 6,
    src: "/convetion.jpg",
    category: "Lifestyle",
    title: "The Modern Growth of Kigali City",
    href: "/blogs/kigali-modern-growth",
    description:
      "Kigali is one of Africa’s cleanest and fastest-growing cities, blending modernity with tradition in a unique and inspiring way.",
  },
  {
    id: 7,
    src: "/blog/image-6.avif",
    category: "Events",
    title: "Experiencing Rwanda’s Umuganda and Community Spirit",
    href: "/blogs/rwanda-umuganda",
    description:
      "Every last Saturday of the month, Rwandans come together for Umuganda, a community service activity that strengthens unity and development.",
  },
  {
    id: 8,
    src: "/blog/image-7.avif",
    category: "Sustainability",
    title: "Rwanda’s Green Revolution and Eco-Tourism",
    href: "/blogs/rwanda-eco-tourism",
    description:
      "Rwanda is a global leader in environmental sustainability, offering eco-friendly tourism experiences that protect both nature and wildlife.",
  },
];

export const testimonials = [
  {
    quote:
      "From the moment I arrived, everything was perfectly arranged. The warm welcome and local insights made my trip unforgettable.",
    name: "Sarah Chen",
    designation: "Visitor from Singapore",
    src: "/testimony/image-1.avif",
  },
  {
    quote:
      "Exploring Rwanda was a dream come true. The team made sure I felt safe, connected, and inspired every single day.",
    name: "Michael Rodriguez",
    designation: "Traveler from USA",
    src: "/testimony/image-2.avif",
  },
  {
    quote:
      "I discovered places I’d never find on my own. The local recommendations and cultural experiences were truly priceless.",
    name: "Emily Watson",
    designation: "Tourist from UK",
    src: "/testimony/image-3.avif",
  },
  {
    quote:
      "Every detail was taken care of — from airport pickup to the most breathtaking excursions. I felt at home in Rwanda.",
    name: "James Kim",
    designation: "Business Visitor from South Korea",
    src: "/testimony/image-4.avif",
  },
  {
    quote:
      "I was amazed by the hospitality and professionalism. Rwanda’s beauty and your guidance made this my best travel experience.",
    name: "Lisa Thompson",
    designation: "Traveler from Canada",
    src: "/testimony/image-5.avif",
  },
];

export const restaurants: TRestaurant[] = [
  {
    id: 1,
    src: "/restaurant/image-1.avif",
    place: "Kigali",
    title: "BOHO Restaurant",
    slug: "boho-restaurant",
    href: "https://www.boho.rw/",
    description:
      "BOHO is a stylish rooftop restaurant in Kimihurura that combines Afro-fusion cuisine with contemporary dining. Guests enjoy an elegant menu inspired by local Rwandan ingredients, creative cocktails, and vibrant cultural influences, all while overlooking breathtaking views of Kigali's skyline.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
  {
    id: 2,
    src: "/restaurant/image-2.avif",
    place: "Kigali",
    title: "Meza Malonga",
    slug: "meza-malonga",
    href: "#",
    description:
      "Led by Chef Dieuveil Malonga, Meza Malonga offers a fine-dining journey that fuses Rwandan flavors with global culinary artistry. Each dish is carefully crafted to highlight African heritage, seasonal produce, and innovative techniques, making the restaurant one of Kigali’s most celebrated dining destinations. The space is intimate and creative, appealing to adventurous food lovers who want to explore Africa’s evolving gastronomy scene.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
  {
    id: 3,
    src: "/restaurant/image-3.avif",
    place: "Kigali",
    title: "Inka Steakhouse",
    slug: "inka-steakhouse",
    href: "#",
    description:
      "Premium steakhouse emphasizing Rwandan beef and a refined atmosphere.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
  {
    id: 4,
    src: "/restaurant/image-4.avif",
    place: "Kigali",
    title: "Heaven Restaurant",
    slug: "heaven-restaurant",
    href: "#",
    description:
      "Open-air terrace restaurant and training center for Rwandan culinary talent.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
  {
    id: 5,
    src: "/restaurant/image-5.avif",
    place: "Kigali",
    title: "La Creola",
    slug: "la-creola",
    href: "#",
    description:
      "Eclectic African-Asian menu in a chic setting above the city.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
  {
    id: 6,
    src: "/restaurant/image-6.avif",
    place: "Kigali",
    title: "Chez Lando",
    slug: "chez-lando",
    href: "https://www.chezlando.com/",
    description:
      "Historic hotel-restaurant known for combining Rwandan tradition with international cuisine.",
    rating: 4,
    reviews: 100,
    // Overview data
    cuisine: "Afro-Fusion",
    priceRange: " $50 - $100",
    popularFor: ["Dinner", "Drinks", "Date Night", "Business Meetings"],
    ambiance: "Upscale Rooftop",
    address: "Kimihurura, KG 7 Ave, Kigali, Rwanda",
    phone: "+250 788 123 456",
    website: "https://www.boho.rw/",
    amenities: [
      "Outdoor Seating",
      "Rooftop Views",
      "WiFi",
      "Reservations",
      "Wheelchair Accessible",
      "Live Music",
      "Private Dining",
      "Valet Parking",
    ],
  },
];

export const menu = {
  food: [
    {
      id: 1,
      image: "/restaurant/image-1.avif",
      title: "Grilled Rwandan Beef Steak",
      description:
        "Tender Rwandan beef steak grilled to perfection, served with seasonal vegetables.",
      price: 15.99,
      ingredients: ["Beef", "Salt", "Pepper", "Garlic", "Vegetables"],
    },
    {
      id: 2,
      image: "/restaurant/image-2.avif",
      title: "Fresh Garden Salad",
      description:
        "A refreshing mix of locally grown greens with a light vinaigrette dressing.",
      price: 8.5,
      ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil", "Vinegar"],
    },
    {
      id: 3,
      image: "/restaurant/image-3.avif",
      title: "Chicken Sandwich",
      description:
        "Grilled chicken sandwich with fresh lettuce, tomato, and homemade mayo.",
      price: 10.0,
      ingredients: ["Chicken", "Bread", "Lettuce", "Tomato", "Mayonnaise"],
    },
  ],
  drinks: [
    {
      id: 1,
      image: "/restaurant/image-4.avif",
      title: "Fresh Mango Juice",
      description: "Cold-pressed fresh mango juice with a hint of lime.",
      price: 4.5,
      ingredients: ["Mango", "Lime", "Water", "Sugar"],
    },
    {
      id: 2,
      image: "/restaurant/image-5.avif",
      title: "Espresso Coffee",
      description:
        "Strong and aromatic espresso made from freshly ground coffee beans.",
      price: 3.0,
      ingredients: ["Coffee Beans", "Water"],
    },
  ],
};

export const restaurantReviews = [
  {
    id: 1,
    body: "Amazing food and warm atmosphere. Truly the best dining spot in Kigali!",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    name: "Eric N.",
    location: "Gasabo - Remera",
  },
  {
    id: 2,
    body: "Delicious meals with fresh ingredients. I always come back for more.",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
    name: "Aline K.",
    location: "Kicukiro - Kagarama",
  },
  {
    id: 3,
    body: "Quick service, friendly staff, and a beautiful view of the city.",
    image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg",
    name: "Jean Claude M.",
    location: "Nyarutarama - Kigali",
  },
  {
    id: 4,
    body: "The flavors are unique and authentic. Highly recommend this place.",
    image: "https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg",
    name: "Diane U.",
    location: "Gasabo - Kimironko",
  },
];
export const companyReviews = [
  {
    id: 1,
    body: "A great place to grow professionally. The management truly values employees and encourages skill development.",
    image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    name: "Eric N.",
    location: "Kigali - Gasabo",
  },
  {
    id: 2,
    body: "Supportive team and flexible work environment. I’ve learned so much since joining the company.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    name: "Aline K.",
    location: "Kigali - Kicukiro",
  },
  {
    id: 3,
    body: "The culture here promotes collaboration and innovation. Every project feels meaningful.",
    image: "https://images.pexels.com/photos/3775537/pexels-photo-3775537.jpeg",
    name: "Jean Claude M.",
    location: "Kigali - Nyarutarama",
  },
  {
    id: 4,
    body: "Excellent leadership and clear career growth opportunities. I’m proud to be part of this team.",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    name: "Diane U.",
    location: "Kigali - Kimironko",
  },
];

export const restaurantPhotos = [
  "/restaurant/image-1.avif",
  "/restaurant/image-2.avif",
  "/restaurant/image-3.avif",
  "/restaurant/image-4.avif",
  "/restaurant/image-5.avif",
  "/restaurant/image-6.avif",
];
export const housingReviews = [
  {
    id: 1,
    body: "Beautiful and well-maintained apartments. The neighborhood is quiet, and the management team is always responsive.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    name: "Eric N.",
    location: "Kigali - Gasabo",
  },
  {
    id: 2,
    body: "I love my new home! The space is modern, clean, and perfectly located near shops and public transport.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    name: "Aline K.",
    location: "Kigali - Kicukiro",
  },
  {
    id: 3,
    body: "Great value for money and excellent customer service. Moving in was easy, and everything was as described.",
    image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg",
    name: "Jean Claude M.",
    location: "Kigali - Nyarutarama",
  },
  {
    id: 4,
    body: "The view from my apartment is stunning! It truly feels like home — safe, clean, and peaceful.",
    image: "https://images.pexels.com/photos/3755512/pexels-photo-3755512.jpeg",
    name: "Diane U.",
    location: "Kigali - Kimironko",
  },
];

export const timetableWeek = [
  { day: "Monday", from: "08:00", to: "17:00" },
  { day: "Tuesday", from: "08:00", to: "17:00" },
  { day: "Wednesday", from: "08:00", to: "17:00" },
  { day: "Thursday", from: "08:00", to: "17:00" },
  { day: "Friday", from: "08:00", to: "17:00" },
  { day: "Saturday", from: "09:00", to: "13:00" }, // optional shorter hours
  { day: "Sunday", from: null, to: null }, // day off
];

export const housingCategories: TCategory[] = [
  { label: "For you", icon: House },
  { label: "Sweet deals", icon: Gift },
  { label: "Families", icon: Users },
  { label: "Ocean", icon: Umbrella },
  { label: "Mountain", icon: Mountain },
  { label: "Forest", icon: Trees },
  { label: "Lake", icon: Waves },
  { label: "Desert", icon: Sun },
  { label: "Urban", icon: Building },
  { label: "Groups", icon: UserSquare2 },
  { label: "Pet-friendly", icon: Dog },
  { label: "National parks", icon: TentTree },
  { label: "Holidays", icon: Gift },
  { label: "Golf", icon: LandPlot },
  { label: "World Cup", icon: Trophy },
  { label: "Remote Work", icon: Monitor },
];

export const restaurantCategories: TCategory[] = [
  { label: "For you", icon: Utensils },
  { label: "Pizza", icon: Pizza },
  { label: "Burgers", icon: Beef },
  { label: "Seafood", icon: Fish },
  { label: "Breakfast", icon: Coffee },
  { label: "Desserts", icon: IceCream2 },
  { label: "Vegetarian", icon: Salad },
  { label: "Drinks", icon: Beer },
  { label: "Cakes", icon: Cake },
  { label: "Soups", icon: Soup },
  { label: "Sandwiches", icon: Sandwich },
  { label: "Cocktails", icon: Martini },
  { label: "Healthy", icon: Apple },
];

export const jobCategories: TCategory[] = [
  { label: "For you", icon: Briefcase },
  { label: "Technology", icon: CodeIcon },
  { label: "Remote Jobs", icon: LaptopIcon },
  { label: "Engineering", icon: WrenchIcon },
  { label: "Healthcare", icon: StethoscopeIcon },
  { label: "Education", icon: GraduationCapIcon },
  { label: "Design & Creative", icon: PaletteIcon },
  { label: "Business & Finance", icon: WalletIcon },
  { label: "Construction", icon: HammerIcon },
  { label: "Logistics & Transport", icon: TruckIcon },
  { label: "Hospitality", icon: Building2 },
  { label: "Sales & Marketing", icon: ShoppingBagIcon },
  { label: "Human Resources", icon: Users },
  { label: "Security", icon: ShieldIcon },
  { label: "International", icon: Globe2Icon },
];

export const tourismCategories = [
  { label: "For you", icon: HouseIcon },
  { label: "Historical Sites", icon: Landmark },
  { label: "Museums", icon: Building },
  { label: "Parks", icon: Trees },
  { label: "National Parks", icon: TentTree },
  { label: "Mountains", icon: Mountain },
  { label: "Beaches", icon: Waves },
  { label: "Deserts", icon: Sun },
  { label: "Castles & Palaces", icon: Castle },
  { label: "Industrial Tours", icon: Factory },
  { label: "Railway & Transport", icon: Train },
  { label: "Amusement Parks", icon: FerrisWheel },
  { label: "Theaters & Shows", icon: Theater },
  { label: "Religious Sites", icon: Church },
  { label: "Monuments", icon: LandmarkIcon },
];

export const jobs: Tjob[] = [
  {
    title: "Data Entry Specialist",
    slug: "data-entry-specialist",
    company: "Better Flow Services",
    rating: 5,
    location: "Kigali, Rwanda",
    salary: {
      min: 12,
      max: 14,
      currency: "USD",
      type: "Per Hour",
      note: "Employer provided",
    },
    isBookmarked: false,
    applyType: "Easy Apply",
    posted: "21d",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    company: "TechNova Ltd",
    rating: 4.8,
    location: "Nairobi, Kenya",
    salary: {
      min: 1500,
      max: 2000,
      currency: "USD",
      type: "Per Month",
      note: "Negotiable",
    },
    isBookmarked: false,
    applyType: "Easy Apply",
    posted: "10d",
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    company: "Creative Hub",
    rating: 4.5,
    location: "Kampala, Uganda",
    salary: {
      min: 1000,
      max: 1300,
      currency: "USD",
      type: "Per Month",
      note: "Employer provided",
    },
    isBookmarked: true,
    applyType: "Apply Now",
    posted: "5d",
  },
  {
    title: "Software Engineer",
    slug: "software-engineer",
    company: "CloudWorks",
    rating: 4.9,
    location: "Lagos, Nigeria",
    salary: {
      min: 2000,
      max: 2800,
      currency: "USD",
      type: "Per Month",
      note: "Employer provided",
    },
    isBookmarked: false,
    applyType: "Easy Apply",
    posted: "2d",
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    company: "DataSync Africa",
    rating: 4.6,
    location: "Cape Town, South Africa",
    salary: {
      min: 1800,
      max: 2500,
      currency: "USD",
      type: "Per Month",
      note: "Negotiable",
    },
    isBookmarked: false,
    applyType: "Apply Now",
    posted: "14d",
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    company: "Bright Media",
    rating: 4.3,
    location: "Accra, Ghana",
    salary: {
      min: 900,
      max: 1200,
      currency: "USD",
      type: "Per Month",
      note: "Employer provided",
    },
    isBookmarked: true,
    applyType: "Easy Apply",
    posted: "7d",
  },
  {
    title: "Customer Support Associate",
    slug: "customer-support-associate",
    company: "Global Connect",
    rating: 4.2,
    location: "Dar es Salaam, Tanzania",
    salary: {
      min: 10,
      max: 12,
      currency: "USD",
      type: "Per Hour",
      note: "Employer provided",
    },
    isBookmarked: false,
    applyType: "Easy Apply",
    posted: "3d",
  },
];
const eventImages = [
  "/images/tiq-1.jpeg",
  "/images/tiq-2.jpeg",
  "/images/tiq-3.jpeg",
  "/images/tiq-4.jpeg",
];
export const events: TEvent[] = [
  {
    src: "/images/tiq-1.avif",
    otherImages: eventImages,
    place: ["Nyarugenge", "Kigali"],
    title: "Kigali Cultural Festival",
    slug: "kigali-cultural-festival",
    href: "/",
    description:
      "Celebrate Rwanda’s heritage with music, dance, and local cuisine in the heart of Kigali.",
  },
  {
    src: "/images/tiq-2.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Volcanoes Marathon",
    slug: "volcanoes-marathon",
    href: "/",
    description:
      "An adventurous marathon experience through Musanze’s scenic volcanic landscapes.",
  },
  {
    src: "/images/tiq-3.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Mountain Gorilla Conservation Forum",
    slug: "gorilla-conservation-forum",
    href: "/",
    description:
      "Join experts and conservationists to discuss the future of Rwanda’s mountain gorillas.",
  },
  {
    src: "/images/tiq-4.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Rwanda Coffee Expo",
    slug: "rwanda-coffee-expo",
    href: "/",
    description:
      "Discover Rwanda’s world-class coffee industry with tastings, workshops, and networking.",
  },
  {
    src: "/images/tiq-1.avif",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Traditional Dance Night",
    slug: "traditional-dance-night",
    href: "/",
    description:
      "Experience vibrant performances of Rwanda’s traditional Intore dances under the stars.",
  },
  {
    src: "/images/tiq-2.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Rwanda Film Week",
    slug: "rwanda-film-week",
    href: "/",
    description:
      "A showcase of African cinema featuring screenings, panels, and emerging filmmakers.",
  },
  {
    src: "/images/tiq-3.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Artisans Market Fair",
    slug: "artisans-market-fair",
    href: "/",
    description:
      "Support local artisans and explore handmade crafts, jewelry, and Rwandan fashion.",
  },
  {
    src: "/images/tiq-4.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Rwanda Tech Summit",
    slug: "rwanda-tech-summit",
    href: "/",
    description:
      "A gathering of innovators and entrepreneurs shaping the future of technology in Africa.",
  },
  {
    src: "/images/tiq-1.avif",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Wildlife Photography Workshop",
    slug: "wildlife-photography-workshop",
    href: "/",
    description:
      "Learn wildlife photography techniques while exploring Rwanda’s breathtaking parks.",
  },
  {
    src: "/images/tiq-2.jpeg",
    otherImages: eventImages,
    place: ["Musanze", "Rwanda"],
    title: "Green Innovation Expo",
    slug: "green-innovation-expo",
    href: "/",
    description:
      "Discover sustainable solutions and eco-friendly technologies from local and global innovators.",
  },
];
