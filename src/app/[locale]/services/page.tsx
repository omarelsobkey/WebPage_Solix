import { setRequestLocale, getTranslations } from "next-intl/server";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { serviceIcons } from "@/components/SolarIcons";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const s = await getTranslations("services.list");

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4].map((i) => {
              const Icon = serviceIcons[i];
              return (
                <ServiceCard
                  key={i}
                  index={i}
                  title={s(`${i}.title`)}
                  description={s(`${i}.desc`)}
                  features={[
                    s(`${i}.features.0`),
                    s(`${i}.features.1`),
                    s(`${i}.features.2`),
                  ]}
                  icon={<Icon />}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
