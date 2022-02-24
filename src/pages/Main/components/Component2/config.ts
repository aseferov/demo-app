import { TextFieldProps } from "../TextField/TextField";

const config: { fields: TextFieldProps[] } = {
  fields: [
    {
      label: "Applicant Name",
      name: "applicantName",
      type: "text",
    },
    {
      label: "Birth Date",
      name: "applicantBirthDate",
      type: "date",
      required: false,
      disabled: true,
    },
  ],
};

export default config;
