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
    title: "The Hut",
    slug: "the-hut",
    place: "Remera, Kigali",
    src: "/restaurant/image-5.avif",
    description: "Traditional Rwandan cuisine",
    cuisine: "Rwandan",
  },
  {
    id: "6",
    title: "Poivre Noir",
    slug: "poivre-noir",
    place: "Kigali Heights",
    src: "/restaurant/image-6.avif",
    description: "Elegant French cuisine",
    cuisine: "French",
  },
];

export const mockPlaces = [
  {
    id: "1",
    title: "Kigali Serena Hotel",
    slug: "kigali-serena-hotel",
    place: "Kigali City Center",
    src: "/images/serena-hotel.jpg",
    description: "5-star luxury hotel in the heart of Kigali",
    type: "hotel",
  },
  {
    id: "2",
    title: "Volcanoes National Park",
    slug: "volcanoes-national-park",
    place: "Musanze",
    src: "/images/volcanoes-park.jpg",
    description: "Home to mountain gorillas and golden monkeys",
    type: "attraction",
  },
  {
    id: "3",
    title: "Kigali Genocide Memorial",
    slug: "genocide-memorial",
    place: "Gisozi, Kigali",
    src: "/images/memorial.jpg",
    description: "Historic memorial and museum",
    type: "attraction",
  },
];
