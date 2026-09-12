import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  category?: string;
}

export default function Breadcrumb({ title, category = "Section" }: BreadcrumbProps) {
  return null;
}
