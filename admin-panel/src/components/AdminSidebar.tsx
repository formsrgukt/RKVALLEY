"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Manage Notices", path: "/notices" },
    { name: "Manage Tenders", path: "/tenders" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed top-0 left-0 flex flex-col py-8 px-4">
      <div className="mb-8 px-4">
        <h2 className="text-xl font-bold m-0">RGUKT Admin</h2>
        <p className="text-sm text-slate-400 m-0">Portal Management</p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={px-4 py-3 rounded-lg text-sm transition-all font-medium }
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto">
        <a href="http://localhost:3000" className="px-4 py-3 block text-slate-400 hover:text-white text-sm transition-colors">
          &larr; Back to Main Site
        </a>
      </div>
    </aside>
  );
}
