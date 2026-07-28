import Image from "next/image";
import type { PortfolioItem } from "@/lib/constants";
import Reveal from "./Reveal";

export default function PortfolioCard({
  item,
  title,
  description,
  index = 0,
  onOpen,
}: {
  item: PortfolioItem;
  title: string;
  description: string;
  index?: number;
  onOpen?: () => void;
}) {
  return (
    <Reveal delay={index * 100}>
      <button
        onClick={onOpen}
        className="group w-full text-left relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-solix-gold/5"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-solix-cream">
          <Image
            src={item.images[0]}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="relative p-6">
          <h3 className="font-semibold text-solix-black">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </button>
    </Reveal>
  );
}
