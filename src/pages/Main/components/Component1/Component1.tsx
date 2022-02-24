import React from "react";
import { InputLabel, SelectProvince } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setProvince } from "../../reducer/mainFormSlice";
import TextField from "../TextField/TextField";

const Component1 = () => {
  const form = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="w-1/5 pl-5">
        <TextField label="Applicant Name" name="applicantName" />
      </div>
      <div className="w-1/5 pl-5">
        <InputLabel>Select Province</InputLabel>
        <SelectProvince
          value={form.provinceId || ""}
          onChange={(province) => {
            if (province) {
              dispatch(setProvince(province));
            }
          }}
        />
      </div>
    </div>
  );
};

export default Component1;
