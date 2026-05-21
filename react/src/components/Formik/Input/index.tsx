import type { InputProps } from "./types";
import { FieldSet, Label } from "./styles";
import { ErrorMessage, Field } from "formik";

const Input = (props: InputProps) => {
  const { label, id, name, type, placeholder, autoFocus = false, onChange, onBlur, value } = props;

  return (
    <FieldSet>
      <Label htmlFor={name}>{label}</Label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        autoFocus={autoFocus}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <ErrorMessage name={name} />
    </FieldSet>
  );
};

export default Input;
