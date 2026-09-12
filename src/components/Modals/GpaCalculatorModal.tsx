"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

interface CourseRow {
  id: string;
  name: string;
  credits: number;
  gradePoints: number;
}

export default function GpaCalculatorModal() {
  const { isGpaOpen, closeGpaModal } = useApp();

  const [courses, setCourses] = useState<CourseRow[]>([
    { id: "1", name: "Engineering Mathematics", credits: 4, gradePoints: 10 },
    { id: "2", name: "Data Structures & Algorithms", credits: 4, gradePoints: 9 },
    { id: "3", name: "Digital Logic Design", credits: 3, gradePoints: 10 },
    { id: "4", name: "Programming Laboratory", credits: 1.5, gradePoints: 10 }
  ]);

  if (!isGpaOpen) return null;

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      { id: Date.now().toString(), name: `Course ${prev.length + 1}`, credits: 3, gradePoints: 9 }
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: "name" | "credits" | "gradePoints", value: string | number) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  let totalPoints = 0;
  let totalCredits = 0;
  courses.forEach((c) => {
    totalPoints += c.credits * c.gradePoints;
    totalCredits += c.credits;
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div className="modal-backdrop active" onClick={closeGpaModal} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">RGUKT SGPA / CGPA Calculator</span>
          <button className="modal-close-btn" onClick={closeGpaModal} aria-label="Close GPA Calculator">✕</button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>
            Calculated according to the official RGUKT 10-Point Grading System: Ex (10), A (9), B (8), C (7), D (6), E (5), R (0).
          </p>

          <div className="gpa-calc-grid">
            {courses.map((course) => (
              <div key={course.id} className="gpa-row">
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                  placeholder="Course Name"
                />
                <select
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, "credits", parseFloat(e.target.value))}
                >
                  <option value={4}>4 Credits</option>
                  <option value={3}>3 Credits</option>
                  <option value={2}>2 Credits</option>
                  <option value={1.5}>1.5 Credits</option>
                  <option value={1}>1 Credit</option>
                </select>
                <select
                  value={course.gradePoints}
                  onChange={(e) => updateCourse(course.id, "gradePoints", parseInt(e.target.value))}
                >
                  <option value={10}>Ex (10)</option>
                  <option value={9}>A (9)</option>
                  <option value={8}>B (8)</option>
                  <option value={7}>C (7)</option>
                  <option value={6}>D (6)</option>
                  <option value={5}>E (5)</option>
                  <option value={0}>R (0)</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeCourse(course.id)}
                  style={{ color: "#ef4444", fontWeight: 700, fontSize: "1.1rem" }}
                  title="Remove Course"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addCourse}
            className="btn btn-outline-white"
            style={{ color: "var(--primary-dark)", borderColor: "#cbd5e1", fontSize: "0.82rem", padding: "0.4rem 0.85rem", marginTop: "0.5rem" }}
          >
            + Add Another Course / Lab
          </button>

          <div className="gpa-result-card">
            <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "#93c5fd", fontWeight: 700 }}>
              Calculated SGPA / CGPA
            </span>
            <div className="gpa-val">{gpa}</div>
            <span style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
              Grade Qualification: <strong>{parseFloat(gpa) >= 9 ? "Distinction (Ex/A)" : parseFloat(gpa) >= 7 ? "First Class" : "Pass"}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
