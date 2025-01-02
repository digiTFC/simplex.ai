import { Titles } from "@/app/components/general-components/Titles";
import FeatureCard from "@/app/components/homeComponents/featuresCard";


const Features = ({}) => {
  const featuresIcons = [
    {
      title:"Secure & Insightful",
      subtitle:"Safety and growth go hand in hand. Enjoy robust data security features and detailed reports to track and analyze your chatbot’s activities.",
      icon: (
        <svg
          width="45"
          height="46"
          viewBox="0 0 45 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.4493 36.7144C31.4832 36.7144 30.7 35.9106 30.7 34.919V19.8384C30.7 18.8468 31.4832 18.043 32.4493 18.043C33.4155 18.043 34.1986 18.8468 34.1986 19.8384V34.9191C34.1986 35.9106 33.4155 36.7144 32.4493 36.7144ZM36.2385 42.8368L41.6769 37.3014C43.6501 35.293 44.7819 32.5052 44.7819 29.653V10.7719C44.7819 4.83229 40.0735 0 34.2861 0H15.9342C13.1472 0 10.5223 1.10924 8.5435 3.12353L3.10501 8.65891C1.13172 10.6673 0 13.455 0 16.3074V35.1884C0 41.128 4.70839 45.9603 10.4957 45.9603H28.8476C31.6348 45.9603 34.2595 44.8511 36.2385 42.8368ZM34.2861 3.59065C38.1444 3.59065 41.2833 6.81215 41.2833 10.7719V29.6529C41.2833 31.5545 40.5288 33.413 39.2133 34.7519L33.7749 40.2874C32.4556 41.6302 30.7058 42.3697 28.8476 42.3697H10.4957C6.63748 42.3697 3.49858 39.1482 3.49858 35.1884V16.3074C3.49858 14.4059 4.25308 12.5473 5.56858 11.2084L11.007 5.67294C12.3263 4.33014 14.0761 3.59065 15.9342 3.59065H34.2861ZM36.3456 11.1777L37.0812 10.442C37.7732 9.75016 37.7876 8.61345 37.1134 7.90331C36.4393 7.19309 35.3316 7.17828 34.6398 7.87025L33.9041 8.60588C32.5074 10.0027 30.6641 10.7719 28.714 10.7719H11.283C10.3168 10.7719 9.53362 11.5757 9.53362 12.5673C9.53362 13.5589 10.3168 14.3627 11.283 14.3627H28.7139C31.5814 14.3626 34.2917 13.2315 36.3456 11.1777Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      

      title:"Personalized Data Integration",
      subtitle:"Data makes the difference. Personalize your chatbot by feeding it with your own documents, ensuring it provides accurate and relevant responses every time.",
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9999 28.396C20.0043 28.3961 18.0095 27.886 16.1904 26.8661L3.07367 19.5105C1.17162 18.444 -0.00591998 16.3815 0.000261118 14.128C0.00652463 11.8745 1.19552 9.81918 3.10342 8.76405L16.2532 1.49235C19.8516 -0.497449 24.1481 -0.497449 27.7465 1.49235L40.8963 8.76405C42.8042 9.81909 43.9932 11.8744 43.9994 14.128C44.0056 16.3815 42.8281 18.444 40.9261 19.5105L27.8092 26.8661C25.9907 27.886 23.9949 28.3959 21.9999 28.396ZM21.9999 3.59407C20.5781 3.59407 19.1565 3.95241 17.8605 4.66909L4.71083 11.9409C3.91636 12.3802 3.44041 13.2018 3.43786 14.1385C3.4353 15.0752 3.90655 15.8996 4.69864 16.3438L17.8155 23.6992C20.4359 25.1686 23.5643 25.1686 26.1846 23.6992L39.3016 16.3438C40.0937 15.8996 40.5649 15.0752 40.5623 14.1385C40.5598 13.2018 40.0838 12.3802 39.2894 11.9409L26.1392 4.66909C24.8432 3.95249 23.4216 3.59407 21.9999 3.59407ZM17.057 3.08072H17.0578H17.057ZM27.8093 43.1275L43.0932 34.5571C43.9297 34.0881 44.2441 32.9988 43.7955 32.1244C43.3468 31.2498 42.305 30.9211 41.4685 31.3902L26.1845 39.9606C23.5643 41.43 20.4358 41.43 17.8087 39.9569L2.52479 31.4764C1.68613 31.0111 0.645815 31.3446 0.200941 32.2211C-0.244098 33.0977 0.0748464 34.1853 0.913333 34.6506L16.1905 43.1274C18.0096 44.1475 20.0044 44.6574 21.9999 44.6574C23.9949 44.6575 25.9907 44.1474 27.8093 43.1275ZM27.8093 35.0418L43.0932 26.4714C43.9297 26.0023 44.2441 24.9131 43.7955 24.0386C43.3468 23.164 42.305 22.8355 41.4685 23.3044L26.1845 31.8749C23.5643 33.3443 20.4358 33.3442 17.8087 31.8712L2.52479 23.3906C1.68613 22.9253 0.645815 23.2589 0.200941 24.1354C-0.244098 25.012 0.0748464 26.0996 0.913333 26.5649L16.1905 35.0417C18.0096 36.0618 20.0044 36.5716 21.9999 36.5716C23.9949 36.5716 25.9907 36.0617 27.8093 35.0418Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      



      title:"User-Friendly Creation",
      subtitle:"A great tool doesn’t need a steep learning curve. With an intuitive user interface, you can easily create and deploy your chatbot in just a few steps.",
      icon: (
        <svg
          width="44"
          height="46"
          viewBox="0 0 44 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8008 35.1289C7.53679 35.1289 0 27.2495 0 17.5645C0 7.87937 7.53679 0 16.8008 0C26.0648 0 33.6016 7.87937 33.6016 17.5645C33.6016 27.2495 26.0648 35.1289 16.8008 35.1289ZM16.8008 3.59374C9.43228 3.59374 3.43749 9.86093 3.43749 17.5645C3.43749 25.268 9.4322 31.5352 16.8008 31.5352C24.1694 31.5352 30.1641 25.268 30.1641 17.5645C30.1641 9.86093 24.1693 3.59374 16.8008 3.59374ZM44 35.2188V24.9766C44 21.3421 42.2656 17.9759 39.3605 15.9721C38.5684 15.4257 37.5021 15.6541 36.9794 16.4825C36.4566 17.3109 36.6753 18.4254 37.4676 18.9719C39.4055 20.3086 40.5625 22.5532 40.5625 24.9767V35.2189C40.5625 39.1821 37.4784 42.4063 33.6875 42.4063H23.8906C21.6394 42.4063 19.5271 41.2505 18.2402 39.3146C17.6985 38.4996 16.6273 38.2982 15.848 38.8644C15.0684 39.4307 14.8758 40.5505 15.4173 41.3653C17.3465 44.2675 20.5141 46.0001 23.8907 46.0001H33.6876C39.3738 46 44 41.1635 44 35.2188Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      

      title:"Role-Based Customization",
      subtitle:"A chatbot isn’t just a program; it’s a personality. Fully customize its behavior and interactions based on the role it’s designed to play, making it truly one of a kind.",
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.7266 45C36.0509 45 34.4755 44.3326 33.2906 43.1208L28.1793 37.8933C26.4379 36.1124 25.2625 33.8656 24.7797 31.396L23.8065 26.4157C23.6938 25.8395 23.8703 25.2438 24.2767 24.8282C24.683 24.4127 25.2657 24.2325 25.8289 24.3474L30.6984 25.3429C33.1133 25.8366 35.31 27.0387 37.0515 28.8198L42.1628 34.0472C43.3476 35.2589 44.0001 36.87 44.0001 38.5838C44.0001 40.2976 43.3476 41.9088 42.1625 43.1206C40.9775 44.3326 39.4022 45 37.7266 45ZM27.6824 28.3116L28.1505 30.7068C28.4997 32.4936 29.3502 34.1189 30.61 35.4073L35.7213 40.6347C36.2568 41.1825 36.9691 41.4843 37.7266 41.4843C38.484 41.4843 39.1963 41.1825 39.7319 40.6347C40.2674 40.087 40.5625 39.3586 40.5625 38.5839C40.5625 37.8092 40.2674 37.0808 39.7319 36.5331L34.6205 31.3056C33.3608 30.0173 31.7716 29.1475 30.0246 28.7903L27.6824 28.3116ZM26.7681 42.9992C27.4438 42.3174 27.4511 41.2045 26.7843 40.5134C26.1177 39.8224 25.0293 39.8147 24.3538 40.4968C23.7227 41.1337 22.8868 41.4844 22.0001 41.4844C20.152 41.4844 18.6485 39.9468 18.6485 38.0567V17.4903C18.6485 13.6617 15.603 10.5469 11.8595 10.5469H6.87499C4.97958 10.5469 3.43749 8.96981 3.43749 7.03132C3.43749 5.09284 4.97958 3.51562 6.87499 3.51562H37.125C39.0204 3.51562 40.5625 5.09276 40.5625 7.03124C40.5625 8.96972 39.0204 10.5469 37.125 10.5469H32.1406C28.3971 10.5469 25.3516 13.6616 25.3516 17.4902V19.4238C25.3516 20.3946 26.1211 21.1816 27.0704 21.1816C28.0197 21.1816 28.7892 20.3946 28.7892 19.4238V17.4902C28.7892 15.6001 30.2926 14.0625 32.1407 14.0625H37.1251C40.916 14.0625 44.0001 10.9083 44.0001 7.03124C44.0001 3.15419 40.9159 0 37.125 0H6.87499C3.08409 0 0 3.15419 0 7.03124C0 10.9083 3.08409 14.0625 6.87499 14.0625H11.8594C13.7075 14.0625 15.2109 15.6001 15.2109 17.4902V38.0566C15.2109 41.8852 18.2564 44.9999 21.9999 44.9999C23.7963 45 25.4896 44.2894 26.7681 42.9992Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      
      title:"Advanced Analytics",
      subtitle:"Understanding is key to improvement. Access comprehensive reports and statistics to monitor your chatbot's performance and refine its capabilities for optimal results.",
      icon: (
        <svg
          width="45"
          height="46"
          viewBox="0 0 45 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9125 37.8765C27.4637 37.8765 27.0148 37.702 26.6718 37.3525L4.93852 15.2122C2.95308 13.1825 1.61401 10.6247 1.06432 7.81299C1.06272 7.80506 1.06128 7.79713 1.05985 7.78921L0.029671 2.1252C-0.0762717 1.54322 0.105188 0.945049 0.514883 0.526335C0.92441 0.107794 1.5095 -0.078043 2.07899 0.0303401L7.61987 1.0835C7.62762 1.08505 7.63537 1.08643 7.64304 1.08807C10.3936 1.65006 12.8959 3.01872 14.8793 5.04629L36.6104 27.1843C37.298 27.8848 37.2999 29.0224 36.6147 29.7252C35.9294 30.4279 34.8165 30.43 34.129 29.7295L12.3957 7.58933C10.9054 6.06593 9.02847 5.0381 6.96525 4.61413L3.95376 4.04181L4.51356 7.11987C4.92823 9.22912 5.9338 11.1478 7.42214 12.6691L29.1532 34.8074C29.8408 35.5078 29.8426 36.6454 29.1574 37.3482C28.8141 37.7003 28.3633 37.8765 27.9125 37.8765ZM12.0023 43.8982L18.7685 36.9799C19.4549 36.2781 19.4548 35.1405 18.7682 34.439C18.0818 33.7374 16.9689 33.7375 16.2826 34.4393L9.51655 41.3574C8.14596 42.7584 5.91568 42.7584 4.54517 41.3574C3.8812 40.6786 3.5155 39.7763 3.5155 38.8165C3.5155 37.8567 3.8812 36.9543 4.54534 36.2753L11.2675 29.4021C11.9539 28.7002 11.9537 27.5627 11.2673 26.8612C10.5808 26.1597 9.46784 26.1597 8.78144 26.8614L2.05944 33.7345C0.731488 35.0918 8.79438e-05 36.8967 8.79438e-05 38.8164C8.79438e-05 40.7361 0.731404 42.5409 2.05935 43.8983C3.42995 45.2994 5.2303 45.9998 7.03073 45.9998C8.83109 45.9998 10.6316 45.2992 12.0023 43.8982ZM36.1014 19.2576L40.06 15.21C42.0433 13.1826 43.3824 10.6247 43.9322 7.8129C43.9338 7.80497 43.9353 7.79705 43.9367 7.78912L44.9668 2.1252C45.0727 1.54314 44.8912 0.945049 44.4816 0.526335C44.0721 0.107707 43.4871 -0.0779568 42.9175 0.0303401L37.3766 1.08359C37.3688 1.08514 37.3611 1.08652 37.3534 1.08815C34.6029 1.65014 32.1005 3.0188 30.117 5.04655L26.2242 9.02691C25.5378 9.72873 25.538 10.8664 26.2246 11.5678C26.9111 12.2694 28.024 12.2694 28.7102 11.5675L32.6028 7.58735C34.0911 6.06585 35.9681 5.0381 38.0314 4.61413L41.0426 4.04189L40.4827 7.1203C40.068 9.22946 39.0624 11.148 37.5741 12.6694L33.6153 16.7171C32.9289 17.4189 32.9291 18.5566 33.6157 19.258C33.9589 19.6087 34.4085 19.7841 34.8583 19.7841C35.3082 19.784 35.7581 19.6086 36.1014 19.2576ZM42.937 43.8983C44.265 42.5409 44.9963 40.7361 44.9963 38.8164C44.9963 36.9068 44.2726 35.1108 42.9578 33.7558L41.6196 32.2993C40.9551 31.576 39.8427 31.5403 39.1351 32.2195C38.4275 32.8989 38.3926 34.0359 39.0572 34.7593L40.4129 36.2349C40.4254 36.2486 40.4382 36.2622 40.4513 36.2754C41.1153 36.9542 41.481 37.8565 41.481 38.8163C41.481 39.7762 41.1153 40.6786 40.4513 41.3572C39.0865 42.7522 36.8696 42.7583 35.4975 41.375L34.1626 39.9219C33.498 39.1987 32.3857 39.163 31.678 39.8422C30.9704 40.5215 30.9355 41.6586 31.6 42.3819L32.9557 43.8577C32.9684 43.8714 32.9811 43.8849 32.9942 43.8982C34.3648 45.2992 36.1652 45.9998 37.9656 45.9998C39.7659 45.9999 41.5664 45.2993 42.937 43.8983Z"
            fill="white"
          />
        </svg>
      ),
    },
    {      
    
      title:"Fully Exportable",
      subtitle:"A powerful tool should transcend boundaries. Your chatbot can be exported and seamlessly integrated across any platform, ensuring your solutions are always within reach.",
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.6875 36.2969H10.3107C4.62536 36.2969 0 31.4613 0 25.5175V10.7812C0 4.83646 4.62618 0 10.3125 0H33.6875C39.3738 0 44 4.83646 44 10.7812V25.5156C44 31.4604 39.3738 36.2969 33.6875 36.2969ZM10.3125 3.59374C6.52159 3.59374 3.43749 6.81803 3.43749 10.7812V25.5175C3.43749 29.4796 6.52085 32.7031 10.3107 32.7031H33.6874C37.4783 32.7031 40.5624 29.4788 40.5624 25.5156V10.7812C40.5624 6.81803 37.4783 3.59374 33.6874 3.59374H10.3125ZM31.9687 41.6875C31.9687 40.6951 31.1992 39.8906 30.2499 39.8906H13.75C12.8007 39.8906 12.0312 40.6951 12.0312 41.6875C12.0312 42.6799 12.8007 43.4844 13.75 43.4844H30.25C31.1993 43.4844 31.9687 42.6799 31.9687 41.6875ZM16.1563 23.1797C15.207 23.1797 14.4375 22.3752 14.4375 21.3828V16.3515C14.4375 13.3791 16.7506 10.9609 19.5938 10.9609H24.4922C25.4415 10.9609 26.211 11.7654 26.211 12.7578C26.211 13.7502 25.4415 14.5547 24.4922 14.5547H19.5938C18.6461 14.5547 17.875 15.3608 17.875 16.3516V21.3829C17.875 22.3752 17.1056 23.1797 16.1563 23.1797ZM28.9732 26.2472C29.6445 25.5454 29.6445 24.4076 28.9732 23.7059L23.3013 17.7762C22.6301 17.0744 21.5418 17.0744 20.8706 17.7762C20.1994 18.478 20.1993 19.6157 20.8706 20.3173L26.5424 26.247C26.878 26.598 27.318 26.7733 27.7578 26.7733C28.1976 26.7735 28.6375 26.598 28.9732 26.2472Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative bottom-32">
      <div className=" absolute  w-full bg-gradient-to-r from-kpink to-kpurple h-[174px] "></div>

      <div className=" curve-t relative pt-32  flex  items-center justify-center py-12 -left-[6vw] flex-col z-50  bg-white dark:bg-black  w-[112vw] ">
        <div className="w-screen">
        <div className="w-10/12 m-auto flex flex-col  relative md:left-[3vw] ">
          <Titles
            title="Feature Boxes"
            subtitleStyle="md:w-5/12"
            subTitle="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
          ></Titles>
            <div className="flex items-center justify-center">
            <div className="grid md:grid-cols-3  md:mr-[6vw] gap-8   mt-12">
            {featuresIcons.map((feature, index) => {
              return (
                <div key={index}>
                    <FeatureCard title={feature.title} subtitle={feature.subtitle} feature={feature.icon} ></FeatureCard>
                </div>
              );
            })}
          </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
