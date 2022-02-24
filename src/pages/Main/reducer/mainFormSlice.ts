import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProvinceEntity } from "../../../services/ProvinceService";
import { VehicleMakeEntity } from "../../../services/VehicleMakeService";

export type MainFormState = {
  applicantName: string;
  applicantBirthDate: string;
  passport: string;
  drivingLicense: string;
  vehicleMakeId: string;
  provinceId: string;
  ontarioId: string;
};

const initialState: MainFormState = {
  applicantName: "",
  applicantBirthDate: "",
  passport: "",
  drivingLicense: "",
  vehicleMakeId: "",
  provinceId: "",
  ontarioId: "",
};

export const mainFormSlice = createSlice({
  name: "mainForm",
  initialState,
  reducers: {
    setProvince: (state, action: PayloadAction<ProvinceEntity>) => {
      state.provinceId = action.payload.id.toString();
      state.ontarioId = "";
    },
    setVehicleMake: (state, action: PayloadAction<VehicleMakeEntity>) => {
      state.vehicleMakeId = action.payload.id.toString();
    },
    setTextField: (
      state,
      action: PayloadAction<{ field: keyof MainFormState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    update: (state, action: PayloadAction<Partial<MainFormState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProvince, setTextField, setVehicleMake, update } =
  mainFormSlice.actions;

export default mainFormSlice.reducer;
