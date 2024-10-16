// src/components/ui/input.tsx

import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      {...props}
    />
  );
};

export default Input;
