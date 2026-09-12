import React from "react";
import AdminSidebar from "@/components/Admin/AdminSidebar";

export const metadata = {
  title: "RGUKT Admin Portal",
  description: "Secure management portal for RGUKT RK Valley.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f1f5f9" }}>
      <AdminSidebar />
      <div style={{ marginLeft: "250px", flex: 1, display: "flex", flexDirection: "column" }}>
        <header style={{ 
          background: "#ffffff", 
          padding: "1rem 2rem", 
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Admin User</span>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary-maroon)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>A</div>
          </div>
        </header>
        <main style={{ padding: "2rem", flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
