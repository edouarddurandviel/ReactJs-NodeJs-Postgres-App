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
  position: relative;
  float: left;
  flex-direction: row;
  width: auto;
  margin: 0;
  padding: 0;
  z-index: 0;
`;

export const SelectorHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  z-index: 10;
  float: left;
  width: 202px;
`;

export const SelectedValue = styled.input`
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 0;
  top: 0px;
  margin: 0px;
  width: 200px;
  cursor: pointer;
`;

export const SelectorListWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 10;
  width: 200px;
  padding: 0px;
  margin: 0px;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

export const SelectorList = styled.div`
  height: 30px;
  width: 200px;
  padding: 5px 10px;
  line-heigth: 20px;
  margin: 0px;
  background-color: white;
`;

export const SelectorStatus = styled.div`
  margin: 0;
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
  background-color: green;
`;

export const SelectorCommand = styled.div`
  margin: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: yellow;
`;
