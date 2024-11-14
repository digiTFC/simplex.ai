import Button from "./button"
import Titles from "./Titles"

interface contactForm {
    hideTitle? : boolean
}

const ContactForm:React.FC<contactForm> = ({hideTitle}) => {
    const inputStyle = 'border border-klightGrey text-white  hover:border-klightGreyHover w-[350px] top-[746px] outline-none py-[12px] px-[28px] bg-klightGrey left-[5292px] rounded-[5px] my-[10px]'
    const buttonSign = 'bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-[139px] top-[986px] left-[5292px] mt-3 rounded-[5px] py-[10px] px-[22px]'
    return <div><div className="flex flex-col">
        <div className={hideTitle?'hidden':''}>
    <Titles title="Get In Touch" subtitleStyle="pb-6" subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "></Titles>

        </div>
    <input type="text" placeholder="name" className={`${inputStyle} `} />
    <input type="text" placeholder="email" className={`${inputStyle} `} />
    <textarea name="description" id="description" className={`${inputStyle} `} placeholder="message"></textarea>
    <Button label="Get in Touch" className={`${buttonSign}`}></Button>
 </div></div>
}
export default ContactForm