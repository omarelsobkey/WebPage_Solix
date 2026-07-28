export const contactInfo = {
  phone: "+20 100 123 4567",
  email: "info@solix-eg.com",
  address: "Cairo, Egypt",
};

export interface PortfolioItem {
  id: string;
  image: string;
}

/**
 * Add new projects here. Place images in `public/portfolio/` folder.
 * Each item needs a matching translation in `services.portfolio.items.{id}`
 * inside `messages/ar.json` and `messages/en.json`.
 */
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
