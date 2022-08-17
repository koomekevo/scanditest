import React, { Component } from 'react';
import styled from 'styled-components';

const ProductCardBottomRightLayout = styled.div`
  /* Product Card - Bottom Right Desktop */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 386px;
  height: 444px;
  left: calc(50% - 386px / 2 + 425px);
  bottom: 191px;
`;

class ProductCardBottomRight extends Component {
  render() {
    return (
      <ProductCardBottomRightLayout />
    );
  }
}

export default ProductCardBottomRight;
