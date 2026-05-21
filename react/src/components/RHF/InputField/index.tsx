import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { FieldSet, InputField, Label } from "./styles";

const Input = ({ name, control, label, type = "text", hidden }: InputFieldProps<any>) => {
  const {
    field,
    fieldState: { error },
  } = useController<any>({ name, control });

  return (
    <FieldSet hidden={hidden}>
      <Label>{label}</Label>
      <InputField
        ref={field.ref}
        name={field.name}
        aria-invalid={error ? "true" : "false"}
        type={type}
        value={field.value}
        onChange={(e) => {
          field.onChange(e.target.value.toString());
        }}
        onBlur={() => {
          field.onBlur();
        }}
      />
      {error && <span role="alert">{error.message}</span>}
    </FieldSet>
  );
};

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control?: Control<T>;
  label?: string;
  type?: string;
  hidden?: boolean;
}

export default Input;
