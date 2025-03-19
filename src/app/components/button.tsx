// components/Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  loadindIsWhite?: boolean;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className,
  children,
  isLoading,
  loadindIsWhite = true,
  isDisabled
}) => {
  const defaultStyle ="bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-fit h-[44px]  rounded-[5px]  px-[32px]";
  const loadingStyle =`${
            isLoading
              ? `transition-all  transition-all  border-t-transparent border border-white    mr-3 w left-0 border-2 w-[20px] h-[20px] rounded-full animate-spin`
              : "absolute"
          } ${loadindIsWhite ? "border-white" : "border-black"} `

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className ?? defaultStyle} ${isLoading != null ? "overflow-hidden " : ""} transition-all  cursor-pointer! z-40 `}
      disabled={isLoading || isDisabled}
    >
      <div className="flex items-center justify-center">
        {children}
        <div
          className={loadingStyle}
        ></div>

        {label}
      </div>
    </button>
  );
};

export default Button;
