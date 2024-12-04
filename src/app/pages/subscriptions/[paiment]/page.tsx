'use client'
import { PaiementForm } from "@/app/components/pricingComponents/paiementForm";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import GradientCircle from "@/app/components/general-components/gradientCircle";
import { LoopsIllustration } from "@/app/components/general-components/loopsIllustration";
import { pricingData } from "@/data/subcriptions";

// interface paimentProps {
//   plan: string;
//   price: number;
// }

const Paiement = () => {
    const router = useRouter();
    const params = useParams();
    const index = Number(params!.paiment.toString().substring(1,-1))
    const duration = params!.paiment.toString().substring(4)
    const data = pricingData[index] 
    const price = duration == "monthly" ? data.monthlyPrice : data.yearlyPrice 


      // const data = pricingData[Number(index)]


  const style = "text-white text-[30px] font-semibold";
  return (
    <div className="w-9/12 py-12 m-auto flex items-start justify-center flex-col h-full">
      <div className=" cursor-pointer flex items-center text-black group rounded-lg transition-all bg-white px-8 py-2 w-fit" onClick={()=>router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} width={10} className="transition-all duration-200 group-hover:-translate-x-2 "></FontAwesomeIcon>
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
          <PaiementForm price={price}></PaiementForm>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
