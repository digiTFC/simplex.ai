"use client";
import { useEffect, useState } from "react";
import SideBar from "../_components/sidebar";
import { useRouter } from "next/navigation";
import DashboardNav from "../_components/dashboard-nav";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const [isOpen, setIsOpen] = useState(false)
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
 <motion.div  layout className={`fixed  ${!isOpen ? `-left-[300px] md:left-0` : 'left-0'} z-40 w-[300px] bg-red-400 md:left-0`}>

<SideBar onClick={()=> isOpen ? setIsOpen(false):''}/>
</motion.div>
      <div className="md:ml-[300px] h-screen  md:flex-1 pt-20 md:px-12 w-11/12 md:w-auto m-auto relative">
        <DashboardNav setOpen={() => setIsOpen(!isOpen)} ></DashboardNav>
        <div className="h-full" onClick={()=> isOpen ? setIsOpen(false):''}>
        {children}
        </div>
      </div>
    </div>
  );
}
