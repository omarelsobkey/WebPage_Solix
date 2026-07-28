export const contactInfo = {
  sales: [
    { label: "+20 100 088 8763", wa: "https://wa.me/201000888763", tel: "+201000888763" },
    { label: "+20 106 082 8072", wa: "https://wa.me/201060828072", tel: "+201060828072" },
  ],
  support: [
    { label: "+20 106 082 8072", wa: "https://wa.me/201060828072", tel: "+201060828072" },
  ],
  email: "",
  address: ["القاهرة", "المنيا", "المغرة", "المنوفية"],
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/solixpower/" },
  { label: "Facebook", href: "https://www.facebook.com/solixpower/" },
  { label: "Instagram", href: "https://www.instagram.com/solixpower/" },
  { label: "TikTok", href: "https://www.tiktok.com/@solixpower" },
];

export interface PortfolioItem {
  id: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "villa-6-october",
    image: "/portfolio/placeholder.svg",
  },
  {
    id: "commercial-maadi",
    image: "/portfolio/placeholder.svg",
  },
  {
    id: "factory-6-october",
    image: "/portfolio/placeholder.svg",
  },
];
