import React from 'react';
import './LandingBackground.css';

export default function LandingBackground() {
  return (
    <div className="landing-bg-wrapper">
      <div className="landing-bg-gradient"></div>
      <div className="landing-bg-cubes">
        <div className="bg-logo bg-logo-1"></div>
        <div className="bg-logo bg-logo-2"></div>
        <div className="bg-logo bg-logo-3"></div>
        <div className="bg-logo bg-logo-4"></div>
        <div className="bg-logo bg-logo-5"></div>
        <div className="bg-logo bg-logo-6"></div>
      </div>
      <div className="landing-glass-overlay"></div>
    </div>
  );
}
