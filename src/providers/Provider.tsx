"use client";
import React, { FC, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import en from "@/i18n/en.json";
import ru from "@/i18n/ru.json";
import { usePathname } from "next/navigation";

interface ReduxProviderType {
  children: ReactNode;
}

const messages: any = {
  en,
  ru,
};

export const Provider: FC<ReduxProviderType> = ({ children }) => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};
