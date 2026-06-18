import styled from "styled-components";
import { Link } from "react-router";
import { fontSize, primary, radius, secondary } from "../../theme/variables";

export const ButtonLink = styled(Link)`
  width: auto;
  height: 31px;
  padding: 0 20px;
  margin: 0 5px;
  border-radius: ${radius};
  text-align: center;
  font-size: ${fontSize};
  line-height: 31px;
  color: #ffffff;
  border: none;
  font-weight: 500;
  background-color: ${primary};

  &:hover {
    background-color: ${secondary};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  a {
    line-height: 31px;
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
`;
