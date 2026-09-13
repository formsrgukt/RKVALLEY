"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function GlobalPdfViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfLink, setPdfLink] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href, window.location.origin);
          const path = url.pathname.toLowerCase();
          if (path.endsWith('.pdf') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png')) {
            // Dynamically strip target="_blank" to ensure the browser doesn't open a popup
            if (anchor.target === '_blank') {
              anchor.removeAttribute('target');
            }
    
            // Prevent default navigation
            e.preventDefault();
            e.stopPropagation();
        
            // Use data attribute if available, otherwise fallback to text content
            const title = anchor.getAttribute('data-pdf-title') || anchor.textContent?.trim() || "PDF Document";
            
            setPdfLink(anchor.href);
            setPdfTitle(title);
            setIsFullScreen(false); // Reset on new open
            setIsOpen(true);
          }
        } catch (err) {
          // Ignore invalid URLs
        }
      }
    };

    // Use capture phase to intercept clicks before they navigate
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: 999999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isFullScreen ? "0" : "2rem",
      transition: "padding 0.3s ease"
    }}>
      <div style={{
        background: "#fff",
        width: "100%",
        maxWidth: isFullScreen ? "100%" : "1000px",
        height: isFullScreen ? "100vh" : "90vh",
        borderRadius: isFullScreen ? "0" : "12px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
          <h3 style={{ margin: 0, color: "var(--primary-dark)", fontSize: "1.1rem" }}>{pdfTitle}</h3>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button 
              onClick={() => setIsFullScreen(!isFullScreen)}
              style={{
                background: "#ffffff",
                color: "var(--primary-dark)",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "#f1f5f9"}
              onMouseOut={(e) => e.currentTarget.style.background = "#ffffff"}
            >
              {isFullScreen ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
                  Exit Full Screen
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                  Full Screen
                </>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: "var(--primary-maroon)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
        <iframe 
          src={pdfLink} 
          width="100%" 
          height="100%" 
          style={{ border: "none", flexGrow: 1 }}
          title={pdfTitle}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
