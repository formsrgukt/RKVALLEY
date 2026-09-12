export interface DepartmentSection {
  id: string;
  label: string;
}

export const DEPARTMENT_SECTIONS: DepartmentSection[] = [
  { id: "faculty", label: "Faculty" },
  { id: "staff", label: "Staff" },
  { id: "curricula", label: "Curricula" },
  { id: "bos", label: "Board of Studies" },
  { id: "labs", label: "Lab Facilities" },
  { id: "contact", label: "Contact" },
];

export const VALID_DEPARTMENT_SECTION_IDS = [
  "faculty",
  "staff",
  "curricula",
  "bos",
  "labs",
  "contact",
] as const;

export type DepartmentSectionId = (typeof VALID_DEPARTMENT_SECTION_IDS)[number];
