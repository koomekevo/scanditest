import React, { Component } from 'react';
import styled from 'styled-components';
import dollarsign from '../../assets/images/header/dollarsign.svg';
import vectorwheel from '../../assets/images/header/vectorwheel.svg';
import vectorwheel2 from '../../assets/images/header/vectorwheel2.svg';
import vectorcart from '../../assets/images/header/vectorcart.svg';
import vectorarrowdown from '../../assets/images/header/vectorarrowdown.svg';

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
  /* Group 1 */

  width: 38px;
  height: 29px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const FrameTwo = styled.div`
  /* Frame 2 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 10px;
  gap: 12px;

  position: absolute;
  width: 32px;
  height: 29px;
  left: 124px;
  top: 5.5px;
`;

const DollarSign = styled.img.attrs({
  src: `${dollarsign}`,
})`
  /* $ */

  width: 12px;
  height: 29px;

  /* --price-regular-font */

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  display: flex;
  align-items: flex-end;

  /* --c-black */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const VectorArrowDown = styled.img.attrs({
  src: `${vectorarrowdown}`,
})`
  /* Vector */

  position: absolute;
  left: 76.47%;
  right: 20.59%;
  top: 53.75%;
  bottom: 38.75%;

  border: 1px solid #000000;
`;

const IconEmptyCart = styled.div`
  /* Icon / Empty Cart */

  width: 20px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;

const VectorCartLayout = styled.div`
  /* Vector */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 5.84%;
  bottom: 4.16%;
`;

const VectorWheelOne = styled.img.attrs({
  src: `${vectorwheel}`,
})`
  /* Vector */

  position: absolute;
  left: 67.49%;
  right: 10.61%;
  top: 74.91%;
  bottom: 4.16%;

  background: #43464e;
`;

const VectorWheelTwo = styled.img.attrs({
  src: `${vectorwheel2}`,
})`
  /* Vector */

  position: absolute;
  left: 31.27%;
  right: 46.83%;
  top: 74.91%;
  bottom: 4.16%;

  background: #43464e;
`;

const VectorCart = styled.img.attrs({
  src: `${vectorcart}`,
})`
  /* Vector */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 5.84%;
  bottom: 29.11%;

  background: #43464e;
`;

export default class Actions extends Component {
  render() {
    return (
      <ActionsLayout>
        <LayoutSpacerXLOne>
          <SpacerXLOne />
        </LayoutSpacerXLOne>
        <LayoutSpacerXLTwo />
        <GroupOne>
          <FrameTwo>
            <DollarSign />
          </FrameTwo>
          <VectorArrowDown />
        </GroupOne>
        <IconEmptyCart>
          <VectorCartLayout>
            <VectorWheelOne />
            <VectorWheelTwo />
            <VectorCart />
          </VectorCartLayout>
        </IconEmptyCart>
      </ActionsLayout>
    );
  }
}
