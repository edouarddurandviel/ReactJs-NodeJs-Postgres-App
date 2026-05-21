export interface ButtonProps extends StrictButtonProps {
  [key: string]: number | string | object | React.ReactNode | boolean;
}

export interface StrictButtonProps {
  as?: string;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  content?: string;
  disabled?: boolean;
  fluid?: boolean;
  icon?: boolean | React.ReactNode;
  label?: React.ReactNode;
  loading?: boolean;
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    //data: ButtonProps,
  ) => void;
  role?: string;
  tabIndex?: number | string;
  toggle?: boolean;
  type?: "submit" | "reset" | "button";
  lineHeight?: number;
}
