"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA, Facility } from "@/data/rguktData";

export default function CampusGallery() {
  const { openDocModal } = useApp();

  const handleOpenImage = (f: Facility) => {
    openDocModal(
      f.title,
      "gallery.jpg",
      <div>
        <img
          src={f.image}
          alt={f.title}
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem", maxHeight: "420px", objectFit: "cover" }}
        />
        <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>{f.description}</p>
      </div>
    );
  };

  return (
    <section className="section-padding campus-gallery-section" aria-label="Campus Facilities Gallery">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tag">Campus Life & Architecture</span>
          <h3 className="section-title">Campus Infrastructure Gallery</h3>
          <p className="section-subtitle">
            Take a visual tour through our sprawling 330-acre academic facilities, laboratories, and sports grounds.
          </p>
        </div>

        <div className="gallery-grid">
          {RGUKT_DATA.campusFacilities.map((f: Facility) => (
            <div key={f.id} className="gallery-card" onClick={() => handleOpenImage(f)}>
              <img src={f.image} alt={f.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">{f.category}</span>
                <h4 className="gallery-title">{f.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
