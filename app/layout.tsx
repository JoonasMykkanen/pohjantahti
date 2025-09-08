import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pohjantähti Kiinteistöt",
  description: "Tuottavia sijoitusasuntoja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          richColors
          position="top-center"
        />
        <Suspense>
          <GoogleAnalytics />
          <Analytics />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
