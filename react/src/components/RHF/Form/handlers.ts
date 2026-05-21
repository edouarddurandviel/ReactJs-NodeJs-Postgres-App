import type { SubmitHandler } from "react-hook-form";

export const onRHFSubmit: SubmitHandler<{ firstName: string; email: string }> = (data) => {
  console.log(data);
};
