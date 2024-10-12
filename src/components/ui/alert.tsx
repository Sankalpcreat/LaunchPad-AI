// src/components/ui/alert.tsx

import React from 'react';

interface AlertProps {
  variant?: 'destructive' | 'info';
}

const Alert: React.FC<AlertProps> = ({ variant = 'info', children }) => {
  const variantClasses =
    variant === 'destructive'
      ? 'bg-red-100 text-red-700'
      : 'bg-blue-100 text-blue-700';

  return (
    <div className={`border rounded-lg p-4 ${variantClasses}`}>
      {children}
    </div>
  );
};

export const AlertTitle: React.FC = ({ children }) => (
  <h4 className="font-semibold">{children}</h4>
);

export const AlertDescription: React.FC = ({ children }) => (
  <p className="mt-1">{children}</p>
);

export default Alert;
