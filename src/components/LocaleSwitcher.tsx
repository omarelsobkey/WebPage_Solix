"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const targetLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "English" : "عربي";

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="rounded border border-solix-gold px-3 py-1 text-xs font-medium text-solix-gold transition-colors hover:bg-solix-gold hover:text-black disabled:opacity-50"
    >
      {label}
    </button>
  );
}
