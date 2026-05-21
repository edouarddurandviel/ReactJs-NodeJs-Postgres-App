import { useField } from "@formiz/core";
import { FieldSet, InputField, Label } from "./styles";

type Value = string | number | readonly string[] | undefined;

const Input = ({
  name,
  id,
  type,
  required,
  placeholder,
  label,
  autoFocus,
  validations,
  ref,
}: InputProps) => {
  const { value, isValid, errorMessage, setValue, isPristine } = useField({
    name,
    id,
    type,
    required,
    placeholder,
    label,
    autoFocus,
    validations,
    ref,
  });

  const showError = !isValid && !isPristine;

  return (
    <FieldSet>
      <Label>{label}</Label>
      <InputField
        value={(value as Value) ?? ""}
        id={id}
        type={type}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {showError && errorMessage}
    </FieldSet>
  );
};
interface InputProps {
  name: string;
  id: string;
  type: string;
  required?: string;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  validations?: Array<{
    handler: (value: unknown) => boolean;
    message: string;
  }>;
  ref?: any;
}

export default Input;
