import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';

const CartLayout = styled.div`
  /* Cart */

  position: relative;
  width: 1440px;
  height: 1395px;
`;

export default class Cart extends Component {
  render() {
    return (
      <CartLayout>
        <Header />
      </CartLayout>
    );
  }
}
