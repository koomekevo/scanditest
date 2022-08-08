import React, { Component } from "react";
import styled from "styled-components";

const SurfaceLayout = styled.div`
  /* Surface */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* --c-white */

  background: #ffffff;
`;

export default class Surface extends Component {
  render() {
    return (
        <SurfaceLayout />
    );
  }
}
