import { Link } from "@/lib/navigation";
import { getTranslations } from "next-intl/server";
import { SunIcon } from "./SolarIcons";

export default async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-solix-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] animate-pulse-glow" />

      <div className="absolute left-1/4 top-12 hidden h-32 w-32 animate-float opacity-10 sm:block">
        <SunIcon className="h-full w-full" />
      </div>
      <div className="absolute bottom-20 right-1/4 hidden h-20 w-20 animate-float opacity-10 sm:block" style={{ animationDelay: "2s" }}>
        <SunIcon className="h-full w-full" />
      </div>

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute hidden h-1 w-1 rounded-full bg-solix-gold sm:block"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            opacity: 0.15 + Math.random() * 0.2,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("title")}{" "}
          <span className="text-solix-gold">{t("titleHighlight")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/services"
            className="rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-yellow-500 hover:shadow-lg hover:shadow-solix-gold/30 active:scale-95"
          >
            {t("ctaServices")}
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            {t("ctaContact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
