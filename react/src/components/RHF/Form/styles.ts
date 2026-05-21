import { fontSize, radius } from "../../../theme/variables";
import styled from "styled-components";

export const FieldSet = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`;

export const InputField = styled.input`
  float: left;
  margin: 0;
  border: 1px solid grey;
  border-radius: ${radius};
  font-size: ${fontSize};
  line-height: ${fontSize};
  padding: 8px;
  height: 31px;
  background-color: #ffffff;
  &&:focus-visible {
    outline: none;
  }
`;

export const Label = styled.label`
  color: #000000;
  font-size: ${fontSize};
  line-height: 20px;
  display: block;
  padding: 0 0 2px 0;
`;

export const RHFform = styled.form``;

export const RHFform_Row = styled.form`
  display: flex;
  height: 82px;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 20px;
`;

export const RHFform_Row_Btns = styled.div`
  margin-top: 32px;
`;
