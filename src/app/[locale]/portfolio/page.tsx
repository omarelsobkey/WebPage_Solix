import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { portfolioItems } from "@/lib/constants";
import PortfolioGallery from "@/components/PortfolioGallery";
import Reveal from "@/components/Reveal";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");
  const items = await getTranslations("portfolio.items");

  const titles: Record<string, string> = {};
  const descriptions: Record<string, string> = {};
  for (const item of portfolioItems) {
    titles[item.id] = items(`${item.id}.title`);
    descriptions[item.id] = items(`${item.id}.desc`);
  }

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-solix-black px-6 pt-24">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]">
          <Image
            src="/logo/logo.png"
            alt=""
            width={400}
            height={128}
            className="h-auto w-48 sm:w-64 md:w-80"
            priority
          />
        </div>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-solix-gold/60">
              Our Work
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
              {t("title")}{" "}
              <span className="text-solix-gold">{t("titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="clip-diagonal-both -mt-16 bg-solix-cream px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          {portfolioItems.length > 0 ? (
            <PortfolioGallery items={portfolioItems} titles={titles} descriptions={descriptions} />
          ) : (
            <Reveal>
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white/60 py-20 text-center backdrop-blur-sm">
                <p className="text-gray-400">{t("empty")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
