import { setRequestLocale, getTranslations } from "next-intl/server";
import { contactInfo } from "@/lib/constants";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const c = await getTranslations("common.contactInfo");

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
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-solix-gold">
                  {t("phone")}
                </h3>
                <p className="mt-1 text-lg text-solix-black">
                  {contactInfo.phone}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-solix-gold">
                  {t("email")}
                </h3>
                <p className="mt-1 text-lg text-solix-black">
                  {contactInfo.email}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-solix-gold">
                  {t("address")}
                </h3>
                <p className="mt-1 text-lg text-solix-black">
                  {contactInfo.address}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-solix-gold">
                  {t("hours")}
                </h3>
                <p className="mt-1 text-lg text-solix-black">{c("hours")}</p>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-lg bg-solix-cream p-8 text-center">
              <div>
                <p className="text-sm text-gray-500">{t("response")}</p>
                <p className="mt-4 text-4xl">☀️</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
