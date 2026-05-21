import { Button, ButtonWrapper, Icon, Text } from "./styles";

const Index = ({
  className,
  disabled,
  fluid,
  icon,
  content,
  loading,
  type,
  lineHeight,
  onClick,
}: StrictButtonProps) => {
  return (
    <ButtonWrapper>
      {loading && icon && <Icon loading={loading} />}
      <Button
        content={content}
        type={type}
        disabled={disabled}
        className={className}
        inline-style={{ width: fluid ? "100%" : "auto" }}
        onClick={onClick}
      >
        {content ?? <Text lineHeight={lineHeight}>{loading ? "Loading..." : content}</Text>}
      </Button>
    </ButtonWrapper>
  );
};

interface StrictButtonProps {
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  role?: string;
  tabIndex?: number | string;
  toggle?: boolean;
  type?: "submit" | "reset" | "button";
  lineHeight?: number;
}

export default Index;
