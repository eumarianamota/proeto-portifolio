import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import { AosInit } from "@/app/_components/aos-init"
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Portifólio | Mariana",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${nunitoSans.variable}`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
