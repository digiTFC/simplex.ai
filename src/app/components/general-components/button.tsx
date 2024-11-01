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

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${disabled ? disabledStyle : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
