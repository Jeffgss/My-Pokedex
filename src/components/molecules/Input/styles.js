import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  background: var(--green);
  border-radius: 5px;
  border: 2px solid var(--borderColor);
  box-shadow: inset 3px 3px rgb(255 255 255 / 60%);
  padding: 5px 10px;

  input {
    background: transparent;
    width: 100%;
    border: 0;
  }
`;
