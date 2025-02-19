"use client";
import GridCard from "@/app/components/general-components/gridCard";
import RegisterForm from "@/app/pages/auth/[loginSignup]/_components/RegisterForm";
import { useEffect, useState } from "react";
import LoginForm from "./_components/login-form";
import { useParams } from "next/navigation";
import Link from "next/link";

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

const LoginSignUP = () => {
  const [isLogin, setIsLogin] = useState(false);
  const params = useParams()
  let state = ""
  if(params?.loginSignup){
   state = params?.loginSignup.toString()
  }

 useEffect(()=>{

  if(state == "login"){
    setIsLogin(true)
  }
 },[state])

  return (
    <div>
      <div className="flex items-center justify-center h-screen overflow-hidden">
   <Link href={"/pages/home"}>
   <div className=" cursor-pointer fixed top-5 left-10">
          <span className="text-[30px] font-bold tracking-widest">
          SIMPLEX
          <span className="inline-block h-2 w-2 dark:bg-kpurple bg-kpink rounded-full"></span>
        </span>
        </div></Link>
        <div className="md:w-1/2 flex  flex-col items-center justify-center">
          {isLogin ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
          <p
            className="black:text-klight cursor-pointer transition-all black:hover:text-white"
            onClick={() =>{
              
              setIsLogin(!isLogin)
                
            }}
          >
            { isLogin ? <span >No account yet ? <span className="underline underline-offset-4">Singup</span ></span> : <span>Already have an account ? <span className="underline underline-offset-4">Login</span></span>}
          </p>
        </div>
        <div className="w-1/2 self-end md:block hidden">
          <div className="md:grid grid-cols-3  ">
            {Array.from({ length: 3 }).map((item, index) => {
              const backgroundImage = setBackground(index);
              return (
                <div
                  key={index}
                  className={`${
                    index == 1 ? `relative top-40 ` : `relative top-8 `
                  }grid-rows-3 grid gap-7`}
                >
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <div key={index}>
                        <GridCard
                          index={index}
                          background={backgroundImage}
                        ></GridCard>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUP;
