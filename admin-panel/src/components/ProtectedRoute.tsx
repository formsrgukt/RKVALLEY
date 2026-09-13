"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth, UserRole } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, role, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // Not logged in
        if (pathname !== "/login") {
          router.push("/login");
        }
      } else {
        // Logged in
        if (pathname === "/login") {
          // If on login page, redirect to appropriate home
          if (role === "admin") {
            router.push("/");
          } else if (role === "faculty") {
            router.push("/faculty-profile");
          } else {
            // Unregistered role
            logout();
          }
        } else if (allowedRoles && !allowedRoles.includes(role)) {
          // Has wrong role for this page
          if (role === "faculty") {
            router.push("/faculty-profile");
          } else {
            router.push("/");
          }
        }
      }
    }
  }, [user, role, loading, router, pathname, allowedRoles]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  // If we are on login, just render it (the effect will redirect if already logged in)
  if (pathname === "/login") {
    return <>{children}</>;
  }

  // Prevent flashing protected content before redirecting
  if (!user || (allowedRoles && !allowedRoles.includes(role))) {
    return null;
  }

  return <>{children}</>;
}
