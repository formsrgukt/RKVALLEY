"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function PdfViewer({ link, title }: { link: string, title?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const modalContent = isOpen ? (
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
      padding: "2rem"
    }}>
      <div style={{
        background: "#fff",
        width: "100%",
        maxWidth: "1000px",
        height: "90vh",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
          <h3 style={{ margin: 0, color: "var(--primary-dark)", fontSize: "1.1rem" }}>{title ? `${title} - Profile Document` : "Profile Document"}</h3>
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
        <iframe 
          src={link} 
          width="100%" 
          height="100%" 
          style={{ border: "none", flexGrow: 1 }}
          title="Profile Document"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ 
          color: "var(--accent-royal)", 
          fontWeight: 700, 
          fontSize: "0.9rem", 
          textDecoration: "none", 
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: 0,
          marginTop: "0.5rem"
        }}
      >
        Click here to know more
      </button>

      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
