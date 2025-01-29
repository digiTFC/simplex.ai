import Link from "next/link";
import Button from "./button";
import { Titles } from "./Titles";

interface contactForm {
  hideTitle?: boolean;
}

const ContactForm: React.FC<contactForm> = ({ hideTitle }) => {
  const inputStyle =
    "border border-gray-400  hover:border-gray-600  dark:border-klightGrey dark:text-white  dark:hover:border-klightGreyHover w-full top-[746px] outline-none py-[12px] px-[28px] dark:bg-klightGrey left-[5292px] rounded-[5px] my-[10px]";
  const buttonSign =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700 w-[139px] top-[986px] left-[5292px] mt-3 rounded-[5px] py-[10px] px-[22px]";
  return (
    <div>
      <div className="flex flex-col px-8">
        <div className={hideTitle ? "hidden" : ""}>
          <Titles
            title="Get In Touch"
            subtitleStyle="pb-4"
            subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
          ></Titles>
        </div>
        <div className="flex flex-col items-end">
        <input type="text" placeholder="name" className={`${inputStyle} `} />
        <input type="text" placeholder="email" className={`${inputStyle} `} />
        <textarea
          name="description"
          id="description"
          className={`${inputStyle} `}
          placeholder="message"
        ></textarea>
        <Link href={"mailto:sanguojoseph17@gmail.com"}>
          <Button
            label="Get in Touch"
            className={`${buttonSign}`}
          ></Button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
