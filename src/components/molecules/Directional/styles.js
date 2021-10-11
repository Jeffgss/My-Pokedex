import styled from "styled-components";

export const Container = styled.div`
  width: 78px;
  height: 78px;
  position: relative;

  &:after {
    content: "";
    width: 26px;
    height: 26px;
    background: var(--darkBlue);
    position: absolute;
    top: 26px;
    left: 26px;
  }

  > div {
    background: var(--darkBlue);
    width: 26px;
    height: 26px;
    position: absolute;
    border: 2px solid var(--borderColor);
  }

  .top {
    border-bottom: none;
    left: 26px;
    border-radius: 5px 5px 0 0;
    box-shadow: inset 0 4px rgb(125 189 188 / 60%);
  }

  .right {
    border-left: none;
    top: 26px;
    right: 0;
    border-radius: 0 5px 5px 0;
    box-shadow: inset 0 4px rgb(125 189 188 / 60%),
      inset 0 -4px rgba(0, 0, 0, 0.2);
  }

  .bottom {
    border-top: none;
    right: 26px;
    bottom: 0;
    border-radius: 0 0 5px 5px;
    box-shadow: inset 0 -4px rgba(0, 0, 0, 0.2);
  }

  .left {
    border-right: none;
    top: 26px;
    left: 0;
    border-radius: 5px 0 0 5px;
    box-shadow: inset 0 4px rgb(125 189 188 / 60%),
      inset 0 -4px rgba(0, 0, 0, 0.2);
  }
`;
