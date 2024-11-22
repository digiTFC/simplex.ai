// components/Button.tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  isLoading? : boolean
  children? : ReactNode
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className,
  children,
  isLoading
}) => {
  const disabledStyle = 'bg-gray-300 text-gray-700 cursor-not-allowed ';
  const defaultStyle = '  bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]'

  return (
    
<button
      type={type}
      onClick={onClick}
      className={`${className ?? defaultStyle} transition-all   z-50  ${disabled ? disabledStyle : ''}`}
      disabled={disabled}
    >
      <div className='flex items-center justify-center'>
      {children}
    {isLoading ? <div className='border-t-transparent border mr-3  left-0 border-2 w-[20px] h-[20px] rounded-full animate-spin'></div> : ''}

      {label}
      </div>
      
    </button>
  );
};

export default Button;
