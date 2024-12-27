"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
      <div>
        {children}
      </div>
    </div>
  );
}
