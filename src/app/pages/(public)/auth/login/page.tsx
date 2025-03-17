"use client";
import GridCard from "@/app/components/gridCard";
import RegisterForm from "@/app/pages/(public)/auth/_components/RegisterForm";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import LoginForm from "../_components/login-form";


const Login= () => {


  return (
    <div>
      <div className="flex items-center justify-center h-screen overflow-hidden">
   <Link href={"/pages/home"}>
   <div className=" cursor-pointer fixed top-5 md:left-10">
          <span className="text-[30px] font-bold tracking-widest">
          SIMPLEX
          <span className="inline-block h-2 w-2 dark:bg-kpurple bg-kpink rounded-full"></span>
        </span>
        </div></Link>
        <div className="md:w-1/2 flex  flex-col items-center justify-center">
          <LoginForm></LoginForm>
          <Link href={"/pages/auth/signup"}
            className="black:text-klight cursor-pointer transition-all black:hover:text-white"
          >
             <span >No account yet ? <span className="underline underline-offset-4">Singup</span ></span> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
