import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examinations & Evaluation System | Academics | RGUKT RK Valley",
  description:
    "Official Examination Policies, Evaluation Metrics, 10-Point Grading Scale, Malpractice Code, SGPA/CGPA formulas, and Controller of Examinations (COE) Cell at RGUKT RK Valley."
};

export default function AcademicExaminationsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
