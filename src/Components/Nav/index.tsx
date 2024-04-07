import React from "react";
// styles //
import { NavContainer, Container, Logo } from "./styles";

const Nav = () => {
  return (
    <NavContainer>
      <Container>
        <Logo src={require("../assets/logo.png")} />
      </Container>
    </NavContainer>
  );
};

export default Nav;
