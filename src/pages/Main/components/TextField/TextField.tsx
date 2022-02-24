import React, { useMemo } from "react";
import Input, { InputProps } from "../../../../components/Input/input";
import { MainFormState, setTextField } from "../../reducer/mainFormSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

export type TextFieldProps = InputProps & {
  label?: string;
  name: keyof MainFormState;
  visibleOn?: { fieldName: keyof MainFormState; value: string }[];
};

const TextField = ({
  label,
  visibleOn,
  ...inputProps
}: TextFieldProps): JSX.Element | null => {
  const form = useAppSelector((state) => state.mainForm);
  const dispatch = useAppDispatch();

  const isVisible = useMemo(() => {
    if (!visibleOn) {
      return true;
    }
    return !visibleOn.some((field) => form[field.fieldName] !== field.value);
  }, [form, visibleOn]);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <label>{label}</label>
      <Input
        {...inputProps}
        value={form[inputProps.name]}
        onChange={(e) => {
          dispatch(
            setTextField({
              field: e.target.name as keyof MainFormState,
              value: e.target.value,
            })
          );
        }}
      />
    </>
  );
};

export default TextField;
