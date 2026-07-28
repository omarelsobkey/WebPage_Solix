import { setRequestLocale, getTranslations } from "next-intl/server";
import { portfolioItems } from "@/lib/constants";
import PortfolioCard from "@/components/PortfolioCard";
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

  return (
    <>
      <section className="bg-solix-black px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("title")}{" "}
              <span className="text-solix-gold">{t("titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-solix-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {portfolioItems.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, i) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  title={items(`${item.id}.title`)}
                  description={items(`${item.id}.desc`)}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="rounded-lg border border-dashed border-gray-300 bg-white py-20 text-center">
                <p className="text-gray-400">{t("empty")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
