import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import emptycart from '../../assets/images/header/EmptyCart.svg';
import CurrencySwitcher from './CurrencySwitcher';

const ActionsLayout = styled.div`
  /* Actions */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 22px;

  position: absolute;
  width: 204px;
  height: 40px;
  right: 101px;
  top: 23px;
`;

const LayoutSpacerXLOne = styled.div`
  /* _layout / --spacer-xl */

  width: 40px;
  height: 40px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const IconEmptyCart = styled(Link)`
  /* Icon / Empty Cart */

  width: 20px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;
export default class Actions extends Component {
  render() {
    return (
      <ActionsLayout>
        <LayoutSpacerXLOne />
        <CurrencySwitcher />
        <IconEmptyCart to="../../pages/Cart.jsx">
          <img src={emptycart} alt="cart" />
        </IconEmptyCart>
      </ActionsLayout>
    );
  }
}
