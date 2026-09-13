"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export type UserRole = "admin" | "faculty" | null;

interface AuthUser {
  email: string;
}

interface AuthContextType {
  user: AuthUser | null;
  role: UserRole;
  loading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const storedEmail = localStorage.getItem("rgukt_admin_email");
      if (storedEmail) {
        try {
          const userDoc = await getDoc(doc(db, "facultyProfiles", storedEmail.toLowerCase()));
          if (userDoc.exists()) {
            setUser({ email: storedEmail });
            setRole(userDoc.data().role as UserRole || "faculty");
          } else {
            // Document doesn't exist anymore
            localStorage.removeItem("rgukt_admin_email");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string) => {
    const emailId = email.trim().toLowerCase();
    const userDoc = await getDoc(doc(db, "facultyProfiles", emailId));
    
    if (userDoc.exists()) {
      localStorage.setItem("rgukt_admin_email", emailId);
      setUser({ email: emailId });
      setRole(userDoc.data().role as UserRole || "faculty");
    } else {
      throw new Error("Email not found in the database. Please ensure your data was migrated.");
    }
  };

  const logout = () => {
    localStorage.removeItem("rgukt_admin_email");
    setUser(null);
    setRole(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
