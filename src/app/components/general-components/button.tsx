// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className,
}) => {
  const disabledStyle = 'bg-gray-300 text-gray-700 cursor-not-allowed ';
  const defaultStyle = 'bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className ?? defaultStyle} transition-all ${disabled ? disabledStyle : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
