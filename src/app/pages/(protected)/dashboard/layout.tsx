"use client";
import { useEffect, useState } from "react";
import SideBar from "../_components/sidebar";
import { useRouter } from "next/navigation";
import DashboardNav from "../_components/dashboard-nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    const token = localStorage.getItem("access-token");

    
    if (!token) {
      router.replace(`/pages/auth/login`); // Redirect to login if no token
    } else {
      setIsAuthenticated(true); // Set authentication state
    }
  }, [router]);




  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="">
      <SideBar />
      <div className="ml-[300px] h-[100vh] w flex-1 pt-5 px-12 relative">
        <DashboardNav ></DashboardNav>
        {children}
      </div>
    </div>
  );
}
