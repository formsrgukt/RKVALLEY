import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import AppLayoutContent from "@/components/AppLayoutContent";

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
      <body className="bg-slate-200 min-h-screen">
        <AuthProvider>
          <AppLayoutContent>
            {children}
          </AppLayoutContent>
        </AuthProvider>
      </body>
    </html>
  );
}
