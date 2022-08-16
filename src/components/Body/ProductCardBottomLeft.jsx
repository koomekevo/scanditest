import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import CircleIcon from '../../assets/images/body/CircleIcon.svg';
import ProductA from '../../assets/images/body/ProductA.png';

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

const ProductCardBottomLeftCircleIconLayout = styled.img.attrs({
  src: `${CircleIcon}`,
})`
  /* Circle Icon Layout*/

  position: absolute;
  width: 52px;
  height: 52px;
  right: 15px;
  bottom: -26px;

  /* --button-box-shadow */

  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

const ProductCardBottomLeftImageFrameLayout = styled.img.attrs({
  src: `${ProductA}`,
})`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const ProductCardBottomLeftImageSpacerBase = styled.div`
  /* _layout / --spacer-base */

  width: 24px;
  height: 24px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ProductCardBottomLeftContent = styled.div`
  /* Content */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 354px;
  height: 58px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardBottomLeftContentTitle = styled.div`
  /* Title */

  width: 354px;
  height: 29px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  display: flex;
  align-items: center;

  /* --c-black */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardBottomLeftContentPrice = styled.div`
/* Price */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 58px;
height: 29px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

export default class ProductCardBottomLeft extends Component {
  render() {
    return (
      <ProductCardBottomLeftLayout>
        <ProductCardBottomLeftElements>
          <ProductCardBottomLeftImageLayout>
            <ProductCardBottomLeftCircleIconLayout />
            <ProductCardBottomLeftImageFrameLayout />
          </ProductCardBottomLeftImageLayout>
          <ProductCardBottomLeftImageSpacerBase />
          <ProductCardBottomLeftContent>
            <ProductCardBottomLeftContentTitle>
              Apollo Running Short
            </ProductCardBottomLeftContentTitle>
            <ProductCardBottomLeftContentPrice>
              $50.00
            </ProductCardBottomLeftContentPrice>
          </ProductCardBottomLeftContent>
        </ProductCardBottomLeftElements>
      </ProductCardBottomLeftLayout>
    );
  }
}
