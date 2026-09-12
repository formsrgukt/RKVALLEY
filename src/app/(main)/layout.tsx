import React from "react";
import MainHeader from "@/components/Header/MainHeader";
import StickyNavbar from "@/components/Header/StickyNavbar";
import MobileDrawer from "@/components/Header/MobileDrawer";
import UniversityFooter from "@/components/Footer/UniversityFooter";
import DocumentModal from "@/components/Modals/DocumentModal";
import GpaCalculatorModal from "@/components/Modals/GpaCalculatorModal";
import BackToTop from "@/components/Common/BackToTop";

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header Layout */}
      <MainHeader />
      <StickyNavbar />
      <MobileDrawer />

      {/* Main Body */}
      <main id="main-content">
        {children}
      </main>

      {/* University Footer */}
      <UniversityFooter />

      {/* Interactive Modals & Floating Tools */}
      <DocumentModal />
      <GpaCalculatorModal />
      <BackToTop />
    </>
  );
}
