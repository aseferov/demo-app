import React from "react";
import { Input, InputLabel, SelectProvince } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setApplicantName, setProvince } from "../../reducer/mainFormSlice";

const Component1 = () => {
  const form = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="w-1/5 pl-5">
        <InputLabel>Applicant Name</InputLabel>
        <Input
          type="text"
          value={form.applicantName}
          onChange={(e) => {
            dispatch(setApplicantName(e.target.value));
          }}
        />
      </div>
      <div className="w-1/5 pl-5">
        <InputLabel>Select Province</InputLabel>
        <SelectProvince
          value={form.province?.id || ""}
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
