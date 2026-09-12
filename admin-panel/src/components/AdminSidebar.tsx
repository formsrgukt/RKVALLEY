"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Manage Notices", href: "/notices" },
    { name: "Manage News", href: "/news" },
    { name: "Manage Tenders", href: "/tenders" },
    { name: "Settings", href: "#" },
  ];

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-slate-900 border-r border-slate-800 z-50 flex flex-col">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
          R
        </div>
        <div>
          <h2 className="font-bold text-lg text-white leading-tight">RGUKT Admin</h2>
          <p className="text-xs text-slate-400 font-medium">Portal Management</p>
        </div>
      </div>
      
      <nav className="p-4 flex-1 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center px-4 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive 
                  ? "bg-red-500/10 text-red-500 shadow-sm" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={() => {
            // TODO: Implement actual logout logic
            window.location.href = '/login';
          }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg w-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
