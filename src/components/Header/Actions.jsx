import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import group1 from '../../assets/images/header/Group1.svg';
import emptycart from '../../assets/images/header/EmptyCart.svg';

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

const SpacerXLOne = styled.div`
  /* --spacer-xl */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* --c-info-variant */

  background: #b4d2f4;
  /* style guid */

  box-shadow: 1px 3px 8px -1px rgba(0, 0, 0, 0.39);
`;

const LayoutSpacerXLTwo = styled.div`
  /* _layout / --spacer-xl */

  width: 40px;
  height: 40px;

  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const GroupOne = styled.div`
  /* Background Image URL */
  background-image: url(${group1});

  /* Group 1 */

  width: 38px;
  height: 29px;

  /* Inside auto layout */

  flex: none;
  order: 2;
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
        <LayoutSpacerXLOne>
          <SpacerXLOne />
        </LayoutSpacerXLOne>
        <LayoutSpacerXLTwo />
        <GroupOne />
        <IconEmptyCart to="/Cart.jsx">
          <img src={emptycart} alt="cart" />
        </IconEmptyCart>
      </ActionsLayout>
    );
  }
}
