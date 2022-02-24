import React from "react";
import { InputLabel, SelectVehicleMake } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setVehicleMake } from "../../reducer/mainFormSlice";

const Component2 = () => {
  const form = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="w-1/5 pl-5">
        <InputLabel>Select Make</InputLabel>
        <SelectVehicleMake
          value={form.vehicleMakeId || ""}
          onChange={(make) => {
            if (make) {
              dispatch(setVehicleMake(make));
            }
          }}
        />
      </div>
    </div>
  );
};

export default Component2;
