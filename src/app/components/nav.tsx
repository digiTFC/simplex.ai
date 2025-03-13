"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface navPros {
  column?: boolean;
  style?: string;
  footer?: boolean;
  onClick?: () => void;
}
const Nav: React.FC<navPros> = ({ column, style, footer, onClick }) => {
  const links = [
    { href: "/pages/home", label: "Home" },
    { href: "/pages/pricing", label: "Pricing" },
    { href: "/pages/aboutUs", label: "About" },
    { href: "/pages/contactUs", label: "ContactUs" },
  ];

  const getNavStyle = (
    footer: boolean | undefined,
    column: boolean | undefined
  ) => {
    return `${
      footer
        ? "hover:text-white hover:underline underline-offset-8 text-left"
        : "text-[17px] text-center  after:dark:bg-white after:bg-black dark:hover:text-white hover:text-black"
    } text-hover ${style} transition-all duration-200 border-kOnSecondary md:py-4 py-2  ${
      column ? "md:py-2 text-start" : "text-center md:py-0"
    }`;
  };


  return (
    <nav
      className={`relative  text-md w-full  md:gap-8 md:items-end items-center black:text-klight  text-gray-500  flex  md:text-center md:justify-center   ${
        column ? "flex-col text-start" : `h-full md:flex-row `
      } `}
    >
      {links.map((link) => {
        return (
          <Link
           key={link.href}
            href={link.href}
            aria-label={link.label}
            className={getNavStyle(footer, column)}
            onClick={onClick}
          >
            {link.label}
          </Link>
        );
        return;
      })}
    </nav>
  );
};

export default Nav;
