import styled from "styled-components";

export const Container = styled.div`
  height: 490px;
  width: 425px;
  padding: 10px;
  background: #98121b;
`;

export const Content = styled.div`
  height: 100%;
  padding: 33px;
  background: #c53638;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .left-side-body {
    height: 311.5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border-left: 3px solid var(--borderColor);
    border-bottom: 3px solid var(--borderColor);

    box-shadow: inset 3px 0 rgb(252 245 216 / 60%),
      inset 0 -3px rgb(0 0 0 / 20%);
  }
`;
