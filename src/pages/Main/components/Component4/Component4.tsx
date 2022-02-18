import React from "react";
import { Input, InputLabel } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  isOntario,
  setDrivingLicense,
  setOntarioId,
  setPassport,
} from "../../reducer/mainFormSlice";

const Component4 = () => {
  const form = useAppSelector((state) => state.mainForm);
  const _isOntario = useAppSelector(isOntario);
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="w-1/5 pl-5">
        <InputLabel>Passport</InputLabel>
        <Input
          type="text"
          value={form.passport}
          onChange={(e) => {
            dispatch(setPassport(e.target.value));
          }}
        />
      </div>
      <div className="w-1/5 pl-5">
        <InputLabel>Driving License</InputLabel>
        <Input
          type="text"
          value={form.drivingLicense}
          onChange={(e) => {
            dispatch(setDrivingLicense(e.target.value));
          }}
        />
      </div>
      {_isOntario && (
        <div className="w-1/5 pl-5">
          <InputLabel>Ontario ID</InputLabel>
          <Input
            type="text"
            value={form.ontarioId || ""}
            onChange={(e) => {
              dispatch(setOntarioId(e.target.value));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Component4;
