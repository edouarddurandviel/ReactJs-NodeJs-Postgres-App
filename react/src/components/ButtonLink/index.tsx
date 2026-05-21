import { Link } from "react-router";
import { ButtonLink } from "./style";

const Index = ({ path, text }: ButtonLinkProps) => {
  return (
    <ButtonLink>
      <Link to={path}>{text}</Link>
    </ButtonLink>
  );
};

interface ButtonLinkProps {
  path: string;
  text: string;
}

export default Index;
