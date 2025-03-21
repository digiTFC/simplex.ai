import Nav from "@/app/components/nav";
import CopyRight from "./copyright";
import { Titles } from "@/app/components/Titles";

const Footer = ({}) => {
  return (
    <div className="">
      <div className="bg-klightGrey ">
        <div className="w-10/12 m-auto py-16 flex md:flex-row flex-col justify-between items-center ">
          <div className="md:w-3/12 flex flex-col h-[1/2] justify-between">
            <svg
              width="56"
              height="46"
              viewBox="0 0 56 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.8429 27.6028C48.7944 23.6762 42.2011 23.7812 38.1466 27.8338L35.1636 30.8155L32.2465 27.8998L37.7895 22.3594C42.5522 17.5989 42.5522 9.85071 37.7895 5.09022L36.6401 3.94134C34.3293 1.63459 31.2622 0.365723 28 0.365723C24.7378 0.365723 21.6677 1.63459 19.3629 3.94134L18.2135 5.09022C13.4508 9.85071 13.4508 17.5989 18.2135 22.3594L23.7565 27.8998L20.8394 30.8155L17.7363 27.7138C15.7106 25.689 13.0517 24.6781 10.3897 24.6781C7.72776 24.6781 5.06881 25.689 3.04309 27.7138C1.08039 29.6786 0 32.2853 0 35.06C0 37.8347 1.08039 40.4414 3.04309 42.4032C5.00279 44.362 7.61072 45.4389 10.3897 45.4389C13.1687 45.4389 15.7766 44.362 17.7363 42.4032L20.8394 39.3016L24.0176 42.4842C25.08 43.5461 26.4905 44.134 27.994 44.134C29.4975 44.134 30.911 43.5491 31.9734 42.4872L35.1636 39.2986L38.1466 42.2802C40.1513 44.284 42.8223 45.3879 45.6643 45.3879C48.5063 45.3879 50.9282 44.365 52.8429 42.5112C54.8776 40.5374 56 37.8887 56 35.057C56 32.2253 54.8776 29.5766 52.8429 27.6028ZM13.4928 38.1587C12.6645 38.9866 11.5631 39.4395 10.3897 39.4395C9.21629 39.4395 8.1149 38.9836 7.2866 38.1587C6.45831 37.3338 6.00214 36.2299 6.00214 35.057C6.00214 33.8841 6.45831 32.7833 7.2866 31.9553C8.1149 31.1274 9.21629 30.6715 10.3897 30.6715C11.5631 30.6715 12.6645 31.1274 13.4928 31.9553L16.5959 35.057L13.4928 38.1587ZM27.997 37.9787L26.9286 36.9108L25.08 35.06L27.967 32.1713L28.2071 32.3543L30.911 35.057L27.991 37.9757L27.997 37.9787ZM30.0317 21.6304L28.003 23.6582L22.46 18.1178C20.0382 15.6971 20.0382 11.7555 22.46 9.33176L23.6094 8.18289C24.7829 7.01001 26.3434 6.36208 28.003 6.36208C29.6626 6.36208 31.2232 7.00701 32.3966 8.18289L33.546 9.33176C35.9678 11.7525 35.9678 15.6941 33.546 18.1178L30.0317 21.6304ZM48.6654 38.2067C47.8401 39.0076 46.7597 39.4035 45.6643 39.4035C44.4879 39.4035 43.2995 38.9476 42.3931 38.0417L39.4101 35.06L42.3931 32.0783C44.1428 30.3295 46.9578 30.2545 48.6654 31.9103C49.5267 32.7443 50.0009 33.8631 50.0009 35.06C50.0009 36.2569 49.5267 37.3758 48.6654 38.2097V38.2067Z"
                fill="white"
              />
            </svg>
            <Titles
              title=""
              subtitleStyle="pt-6 pb-10 md:pt-16 md:pb-0"
              subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
            ></Titles>
          </div>
          <div className="flex flex-col items-start h-full justify-between w-full">
            <Titles
              title="Sections"
              TitleStyle="text-[16px] text-white pb-6 font-semibold"
            ></Titles>
            <div className="grid grid-cols-3 md:gap-32 gap-2 w-full place-content-between">
              <Nav column={true} footer={true} style="text-start"></Nav>
              <Nav column={true} footer={true} style="text-start"></Nav>
              <Nav column={true} footer={true} style="text-start"></Nav>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CopyRight></CopyRight>
      </div>
    </div>
  );
};
export default Footer;
