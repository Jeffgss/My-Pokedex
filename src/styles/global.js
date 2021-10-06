import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    outline: 0;
  }

  :root{
    --red: #c53638;
    --redLand: #94372f;
    --sand: #e7e0c3;
    --yellow: #f9c16a;
    --blue: #5493b2;
    --darkBlue: #3e3c51;
    --green: #95b377;
    --borderColor: #492436;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#5973AA, #4db4e8);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
