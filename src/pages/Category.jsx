import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Title from '../components/Body/Title';
import ProductCards from '../components/Body/ProductCards';

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
        <ProductCards />
      </CategoryLayout>
    );
  }
}
