import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import Reveal from "@/components/Reveal";
import { SunIcon } from "@/components/SolarIcons";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-solix-black px-6 pt-24">
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
              About
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
              <span className="text-white">{t("title")}</span>{" "}
              <span className="text-solix-gold">{t("titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="clip-diagonal-both -mt-16 bg-white px-6 pt-28 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div className="relative">
                <span className="absolute -top-6 -left-6 text-8xl font-black text-solix-gold/10 select-none">
                  01
                </span>
                <h2 className="relative text-3xl font-bold text-solix-black">
                  {t("mission.title")}
                </h2>
                <p className="relative mt-4 leading-relaxed text-gray-600">
                  {t("mission.desc")}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative">
                <span className="absolute -top-6 -left-6 text-8xl font-black text-solix-gold/10 select-none">
                  02
                </span>
                <h2 className="relative text-3xl font-bold text-solix-black">
                  {t("vision.title")}
                </h2>
                <p className="relative mt-4 leading-relaxed text-gray-600">
                  {t("vision.desc")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-solix-cream px-6 py-24">
        <div className="absolute top-10 right-10 opacity-5">
          <SunIcon className="h-48 w-48" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-solix-black sm:text-4xl">
              {t("whyUs.title")}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="mb-4 block text-3xl font-black text-solix-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-solix-black">
                    {t(`whyUs.items.${i}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {t(`whyUs.items.${i}.desc`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-solix-black px-6 py-20 text-center">
        <Reveal>
          <p className="text-gray-400">
            {t("cta")}{" "}
            <Link
              href="/contact"
              className="relative font-medium text-solix-gold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-solix-gold after:transition-transform hover:after:scale-x-110"
            >
              {t("ctaLink")}
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
