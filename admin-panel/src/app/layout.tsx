import type { Metadata } from "next";
import "./globals.css";
import AdminSidebar from "../components/AdminSidebar";

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
      <body className="bg-slate-200 min-h-screen flex">
        <AdminSidebar />
        <div className="ml-64 flex-1 flex flex-col min-h-screen">
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-8 py-4 border-b border-slate-200 flex justify-end items-center">
            <div className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-full transition-colors">
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-slate-800 leading-tight">Admin User</span>
                <span className="text-xs text-slate-500 leading-tight">System Admin</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-800 to-red-600 text-white flex items-center justify-center font-bold text-sm shadow-inner ring-2 ring-white">
                A
              </div>
            </div>
          </header>
          <main className="p-8 flex-1 bg-transparent animate-slide-up">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
