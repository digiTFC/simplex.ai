'use client'
import { PaiementForm } from "@/app/pages/(public)/(with-navbar)/pricing/_components/paiementForm";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import GradientCircle from "@/app/components/gradientCircle";
import { LoopsIllustration } from "@/app/components/loopsIllustration";
import { pricingData } from "@/app/pages/(public)/data/subcriptions";

// interface paimentProps {
//   plan: string;
//   price: number;
// }

const Paiement = () => {
    const router = useRouter();
    const params = useParams();
    let index=0
    let duration = "monthly"
    
    if(params?.paiment){
       index = Number(params.paiment.toString().substring(1,-1))
       duration = params.paiment.toString().substring(4)
    }
    
    const data = pricingData[index] 
    const price = duration == "monthly" ? data.monthlyPrice : data.yearlyPrice 


      // const data = pricingData[Number(index)]


  const style = "text-white text-[30px] font-semibold";
  return (
    <div className="w-9/12 py-12 m-auto flex items-start justify-center flex-col h-full">
      <div className=" cursor-pointer flex items-center group text-black group rounded-lg transition-all bg-white px-8 py-2 w-fit" onClick={()=>router.back()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-hover:translate-x-[-5px] transition-all">
  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

        <span className="pl-3">Back</span>
      </div>
      <div className=" m-auto pt-12 flex md:flex-row flex-col  justify-between">
        <div className="md:w-5/12 text-white">
          <div className="flex justify-between">
            <span className={style}>{data.name}</span>
            <span className={style}>${price.toFixed(2)}</span>
          </div>

          <div className="overflow-hidden mt-10 h-[40vh] w-full bg-klightGrey rounded-3xl relative">
            <div className="scale-[10] w-fit">
                <GradientCircle ></GradientCircle>
            </div>
            <div className="relative -right-[60%] top-[75px]">
                <LoopsIllustration></LoopsIllustration>
            </div>

            <div className="w-[70%] h-[70%] bg-khr shadow  opacity-50 blur-[2px] rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   absolute border"></div>
          </div>

          <div className="hidden md:block">
            <p className="text-klight my-4 mt-12">
              <span className="font-medium text-white">
                Stand out in the crowd!
              </span>{" "}
              With the Professional Plan, your profile takes center stage,
              attracting potential clients and collaborators.
            </p>
            <p className="text-klight ">
              <span className="font-medium text-white ">
                Showcase your versatility!
              </span>{" "}
              List as many projects as your creativity allows. Whether it&lsquo;`s
              sleek mobile apps, intuitive web interfaces, or immersive user
              experiences, there&lsquo;`s no limit to the number of masterpieces you
              can display, drawing clients into your world of design brilliance.
            </p>
          </div>
        </div>
        <div className="md:w-4/12 overflow-x-hidden pt-16 md:pt-0">
          <PaiementForm price={price} subscriptionId={index+1}></PaiementForm>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
