import React from "react";
import config from "../Component2/config";
import TextField from "../TextField/TextField";

const Component3 = () => {
  return (
    <div className="flex -mx-1">
      {config.fields.map((field) => (
        <div className="pl-5" key={field.name}>
          <TextField {...field} />
        </div>
      ))}
    </div>
  );
};

export default Component3;
