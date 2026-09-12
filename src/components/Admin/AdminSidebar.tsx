"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Notices", path: "/admin/notices" },
    { name: "Manage Tenders", path: "/admin/tenders" },
    { name: "Settings", path: "/admin/settings" }
  ];

  return (
    <aside style={{
      width: "250px",
      height: "100vh",
      background: "#0f172a",
      color: "#ffffff",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      padding: "2rem 1rem"
    }}>
      <div style={{ marginBottom: "2rem", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>RGUKT Admin</h2>
        <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: 0 }}>Portal Management</p>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                color: isActive ? "#ffffff" : "#cbd5e1",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: isActive ? 600 : 500,
                transition: "all 0.2s"
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div style={{ marginTop: "auto" }}>
        <Link href="/" style={{
          padding: "0.75rem 1rem",
          display: "block",
          color: "#94a3b8",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}>
          &larr; Back to Main Site
        </Link>
      </div>
    </aside>
  );
}
