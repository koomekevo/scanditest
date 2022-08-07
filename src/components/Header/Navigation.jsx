import React, { Component } from "react";
import styled from "styled-components";

// Start of Navigation Styles
const NavigationLayout = styled.div`
  /* Navigation */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 234px;
  height: 56px;
  left: 101px;
  bottom: 0px;
`;

const HeaderNavigation = styled.div`
  /* header__navigation */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 234px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonWomen = styled.div`
  /* _Header / Elements / Desktop / Buttons */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  width: 97px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonWomenPaddingLeft = styled.div`
  /* Padding left */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonWomenLabelLayout = styled.div`
  /* Label */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  width: 65px;
  height: 52px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonWomenLabel = styled.div`
  /* Label */

  width: 65px;
  height: 20px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* --c-primary */

  color: #5ece7b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonWomenBorder = styled.div`
  /* Border */

  width: 65px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const ButtonWomenPaddingRight = styled.div`
  /* Padding right */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export default class Navigation extends Component {
  render() {
    return (
      <NavigationLayout>
        <HeaderNavigation>
          <ButtonWomen>
            <ButtonWomenPaddingLeft></ButtonWomenPaddingLeft>
            <ButtonWomenLabelLayout>
              <ButtonWomenLabel>WOMEN</ButtonWomenLabel>
              <ButtonWomenBorder></ButtonWomenBorder>
            </ButtonWomenLabelLayout>
            <ButtonWomenPaddingRight></ButtonWomenPaddingRight>
          </ButtonWomen>
        </HeaderNavigation>
      </NavigationLayout>
    );
  }
}
