import { radius } from "../../theme/variables";
import styled from "styled-components";

export const ItemList = styled.div`
  display: flex;
  height: 50px;
  padding: 10px;
  border: 1px solid #cbcbcb;
  border-radius: ${radius};
  margin: 20px 20px 0 20px;
  background-color: #ffffff;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const ItemListLeft = styled.div`
  display: flex;
  width: 70%;
`;

export const ItemListRight = styled.div`
  display: flex;
`;

export const SpanTitle = styled.div`
  display: inline-block;
  min-width: ${(100 / 3).toFixed(2)}%;
`;

export const SpanRef = styled.div`
  display: inline-block;
  min-width: ${(100 / 3).toFixed(2)}%;
`;

export const SpanIso = styled.div`
  display: inline-block;
  min-width: ${(100 / 3).toFixed(2)}%;
`;
