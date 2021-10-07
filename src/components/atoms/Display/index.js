import React from "react";

import { Container } from "./styles";

const Display = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Display;
