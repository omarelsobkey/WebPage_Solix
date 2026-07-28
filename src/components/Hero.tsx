import { Link } from "@/lib/navigation";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-solix-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-3xl text-center">
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
            className="rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-500"
          >
            {t("ctaServices")}
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t("ctaContact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
