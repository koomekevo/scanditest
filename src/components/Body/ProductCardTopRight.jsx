import React, { Component } from 'react';
import styled from 'styled-components';
import ProductC from '../../assets/images/body/ProductC.png';

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

const ProductCardTopRightElements = styled.div`
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

const ProductCardTopRightImageLayout = styled.div`
  /* Image */

  width: 354px;
  height: 330px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardTopRightImageFrameLayout = styled.img.attrs({
  src: `${ProductC}`,
})`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

export default class ProductCardTopRight extends Component {
  render() {
    return (
      <ProductCardTopRightLayout>
        <ProductCardTopRightElements>
          <ProductCardTopRightImageLayout>
            <ProductCardTopRightImageFrameLayout />
          </ProductCardTopRightImageLayout>
        </ProductCardTopRightElements>
      </ProductCardTopRightLayout>
    );
  }
}
