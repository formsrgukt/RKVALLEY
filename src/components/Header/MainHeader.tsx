"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function MainHeader() {
  const { lang } = useApp();

  return (
    <header className="main-header" role="banner">
      <div className="container header-container">
        <div className="brand-section">
          <Link href="/home" aria-label="Go to Home" className="university-logo-link">
            {/* Official RGUKT Logo */}
            <div className="university-logo-container" aria-hidden="true">
              <img
                src="/images/logo.png"
                alt="RGUKT RK Valley Official Logo"
                className="university-logo-img"
                width={88}
                height={88}
              />
            </div>
          </Link>

          <div className="brand-text">
            <h1 className="brand-main-title">
              {lang === "te"
                ? "రాజీవ్ గాంధీ వైజ్ఞానిక సాంకేతిక విశ్వవిద్యాలయం"
                : "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES"}
            </h1>
            <h2 className="brand-secondary-title">
              {lang === "te"
                ? "ఆర్కే వ్యాలీ"
                : "RKVALLEY"}
            </h2>
            <p className="brand-sub-act">
              {lang === "te"
                ? "(ఆంధ్రప్రదేశ్ ప్రభుత్వం చట్టం 18, 2008 ద్వారా ఏర్పడినది)"
                : "(Constituted under the Act 18 of 2008, Govt. of Andhra Pradesh)"}
            </p>
            <p className="brand-address-text">
              {lang === "te"
                ? "ఆర్కే వ్యాలీ (ఇడుపులపాయ), వేంపల్లి (మం), వైఎస్సార్ కడప జిల్లా, ఆంధ్రప్రదేశ్ - 516330"
                : "RK Valley (Idupulapaya), Vempalli (M), Y.S.R. Kadapa Dist., Andhra Pradesh - 516330"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
