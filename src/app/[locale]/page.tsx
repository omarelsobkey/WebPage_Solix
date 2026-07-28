import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { serviceIcons } from "@/components/SolarIcons";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const s = await getTranslations("services.list");

  return (
    <>
      <Hero />

      <section className="bg-solix-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-solix-black sm:text-4xl">
                {t("services.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-gray-600">
                {t("services.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => {
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

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-block rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-yellow-500 hover:shadow-lg hover:shadow-solix-gold/30 active:scale-95"
              >
                {t("services.viewAll")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-solix-black px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-yellow-500 hover:shadow-lg hover:shadow-solix-gold/30 active:scale-95"
              >
                {t("cta.button")}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
