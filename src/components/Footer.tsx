"use client";

import Image from "next/image";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/lib/constants";

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
    <footer className="bg-solix-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/logo/logo-icon.png"
              alt="Solix"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-solix-gold">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-solix-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-solix-gold">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.address}</li>
              <li className="pt-2 text-xs">{t("contactInfo.hours")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Solix. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
