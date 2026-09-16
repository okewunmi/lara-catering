// /**
//  * Placeholder content so the site is browsable before Supabase is wired up.
//  * Replace calls to this file with real Supabase queries once the
//  * `gallery_items` / `services` / `testimonials` tables have data
//  * (see supabase/schema.sql and the admin dashboard).
//  */
// import { GalleryItem, Service, Testimonial } from "@/lib/types";

// export const galleryItems: GalleryItem[] = [
//   {
//     id: "1",
//     title: "PAW Patrol birthday cake",
//     category: "Cakes",
//     imageUrl: "/placeholder/cake-1.svg",
//     caption: "Two-tier buttercream cake for a PAW Patrol themed first birthday",
//   },
//   {
//     id: "2",
//     title: "Puff-puff & spring rolls",
//     category: "Small Chops",
//     imageUrl: "/placeholder/small-chops-1.svg",
//     caption: "Assorted small chops with pepper sauce, served in cups for easy mingling",
//   },
//   {
//     id: "3",
//     title: "Party jollof & grilled fish",
//     category: "Native Dishes",
//     imageUrl: "/placeholder/jollof-1.svg",
//     caption: "Smoky party jollof rice with pepper-grilled croaker",
//   },
//   {
//     id: "4",
//     title: "Chilled zobo",
//     category: "Drinks",
//     imageUrl: "/placeholder/zobo-1.svg",
//     caption: "House-blend zobo, bottled and chilled for events",
//   },
//   {
//     id: "5",
//     title: "Meat pies & burger buns",
//     category: "Pastries",
//     imageUrl: "/placeholder/pastries-1.svg",
//     caption: "Freshly baked meat pies alongside soft burger buns",
//   },
//   {
//     id: "6",
//     title: "First birthday setup",
//     category: "Events",
//     imageUrl: "/placeholder/event-1.svg",
//     caption: "Baby Shark themed first birthday cake and dessert table",
//   },
// ];

// export const services: Service[] = [
//   {
//     id: "1",
//     name: "Custom Celebration Cakes",
//     slug: "cakes",
//     description:
//       "Birthday, wedding, and anniversary cakes designed around your theme, from single-tier to multi-tier.",
//     startingPrice: 25000,
//     category: "Cakes",
//   },
//   {
//     id: "2",
//     name: "Small Chops Packages",
//     slug: "small-chops",
//     description:
//       "Puff-puff, spring rolls, samosa, and more — sold per portion or as a full party package.",
//     startingPrice: 1500,
//     category: "Small Chops",
//   },
//   {
//     id: "3",
//     name: "Buffet & Native Dishes",
//     slug: "buffet",
//     description:
//       "Jollof rice, fried rice, grilled fish/chicken, and swallow options for full-service buffets.",
//     startingPrice: 3500,
//     category: "Buffet",
//   },
//   {
//     id: "4",
//     name: "Zobo & Drinks",
//     slug: "drinks",
//     description: "House-made zobo and other chilled drinks, bottled for your event.",
//     startingPrice: 800,
//     category: "Drinks",
//   },
//   {
//     id: "5",
//     name: "Pastries",
//     slug: "pastries",
//     description: "Meat pies, sausage rolls, and burger buns baked fresh to order.",
//     startingPrice: 500,
//     category: "Pastries",
//   },
//   {
//     id: "6",
//     name: "Shawarma",
//     slug: "shawarma",
//     description: "Freshly rolled shawarma, available as a live station for events.",
//     startingPrice: 2000,
//     category: "Shawarma",
//   },
// ];

// export const testimonials: Testimonial[] = [
//   {
//     id: "1",
//     customerName: "Funmi A.",
//     quote:
//       "Lara handled my son's first birthday from cake to small chops — everything arrived on time and the guests kept asking who catered.",
//     eventType: "First birthday",
//   },
//   {
//     id: "2",
//     customerName: "Tunde O.",
//     quote:
//       "The jollof rice and grilled fish were the highlight of our office end-of-year party. Already booked for next year.",
//     eventType: "Corporate event",
//   },
// ];






