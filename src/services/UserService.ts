import { MainFormState } from "../pages/Main/reducer/mainFormSlice";

export default {
  save(payload: MainFormState) {
    return Promise.resolve({
      applicantName: payload.applicantName + " updated",
      passport: payload.passport + " updated",
      drivingLicense: payload.drivingLicense + " updated",
      ontarioId: payload.ontarioId + " updated",
    });
  },
};
