import styled from "styled-components";


export const AlertSession = styled.div`
  display: flex;
  padding: 0;
  background: #dd6300;
  border: 1px solid #dd6300;
  width: 250px;
  height: 100px;
  margin-right: -125px;
  position: absolute;
  top: 30px;
  right: 50%;
  z-index: 150000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Alert = styled.div`
  display: flex;
  padding: 0;
  background: #ce0000;
  border: 1px solid #a10000;
  width: 250px;
  height: 100px;
  margin-right: -125px;
  position: absolute;
  top: 30px;
  right: 50%;
  z-index: 150000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AlertHeader = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid white;
  height: 20px;
`

export const AlertBody = styled.div`
  width: 100%;
  display: flex;
`

export const AlertFooter = styled.div`
  width: 100%;
  display: flex;
`


export const CloseAlert = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  line-height: 20px;
  height: 20px;
  padding: 0;
  background: #a10000;
  color: white;
`;


