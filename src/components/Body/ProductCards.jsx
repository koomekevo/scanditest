import React, { Component } from 'react';
import ProductCardTopLeft from './ProductCardTopLeft';
import ProductCardTopRight from './ProductCardTopRight';
import ProductCardBottomLeft from './ProductCardBottomLeft';
import ProductCardBottomRight from './ProductCardBottomRight';
import ProductCardTopCenter from './ProductCardTopCenter';
import ProductCardBottomCenter from './ProductCardBottomCenter';

export default class ProductCards extends Component {
  render() {
    return (
      <>
        <ProductCardBottomCenter />
        <ProductCardTopCenter />
        <ProductCardTopLeft />
        <ProductCardBottomLeft />
        <ProductCardTopRight />
        <ProductCardBottomRight />
      </>
    );
  }
}
