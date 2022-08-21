import React, { Component } from 'react';
import styled from 'styled-components';
import ProductCardTile from './ProductCardTile';
import { productData } from './data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default class ProductCatalog extends Component {
  render() {
    return (
      <Container>
        {productData.map((item) => (
          <ProductCardTile item={item} key={item.id} />
        ))}
      </Container>
    );
  }
}
