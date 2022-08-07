import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Container = styled.nav`
  /* Header - Desktop */

  position: absolute;
  width: 1440px;
  height: 80px;
  left: 0px;
  top: 0px;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Navigation />
      </Container>
    );
  }
}
