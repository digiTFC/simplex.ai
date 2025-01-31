import { ReactNode } from "react"
import IconBox from "../general-components/iconBox"
import { Titles } from "../general-components/Titles"
interface featureCardProps {
    title : string
    subtitle:string
    feature : ReactNode
}

const FeatureCard:React.FC<featureCardProps> = ({
feature , title, subtitle
}) => {
    return <div
    className="w-[340px] h-[381px]  group cursor-pointer icon-parent dark:bg-klightGrey bg-white  rounded-3xl flex flex-col items-center justify-between text-center px-[23px] py-[48px]"
  >
    <IconBox feature={feature}></IconBox>
    <Titles
      title={title}
      TitleStyle="md:text-[20px] text-[18px] font-semibold mb-[15px]"
      defaultStyle={false}
      subtitleStyle="text-[14px]  leading-[28px]"
      subTitle={subtitle}
    ></Titles>
  </div>
    
}
export default FeatureCard



