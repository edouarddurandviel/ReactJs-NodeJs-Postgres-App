import {
  useForm,
  type Control,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormReset,
  type UseFormSetValue,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useImperativeHandle, type ReactNode } from "react";

const Index = ({ defaultValues, validationSchema, children, ref }: FormProps) => {
  const methods = useForm<any>({
    defaultValues: defaultValues,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useImperativeHandle(ref, () => ({
    resetForm: (values: any) => reset(values),
  }));

  const { handleSubmit, reset, control, setValue } = methods;

  return children({ control, reset, handleSubmit, setValue });
};

interface FormProps {
  ref?: any;
  defaultValues: any;
  validationSchema: any;
  onSubmit?: SubmitHandler<any>;
  children: ({
    control,
    handleSubmit,
    reset,
    setValue,
  }: {
    control: Control<any, any, any>;
    handleSubmit: UseFormHandleSubmit<any, any>;
    reset: UseFormReset<any>;
    setValue: UseFormSetValue<any>;
  }) => ReactNode;
}

export default Index;
