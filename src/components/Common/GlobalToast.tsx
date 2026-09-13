"use client";

import React, { useState, useEffect } from "react";

export default function GlobalToast() {
  const [toast, setToast] = useState<{ message: string; visible: boolean } | null>(null);

  useEffect(() => {
    const originalAlert = window.alert;
    
    window.alert = (message: any) => {
      const msgString = typeof message === 'string' ? message : String(message);
      setToast({ message: msgString, visible: true });
      
      // Start exit animation after 3 seconds
      setTimeout(() => {
        setToast((prev) => prev ? { ...prev, visible: false } : null);
        
        // Remove from DOM after animation completes (300ms)
        setTimeout(() => {
          setToast(null);
        }, 300);
      }, 3000);
    };

    return () => {
      window.alert = originalAlert;
    };
  }, []);

  if (!toast) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      background: "var(--primary-maroon, #800000)",
      color: "#fff",
      padding: "1rem 1.5rem",
      borderRadius: "8px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      zIndex: 99999,
      fontSize: "0.95rem",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      animation: toast.visible ? "slideInUp 0.3s ease-out forwards" : "slideOutDown 0.3s ease-in forwards",
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #f59e0b)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      {toast.message}
    </div>
  );
}
