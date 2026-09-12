import type { Metadata } from "next";
import "./globals.css";
import AdminSidebar from "@/components/AdminSidebar";

export const metadata: Metadata = {
  title: "RGUKT Admin Portal",
  description: "Secure management portal for RGUKT RK Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen flex">
        <AdminSidebar />
        <div className="ml-64 flex-1 flex flex-col min-h-screen">
          <header className="bg-white px-8 py-4 shadow-sm flex justify-end items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700">Admin User</span>
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
            </div>
          </header>
          <main className="p-8 flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
