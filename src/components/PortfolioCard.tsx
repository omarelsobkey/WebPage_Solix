import Image from "next/image";
import type { PortfolioItem } from "@/lib/constants";
import Reveal from "./Reveal";

export default function PortfolioCard({
  item,
  title,
  description,
  index = 0,
}: {
  item: PortfolioItem;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 100}>
      <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
        <div className="relative aspect-[3/2] overflow-hidden bg-solix-cream">
          <Image
            src={item.image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-solix-black/0 transition-colors duration-300 group-hover:bg-solix-black/10" />
        </div>
        <div className="p-5 transition-colors duration-300 group-hover:bg-solix-cream/50">
          <h3 className="font-semibold text-solix-black">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
