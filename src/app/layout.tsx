import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Red_Hat_Text, Fira_Code } from "next/font/google";

import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--red-hat-text",
  subsets: ["latin-ext"]
});

const redHatMono = Fira_Code({
  variable: "--red-hat-mono",
  subsets: ["latin-ext"]
});

export const metadata: Metadata = {
  // title: "Centrum Pomocy Sellasist",
  description: "Poznaj wszystkie funkcjonalności systemu Sellasist"
};

type RootLayoutPropsType = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="pl">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0" />
      </head>
      <body className={`${redHatText.variable} ${redHatMono.variable}`}>
        {children}
      </body>
    </html>
  );
}