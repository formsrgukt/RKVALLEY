"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImagePopupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export default function ImagePopup({ src, alt, width, height, containerStyle, imageStyle }: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        style={{ cursor: "pointer", display: "block", ...containerStyle }} 
        onClick={() => setIsOpen(true)}
        title="Click to enlarge"
      >
        <img 
          src={src} 
          alt={alt} 
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", ...imageStyle }} 
        />
      </div>

      {isOpen && (
        <div 
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            backgroundColor: "rgba(0, 0, 0, 0.8)", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            zIndex: 99999,
            padding: "2rem"
          }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            style={{ 
              position: "relative", 
              maxWidth: "90vw", 
              maxHeight: "90vh",
              width: width ? `${width}px` : "auto",
              height: height ? `${height}px` : "auto",
              aspectRatio: (!width && !height) ? "3/4" : "auto",
              borderRadius: "8px", 
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "var(--primary-maroon)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={src} 
              alt={`${alt} (Full Size)`}
              style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#fff" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
