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
      <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
        {icon && (
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-float">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-solix-black">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-solix-gold transition-transform duration-300 group-hover:scale-125" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
