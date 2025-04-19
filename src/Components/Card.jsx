import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`card-base ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`card-content-base ${className}`}>
      {children}
    </div>
  );
};
