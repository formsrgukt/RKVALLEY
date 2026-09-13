import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar | RGUKT RK Valley",
  description:
    "Official Academic Calendars and Semester Schedules for Pre-University Courses and B.Tech Engineering programs at RGUKT RK Valley."
};

export default function AcademicCalendarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
