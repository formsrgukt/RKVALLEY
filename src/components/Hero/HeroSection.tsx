"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const { openGpaModal } = useApp();
  const [counts, setCounts] = useState({ students: 0, acres: 0, placement: 0, faculty: 0 });

  useEffect(() => {
    let currentStep = 0;
    const totalSteps = 40;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        students: Math.min(6500, Math.floor((6500 / totalSteps) * currentStep)),
        acres: Math.min(330, Math.floor((330 / totalSteps) * currentStep)),
        placement: Math.min(87, Math.floor((87 / totalSteps) * currentStep)),
        faculty: Math.min(240, Math.floor((240 / totalSteps) * currentStep))
      });
      if (currentStep >= totalSteps) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="University Hero Overview">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Premier Technological University of Andhra Pradesh
          </div>

          <h2 className="hero-title">
            Nurturing <span>Rural Intellect</span> Into World-Class Engineers & Innovators
          </h2>

          <p className="hero-subtitle">
            Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley provides an immersive 6-year integrated B.Tech residential education empowering gifted rural youth with cutting-edge ICT and technological mastery.
          </p>

          <div className="hero-actions">
            <Link href="/about" className="btn btn-primary">
              Explore RK Valley Campus
            </Link>
          </div>

          {/* Hero Live Stats */}
          <div className="hero-stats-ticker">
            <div className="stat-item">
              <span className="stat-number">{counts.students.toLocaleString()}+</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts.acres}+</span>
              <span className="stat-label">Acres Green Campus</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts.placement}.4%</span>
              <span className="stat-label">Placement Record</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{counts.faculty}+</span>
              <span className="stat-label">Faculty & Researchers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
