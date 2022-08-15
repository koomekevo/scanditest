import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

const ProductCardBottomLeftLayout = styled.div`
  /* Product Card - Desktop Bottom Left Layout */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 386px;
  height: 444px;
  left: calc(50% - 386px / 2 - 427px);
  bottom: 191px;

  /* shadow */

  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`;

export default class ProductCardBottomLeft extends Component {
  render() {
    return (
      <ProductCardBottomLeftLayout />
    );
  }
}
