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
