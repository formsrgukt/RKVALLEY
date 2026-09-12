import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import MainHeader from "@/components/Header/MainHeader";
import StickyNavbar from "@/components/Header/StickyNavbar";
import MobileDrawer from "@/components/Header/MobileDrawer";
import UniversityFooter from "@/components/Footer/UniversityFooter";
import DocumentModal from "@/components/Modals/DocumentModal";
import GpaCalculatorModal from "@/components/Modals/GpaCalculatorModal";
import BackToTop from "@/components/Common/BackToTop";
import Script from "next/script";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rguktrkv.ac.in'),
  title: "Rajiv Gandhi University of Knowledge Technologies - RK Valley | Official Portal",
  description: "Official website of Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley campus, Idupulapaya, Andhra Pradesh. Premier 6-Year Integrated B.Tech technological university.",
  keywords: ["RGUKT", "RK Valley", "Idupulapaya", "RGUKT RKV", "6 Year BTech", "AP Admissions", "IIIT RKV", "Engineering Andhra Pradesh"],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.rguktrkv.ac.in',
    siteName: 'RGUKT RK Valley',
    images: [{ url: '/images/campus_hero.jpg', width: 1200, height: 630, alt: 'RGUKT RK Valley Campus' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png"
  }
};

import OfflineDetector from "@/components/Common/OfflineDetector";
import SplashScreen from "@/components/Common/SplashScreen";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-size-md">
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,te',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <SplashScreen />
        <OfflineDetector />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
