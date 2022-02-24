import React from "react";

export type InputProps = React.ComponentProps<"input">;

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="bg-transparent focus:outline-none rounded p-3 border border-gray-300 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
      {...props}
    />
  );
};

export default Input;
