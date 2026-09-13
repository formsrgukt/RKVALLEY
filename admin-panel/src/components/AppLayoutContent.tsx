"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

export default function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, role, loading } = useAuth();

  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return (
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen w-full bg-slate-200">
        <AdminSidebar />
        <div className="flex-1 flex flex-col ml-64 min-h-screen">
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-8 py-4 border-b border-slate-200 flex justify-end items-center">
            <div className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-full transition-colors">
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-slate-800 leading-tight">
                  {loading ? "..." : user ? user.email : "Guest"}
                </span>
                <span className="text-xs text-slate-500 leading-tight capitalize">
                  {loading ? "..." : role || "Unknown Role"}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-800 to-red-600 text-white flex items-center justify-center font-bold text-sm shadow-inner ring-2 ring-white">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </header>
          <main className="p-8 flex-1 bg-transparent animate-slide-up">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
