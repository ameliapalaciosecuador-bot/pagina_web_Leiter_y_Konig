import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leiter & Konig Pet's | Arneses y chalecos tácticos para perros",
  description:
    "Arneses, chalecos y mochilas tácticas para perros fuertes y aventureros. Seguros, resistentes y cómodos. Envíos a todo el Ecuador.",
  keywords: [
    "arneses para perros",
    "chalecos tácticos perros",
    "arnés antiescape",
    "accesorios para perros Ecuador",
    "envíos a todo el Ecuador",
    "Leiter & Konig Pet's",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
