import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { contactInfo, socialLinks } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { SunIcon } from "@/components/SolarIcons";
import { LinkedInIcon, FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";

const socialIconMap = {
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
};

function ActionButtons({ wa, tel }: { wa: string; tel: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <a
        href={tel}
        className="inline-flex items-center gap-1 rounded-full bg-blue-600/15 px-2.5 py-1 text-[10px] font-medium text-blue-500 transition-all hover:bg-blue-600/25 hover:text-blue-400 active:scale-95"
      >
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-full bg-green-600/15 px-2.5 py-1 text-[10px] font-medium text-green-500 transition-all hover:bg-green-600/25 hover:text-green-400 active:scale-95"
      >
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

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
              Contact
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

      <section className="clip-diagonal-both -mt-16 bg-white px-6 pt-28 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Reveal>
                <div className="group rounded-2xl bg-solix-cream/50 p-5 transition-all hover:bg-solix-cream hover:shadow-md">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-solix-gold">
                    {t("sales")}
                  </p>
                  <div className="space-y-3">
                    {contactInfo.sales.map((phone, i) => (
                      <div
                        key={i}
                        className="flex flex-wrap items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-solix-gold/10 text-sm">
                            📞
                          </span>
                          <span dir="ltr" className="inline-block text-sm text-solix-black">
                            {phone.label}
                          </span>
                        </div>
                        <ActionButtons wa={phone.wa} tel={phone.tel} />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="group rounded-2xl bg-solix-cream/50 p-5 transition-all hover:bg-solix-cream hover:shadow-md">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-solix-gold">
                    {t("support")}
                  </p>
                  <div className="space-y-3">
                    {contactInfo.support.map((phone, i) => (
                      <div
                        key={i}
                        className="flex flex-wrap items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-solix-gold/10 text-sm">
                            🛠️
                          </span>
                          <span dir="ltr" className="inline-block text-sm text-solix-black">
                            {phone.label}
                          </span>
                        </div>
                        <ActionButtons wa={phone.wa} tel={phone.tel} />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="group rounded-2xl bg-solix-cream/50 p-5 transition-all hover:bg-solix-cream hover:shadow-md">
                  <div className="flex items-start gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-solix-gold/10 text-lg">
                      📍
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-solix-gold">
                        {t("address")}
                      </p>
                      <div className="mt-1 space-y-0.5">
                        {contactInfo.address.map((city, i) => (
                          <p key={i} className="text-sm text-solix-black">
                            {city}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              <Reveal delay={200}>
                <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-solix-cream to-solix-cream/30 p-10 text-center transition-all hover:shadow-lg">
                  <div>
                    <div className="mx-auto w-20 animate-float opacity-20">
                      <SunIcon className="h-full w-full" />
                    </div>
                    <p className="mt-6 text-sm text-gray-500">{t("response")}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="group rounded-2xl bg-solix-cream/50 p-5 transition-all hover:bg-solix-cream hover:shadow-md">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-solix-gold">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((s) => {
                      const Icon = socialIconMap[s.label as keyof typeof socialIconMap];
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-solix-black/60 transition-all hover:border-solix-gold/50 hover:text-solix-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                          title={s.label}
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
