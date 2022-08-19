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

const ProductCardBottomRightImageSpacerBase = styled.div`
  /* _layout / --spacer-base */

  width: 24px;
  height: 24px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ProductCardBottomRightContent = styled.div`
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

const ProductCardBottomRightContentTitle = styled.div`
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

const ProductCardBottomRightContentPrice = styled.div`
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

class ProductCardBottomRight extends Component {
  render() {
    return (
      <ProductCardBottomRightLayout>
        <ProductCardBottomRightElements>
          <ProductCardBottomRightImageLayout>
            <ProductCardBottomRightImageFrameLayout />
          </ProductCardBottomRightImageLayout>
          <ProductCardBottomRightImageSpacerBase />
          <ProductCardBottomRightContent>
            <ProductCardBottomRightContentTitle>
              Apollo Running Short
            </ProductCardBottomRightContentTitle>
            <ProductCardBottomRightContentPrice>
              $50.00
            </ProductCardBottomRightContentPrice>
          </ProductCardBottomRightContent>
        </ProductCardBottomRightElements>
      </ProductCardBottomRightLayout>
    );
  }
}

export default ProductCardBottomRight;
