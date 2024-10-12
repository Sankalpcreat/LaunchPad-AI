// src/components/ui/card.tsx

import React from 'react';

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC = ({ children }) => (
  <div className="border-b mb-4">{children}</div>
);

export const CardTitle: React.FC = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardDescription: React.FC = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent: React.FC = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardFooter: React.FC = ({ children }) => (
  <div className="mt-4">{children}</div>
);

export default Card;
