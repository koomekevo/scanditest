import React, { Component } from 'react';
import styled from 'styled-components';

const TitleLayout = styled.div`
  /* Title */

  position: absolute;
  width: 299px;
  height: 68px;
  left: calc(50% - 299px / 2 - 469.5px);
  top: calc(50% - 68px / 2 - 562.5px);

  /* Heading / Desktop / H2 */

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  /* identical to box height, or 67px */

  display: flex;
  align-items: center;

  /* --c-text */

  color: #1d1f22;
`;

export default class Title extends Component {
  render() {
    return (
      <TitleLayout>
        Category name
      </TitleLayout>
    );
  }
}
