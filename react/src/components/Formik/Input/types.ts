import type { ChangeEvent } from "react";

export type InputProps = {
  name: string;
  id: string;
  type: string;
  value: any;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  onChange: (event: ChangeEvent<any>) => void;
  onBlur: (event: ChangeEvent<any>) => void;
};
