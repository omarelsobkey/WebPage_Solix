import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";

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
      <section className="bg-solix-black px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("title")}{" "}
            <span className="text-solix-gold">{t("titleHighlight")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-solix-black">
                {t("mission.title")}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {t("mission.desc")}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-solix-black">
                {t("vision.title")}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {t("vision.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-solix-cream px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-solix-black">
            {t("whyUs.title")}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-solix-black">
                  {t(`whyUs.items.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {t(`whyUs.items.${i}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-solix-black px-6 py-16 text-center">
        <p className="text-gray-400">
          {t("cta")}{" "}
          <Link
            href="/contact"
            className="font-medium text-solix-gold hover:underline"
          >
            {t("ctaLink")}
          </Link>
        </p>
      </section>
    </>
  );
}
