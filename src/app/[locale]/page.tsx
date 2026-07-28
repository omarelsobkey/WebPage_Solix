import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const s = await getTranslations("services.list");
  const servicesCount = 3;

  return (
    <>
      <Hero />

      <section className="bg-solix-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-solix-black sm:text-4xl">
              {t("services.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-600">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: servicesCount }).map((_, i) => (
              <ServiceCard
                key={i}
                title={s(`${i}.title`)}
                description={s(`${i}.desc`)}
                features={[
                  s(`${i}.features.0`),
                  s(`${i}.features.1`),
                  s(`${i}.features.2`),
                ]}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-500"
            >
              {t("services.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-solix-black px-6 py-20">
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
              className="rounded-md bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-500"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
