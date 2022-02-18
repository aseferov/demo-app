import React from "react";

const Input: React.FC<React.ComponentProps<"input">> = (props) => {
  return (
    <input
      className="bg-transparent focus:outline-none rounded p-3 border border-gray-300 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
      {...props}
    />
  );
};

export default Input;
