"use client";
import React, { FC, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import en from "@/i18n/en.json";
import ru from "@/i18n/ru.json";
import { usePathname } from "next/navigation";

interface ReduxProviderType {
  children: ReactNode;
}

// Определяем поддерживаемые локали
const supportedLocales = ["en", "ru"];
const messages: Record<string, any> = {
  en,
  ru,
};

export const Provider: FC<ReduxProviderType> = ({ children }) => {
  const pathname = usePathname();
  // Извлекаем локаль из пути и проверяем, поддерживается ли она
  const localeFromPath = pathname.split("/")[1];
  const locale = supportedLocales.includes(localeFromPath)
    ? localeFromPath
    : "en"; // По умолчанию "en"

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};
