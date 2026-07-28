"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/constants";

export default function PortfolioModal({
  item,
  title,
  description,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem;
  title: string;
  description: string;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!mounted) return null;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative mx-2 flex h-[90vh] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:mx-4 sm:max-h-[85vh] sm:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5">
          <div className="min-w-0 flex-1 pr-2">
            <h3 className="truncate text-sm font-semibold text-solix-black">
              {title}
            </h3>
            {description && (
              <p className="mt-0.5 truncate text-xs text-gray-500">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative grid min-h-0 flex-1 grid-cols-1 grid-rows-1 overflow-hidden bg-gray-100">
          {item.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-solix-black shadow-lg transition-all hover:bg-white sm:h-9 sm:w-9"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <Image
            src={item.images[currentIndex]}
            alt={`${title} — ${currentIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 900px"
            className="object-contain"
            priority={currentIndex === 0}
          />

          {item.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-solix-black shadow-lg transition-all hover:bg-white sm:h-9 sm:w-9"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {item.images.length > 1 && (
          <div className="flex shrink-0 items-center justify-center gap-1.5 border-t border-gray-200 px-5 py-3">
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

  return createPortal(content, document.body);
}
