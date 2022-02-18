import React from "react";
import { Input, InputLabel } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  setApplicantBirthDate,
  setApplicantName,
} from "../../reducer/mainFormSlice";
import config from "../../../../config";

const Component3 = () => {
  const form = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  return (
    <div className="flex -mx-1">
      <div className="pl-5">
        <InputLabel>Applicant Name</InputLabel>
        <Input
          type="text"
          value={form.applicantName}
          onChange={(e) => {
            dispatch(setApplicantName(e.target.value));
          }}
        />
      </div>
      <div className="pl-5">
        <InputLabel>Birth Date</InputLabel>
        <Input
          type={config.mainForm.applicantBirthField.fieldType}
          required={config.mainForm.applicantBirthField.mandatory}
          disabled={config.mainForm.applicantBirthField.disabled}
          value={form.applicantBirthDate}
          onChange={(e) => {
            dispatch(setApplicantBirthDate(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default Component3;
