import { Button } from "./style";

const Index = ({ content, onClick }: ButtonProps) => {
  return <Button onClick={() => onClick()}>{content}</Button>;
};

interface ButtonProps {
  content: string;
  onClick: () => void;
}

export default Index;
