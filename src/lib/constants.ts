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
  folder: string;
  images: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "70kw-maghra",
    folder: "01",
    images: [
      "/portfolio/01/image-1.jpg",
      "/portfolio/01/image-2.jpg",
      "/portfolio/01/image-3.jpg",
      "/portfolio/01/image-4.jpg",
      "/portfolio/01/image-5.jpg",
      "/portfolio/01/image-6.jpg",
      "/portfolio/01/image-7.jpg",
      "/portfolio/01/image-8.jpg",
      "/portfolio/01/image-9.jpg",
      "/portfolio/01/image-10.jpg",
      "/portfolio/01/image-11.jpg",
      "/portfolio/01/image-12.jpg",
      "/portfolio/01/image-13.jpg",
      "/portfolio/01/image-14.jpg",
      "/portfolio/01/image-15.jpg",
      "/portfolio/01/image-16.jpg",
      "/portfolio/01/image-17.jpg",
      "/portfolio/01/image-18.jpg",
      "/portfolio/01/image-19.jpg",
      "/portfolio/01/image-20.jpg",
      "/portfolio/01/image-21.jpg",
      "/portfolio/01/image-22.jpg",
      "/portfolio/01/image-23.jpg",
      "/portfolio/01/image-24.jpg",
      "/portfolio/01/image-25.jpg",
      "/portfolio/01/image-26.jpg",
      "/portfolio/01/image-27.jpg",
    ],
  },
  {
    id: "150kw-menya",
    folder: "02",
    images: [
      "/portfolio/02/image-1.jpg",
      "/portfolio/02/image-2.jpg",
      "/portfolio/02/image-3.jpg",
      "/portfolio/02/image-4.jpg",
      "/portfolio/02/image-5.jpg",
      "/portfolio/02/image-6.jpg",
      "/portfolio/02/image-7.jpg",
      "/portfolio/02/image-8.jpg",
      "/portfolio/02/image-9.jpg",
      "/portfolio/02/image-10.jpg",
      "/portfolio/02/image-11.jpg",
      "/portfolio/02/image-12.jpg",
    ],
  },
];
