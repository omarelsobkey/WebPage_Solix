"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/constants";

export default function PortfolioModal({
  item,
  title,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem;
  title: string;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
          <h3 className="text-sm font-semibold text-solix-black">{title}</h3>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative flex items-center">
          {item.images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-solix-black shadow-lg transition-all hover:bg-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <div className="relative aspect-[16/10] w-[80vw] max-w-[900px] bg-gray-100">
            <Image
              src={item.images[currentIndex]}
              alt={`${title} — ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {item.images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-solix-black shadow-lg transition-all hover:bg-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {item.images.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 border-t border-gray-200 px-5 py-3">
            {item.images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIndex ? "w-5 bg-solix-gold" : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
