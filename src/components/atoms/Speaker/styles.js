import styled from "styled-components";

export const Container = styled.div`
  width: 65px;
  height: 65px;
  background: var(--sand);
  border: 2px solid var(--borderColor);
  border-radius: 50%;

  @keyframes blink {
    from {
      background: #6dbfe8;
      box-shadow: inset 5px 5px rgb(255 255 255 / 20%),
        inset -5px 0 rgb(0 0 0 / 5%);
    }
    to {
      background: var(--blue);
      box-shadow: inset 5px 5px rgb(255 255 255 / 70%),
        inset -5px 0 rgb(0 0 0 / 20%);
    }
  }

  &::before {
    content: "";
    width: 49px;
    height: 49px;
    border-radius: 50%;
    position: absolute;
    margin: 4px;
    border: 2px solid var(--borderColor);
    animation: 1s infinite alternate blink;
  }
`;
