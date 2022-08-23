import React, { Component } from 'react';
import styled from 'styled-components';
import ProductD from '../../../assets/images/body/ProductD.png';

const ProductBottomThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
  /* Image */

  position: absolute;
  width: 79px;
  height: 80px;
  left: 100px;
  top: 400px;
`;

const ProductCenterThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
    /* Image */
  
    position: absolute;
    width: 79px;
    height: 80px;
    left: 100px;
    top: 280px;
  `;

const ProductTopThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
    /* Image */
  
    position: absolute;
    width: 79px;
    height: 80px;
    left: 100px;
    top: 160px;
  `;

class ProductDescription extends Component {
  render() {
    return (
      <>
        <ProductBottomThumbnail />
        <ProductCenterThumbnail />
        <ProductTopThumbnail />
      </>
    );
  }
}

export default ProductDescription;
