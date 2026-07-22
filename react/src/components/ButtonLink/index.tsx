import { ButtonLink } from "./styles";

const Index = ({ path, text }: ButtonLinkProps) => {
  return <ButtonLink to={path}>{text}</ButtonLink>;
};

interface ButtonLinkProps {
  path: string;
  text: string;
}

export default Index;
