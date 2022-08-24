import React, { Component } from "react";
import styled from "styled-components";

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

export default class CartBody extends Component {
  render() {
    return (
      <FrameThreeTwo>
        <FrameThreeOne>
          <FrameTwoNine>
            <Tax>Tax 21%: $42.00</Tax>
            <Quantity>Quantity: 3</Quantity>
          </FrameTwoNine>
        </FrameThreeOne>
      </FrameThreeTwo>
    );
  }
}
