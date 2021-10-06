import React from "react";

import { Container } from "./styles";

const Input = ({ name, placeholder }) => (
  <Container>
    <input type="text" name={name} placeholder={placeholder} />
  </Container>
);

export default Input;
