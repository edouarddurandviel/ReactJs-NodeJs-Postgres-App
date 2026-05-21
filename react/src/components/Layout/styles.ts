import styled from "styled-components";

import { fontSize, primary, radius, secondary } from "../../theme/variables";
import type { TextProps } from "./interfaces";

export const PLaceHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 20px;
`;

export const H2 = styled.h2`
  margin: 20px 10px 10px 10px;
`;

export const Header = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  position: relative;
  height: 100px;
  background-color: ${secondary};
  transition: background-color 0.5s ease-in-out;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  height: 31px;
  width: 100%;

  .links {
    display: block;
    float: left;
    width: auto;
    border-radius: ${radius};
    background-color: ${primary};
    color: #ffffff;
    font-size: ${fontSize};
    height: 31px;
    line-height: 31px;
    font-weight: 500;
    padding: 0 10px;
    margin: 0 10px;
    border: 1px solid ${primary};
    box-sizing: border-box;

    &:hover {
      background-color: ${secondary};
      border: 1px solid ${primary};
      box-sizing: border-box;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 200px);
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(188, 209, 238, 1);
  width: 45%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FormActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 20px 30px;
`;

export const FormActionsLabel = styled.div`
  float: right;
  height: 35px;
  line-height: 35px;
  margin: 20px 0 20px 30px;
`;

export const BthForm = styled.div`
  margin-top: 31px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
`;

export const RightColumn = styled.div`
  display: flex;
  background-color: #f1f1f1fc;
  flex-direction: column;
  width: 55%;
  padding-bottom: 20px;
`;

export const Footer = styled.div<TextProps>`
  display: flex;
  flex-direction: column;
  ${(props) => `line-height: ${props.lineHeight};`}
  width: 100%;
  min-height: 100px;
  background-color: #0e4491;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  display: block;
  clear: both;
  padding: 10px;
`;

export const InlineWrapper = styled.div`
  display: flex;
  margin: 13px 20px;
`;
