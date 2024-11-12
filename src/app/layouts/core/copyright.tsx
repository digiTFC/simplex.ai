import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import IconBox from "@/app/components/general-components/iconBox";
import Titles from "@/app/components/general-components/Titles";

const CopyRight = ({}) => {
  return (
    <div className=" bg-black     py-6">
      <div className="w-10/12 items-center m-auto flex justify-between" >
      <Titles
        title=""
        subtitleStyle="text-[14px]"
        subTitle="All Rights Reserveds 2024"
      ></Titles>
      <div className="text-white  flex justify-between gap-5">
       <IconBox>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-[18px]"
              color="white"
            />
          </a></IconBox>
        

        <IconBox>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-[18px]" />
          </a>
        </IconBox>
        <IconBox>
            <div>          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-[18px]" />
          </a></div>
        </IconBox>
      </div>
      </div>
    </div>
  );
};
export default CopyRight;
