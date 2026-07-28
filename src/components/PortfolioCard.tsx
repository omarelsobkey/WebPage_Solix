import Image from "next/image";
import type { PortfolioItem } from "@/lib/constants";

export default function PortfolioCard({
  item,
  title,
  description,
}: {
  item: PortfolioItem;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[3/2] overflow-hidden bg-solix-cream">
        <Image
          src={item.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-solix-black">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
