import React, { Component } from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom";

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

// Start of ButtonWomen
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

const ButtonWomenLabel = styled(Link)`
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

// Start of ButtonMen
const ButtonMen = styled.div`
  /* _Header / Elements / Desktop / Buttons */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  width: 69px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonMenPaddingLeft = styled.div`
  /* Padding left */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonMenLabelLayout = styled.div`
  /* Label */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  width: 37px;
  height: 52px;
`;

const ButtonMenLabel = styled.div`
  /* Label */

  width: 37px;
  height: 20px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* --c-text */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonMenBorder = styled.div`
  /* Border */

  width: 37px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const ButtonMenPaddingRight = styled.div`
  /* Padding right */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

// Start of ButtonKids
const ButtonKids = styled.div`
  /* _Header / Elements / Desktop / Buttons */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  width: 68px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const ButtonKidsPaddingLeft = styled.div`
  /* Padding left */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonKidsLabelLayout = styled.div`
  /* Label */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  width: 36px;
  height: 52px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonKidsLabel = styled.div`
  /* Label */

  width: 36px;
  height: 20px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* --c-text */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonKidsBorder = styled.div`
  /* Border */

  width: 36px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const ButtonKidsPaddingRight = styled.div`
  /* Padding right */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

// Start ButtonFour
const ButtonFour = styled.div`
  /* _Header / Elements / Desktop / Buttons */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  display: none;
  width: 82px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;

const ButtonFourPaddingLeft = styled.div`
  /* Padding left */

  width: 16px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonFourLabelLayout = styled.div`
  /* Label */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  width: 36px;
  height: 52px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonFourLabel = styled.div`
  /* Label */

  width: 36px;
  height: 20px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* --c-text */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ButtonFourBorder = styled.div`
  /* Border */

  width: 36px;
  height: 2px;

  /* --c-primary */

  background: #5ece7b;
  opacity: 0;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const ButtonFourPaddingRight = styled.div`
/* Padding right */


width: 16px;
height: 2px;

/* --c-primary */

background: #5ECE7B;
opacity: 0;

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
            <ButtonWomenPaddingLeft />
            <ButtonWomenLabelLayout>
              <Router>
                <ButtonWomenLabel to="/src/pages/Product.jsx">
                  WOMEN
                </ButtonWomenLabel>
              </Router>
              <ButtonWomenBorder></ButtonWomenBorder>
            </ButtonWomenLabelLayout>
            <ButtonWomenPaddingRight />
          </ButtonWomen>
          <ButtonMen>
            <ButtonMenPaddingLeft />
            <ButtonMenLabelLayout>
              <ButtonMenLabel>MEN</ButtonMenLabel>
              <ButtonMenBorder></ButtonMenBorder>
            </ButtonMenLabelLayout>
            <ButtonMenPaddingRight />
          </ButtonMen>
          <ButtonKids>
            <ButtonKidsPaddingLeft />
            <ButtonKidsLabelLayout>
              <ButtonKidsLabel>KIDS</ButtonKidsLabel>
              <ButtonKidsBorder />
            </ButtonKidsLabelLayout>
            <ButtonKidsPaddingRight />
          </ButtonKids>
          <ButtonFour>
            <ButtonFourPaddingLeft />
            <ButtonFourLabelLayout>
              <ButtonFourLabel />
              <ButtonFourBorder />
            </ButtonFourLabelLayout>
            <ButtonFourPaddingRight />
          </ButtonFour>
        </HeaderNavigation>
      </NavigationLayout>
    );
  }
}
