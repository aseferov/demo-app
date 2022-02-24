import React from "react";
import TextField from "../TextField/TextField";

const Component4 = () => {
  return (
    <div className="flex">
      <div className="w-1/5 pl-5">
        <TextField label="Passport" name="passport" />
      </div>
      <div className="w-1/5 pl-5">
        <TextField label="Driving License" name="drivingLicense" />
      </div>

      <div className="w-1/5 pl-5">
        <TextField
          label="Ontario ID"
          name="ontarioId"
          visibleOn={[
            {
              fieldName: "provinceId",
              value: "1",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Component4;
