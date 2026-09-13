"use client";

import React from "react";

interface FacultyProfileClientProps {
  initialFaculty: any;
}

export default function FacultyProfileClient({ initialFaculty }: FacultyProfileClientProps) {
  const profile = initialFaculty;

  // Helper function to render a list from text area data
  const renderList = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return null;
    return (
      <ul style={{ paddingLeft: "1.5rem", margin: 0, fontSize: "1rem", color: "#475569", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {lines.map((line, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: line.trim() }} />
        ))}
      </ul>
    );
  };

  const renderSection = (title: string, data: string) => {
    if (!data) return null;
    return (
      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
          {title}
        </h4>
        {renderList(data)}
      </div>
    );
  };

  return (
    <>
      {/* Bio */}
      {profile.bio && (
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
            Academic Biography
          </h4>
          <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
            {profile.bio}
          </p>
        </div>
      )}

      {/* Research Areas */}
      {profile.specialization && (
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
            Specialization & Research Domains
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {profile.specialization.split(',').map((area: string, idx: number) => (
              <span
                key={idx}
                style={{
                  background: "#f1f5f9",
                  color: "#334155",
                  fontSize: "0.9rem",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "6px",
                  fontWeight: 600,
                  border: "1px solid #e2e8f0"
                }}
              >
                {area.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Structured Fields */}
      {renderSection("Educational Details", profile.educationDetails)}
      {renderSection("Teaching Experience", profile.teachingExperience)}
      {renderSection("Research Experience & Areas", profile.researchExperience)}

      {/* Legacy or custom HTML */}
      {profile.extendedBioHtml && (
        <div 
          className="faculty-extended-bio"
          style={{ 
            marginTop: "2rem",
            color: "#334155",
            lineHeight: 1.6,
            fontSize: "0.95rem"
          }}
          dangerouslySetInnerHTML={{ __html: profile.extendedBioHtml }} 
        />
      )}
      
      {/* Publications */}
      {renderSection("Books Published", profile.booksPublished)}
      {renderSection("Journal Papers Published", profile.journalPapers)}
      {renderSection("Conference / Seminar Papers", profile.conferencePapers)}

      {/* Events & Awards */}
      {renderSection("Workshops / Conferences Attended", profile.workshopsAttended)}
      {renderSection("Refresher Courses / Faculty Development Programs", profile.refresherCourses)}
      {renderSection("Scholarships, Awards & Achievements", profile.scholarshipsAwards)}
      
      {/* Administration */}
      {renderSection("Administrative Positions Held", profile.administrativePositions)}
      {renderSection("Committee Memberships", profile.committeeMemberships)}

    </>
  );
}
