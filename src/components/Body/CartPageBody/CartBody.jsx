import React, { Component } from 'react';
import styled from 'styled-components';

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

export default class CartBody extends Component {
  render() {
    return <FrameThreeTwo />;
  }
}
