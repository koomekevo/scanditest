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

const ProductCardBottomLeftElements = styled.div`
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
  /* --product-card-box-shadow:hover */

  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ProductCardBottomLeftImageLayout = styled.div`
  /* Image */

  width: 354px;
  height: 330px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardBottomLeftCircleIconLayout = styled.div`
  /* Circle Icon Layout*/

  position: absolute;
  width: 52px;
  height: 52px;
  right: 15px;
  bottom: -26px;

  /* --button-box-shadow */

  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

export default class ProductCardBottomLeft extends Component {
  render() {
    return (
      <ProductCardBottomLeftLayout>
        <ProductCardBottomLeftElements>
          <ProductCardBottomLeftImageLayout>
            <ProductCardBottomLeftCircleIconLayout />
          </ProductCardBottomLeftImageLayout>
        </ProductCardBottomLeftElements>
      </ProductCardBottomLeftLayout>
    );
  }
}
