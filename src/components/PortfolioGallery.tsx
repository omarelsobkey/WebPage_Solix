"use client";

import type { PortfolioItem } from "@/lib/constants";
import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";
import PortfolioModal from "./PortfolioModal";
import { useState } from "react";

export default function PortfolioGallery({
  items,
  titles,
  descriptions,
}: {
  items: PortfolioItem[];
  titles: Record<string, string>;
  descriptions: Record<string, string>;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const selected = items.find((i) => i.id === selectedId) ?? null;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <PortfolioCard
            key={item.id}
            item={item}
            title={titles[item.id]}
            description={descriptions[item.id]}
            index={i}
            onOpen={() => {
              setSelectedId(item.id);
              setImageIndex(0);
            }}
          />
        ))}
      </div>

      {selected && (
        <PortfolioModal
          item={selected}
          title={titles[selected.id]}
          description={descriptions[selected.id]}
          currentIndex={imageIndex}
          onClose={() => setSelectedId(null)}
          onPrev={() =>
            setImageIndex((prev) =>
              prev === 0 ? selected.images.length - 1 : prev - 1,
            )
          }
          onNext={() =>
            setImageIndex((prev) =>
              prev === selected.images.length - 1 ? 0 : prev + 1,
            )
          }
        />
      )}
    </>
  );
}
