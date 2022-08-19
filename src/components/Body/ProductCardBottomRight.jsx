import React, { Component } from 'react';
import styled from 'styled-components';
import ProductCDark from '../../assets/images/body/ProductCDark.png';

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

const ProductCardBottomRightElements = styled.div`
  /* Product Card / Elements / Desktop */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  width: 386px;
  height: 444px;

  /* --c-white */

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ProductCardBottomRightImageLayout = styled.div`
  /* Image */

  width: 354px;
  height: 330px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardBottomRightImageFrameLayout = styled.img.attrs({
  src: `${ProductCDark}`,
})`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

class ProductCardBottomRight extends Component {
  render() {
    return (
      <ProductCardBottomRightLayout>
        <ProductCardBottomRightElements>
          <ProductCardBottomRightImageLayout>
            <ProductCardBottomRightImageFrameLayout />
          </ProductCardBottomRightImageLayout>
        </ProductCardBottomRightElements>
      </ProductCardBottomRightLayout>
    );
  }
}

export default ProductCardBottomRight;
