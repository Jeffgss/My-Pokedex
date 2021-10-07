import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 265.64px;
  height: 185.09px;

  border-radius: 8px 8px 8px 40px;
  background: var(--sand);
  border: 3px solid var(--borderColor);

  box-shadow: inset -5px -5px rgb(0 0 0 / 20%);

  ${(props) =>
    props.type === "secondary" &&
    css`
      width: 256px;
      height: 161px;
      border-radius: 12px;
    `}
`;
