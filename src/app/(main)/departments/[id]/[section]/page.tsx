import React from "react";
import { notFound } from "next/navigation";
import { RGUKT_DATA } from "@/data/rguktData";
import DepartmentDetailView from "@/components/Departments/DepartmentDetailView";
import { DEPARTMENT_SECTIONS, VALID_DEPARTMENT_SECTION_IDS } from "@/data/departmentSections";

export async function generateStaticParams() {
  const params: { id: string; section: string }[] = [];
  for (const dept of RGUKT_DATA.departments) {
    for (const sec of DEPARTMENT_SECTIONS) {
      params.push({
        id: dept.id,
        section: sec.id
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string; section: string }>;
}) {
  const { id, section } = await params;
  const targetId = id.toLowerCase();
  const dept = RGUKT_DATA.departments.find(
    (d) => d.id.toLowerCase() === targetId || (targetId === "civil" && d.id === "ce")
  );
  const currentSec = DEPARTMENT_SECTIONS.find((s) => s.id === section);

  if (!dept || !currentSec) {
    return { title: "Department Section Not Found | RGUKT RK Valley" };
  }

  return {
    title: `${currentSec.label} - Dept of ${dept.name} (${dept.code}) | RGUKT RK Valley`,
    description: `${currentSec.label} section for the Department of ${dept.name} (${dept.code}) at RGUKT RK Valley. ${dept.overview}`
  };
}

export default async function DepartmentSectionPage({
  params
}: {
  params: Promise<{ id: string; section: string }>;
}) {
  const { id, section } = await params;
  const targetId = id.toLowerCase();
  const dept = RGUKT_DATA.departments.find(
    (d) => d.id.toLowerCase() === targetId || (targetId === "civil" && d.id === "ce")
  );

  if (!dept || !VALID_DEPARTMENT_SECTION_IDS.includes(section as any)) {
    notFound();
  }

  return (
    <div className="page-view-container">
      <DepartmentDetailView dept={dept} activeSection={section} />
    </div>
  );
}
