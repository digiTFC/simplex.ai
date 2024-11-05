import { ReactNode } from "react"
import IconBox from "../general-components/iconBox"
import Titles from "../general-components/Titles"
interface featureCardProps {
    feature : ReactNode
}

const FeatureCard:React.FC<featureCardProps> = ({
feature
}) => {
    return <div
    className="w-[340px] h-[361px]  group cursor-pointer icon-parent bg-klightGrey rounded-3xl flex flex-col items-center justify-between text-center px-[23px] py-[48px]"
  >
    <IconBox feature={feature}></IconBox>
    <Titles
      title="Fully Customizable"
      TitleStyle="text-[20px] font-semibold mb-[15px]"
      defaultStyle={false}
      subtitleStyle="text-[14px] leading-[28px]"
      subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
    ></Titles>
  </div>
    
}
export default FeatureCard



