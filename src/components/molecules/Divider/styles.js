import styled from "styled-components";

export const Container = styled.div`
  width: 405px;
  position: relative;

  &::after {
    content: "";
    width: 43.9%;
    height: 3px;
    background: #492436;
    position: absolute;
  }

  .degree {
    content: "";
    width: 45.5px;
    height: 3px;
    background: #492436;
    position: absolute;
    left: 43%;
    top: -13px;
    transform: rotate(146deg);
  }

  &::before {
    content: "";
    width: 46.9%;
    height: 3px;
    background: #492436;
    position: absolute;
    right: 0%;
    top: -26px;
  }
`;
