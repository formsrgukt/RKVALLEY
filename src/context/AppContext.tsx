"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  docModal: { isOpen: boolean; title: string; pdfName: string; customContent?: React.ReactNode };
  openDocModal: (title: string, pdfName: string, customContent?: React.ReactNode) => void;
  closeDocModal: () => void;

  isGpaOpen: boolean;
  openGpaModal: () => void;
  closeGpaModal: () => void;

  isMobileDrawerOpen: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;

  isHighContrast: boolean;
  toggleHighContrast: () => void;

  fontSize: "font-size-sm" | "font-size-md" | "font-size-lg";
  setFontSize: (size: "font-size-sm" | "font-size-md" | "font-size-lg") => void;

  lang: "en" | "te";
  toggleLang: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [docModal, setDocModal] = useState<{ isOpen: boolean; title: string; pdfName: string; customContent?: React.ReactNode }>({
    isOpen: false,
    title: "",
    pdfName: ""
  });
  const [isGpaOpen, setIsGpaOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"font-size-sm" | "font-size-md" | "font-size-lg">("font-size-md");
  const [lang, setLang] = useState<"en" | "te">("en");

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openDocModal = (title: string, pdfName: string, customContent?: React.ReactNode) => {
    setDocModal({ isOpen: true, title, pdfName, customContent });
  };
  const closeDocModal = () => {
    setDocModal({ isOpen: false, title: "", pdfName: "", customContent: undefined });
  };

  const openGpaModal = () => setIsGpaOpen(true);
  const closeGpaModal = () => setIsGpaOpen(false);

  const openMobileDrawer = () => setIsMobileDrawerOpen(true);
  const closeMobileDrawer = () => setIsMobileDrawerOpen(false);

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "te" : "en"));
  };

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  useEffect(() => {
    document.body.classList.remove("font-size-sm", "font-size-md", "font-size-lg");
    document.body.classList.add(fontSize);
  }, [fontSize]);

  // Trigger Google Translate when language changes
  useEffect(() => {
    const triggerTranslation = (targetLang: string) => {
      const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = targetLang;
        selectElement.dispatchEvent(new Event("change"));
      } else {
        // If element is not yet injected, retry after a short delay
        setTimeout(() => triggerTranslation(targetLang), 500);
      }
    };

    if (lang === "te") {
      triggerTranslation("te");
    } else {
      triggerTranslation("en");
    }
  }, [lang]);

  // Global Ctrl + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setDocModal({ isOpen: false, title: "", pdfName: "" });
        setIsGpaOpen(false);
        setIsMobileDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSearchOpen,
        openSearch,
        closeSearch,
        docModal,
        openDocModal,
        closeDocModal,
        isGpaOpen,
        openGpaModal,
        closeGpaModal,
        isMobileDrawerOpen,
        openMobileDrawer,
        closeMobileDrawer,
        isHighContrast,
        toggleHighContrast,
        fontSize,
        setFontSize,
        lang,
        toggleLang
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
