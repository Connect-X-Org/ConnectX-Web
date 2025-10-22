export type Food = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  ingredients: string[];
};

export type RestaurantWithOverviewType = {
  id: number;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  cuisine: string;
  priceRange: string;
  popularFor: string[];
  ambiance: string;
  address: string;
  phone: string;
  website: string;
  amenities: string[];
};

export type THouse = {
  src: string;
  otherImages: string[];
  place: string[];
  title: string;
  slug: string;
  href: string;
  description: string;
};
export type TEvent = {
  src: string;
  otherImages: string[];
  place: string[];
  title: string;
  slug: string;
  href: string;
  description: string;
};
export type TRestaurant = {
  id: number;
  src: string;
  place: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  rating: number;
  reviews: number;
  cuisine: string;
  priceRange: string;
  popularFor: string[];
  ambiance: string;
  address: string;
  phone: string;
  website: string;
  amenities: string[];
};

export type TCategory = {
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  > | null;
};

export type TPlace = {
  id: number;
  src: string;
  place: string;
  title: string;
  href: string;
  description: string;
};

export type Tjob = {
  title: string;
  slug: string;
  company: string;
  rating: number;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    type: string;
    note: string;
  };
  isBookmarked: boolean;
  applyType: string;
  posted: string;
};

export type TnavItem = {
  label: string;
  link: string;
  comingSoon?: boolean | undefined;
};
