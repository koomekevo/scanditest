import React, { Component } from 'react';
import styled from 'styled-components';

const ProductCardTopRightLayout = styled.div`
  /* Product Card - Top Right Desktop */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 386px;
  height: 444px;
  left: calc(50% - 386px / 2 + 425px);
  bottom: 738px;
`;

export default class ProductCardTopRight extends Component {
  render() {
    return <ProductCardTopRightLayout />;
  }
}
