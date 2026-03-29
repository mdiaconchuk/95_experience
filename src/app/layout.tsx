import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Win95Font = localFont({
  src: "../fonts/w95fa.woff2",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Experience 95",
  description: "A W95 mini simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Win95Font.className} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
