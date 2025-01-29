import Image from "next/image"
const InsightCard:React.FC = ({}) => {
    return <div>
          <div className="absolute inset-x-0 z-50 top-[155%] md:w-[50vw] w-[85vw] h-[calc(41vw/1.61)] scale-[1.3] m-auto bg-klightGrey rounded-3xl">
          <Image src={"https://res.cloudinary.com/ddqkpyo5u/image/upload/v1738161241/Screenshot_2025-01-29_123346_k8pwhk.png"} className="rounded-3xl" width={1500} height={1500}  alt="app-mockup"></Image>
          </div>
    </div>
    
}
export default InsightCard