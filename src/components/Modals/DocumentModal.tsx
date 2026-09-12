"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function DocumentModal() {
  const { docModal, closeDocModal } = useApp();

  if (!docModal.isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={closeDocModal} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{docModal.title || "Official Document"}</span>
          <button className="modal-close-btn" onClick={closeDocModal} aria-label="Close Document">✕</button>
        </div>
        <div className="modal-body">
          {docModal.customContent ? (
            docModal.customContent
          ) : (
            <div style={{ background: "#f8fafc", border: "2px dashed #cbd5e1", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="1.5" style={{ margin: "0 auto 1rem" }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h4 style={{ color: "var(--primary-dark)", fontSize: "1.1rem", marginBottom: "0.35rem" }}>
                {docModal.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Document: {docModal.pdfName} | Verified RGUKT Official Circular
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => alert(`Downloading verified document: ${docModal.pdfName}`)}
                  className="btn btn-primary"
                >
                  Download Official PDF
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-outline-white"
                  style={{ color: "var(--primary-dark)", borderColor: "#cbd5e1" }}
                >
                  Print Notice
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
