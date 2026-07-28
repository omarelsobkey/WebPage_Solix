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

      <section className="clip-diagonal-both -mt-20 bg-solix-cream px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-solix-gold/60">
                SOLIX Power
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-solix-black sm:text-5xl">
                {t("services.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-gray-500">
                {t("services.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="mt-14 text-center">
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-[0.97]"
              >
                <span className="relative z-10">{t("services.viewAll")}</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-solix-black px-6 py-28">
        <div className="absolute top-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-solix-gold/30 to-transparent" />

        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-solix-gold/60">
              Call to Action
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              {t("cta.subtitle")}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-solix-gold px-8 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.97]"
              >
                <span className="relative z-10">{t("cta.button")}</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
