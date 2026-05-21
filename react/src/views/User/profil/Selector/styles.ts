import styled from "styled-components";

interface AlertProps {
  color: string;
}

export const Alert = styled.div<AlertProps>`
  display: flex;
  padding: 10px;
  background: #ffff;
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  width: 250px;
  height: 100px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100000;
`;

export const SelectPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  margin: 0;
  padding: 0;
  z-index: 0;
`;

export const SelectorHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SelectedValue = styled.div`
  height: 30px;
  padding: 10px;
  margin: 0px;
`;

export const SelectorStatus = styled.div`
  margin: 0;
  height: 30px;
  width: 30px;
  background-color: green;
`;

export const SelectorCommand = styled.div`
  margin: 0;
  height: 30px;
  width: 30px;
  background-color: yellow;
`;
