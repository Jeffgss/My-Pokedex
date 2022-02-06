import styled from "styled-components";

export const Container = styled.div`
  height: 405px;
  width: 340px;
  padding: 10px;

  background: radial-gradient(#c53638, #98121b);
`;

export const Content = styled.div`
  height: 100%;
  padding: 20px 10px;
  background: radial-gradient(#98121b, #c53638);
`;

export const Border = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border: 3px solid #492436;
  box-shadow: inset 3px 0 rgb(252 245 216 / 60%), inset 0 -3px rgb(0 0 0 / 20%);
`;
