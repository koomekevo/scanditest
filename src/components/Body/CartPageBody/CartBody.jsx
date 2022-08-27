import React, { Component } from 'react';
import styled from 'styled-components';
import Sliderleftbutton from '../../../assets/images/body/Sliderleftbutton.svg';
import Sliderrightbutton from '../../../assets/images/body/Sliderrightbutton.svg';

const FrameThreeTwo = styled.div`
  /* Frame 32 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 279px;
  height: 159px;
  left: 100px;
  top: 962px;
`;

const FrameThreeOne = styled.div`
  /* Frame 31 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 198px;
  height: 100px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FrameTwoNine = styled.div`
  /* Frame 29 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 184px;
  height: 64px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Tax = styled.div`
  /* Tax 21%: $42.00 */

  width: 184px;
  height: 28px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Quantity = styled.div`
  /* Quantity: 3 */

  width: 118px;
  height: 28px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const FrameThreeZero = styled.div`
  /* Frame 30 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;

  width: 198px;
  height: 28px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Total = styled.div`
  /* Total: */

  width: 60px;
  height: 28px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  text-align: right;

  color: #1d1f22;
`;

const TotalAmount = styled.div`
  /* Total: */

  width: 60px;
  height: 28px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  text-align: right;

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FrameTwoSix = styled.div`
  /* Frame 26 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 56px;
  height: 24px;
  left: 1268px;
  top: 528px;
`;

const SliderLeftButton = styled.img.attrs({
  src: `${Sliderleftbutton}`,
})`
  /* Group 1417 */

  width: 24px;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SliderRightButton = styled.img.attrs({
  src: `${Sliderrightbutton}`,
})`
  /* Group 1418 */

  width: 24px;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const FrameTwoZero = styled.div`
  /* Frame 20 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;

  position: absolute;
  width: 134px;
  height: 70px;
  left: 100px;
  top: 759px;
`;

const FrameTwoZeroSizeLayout = styled.div`
  /* SIZE: */

  width: 38px;
  height: 18px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FrameOneEightLayout = styled.div`
  /* Frame 18 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 134px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const GroupSixThreeTwoLayout = styled.div`
  /* Group 632 */

  width: 63px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const RectangleThreeEightEight = styled.div`
  /* Rectangle 388 */

  box-sizing: border-box;

  width: 63px;
  height: 45px;
  left: 0px;
  top: 0px;
  padding-left: 25px;

  border: 1px solid #1d1f22;

  /* S */

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #1d1f22;
`;

const GroupSixThreeThreeLayout = styled.div`
  /* Group 633 */

  width: 63px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RectangleThreeEightSeven = styled.div`
  /* Rectangle 387 */

  box-sizing: border-box;

  width: 63px;
  height: 45px;
  left: 71px;
  top: 0px;
  padding-left: 25px;

  background: #1d1f22;
  border: 1px solid #1d1f22;

  /* M */

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
`;

const FrameTwoTwo = styled.div`
  /* Frame 22 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 116px;
  height: 62px;
  left: 100px;
  top: 845px;
`;

const FrameTwoTwoColorLayout = styled.div`
  /* COLOR: */

  width: 55px;
  height: 18px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export default class CartBody extends Component {
  render() {
    return (
      <>
        <FrameThreeTwo>
          <FrameThreeOne>
            <FrameTwoNine>
              <Tax>Tax 21%:&nbsp;&nbsp;$42.00</Tax>
              <Quantity>Quantity: 3</Quantity>
            </FrameTwoNine>
            <FrameThreeZero>
              <Total>Total:</Total>
              <TotalAmount>$200:00</TotalAmount>
            </FrameThreeZero>
          </FrameThreeOne>
        </FrameThreeTwo>
        <FrameTwoSix>
          <SliderLeftButton />
          <SliderRightButton />
        </FrameTwoSix>
        <FrameTwoZero>
          <FrameTwoZeroSizeLayout>SIZE:</FrameTwoZeroSizeLayout>
          <FrameOneEightLayout>
            <GroupSixThreeTwoLayout>
              <RectangleThreeEightEight>S</RectangleThreeEightEight>
            </GroupSixThreeTwoLayout>
            <GroupSixThreeThreeLayout>
              <RectangleThreeEightSeven>M</RectangleThreeEightSeven>
            </GroupSixThreeThreeLayout>
          </FrameOneEightLayout>
        </FrameTwoZero>
        <FrameTwoTwo>
          <FrameTwoTwoColorLayout />
        </FrameTwoTwo>
      </>
    );
  }
}
