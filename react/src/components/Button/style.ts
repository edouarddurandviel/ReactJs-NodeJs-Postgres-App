import styled from "styled-components";
import { fontSize, primary, radius, secondary } from "../../theme/variables";

export const Button = styled.button`
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
  background-color: ${primary};

  &:hover {
    background-color: ${secondary};
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;
