import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProvinceEntity } from "../../../services/ProvinceService";
import { RootState } from "../../../store";
import { VehicleMakeEntity } from "../../../services/VehicleMakeService";

export type MainFormState = {
  applicantName: string;
  applicantBirthDate: string;
  passport: string;
  drivingLicense: string;
  vehicleMake: null | VehicleMakeEntity;
  province: null | ProvinceEntity;
  ontarioId: null | string;
};

const initialState: MainFormState = {
  applicantName: "",
  applicantBirthDate: "",
  passport: "",
  drivingLicense: "",
  vehicleMake: null,
  province: null,
  ontarioId: null,
};

export const mainFormSlice = createSlice({
  name: "mainForm",
  initialState,
  reducers: {
    setApplicantName: (state, action: PayloadAction<string>) => {
      state.applicantName = action.payload;
    },
    setApplicantBirthDate: (state, action: PayloadAction<string>) => {
      state.applicantBirthDate = action.payload;
    },
    setProvince: (state, action: PayloadAction<ProvinceEntity>) => {
      state.province = action.payload;
      state.ontarioId = null;
    },
    setVehicleMake: (state, action: PayloadAction<VehicleMakeEntity>) => {
      state.vehicleMake = action.payload;
    },
    setOntarioId: (state, action: PayloadAction<string>) => {
      state.ontarioId = action.payload;
    },
    setPassport: (state, action: PayloadAction<string>) => {
      state.passport = action.payload;
    },
    setDrivingLicense: (state, action: PayloadAction<string>) => {
      state.drivingLicense = action.payload;
    },
    update: (state, action: PayloadAction<Partial<MainFormState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setApplicantName,
  setProvince,
  setOntarioId,
  setApplicantBirthDate,
  setVehicleMake,
  setDrivingLicense,
  setPassport,
  update,
} = mainFormSlice.actions;

export const isOntario = (state: RootState) =>
  state.mainForm.province &&
  state.mainForm.province.name.toLowerCase() === "ontario";

export default mainFormSlice.reducer;
