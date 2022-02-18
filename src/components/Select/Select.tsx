import React from "react";

const Select: React.FC<React.ComponentProps<"select">> = (props) => {
  return (
    <select
      className="bg-transparent focus:outline-none rounded p-3 border border-gray-300 w-full"
      {...props}
    />
  );
};

export default Select;
