/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import CircleIcon from '../../../assets/images/body/CircleIcon.svg';

const ProductContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 150px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 101px;
  padding-right: 101px;
  padding-top: 315px;
  top: 315px;
`;

const ProductCardTileLayout = styled.div`
  /* Product Card - Top Right Desktop */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  top: 0px;

  position: absolute;
  width: 386px;
  height: 444px;
`;

const ProductCardTileElements = styled.div`
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

const ProductCardTileImageLayout = styled.div`
  /* Image */

  width: 354px;
  height: 330px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardTileImageFrameLayout = styled.img`
  /* Image */

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const ProductCardTileCircleIconLayout = styled.img.attrs({
  src: `${CircleIcon}`,
})`
  /* Circle Icon Layout*/

  position: absolute;
  width: 52px;
  height: 52px;
  right: 15px;
  bottom: -26px;
  top: 304px;
  left: 287px;

  /* --button-box-shadow */

  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

const ProductCardTileImageSpacerBase = styled.div`
  /* _layout / --spacer-base */

  width: 24px;
  height: 24px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ProductCardTileContent = styled.div`
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

const ProductCardTileContentTitle = styled.div`
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

  color: #8d8f9a;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProductCardTileContentPrice = styled.div`
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
export default class ProductCardTile extends Component {
  render() {
    return (
      <ProductContainer>
        <ProductCardTileLayout>
          <ProductCardTileElements>
            <ProductCardTileImageLayout>
              <ProductCardTileImageFrameLayout src={this.props.item.img} />
              <ProductCardTileCircleIconLayout />
            </ProductCardTileImageLayout>
            <ProductCardTileImageSpacerBase />
            <ProductCardTileContent>
              <ProductCardTileContentTitle>
                {this.props.item.title}
              </ProductCardTileContentTitle>
              <ProductCardTileContentPrice>
                {this.props.item.price}
              </ProductCardTileContentPrice>
            </ProductCardTileContent>
          </ProductCardTileElements>
        </ProductCardTileLayout>
      </ProductContainer>
    );
  }
}
