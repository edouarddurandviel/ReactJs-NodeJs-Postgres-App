import styled from "styled-components";

interface AlertProps {
  color: string;
}

const height = "30px";

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
  flex-direction: column;
  width: auto;
  height: ${height};
  line-height: ${height};
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
  margin: 0;
  z-index: 0;
`;
export const SelectorLabel = styled.label`
  color: #000000;
  font-size: 14px;
  line-height: 20px;
  display: block;
  padding: 0 0 2px 0;
`;

export const SelectorHeader = styled.div`
  display: flex;
  position: relative;
  float: left;
  width: 300px;
  z-index: 10;
  border-radius: 4px;
  flex-direction: row;
  height: ${height};
  align-content: center;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
`;

export const SelectedValue = styled.input`
  border: none;
  position: relative;
  left: 0;
  top: 0;
  border-radius: 4px;
  margin: 0;
  height: ${height};
  width: 200px;
  cursor: pointer;
`;

export const SelectorListWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  left: -1px;
  top: 28px;
  z-index: 10;
  width: 240px;
  padding: 0px;
  margin: 0px;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

export const SelectorList = styled.div`
  height: ${height};
  width: 220px;
  padding: 5px 10px;
  line-heigth: 20px;
  margin: 0px;
  background-color: white;
`;

export const SelectorStatus = styled.button`
  margin: 0;
  display: block;
  height: ${height};
  width: ${height};
  cursor: pointer;
  background-color: green;
`;

export const SelectorCommand = styled.button`
  margin: 0;
  cursor: pointer;
  height: ${height};
  width: ${height};
  background-color: yellow;
`;

export const InputError = styled.span`
  line-height: 15px;
`;
