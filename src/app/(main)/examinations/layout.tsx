import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examinations Cell & Evaluation System | RGUKT RK Valley",
  description:
    "Official Examination Policies, Evaluation Metrics, 10-Point Grading Scale, Malpractice Code, SGPA/CGPA formulas, and Controller of Examinations (COE) Cell at RGUKT RK Valley."
};

export default function ExaminationsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
