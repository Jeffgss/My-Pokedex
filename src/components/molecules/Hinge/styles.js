import styled from "styled-components";

export const Container = styled.div`
  width: 54px;
  height: 361px;
  background: var(--red);
  border: 3px solid var(--borderColor);
  padding: 34px 0;

  box-shadow: inset 10px 5px rgb(252 245 216 / 70%),
    inset 5px 0 rgb(0 0 0 / 20%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before,
  &::after {
    content: "";
    background: #885653;
    height: 10px;
    width: 100%;

    border-top: 2px solid var(--borderColor);
    border-bottom: 2px solid var(--borderColor);
  }
`;
