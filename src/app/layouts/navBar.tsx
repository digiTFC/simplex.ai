"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "@/app/components/button";
import Nav from "@/app/components/nav";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = ({}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
      } else if(currentScrollY - lastScrollY > -20) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      animate={{translateY:isVisible? 0 : "-100%"}}
      transition={{
        type:"spring",
        bounce:0,
        duration:0.2
      }}
      className=" w-full bg-kwhiteBg dark:bg-black z-[100] fixed"
    >
      <div className="w-10/12 m-auto my-[17px] ">
        <div className="flex items-center justify-between">
          <span className="text-[30px] font-bold tracking-widest">
            SIMPLEX
            <span className="inline-block h-2 w-2 dark:bg-kpurple bg-kpink rounded-full"></span>
          </span>

          <CiMenuFries
            className="dark:text-white md:hidden scale-[1.8]"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={` md:relative fixed flex flex-col   md:block   ${
              isOpen
                ? "dar:bg-klightGrey bg-white border  w-10/12 m-auto rounded-3xl z-50 flex items-center  justify-center fade-up"
                : "hidden md:block translate-x-[4%] flex-1 "
            }`}
          >
            <AnimatePresence>
              <Nav column={isOpen} onClick={() => setIsOpen(false)}></Nav>
            </AnimatePresence>
            <div className=" items-center gap-4 md:hidden flex mb-4 mt-2 ">
              <Link href={`/pages/auth/${"login"}`}>
                <Button
                  label="Login"
                  className="bg-black text-white hover:!bg-zinc-950 px-8 h-[44px] rounded-md group relative overflow-hidden border border-white "
                ></Button>
              </Link>
              <Link href={`/pages/auth/${"signup"}`}>
                <Button label="Signup"></Button>
              </Link>
            </div>
          </div>

          <div className=" items-center gap-4 hidden md:flex ">
            <Link href={`/pages/auth/login`}>
              <Button
                label="Login"
                className="bg-black text-white hover:!bg-zinc-950 px-8 h-[44px] rounded-md group relative overflow-hidden border border-white "
              ></Button>
            </Link>
            <Link href={`/pages/auth/${"signup"}`}>
              <Button label="Signup"></Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default NavBar;
