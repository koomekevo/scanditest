import React, { Component } from 'react';
import styled from 'styled-components';
import ProductD from '../../assets/images/body/ProductD.png';

const ProductCardBottomCenterLayout = styled.div`
  /* Product Card - Bottom Center Desktop */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 386px;
  height: 444px;
  left: calc(50% - 386px / 2 - 1px);
  bottom: 191px;
`;

const ProductCardBottomCenterElements = styled.div`
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

const ProductCardBottomCenterImageLayout = styled.div`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const ProductCardBottomCenterImageFrameLayout = styled.img.attrs({
  src: `${ProductD}`,
})`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const ProductCardBottomCenterImageSpacerBase = styled.div`
  /* _layout / --spacer-base */

  width: 24px;
  height: 24px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ProductCardBottomCenterContent = styled.div`
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

const ProductCardBottomCenterContentTitle = styled.div`
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

const ProductCardBottomCenterContentPrice = styled.div`
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

class ProductCardBottomCenter extends Component {
  render() {
    return (
      <ProductCardBottomCenterLayout>
        <ProductCardBottomCenterElements>
          <ProductCardBottomCenterImageLayout>
            <ProductCardBottomCenterImageFrameLayout />
          </ProductCardBottomCenterImageLayout>
          <ProductCardBottomCenterImageSpacerBase />
          <ProductCardBottomCenterContent>
            <ProductCardBottomCenterContentTitle>
              Apollo Running Short
            </ProductCardBottomCenterContentTitle>
            <ProductCardBottomCenterContentPrice>
              $50.00
            </ProductCardBottomCenterContentPrice>
          </ProductCardBottomCenterContent>
        </ProductCardBottomCenterElements>
      </ProductCardBottomCenterLayout>
    );
  }
}

export default ProductCardBottomCenter;
