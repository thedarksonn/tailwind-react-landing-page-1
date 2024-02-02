import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigBurger1,
  bigBurger2,
  bigBurger3,
  customer1,
  customer2,
  promo4,
  promo5,
  promo6,
  promo7,
  thumbnailBurger1,
  thumbnailBurger2,
  thumbnailBurger3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const burgers = [
  {
    thumbnail: thumbnailBurger1,
    bigBurger: bigBurger1,
  },
  {
    thumbnail: thumbnailBurger2,
    bigBurger: bigBurger2,
  },
  {
    thumbnail: thumbnailBurger3,
    bigBurger: bigBurger3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: promo4,
    name: "Chizzy Pizzi-1",
    price: "$200.20",
  },
  {
    imgURL: promo5,
    name: "Chizzy Pizzi-2",
    price: "$210.20",
  },
  {
    imgURL: promo6,
    name: "Chizzy Pizzi-3",
    price: "$220.20",
  },
  {
    imgURL: promo7,
    name: "Chizzy Pizzi-4",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Lorem Ipsum",
    rating: 4.5,
    feedback:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat magni reiciendis totam dolor!!",
  },
  {
    imgURL: customer2,
    customerName: "Ipsump Lorem",
    rating: 4.5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat magni reiciendis totam dolor!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Luffy Captain", link: "/" },
      { name: "Zoro Right Hand", link: "/" },
      { name: "Sanji Left Hand", link: "/" },
      { name: "Osup Snipper", link: "/" },
      { name: "Chopper Doctor", link: "/" },
      { name: "Franky Ship Wrek", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@strawhat.com", link: "mailto:customer@strawhat.com" },
      { name: "+1111111111111", link: "tel:+111111111111111" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
