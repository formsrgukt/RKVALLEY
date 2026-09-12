import React from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import DepartmentDetailView from "@/components/Departments/DepartmentDetailView";

export async function generateStaticParams() {
  return RGUKT_DATA.departments.map((d) => ({
    id: d.id
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dept = RGUKT_DATA.departments.find((d) => d.id === id);
  if (!dept) {
    return { title: "Department Not Found | RGUKT RK Valley" };
  }
  return {
    title: `Department of ${dept.name} (${dept.code}) | RGUKT RK Valley`,
    description: dept.overview
  };
}

export default async function DepartmentDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dept = RGUKT_DATA.departments.find((d) => d.id === id);

  if (!dept) {
    notFound();
  }

  return (
    <div className="page-view-container">
      <Breadcrumb title={`${dept.name} (${dept.code})`} category="Department" />
      <DepartmentDetailView dept={dept} />
    </div>
  );
}
