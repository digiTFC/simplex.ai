import Link from "next/link";
import Button from "./button";
import { Titles } from "./Titles";
import { Input } from "./input";
import { TextArea } from "./text-area";

interface contactForm {
  hideTitle?: boolean;
}

const ContactForm: React.FC<contactForm> = ({ hideTitle }) => {
  const inputStyle =
    "border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[5px] my-[10px]";
  const buttonSign =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-full  mt-3 rounded-[5px] py-[10px] px-[22px] cursor-pointer";
  return (
    <div>
      <div className="flex flex-col md:px-8">
        <div className={hideTitle ? "hidden" : ""}>
          <Titles
            title="Get In Touch"
            subtitleStyle="pb-4"
            subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
          ></Titles>
        </div>
        <div className="flex flex-col md:items-end space-y-4">
          <Input placeholder="name" useLabel={false}/>
          <Input placeholder="email" useLabel={false}/>
          <TextArea placeholder="message" useLabel={false}/>
        <Link className="w-full " href={"mailto:sanguojoseph17@gmail.com"}>
          <Button
            label="Get in Touch"
            className={`${buttonSign} `}
          ></Button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
