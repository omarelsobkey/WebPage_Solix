import Image from "next/image";
import { Link } from "@/lib/navigation";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-solix-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)] animate-pulse-glow" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03] sm:opacity-[0.04]">
        <Image
          src="/logo/logo.png"
          alt=""
          width={500}
          height={160}
          className="h-auto w-48 sm:w-72 md:w-96 lg:w-[500px]"
          priority
        />
      </div>

      <div className="absolute inset-0 grid grid-cols-6 gap-4 p-8 opacity-[0.04] sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm border border-solix-gold animate-panel-rotate"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${6 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-solix-gold/60">
          SOLIX Power
        </p>

        <h1 className="flex flex-col text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          <span className="overflow-hidden">
            <span className="inline-block animate-fade-in-up text-white">
              {t("title")}
            </span>
          </span>
          <span className="overflow-hidden" style={{ animationDelay: "0.3s" }}>
            <span
              className="inline-block animate-fade-in-up text-solix-gold"
              style={{ animationDelay: "0.3s" }}
            >
              {t("titleHighlight")}
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.97]"
          >
            <span className="relative z-10">{t("ctaServices")}</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-solix-gold/50 active:scale-[0.97]"
          >
            <span className="relative z-10">{t("ctaContact")}</span>
            <span className="absolute inset-0 translate-x-full bg-solix-gold/10 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" className="text-white/40">
            <rect x="1" y="1" width="14" height="22" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-float" style={{ animationDuration: "2s" }} />
          </svg>
        </div>
      </div>
    </section>
  );
}
