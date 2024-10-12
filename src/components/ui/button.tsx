// src/components/ui/button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded focus:outline-none";
  const variantClasses = variant === 'destructive' ? "bg-red-600 text-white hover:bg-red-700" : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
