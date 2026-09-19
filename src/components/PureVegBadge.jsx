import React from 'react';

export const PureVegSymbol = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-3.5 h-3.5 border-[1.5px]",
    md: "w-4.5 h-4.5 border-[1.5px]",
    lg: "w-5.5 h-5.5 border-2"
  };

  const dotClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5"
  };

  return (
    <span 
      className={`inline-flex items-center justify-center border-emerald-700 bg-white rounded-sm shrink-0 ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title="100% Pure Vegetarian"
    >
      <span className={`bg-emerald-700 rounded-full ${dotClasses[size] || dotClasses.md}`}></span>
    </span>
  );
};

export const PureVegBadge = ({ text = "Pure Vegetarian", size = "md", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 border border-emerald-700/30 text-emerald-800 text-xs font-semibold tracking-wider uppercase backdrop-blur-xs ${className}`}>
      <PureVegSymbol size={size} />
      <span>{text}</span>
    </div>
  );
};
