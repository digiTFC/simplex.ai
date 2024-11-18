import { ReactNode } from "react"
import Button from "../general-components/button"
import PrincingTile from "./princingTile"

interface pricingProps{
    icon : ReactNode,

    title : string,
    features : string[],
    price :string
    onClick : () => void

}
const PricingCard:React.FC<pricingProps> = ({icon,title,features,price,onClick}) => {

  const style = 'bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]'

    return <div className="text-white">
        <div>
                <div className="w-[350px] h-[495px] relative bg-klightGrey flex flex-col justify-between  items-center  text-center  rounded-2xl px-[24px] py-8">
        <div className=" w-[76px] h-[76px] absolute   -translate-y-[50%] top-0  flex items-center justify-center rounded-full bg-kOnSecondary">
          {icon}
        </div>
        <h1 className="text-[20px] font-medium mt-4">{title}</h1>
        <hr className=" w-full my-[20px] border-khr" />
        <div className="self-start">
            {Array.from({length:5}).map((_, idx) => {
                return   <PrincingTile key={idx} index={idx} title={features[idx]}></PrincingTile>        
            })}
        </div>
        <hr className="w-full py-2 border-khr "/>
        <div className=" w-full flex items-center justify-between">
            <h1 className="text-[40px] font-medium transition-all">${price}<span className="text-[14px] font-normal text-klight">/mo</span> </h1>
            <Button label="Signup" onClick={onClick} className={style}></Button>
        </div>
      </div>
        </div>
    </div>
}
export default PricingCard