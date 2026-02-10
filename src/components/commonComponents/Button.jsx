import React from "react";
const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;