import { fontSize, primary, radius, secondary } from "../../theme/variables";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: auto;
  float: left;
  height: 31px;
  padding: 0;
  border-radius: ${radius};
  text-align: center;
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

export const Button = styled.button`
  width: auto;
  height: 31px;
  margin: 0;
  text-align: center;
  padding: 0 10px;
  font-size: ${fontSize};
  line-height: 31px;
  color: #ffffff;
  background-color: transparent;
  font-weight: 500;
`;

interface IconProps {
  loading?: boolean;
}

export const Icon = styled.i<IconProps>`
  display: block;
  float: left;
  width: 21px;
  height: 21px;
  margin: 5px;
  border-radius: 10.5px;
  background: ${({ loading }) => (loading ? "green" : "transparent")};
`;

interface TextProps {
  lineHeight?: number;
}

export const Text = styled.div<TextProps>`
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : "31px")};
`;