/**
 * Placeholder content so the site is browsable before Supabase is wired up.
 * Replace calls to this file with real Supabase queries once the
 * `gallery_items` / `services` / `testimonials` tables have data
 * (see supabase/schema.sql and the admin dashboard).
 */
import { GalleryItem, Service, Testimonial } from "@/lib/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "PAW Patrol birthday cake",
    category: "Cakes",
    imageUrl: "/gallery/paw-patrol-cake.jpg",
    caption: "Two-tier buttercream cake for a PAW Patrol themed first birthday",
  },
  {
    id: "2",
    title: "Small chops in cups",
    category: "Small Chops",
    imageUrl: "/gallery/small-chops-cups.jpg",
    caption: "Assorted small chops with pepper sauce, served in cups for easy mingling",
  },
  {
    id: "3",
    title: "Party jollof & grilled fish",
    category: "Native Dishes",
    imageUrl: "/gallery/party-jollof-fish.jpg",
    caption: "Smoky party jollof rice with pepper-grilled croaker",
  },
  {
    id: "4",
    title: "Chilled zobo",
    category: "Drinks",
    imageUrl: "/gallery/zobo-bottled.jpg",
    caption: "House-blend zobo, bottled and chilled for events",
  },
  {
    id: "5",
    title: "Meat pies & burger buns",
    category: "Pastries",
    imageUrl: "/gallery/meatpies-buns.jpg",
    caption: "Freshly baked meat pies alongside soft burger buns",
  },
  {
    id: "6",
    title: "First birthday setup",
    category: "Events",
    imageUrl: "/gallery/first-birthday-setup.jpg",
    caption: "Baby Shark themed first birthday cake and dessert table",
  },
  {
    id: "7",
    title: "Bottled yogurt",
    category: "Drinks",
    imageUrl: "/gallery/yogurt-bottled.jpg",
    caption: "Homemade yogurt, bottled fresh for parties and resale",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Custom Celebration Cakes",
    slug: "cakes",
    description:
      "Birthday, wedding, and anniversary cakes designed around your theme, from single-tier to multi-tier.",
    startingPrice: 25000,
    category: "Cakes",
  },
  {
    id: "2",
    name: "Small Chops Packages",
    slug: "small-chops",
    description:
      "Puff-puff, spring rolls, samosa, and more — sold per portion or as a full party package.",
    startingPrice: 1500,
    category: "Small Chops",
  },
  {
    id: "3",
    name: "Buffet & Native Dishes",
    slug: "buffet",
    description:
      "Jollof rice, fried rice, grilled fish/chicken, and swallow options for full-service buffets.",
    startingPrice: 3500,
    category: "Buffet",
  },
  {
    id: "4",
    name: "Zobo & Drinks",
    slug: "drinks",
    description: "House-made zobo and other chilled drinks, bottled for your event.",
    startingPrice: 800,
    category: "Drinks",
  },
  {
    id: "5",
    name: "Pastries",
    slug: "pastries",
    description: "Meat pies, sausage rolls, and burger buns baked fresh to order.",
    startingPrice: 500,
    category: "Pastries",
  },
  {
    id: "6",
    name: "Shawarma",
    slug: "shawarma",
    description: "Freshly rolled shawarma, available as a live station for events.",
    startingPrice: 2000,
    category: "Shawarma",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    customerName: "Funmi A.",
    quote:
      "Lara handled my son's first birthday from cake to small chops — everything arrived on time and the guests kept asking who catered.",
    eventType: "First birthday",
  },
  {
    id: "2",
    customerName: "Tunde O.",
    quote:
      "The jollof rice and grilled fish were the highlight of our office end-of-year party. Already booked for next year.",
    eventType: "Corporate event",
  },
];
