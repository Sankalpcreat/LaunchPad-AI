// src/components/ui/card.tsx

import React from 'react';

// Update the CardProps interface to include children
interface CardProps {
  className?: string;
  children: React.ReactNode; // Include children as a required prop
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};
export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`border-b mb-4 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);


export default Card;
