import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';

const ProductDescriptionLayout = styled.div`
  /* PDP */

  position: relative;
  width: 1440px;
  height: 933px;
`;

export default class ProductDescription extends Component {
  render() {
    return (
      <ProductDescriptionLayout>
        <Header />
      </ProductDescriptionLayout>
    );
  }
}
