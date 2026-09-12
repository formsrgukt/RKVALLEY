"use client";

import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn-back-to-top ${visible ? "visible" : ""}`}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btt-icon">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      <span className="btt-text">TOP</span>
    </button>
  );
}
