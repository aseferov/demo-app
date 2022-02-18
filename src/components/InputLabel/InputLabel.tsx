import React from "react";

const InputLabel: React.FC<React.ComponentProps<"label">> = (props) => {
  return <label {...props} className="block mb-1" />;
};

export default InputLabel;
