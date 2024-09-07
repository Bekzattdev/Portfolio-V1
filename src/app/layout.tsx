import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import RootLayoutCLient from "./layout.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bezattdev | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutCLient>{children}</RootLayoutCLient>
      </body>
    </html>
  );
}
