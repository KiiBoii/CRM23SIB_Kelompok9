// src/components/ui/card.jsx
import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border rounded-xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
