"use client";

import Image from "next/image";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { contactInfo, socialLinks } from "@/lib/constants";
import { LinkedInIcon, FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";

const socialIconMap = {
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
};

export default function Footer() {
  const t = useTranslations("common");

  const links = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.portfolio"), href: "/portfolio" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-solix-black px-6 pt-16 pb-8">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-solix-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo/logo-icon.png"
              alt="SOLIX Power"
              width={40}
              height={40}
              className="h-10 w-auto opacity-80"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-solix-gold/60">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-solix-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-solix-gold/60">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-600">
                  {t("contactInfo.sales")}
                </p>
                {contactInfo.sales.map((phone, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-1.5">
                    <span dir="ltr" className="inline-block">{phone.label}</span>
                    <a
                      href={`tel:${phone.tel}`}
                      className="inline-flex items-center gap-1 rounded-full bg-blue-600/20 px-2 py-0.5 text-[10px] text-blue-400 transition-all hover:bg-blue-600/30 hover:text-blue-300"
                    >
                      Call
                    </a>
                    <a
                      href={phone.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-green-600/20 px-2 py-0.5 text-[10px] text-green-400 transition-all hover:bg-green-600/30 hover:text-green-300"
                    >
                      <WhatsAppIcon className="h-3 w-3" />
                      WhatsApp
                    </a>
                  </div>
                ))}
              </li>
              <li>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-600">
                  {t("contactInfo.support")}
                </p>
                {contactInfo.support.map((phone, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-1.5">
                    <span dir="ltr" className="inline-block">{phone.label}</span>
                    <a
                      href={`tel:${phone.tel}`}
                      className="inline-flex items-center gap-1 rounded-full bg-blue-600/20 px-2 py-0.5 text-[10px] text-blue-400 transition-all hover:bg-blue-600/30 hover:text-blue-300"
                    >
                      Call
                    </a>
                    <a
                      href={phone.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-green-600/20 px-2 py-0.5 text-[10px] text-green-400 transition-all hover:bg-green-600/30 hover:text-green-300"
                    >
                      <WhatsAppIcon className="h-3 w-3" />
                      WhatsApp
                    </a>
                  </div>
                ))}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-solix-gold/60">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-solix-gold/40 hover:text-solix-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                    title={s.label}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} SOLIX Power. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
