import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../components/Body/Title';
import ProductCatalog from '../components/Body/CategoryPageBody/ProductCatalog';
import Header from '../components/Header/Header';

const CategoryLayout = styled.div`
  /* Category */

  position: relative;
  width: 1440px;
  height: 1513px;
`;
export default class Category extends Component {
  render() {
    return (
      <CategoryLayout>
        <Header />
        <Title />
        <ProductCatalog />
      </CategoryLayout>
    );
  }
}
