"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const { openGpaModal } = useApp();
  const [counts, setCounts] = useState({ students: 0, acres: 0, placement: 0, faculty: 0 });
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "slide-1",
      badge: "Premier Technological University of Andhra Pradesh",
      title: <>Nurturing <span>Rural Intellect</span> Into World-Class Engineers & Innovators</>,
      subtitle: "Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley provides an immersive 6-year integrated B.Tech residential education empowering gifted rural youth with cutting-edge ICT and technological mastery.",
      action: "Explore RK Valley Campus",
      link: "/about"
    },
    {
      image: "slide-2",
      badge: "A Tradition of Academic Excellence",
      title: <>About the <span>Ceremony</span></>,
      subtitle: "The RGUKT Convocation is more than a ceremony; it is a celebration of the relentless pursuit of knowledge and the transformation of rural talent into global professionals. Each year, we honor the resilience of our students who have excelled in a unique educational ecosystem.\n\nJoin us as we confer degrees upon the graduating batch, marking the culmination of years of hard work, innovation, and dedication to the vision of Rajiv Gandhi University of Knowledge Technologies.",
      action: "Read More",
      link: "/about"
    }
  ];

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

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="hero-section" aria-label="University Hero Overview">
      <div className="hero-bg-slider">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`hero-bg-slide ${slide.image} ${activeSlide === idx ? 'active' : ''}`}
            style={{
              opacity: activeSlide === idx ? 1 : 0,
              transform: activeSlide === idx ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.5s ease-in-out, transform 6s linear',
              animation: 'none'
            }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-content">
          <div style={{ position: 'relative', minHeight: '380px' }}>
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  opacity: activeSlide === idx ? 1 : 0,
                  transform: activeSlide === idx ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                  filter: activeSlide === idx ? 'blur(0px)' : 'blur(10px)',
                  visibility: activeSlide === idx ? 'visible' : 'hidden',
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: activeSlide === idx ? 'auto' : 'none'
                }}
              >
                <div className="hero-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {slide.badge}
                </div>

                <h2 className="hero-title">
                  {slide.title}
                </h2>

                <p className="hero-subtitle" style={{ whiteSpace: 'pre-line' }}>
                  {slide.subtitle}
                </p>

                <div className="hero-actions">
                  <Link href={slide.link} className="btn btn-primary">
                    {slide.action}
                  </Link>
                </div>
              </div>
            ))}
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
