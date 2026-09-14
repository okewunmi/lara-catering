export type GalleryItem = {
  id: string;
  title: string;
  category: "Cakes" | "Small Chops" | "Native Dishes" | "Drinks" | "Pastries" | "Events";
  imageUrl: string;
  caption?: string;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  startingPrice?: number;
  category: string;
};

export type Testimonial = {
  id: string;
  customerName: string;
  quote: string;
  eventType?: string;
};
