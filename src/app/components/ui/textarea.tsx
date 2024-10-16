// src/components/ui/textarea.tsx

import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      {...props}
    />
  );
};

export default Textarea;
