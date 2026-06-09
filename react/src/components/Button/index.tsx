import { Button } from "./style";

const Index = ({ content, disabled, onClick }: ButtonProps) => {
  return (
    <Button onClick={() => onClick()} disabled={disabled}>
      {content}
    </Button>
  );
};

interface ButtonProps {
  content: string;
  onClick: () => void;
  disabled?: boolean;
}

export default Index;
