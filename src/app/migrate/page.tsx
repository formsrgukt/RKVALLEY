"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { RGUKT_DATA } from "@/data/rguktData";
import { getDepartmentFaculty } from "@/data/facultyData";

const { administration, departments } = RGUKT_DATA;

export default function MigratePage() {
  const [status, setStatus] = useState("Idle");
  const [logs, setLogs] = useState<string[]>([]);

  const log = (msg: string) => setLogs(prev => [...prev, msg]);

  const runMigration = async () => {
    setStatus("Running");
    setLogs([]);
    try {
      // 1. Administration
      for (const admin of administration) {
        if (admin.email && admin.email.includes('@')) {
          const emailId = admin.email.trim().toLowerCase();
          log(`Uploading Admin: ${admin.name} (${emailId})`);
          await setDoc(doc(db, "facultyProfiles", emailId), {
            name: admin.name,
            designation: admin.role,
            email: emailId,
            phone: admin.phone || "",
            role: "admin", // They are administrators
          }, { merge: true });
        }
      }

      // 2. Department Faculty
      for (const dept of departments) {
        // Add HOD
        if (dept.hodEmail && dept.hodEmail.includes('@')) {
          const emailId = dept.hodEmail.trim().toLowerCase();
          log(`Uploading HOD: ${dept.hod} (${emailId})`);
          await setDoc(doc(db, "facultyProfiles", emailId), {
            name: dept.hod,
            designation: "Head of the Department",
            email: emailId,
            department: dept.name,
            role: "faculty",
          }, { merge: true });
        }

        // Add actual faculty list (this will pull Dr. Job Roger Binny, Durga Kishore, etc.)
        const facultyList = getDepartmentFaculty(dept);
        for (const fac of facultyList) {
          if (fac.email && fac.email.includes('@')) {
            const emailId = fac.email.trim().toLowerCase();
            log(`Uploading Faculty: ${fac.name} (${emailId})`);
            await setDoc(doc(db, "facultyProfiles", emailId), {
              name: fac.name,
              designation: fac.designation || "",
              email: emailId,
              phone: fac.phone || "",
              qualification: fac.qualification || "",
              almaMater: fac.almaMater || "",
              specialization: fac.specialization || "",
              cabin: fac.cabin || "",
              experience: fac.experience || "",
              publicationsCount: fac.publicationsCount || 0,
              patentsCount: fac.patentsCount || 0,
              officeHours: fac.officeHours || "",
              bio: fac.bio || "",
              extendedBioHtml: (fac as any).extendedBioHtml || "",
              educationDetails: (fac as any).educationDetails || "",
              teachingExperience: (fac as any).teachingExperience || "",
              researchExperience: (fac as any).researchExperience || "",
              booksPublished: (fac as any).booksPublished || "",
              journalPapers: (fac as any).journalPapers || "",
              conferencePapers: (fac as any).conferencePapers || "",
              workshopsAttended: (fac as any).workshopsAttended || "",
              refresherCourses: (fac as any).refresherCourses || "",
              scholarshipsAwards: (fac as any).scholarshipsAwards || "",
              administrativePositions: (fac as any).administrativePositions || "",
              committeeMemberships: (fac as any).committeeMemberships || "",
              role: "faculty"
            }, { merge: true });
          }
        }
      }

      setStatus("Completed successfully!");
    } catch (err: any) {
      console.error(err);
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto pt-32">
      <h1 className="text-2xl font-bold mb-4">Data Migration Tool</h1>
      <button 
        onClick={runMigration}
        disabled={status === "Running"}
        className="px-4 py-2 bg-indigo-600 text-white rounded mb-4 disabled:opacity-50"
      >
        Start Migration
      </button>
      <div className="font-semibold mb-2">Status: {status}</div>
      <div className="bg-slate-900 text-green-400 p-4 rounded h-96 overflow-y-auto font-mono text-sm">
        {logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
