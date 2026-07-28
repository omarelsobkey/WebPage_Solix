import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  index = 0,
}: {
  title: string;
  description: string;
  features: string[];
  icon?: ReactNode;
  index?: number;
}) {
  return (
    <Reveal delay={index * 100}>
      <div
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 p-7 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-solix-gold/5"
        data-hover
      >
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-solix-gold/5 transition-all duration-500 group-hover:scale-[3]" />

        {icon && (
          <div className="relative mb-5 transition-all duration-500 group-hover:scale-110 group-hover:animate-float">
            {icon}
          </div>
        )}

        <h3 className="relative text-lg font-semibold text-solix-black">
          {title}
        </h3>

        <p className="relative mt-3 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <ul className="relative mt-5 space-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-500"
            >
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-solix-gold transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_#D4AF37]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
