// src/components/ui/alert.tsx

import React from 'react';

// Update the AlertProps interface to include className and children
interface AlertProps {
  variant?: 'destructive' | 'info';
  className?: string; // Add className as an optional prop
  children: React.ReactNode; // Include children as a required prop
}

const Alert: React.FC<AlertProps> = ({ variant = 'info', className, children }) => {
  const variantClasses =
    variant === 'destructive'
      ? 'bg-red-100 text-red-700'
      : 'bg-blue-100 text-blue-700';

  return (
    <div className={`border rounded-lg p-4 ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

export const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-semibold">{children}</h4>
);

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-1">{children}</p>
);

export default Alert;
