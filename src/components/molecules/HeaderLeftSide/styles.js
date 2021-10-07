import styled from "styled-components";

export const Container = styled.div`
  width: 335px;
  height: 79px;

  display: flex;

  border-top: 3px solid #fcf5d8;
  border-left: 3px solid #fcf5d8;
  padding: 13.5px 0 0 22px;

  .circles {
    display: flex;

    > div {
      margin: 0 10px;
    }
  }
`;
