"use client";
import GridCard from "@/app/components/gridCard";
import RegisterForm from "@/app/pages/(public)/auth/_components/RegisterForm";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import LoginForm from "../_components/login-form";

const setBackground = (index: number): string => {
  switch (index) {
    case 1:
      return "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370125/e4f977e1-5aa7-419b-b9ce-43973edadc3f.png)]";
    case 2:
      return "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730370082/5176f3eb-a0dc-4c6f-8a9d-a64d87964d2a.png)]";
    default:
      return "bg-[url(https://res.cloudinary.com/ddqkpyo5u/image/upload/v1730369547/058e806c-8e23-46fa-9641-fd4aa813bf97.png)]";
  }
};

const SignUp = () => {
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
          <RegisterForm></RegisterForm>
          <Link href={"/pages/auth/login"}
            className="black:text-klight cursor-pointer transition-all black:hover:text-white"
          >
             <span>Already have an account ? <span className="underline underline-offset-4">Login</span></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
