import React from "react";

const Button = ({ text, color, image }) => {
  return (
    <button
      className={`cursor-pointer h-12 w-full ${color} text-white rounded-2xl hover:bg-opacity-80 focus:outline-none focus:ring-2 
      focus:ring-${color === "bg-black" ? "black" : color === "bg-blue-500" ? "blue" : "green"}-300`}
    >
        <div className="flex items-center justify-center gap-2">
          <img src={image} alt="" />
          <p>{text}</p>
        </div>
    </button>
  );
};

export default Button;
