"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const { openGpaModal } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "slide-1",
      badge: "Premier Technological University of Andhra Pradesh",
      title: <>Nurturing <span>Rural Intellect</span> Into World-Class Engineers & Innovators</>,
      subtitle: "Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley provides an immersive 6-year integrated B.Tech residential education empowering gifted rural youth with cutting-edge ICT and technological mastery.",
      action: "Explore RK Valley Campus",
      link: "/about",
      align: "left"
    },
    {
      image: "slide-2",
      badge: "A Tradition of Academic Excellence",
      title: <>About the <span>Ceremony</span></>,
      subtitle: "The RGUKT Convocation is more than a ceremony; it is a celebration of the relentless pursuit of knowledge and the transformation of rural talent into global professionals. Each year, we honor the resilience of our students who have excelled in a unique educational ecosystem.\n\nJoin us as we confer degrees upon the graduating batch, marking the culmination of years of hard work, innovation, and dedication to the vision of Rajiv Gandhi University of Knowledge Technologies.",
      action: "Read More",
      link: "/about",
      align: "left"
    },
    {
      image: "slide-3",
      badge: "Founding Chancellor",
      title: <>Prof. <span>D. Raj Reddy</span></>,
      subtitle: "Prof. D. Raj Reddy as its founding Chancellor. He is a Pioneer in Artificial Intelligence and an esteemed academician who laid the foundation for RGUKT's vision of rural empowerment through world-class technological education.",
      action: "Learn More",
      link: "/about",
      align: "right"
    }
  ];

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
          <div style={{ display: 'grid', alignItems: 'start' }}>
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                style={{
                  gridArea: '1 / 1',
                  maxWidth: '820px',
                  marginLeft: slide.align === 'right' ? 'auto' : '0',
                  textAlign: slide.align === 'right' ? 'right' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: slide.align === 'right' ? 'flex-end' : 'flex-start',
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
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
