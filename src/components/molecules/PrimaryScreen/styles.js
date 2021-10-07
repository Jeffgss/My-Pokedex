import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;

    span {
      width: 70%;
      text-align: end;
      line-height: 1;
      font-size: 18px;
      color: var(--borderColor);
    }
  }

  .circles {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5px 15px;
  }
`;
