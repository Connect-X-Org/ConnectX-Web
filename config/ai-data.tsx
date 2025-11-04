export type TmockRestaurant = {
  id: string;
  title: string;
  slug: string;
  place: string;
  src: string;
  description: string;
  cuisine: string;
};
export const mockRestaurants: TmockRestaurant[] = [
  {
    id: "1",
    title: "Heaven Restaurant",
    slug: "heaven-restaurant",
    place: "Kigali City Center",
    src: "/restaurant/image-1.avif",
    description: "Fine dining with panoramic city views",
    cuisine: "International",
  },
  {
    id: "2",
    title: "Repub Lounge",
    slug: "repub-lounge",
    place: "Kimihurura, Kigali",
    src: "/restaurant/image-2.avif",
    description: "Modern lounge with fusion cuisine",
    cuisine: "Fusion",
  },
  {
    id: "3",
    title: "Khana Khazana",
    slug: "khana-khazana",
    place: "Kacyiru, Kigali",
    src: "/restaurant/image-3.avif",
    description: "Authentic Indian cuisine",
    cuisine: "Indian",
  },
  {
    id: "4",
    title: "Zaaffran",
    slug: "zaaffran",
    place: "Nyarutarama, Kigali",
    src: "/restaurant/image-4.avif",
    description: "Premium Indian dining experience",
    cuisine: "Indian",
  },
  {
    id: "5",
    title: "La Creola",
    slug: "la-creola",
    place: "Remera, Kigali",
    src: "/restaurant/image-5.avif",
    description: "Traditional Rwandan cuisine",
    cuisine: "Rwandan",
  },
  {
    id: "6",
    title: "Chez Lando",
    slug: "chez-lando",
    place: "Kigali Gishushu",
    src: "/restaurant/image-6.avif",
    description: "Elegant French cuisine",
    cuisine: "French",
  },
];
